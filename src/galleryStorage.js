import { createClient } from '@supabase/supabase-js'

const DATABASE_NAME = 'crop-doctor-gallery'
const STORE_NAME = 'images'
const DATABASE_VERSION = 1
const BUCKET_NAME = 'plant-images'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

// Log Supabase configuration status
if (supabase) {
  console.log('✅ Supabase initialized successfully', { url: supabaseUrl })
} else {
  console.warn('⚠️ Supabase not configured - falling back to local storage', { 
    hasUrl: !!supabaseUrl, 
    hasKey: !!supabaseKey 
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
