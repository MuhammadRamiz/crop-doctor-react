import { createClient } from '@supabase/supabase-js'
import { GALLERY_CONFIG } from './constants.js'

const { DATABASE_NAME, STORE_NAME, DATABASE_VERSION, BUCKET_NAME } = GALLERY_CONFIG

/**
 * Check if a value is a placeholder (empty, null, or contains placeholder markers)
 * @param {string|null|undefined} value - The value to check
 * @returns {boolean} - True if the value is a placeholder
 */
const isPlaceholderValue = (value) => {
  if (!value || typeof value !== 'string') return true
  const trimmedValue = value.trim()
  return (
    trimmedValue === '' ||
    trimmedValue.includes('YOUR_') ||
    trimmedValue.includes('your-') ||
    trimmedValue.includes('your ') ||
    trimmedValue === 'your-anon-key-here'
  )
}

/**
 * Get Supabase configuration from environment or runtime config
 * @returns {{url: string|null, key: string|null, source: string}} - Supabase config and source
 */
const getSupabaseConfig = () => {
  console.log('🔍 Checking configuration sources...')

  const envUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
  const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim()

  console.log('🔧 Environment variables check:', {
    hasUrl: !!envUrl,
    hasKey: !!envKey,
    urlPrefix: envUrl ? envUrl.substring(0, 20) + '...' : 'none',
  })

  if (envUrl && envKey && !isPlaceholderValue(envUrl) && !isPlaceholderValue(envKey)) {
    console.log('✅ Using environment variables for Supabase configuration')
    return { url: envUrl, key: envKey, source: 'environment' }
  }

  const runtimeConfig = window.SUPABASE_CONFIG ?? {}
  const runtimeUrl = runtimeConfig.url?.trim()
  const runtimeKey = runtimeConfig.key?.trim()

  console.log('🔧 Runtime config check:', {
    hasConfig: !!runtimeConfig,
    hasUrl: !!runtimeUrl,
    hasKey: !!runtimeKey,
    urlPrefix: runtimeUrl ? runtimeUrl.substring(0, 20) + '...' : 'none',
    keyPrefix: runtimeKey ? runtimeKey.substring(0, 15) + '...' : 'none',
    keyLength: runtimeKey?.length || 0,
  })

  if (runtimeUrl && runtimeKey && !isPlaceholderValue(runtimeUrl) && !isPlaceholderValue(runtimeKey)) {
    const isPublishableKey = runtimeKey.startsWith('sb_publishable_')
    const isJwtKey = runtimeKey.startsWith('eyJhbGci')

    if (!isPublishableKey && !isJwtKey) {
      console.warn('⚠️ Supabase key format appears invalid. Expected a JWT or Supabase publishable key.')
      console.warn('⚠️ Current key format:', runtimeKey.substring(0, 20) + '...')
    } else {
      console.log('✅ Supabase key format validated', {
        isJwtKey,
        isPublishableKey,
      })
    }

    console.log('✅ Using runtime configuration for Supabase')
    return { url: runtimeUrl, key: runtimeKey, source: 'runtime' }
  }

  console.warn('⚠️ No valid Supabase configuration found')
  return { url: null, key: null, source: 'none' }
}

const config = getSupabaseConfig()
const supabase =
  config.url && config.key
    ? createClient(config.url, config.key, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null

if (supabase) {
  console.log('✅ Supabase initialized successfully', {
    source: config.source,
    urlPrefix: config.url.substring(0, 20) + '...',
    clientCreated: true,
  })

  supabase
    .from('scans')
    .select('count', { count: 'exact', head: true })
    .then(({ count, error }) => {
      if (error) {
        console.error('❌ Supabase connection test failed:', error)
        console.error('❌ Error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        })
        return
      }

      console.log('✅ Supabase connection test successful', { count })
    })
    .catch((error) => {
      console.error('❌ Supabase connection test exception:', error)
    })
} else {
  console.warn('⚠️ Supabase not configured - local IndexedDB fallback is enabled', {
    source: config.source,
    hasUrl: !!config.url,
    hasKey: !!config.key,
    reason: config.source === 'none' ? 'Missing credentials' : 'Placeholder values detected',
  })
}

/**
 * Convert an IndexedDB request to a promise
 * @param {IDBRequest} request - The IndexedDB request
 * @returns {Promise} - Promise that resolves with the request result
 */
const requestAsPromise = (request) =>
  new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })

/**
 * Open or create the IndexedDB database
 * @returns {Promise<IDBDatabase>} - The opened database
 */
const openDatabase = () =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION)
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      })
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })

/**
 * Fetch all images from local IndexedDB storage
 * @returns {Promise<Array>} - Array of image records sorted by creation date
 */
const fallbackToLocalStorage = async () => {
  console.log('📂 Using local IndexedDB storage')
  try {
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readonly')
    const images = await requestAsPromise(transaction.objectStore(STORE_NAME).getAll())
    database.close()
    return images.sort((first, second) => second.createdAt - first.createdAt)
  } catch (error) {
    console.error('❌ Error reading from IndexedDB:', error)
    return []
  }
}

export const getGalleryImages = async () => {
  if (!supabase) {
    return fallbackToLocalStorage()
  }

  try {
    console.log('🔍 Fetching images from Supabase...')
    const { data, error } = await supabase.from('scans').select('*').order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    console.log(`📊 Found ${data.length} images in Supabase`)

    const images = await Promise.all(
      data.map(async (image) => {
        try {
          if (!image.image_url) {
            console.warn(`⚠️ Skipping record ${image.id} because it has no image URL`)
            return null
          }

          const response = await fetch(image.image_url)
          if (!response.ok) {
            console.warn(`⚠️ Failed to fetch image ${image.id}:`, response.statusText)
            return null
          }

          return {
            id: image.id,
            blob: await response.blob(),
            imageHash: image.image_hash,
            plantName: image.plant_name,
            status: image.status,
            confidence: image.confidence,
            source: image.source,
            createdAt: new Date(image.created_at).getTime(),
            storagePath: image.storage_path,
          }
        } catch (fetchError) {
          console.error(`❌ Error fetching image ${image.id}:`, fetchError)
          return null
        }
      })
    )

    const validImages = images.filter((image) => image !== null)
    console.log(`✅ Successfully loaded ${validImages.length} images from Supabase`)
    return validImages
  } catch (error) {
    console.error('❌ Shared gallery unavailable. Check the Supabase table, bucket policies, and project URL.', error)
    throw new Error(
      'Supabase gallery is configured but unavailable. Please verify the scans table and plant-images bucket permissions.'
    )
  }
}

export const saveGalleryImage = async (blob, metadata) => {
  if (!supabase) {
    console.log('💾 Saving to local IndexedDB')
    const database = await openDatabase()
    const readTransaction = database.transaction(STORE_NAME, 'readonly')
    const existingImages = await requestAsPromise(readTransaction.objectStore(STORE_NAME).getAll())
    database.close()

    const duplicate = existingImages.find((image) => image.imageHash === metadata.imageHash)
    if (duplicate) return { duplicate: true, ...duplicate }

    const writeDatabase = await openDatabase()
    const transaction = writeDatabase.transaction(STORE_NAME, 'readwrite')
    const record = { blob, ...metadata, createdAt: Date.now() }
    const id = await requestAsPromise(transaction.objectStore(STORE_NAME).add(record))
    writeDatabase.close()
    return { duplicate: false, id, ...record }
  }

  try {
    const { data: duplicateScan, error: duplicateError } = await supabase
      .from('scans')
      .select('id, image_hash, created_at')
      .eq('image_hash', metadata.imageHash)
      .maybeSingle()

    if (duplicateError) {
      throw duplicateError
    }

    if (duplicateScan) {
      console.log('⚠️ Duplicate image detected before upload', {
        imageHash: metadata.imageHash,
        id: duplicateScan.id,
      })
      return {
        duplicate: true,
        id: duplicateScan.id,
        imageHash: duplicateScan.image_hash,
        createdAt: new Date(duplicateScan.created_at).getTime(),
      }
    }
    console.log('📤 Attempting to save image to Supabase...', {
      imageHash: metadata.imageHash,
      plantName: metadata.plantName,
      status: metadata.status,
      hasBlob: !!blob,
      blobSize: blob?.size,
    })

    const filePath = `${metadata.imageHash}.jpg`
    const contentType = blob.type || 'image/jpeg'
    console.log('📁 Uploading to storage bucket:', BUCKET_NAME, 'file:', filePath)

    const uploadResult = await supabase.storage.from(BUCKET_NAME).upload(filePath, blob, {
      contentType,
      upsert: true,
    })

    if (uploadResult.error) {
      const errorMessage = uploadResult.error.message || 'Unknown Supabase storage error'
      console.error('❌ Storage upload failed:', uploadResult.error)
      if (!errorMessage.toLowerCase().includes('already exists')) {
        throw new Error(errorMessage)
      }
    }

    const { data: publicUrl } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath)
    console.log('🔗 Public URL generated:', publicUrl.publicUrl)

    const { data, error } = await supabase
      .from('scans')
      .insert({
        image_url: publicUrl.publicUrl,
        image_hash: metadata.imageHash,
        plant_name: metadata.plantName || 'Plant / crop',
        status: metadata.status,
        confidence: metadata.confidence,
        source: metadata.source,
        storage_path: filePath,
      })
      .select()
      .single()

    if (error) {
      throw new Error(error.message)
    }

    console.log('✅ Image saved to Supabase successfully', {
      id: data.id,
      plantName: data.plant_name,
      status: data.status,
    })

    return {
      duplicate: false,
      id: data.id,
      blob,
      ...metadata,
      storagePath: filePath,
      createdAt: new Date(data.created_at).getTime(),
    }
  } catch (error) {
    console.error(
      '❌ Supabase save failed. The app is configured for shared storage, so the upload did not persist to the database.',
      error
    )
    console.error(
      '❌ Common cause: missing table columns or storage policies. Check the scans table and the plant-images bucket permissions.'
    )
    throw new Error('Supabase upload failed. Check the bucket policies, scans table, and project permissions.')
  }
}

export const removeGalleryImage = async (id) => {
  if (!supabase) {
    console.log('🗑️ Deleting from local IndexedDB')
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    await requestAsPromise(transaction.objectStore(STORE_NAME).delete(id))
    database.close()
    return
  }

  try {
    console.log('🗑️ Deleting image from Supabase...', { id })
    const { data: image, error: lookupError } = await supabase
      .from('scans')
      .select('id, storage_path, image_hash')
      .eq('id', id)
      .maybeSingle()

    if (lookupError) {
      throw lookupError
    }

    if (!image) {
      console.warn('⚠️ No scan row found for delete request. Nothing to remove from Supabase.', { id })
      return
    }

    const { error: deleteRowError } = await supabase.from('scans').delete().eq('id', id)
    if (deleteRowError) {
      throw deleteRowError
    }

    const storageCandidates = [
      ...new Set([image?.storage_path, image?.image_hash ? `${image.image_hash}.jpg` : null].filter(Boolean)),
    ]

    if (storageCandidates.length > 0) {
      const { error: storageError } = await supabase.storage.from(BUCKET_NAME).remove(storageCandidates)
      if (storageError) {
        console.warn('⚠️ Error deleting from storage (non-critical):', storageError)
      }
    }

    console.log('✅ Image deleted from Supabase successfully', {
      id,
      storageCandidates,
    })
    return
  } catch (error) {
    console.error('❌ Supabase delete failed:', error)
    throw new Error('Supabase delete failed. Please verify the scans row and bucket permissions.')
  }
}

export const clearGalleryImages = async () => {
  if (!supabase) {
    console.log('🧹 Clearing local IndexedDB gallery')
    const database = await openDatabase()
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    const allImages = await requestAsPromise(transaction.objectStore(STORE_NAME).getAll())

    await Promise.all(allImages.map((image) => requestAsPromise(transaction.objectStore(STORE_NAME).delete(image.id))))

    database.close()
    return allImages.length
  }

  try {
    console.log('🧹 Clearing all images from Supabase gallery')
    const { data: rows, error: fetchError } = await supabase
      .from('scans')
      .select('id, storage_path, image_hash')
      .order('created_at', { ascending: false })

    if (fetchError) {
      throw fetchError
    }

    const storageCandidates = [
      ...new Set(
        rows.flatMap((row) => [row.storage_path, row.image_hash ? `${row.image_hash}.jpg` : null]).filter(Boolean)
      ),
    ]

    if (storageCandidates.length > 0) {
      const { error: storageError } = await supabase.storage.from(BUCKET_NAME).remove(storageCandidates)
      if (storageError) {
        console.warn('⚠️ Error removing gallery storage files:', storageError)
      }
    }

    if (rows.length > 0) {
      const ids = rows.map((row) => row.id)
      const { error: deleteError } = await supabase.from('scans').delete().in('id', ids)
      if (deleteError) {
        throw deleteError
      }
    }

    console.log('✅ Gallery cleared successfully', { count: rows.length })
    return rows.length
  } catch (error) {
    console.error('❌ Failed to clear gallery:', error)
    throw new Error('Could not delete all gallery images. Please verify the scans table and storage permissions.')
  }
}
