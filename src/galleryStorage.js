import { createClient } from '@supabase/supabase-js'

const DATABASE_NAME = 'crop-doctor-gallery'
const STORE_NAME = 'images'
const DATABASE_VERSION = 1
const BUCKET_NAME = 'plant-images'

// Try multiple configuration sources
const getSupabaseConfig = () => {
  console.log('🔍 Checking configuration sources...')
  
  // Priority 1: Environment variables (build-time)
  const envUrl = import.meta.env.VITE_SUPABASE_URL
  const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  
  console.log('🔧 Environment variables check:', { 
    hasUrl: !!envUrl, 
    hasKey: !!envKey,
    urlPrefix: envUrl ? envUrl.substring(0, 20) + '...' : 'none'
  })
  
  if (envUrl && envKey) {
    console.log('✅ Using environment variables for Supabase configuration')
    return { url: envUrl, key: envKey, source: 'environment' }
  }
  
  // Priority 2: Runtime configuration (config.js)
  console.log('🔧 Runtime config check:', {
    hasConfig: !!window.SUPABASE_CONFIG,
    hasUrl: !!(window.SUPABASE_CONFIG?.url),
    hasKey: !!(window.SUPABASE_CONFIG?.key),
    urlPrefix: window.SUPABASE_CONFIG?.url ? window.SUPABASE_CONFIG.url.substring(0, 20) + '...' : 'none',
    keyPrefix: window.SUPABASE_CONFIG?.key ? window.SUPABASE_CONFIG.key.substring(0, 10) + '...' : 'none'
  })
  
  if (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.key) {
    // Check if they're still placeholder values
    if (window.SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL_HERE' || 
        window.SUPABASE_CONFIG.key === 'YOUR_SUPABASE_ANON_KEY_HERE') {
      console.warn('⚠️ Runtime config contains placeholder values - not configured')
      return { url: null, key: null, source: 'runtime-placeholder' }
    }
    
    console.log('✅ Using runtime configuration for Supabase')
    return { url: window.SUPABASE_CONFIG.url, key: window.SUPABASE_CONFIG.key, source: 'runtime' }
  }
  
  console.warn('⚠️ No valid Supabase configuration found')
  return { url: null, key: null, source: 'none' }
}

const config = getSupabaseConfig()
const supabase = config.url && config.key ? createClient(config.url, config.key) : null

// Log Supabase configuration status
if (supabase) {
  console.log('✅ Supabase initialized successfully', { 
    source: config.source,
    urlPrefix: config.url.substring(0, 20) + '...',
    clientCreated: true
  })
  
  // Test connection
  supabase.from('scans').select('count').then(({ data, error }) => {
    if (error) {
      console.error('❌ Supabase connection test failed:', error)
    } else {
      console.log('✅ Supabase connection test successful')
    }
  })
} else {
  console.warn('⚠️ Supabase not configured - falling back to local storage', { 
    source: config.source,
    hasUrl: !!config.url, 
    hasKey: !!config.key,
    reason: config.source === 'runtime-placeholder' ? 'Placeholder values detected' : 'Missing credentials'
  })
}

const requestAsPromise = (request) => new Promise((resolve, reject) => {
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => reject(request.error)
})

const openDatabase = () => new Promise((resolve, reject) => {
  const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION)
  request.onupgradeneeded = () => {
    request.result.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true })
  }
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => reject(request.error)
})

export const getGalleryImages = async () => {
  if (supabase) {
    try {
      console.log('🔍 Fetching images from Supabase...')
      const { data, error } = await supabase.from('scans').select('*').order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Supabase query error:', error)
        throw error
      }
      
      console.log(`📊 Found ${data.length} images in Supabase`)
      
      const images = await Promise.all(data.map(async (image) => {
        try {
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
      }))
      
      const validImages = images.filter(img => img !== null)
      console.log(`✅ Successfully loaded ${validImages.length} images from Supabase`)
      return validImages
    } catch (error) {
      console.error('❌ Supabase fetch failed, falling back to local storage:', error)
    }
  }

  console.log('📂 Using local IndexedDB storage')
  const database = await openDatabase()
  const transaction = database.transaction(STORE_NAME, 'readonly')
  const images = await requestAsPromise(transaction.objectStore(STORE_NAME).getAll())
  database.close()
  return images.sort((first, second) => second.createdAt - first.createdAt)
}

export const saveGalleryImage = async (blob, metadata) => {
  if (supabase) {
    try {
      console.log('📤 Uploading image to Supabase...', { imageHash: metadata.imageHash })
      const filePath = `${metadata.imageHash}.jpg`
      
      const { error: uploadError } = await supabase.storage.from(BUCKET_NAME).upload(filePath, blob, { contentType: 'image/jpeg', upsert: false })
      
      if (uploadError) {
        if (uploadError.message === 'The resource already exists') {
          console.log('⏭️ Image already exists in storage, fetching existing record')
        } else {
          console.error('❌ Storage upload error:', uploadError)
          throw uploadError
        }
      }

      const { data: publicUrl } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath)
      console.log('🔗 Public URL generated:', publicUrl.publicUrl)
      
      const { data, error } = await supabase.from('scans').insert({
        image_url: publicUrl.publicUrl,
        image_hash: metadata.imageHash,
        plant_name: metadata.plantName || 'Plant / crop',
        status: metadata.status,
        confidence: metadata.confidence,
        source: metadata.source,
        storage_path: filePath,
      }).select().single()

      if (error) {
        if (error.code === '23505') {
          console.log('⏭️ Duplicate image detected in database')
          const { data: duplicate } = await supabase.from('scans').select('*').eq('image_hash', metadata.imageHash).single()
          return duplicate ? { duplicate: true, id: duplicate.id, blob, ...metadata } : null
        }
        console.error('❌ Database insert error:', error)
        throw error
      }
      
      console.log('✅ Image saved to Supabase successfully', { id: data.id })
      return { duplicate: false, id: data.id, blob, ...metadata, storagePath: filePath, createdAt: new Date(data.created_at).getTime() }
    } catch (error) {
      console.error('❌ Supabase save failed, falling back to local storage:', error)
    }
  }

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

export const removeGalleryImage = async (id) => {
  if (supabase) {
    try {
      console.log('🗑️ Deleting image from Supabase...', { id })
      const { data: image, error: lookupError } = await supabase.from('scans').select('storage_path').eq('id', id).single()
      
      if (lookupError) {
        console.error('❌ Error looking up image:', lookupError)
        throw lookupError
      }
      
      const { error: deleteRowError } = await supabase.from('scans').delete().eq('id', id)
      if (deleteRowError) {
        console.error('❌ Error deleting database row:', deleteRowError)
        throw deleteRowError
      }
      
      if (image.storage_path) {
        const { error: storageError } = await supabase.storage.from(BUCKET_NAME).remove([image.storage_path])
        if (storageError) {
          console.warn('⚠️ Error deleting from storage (non-critical):', storageError)
        }
      }
      
      console.log('✅ Image deleted from Supabase successfully')
      return
    } catch (error) {
      console.error('❌ Supabase delete failed, falling back to local storage:', error)
    }
  }

  console.log('🗑️ Deleting from local IndexedDB')
  const database = await openDatabase()
  const transaction = database.transaction(STORE_NAME, 'readwrite')
  await requestAsPromise(transaction.objectStore(STORE_NAME).delete(id))
  database.close()
}
