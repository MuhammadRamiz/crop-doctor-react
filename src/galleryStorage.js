import { createClient } from '@supabase/supabase-js'

const DATABASE_NAME = 'crop-doctor-gallery'
const STORE_NAME = 'images'
const DATABASE_VERSION = 1
const BUCKET_NAME = 'plant-images'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

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
    const { data, error } = await supabase.from('scans').select('*').order('created_at', { ascending: false })
    if (!error) {
      return Promise.all(data.map(async (image) => {
        const response = await fetch(image.image_url)
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
      }))
    }
  }

  const database = await openDatabase()
  const transaction = database.transaction(STORE_NAME, 'readonly')
  const images = await requestAsPromise(transaction.objectStore(STORE_NAME).getAll())
  database.close()
  return images.sort((first, second) => second.createdAt - first.createdAt)
}

export const saveGalleryImage = async (blob, metadata) => {
  if (supabase) {
    const filePath = `${metadata.imageHash}.jpg`
    const { error: uploadError } = await supabase.storage.from(BUCKET_NAME).upload(filePath, blob, { contentType: 'image/jpeg', upsert: false })
    if (uploadError && uploadError.message !== 'The resource already exists') throw uploadError

    const { data: publicUrl } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath)
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
        const { data: duplicate } = await supabase.from('scans').select('*').eq('image_hash', metadata.imageHash).single()
        return duplicate ? { duplicate: true, id: duplicate.id, blob, ...metadata } : null
      }
      throw error
    }
    return { duplicate: false, id: data.id, blob, ...metadata, storagePath: filePath, createdAt: new Date(data.created_at).getTime() }
  }

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
    const { data: image, error: lookupError } = await supabase.from('scans').select('storage_path').eq('id', id).single()
    if (lookupError) throw lookupError
    const { error: deleteRowError } = await supabase.from('scans').delete().eq('id', id)
    if (deleteRowError) throw deleteRowError
    if (image.storage_path) await supabase.storage.from(BUCKET_NAME).remove([image.storage_path])
    return
  }

  const database = await openDatabase()
  const transaction = database.transaction(STORE_NAME, 'readwrite')
  await requestAsPromise(transaction.objectStore(STORE_NAME).delete(id))
  database.close()
}
