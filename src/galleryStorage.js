const DATABASE_NAME = 'crop-doctor-gallery'
const STORE_NAME = 'images'
const DATABASE_VERSION = 1

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
  const database = await openDatabase()
  const transaction = database.transaction(STORE_NAME, 'readonly')
  const images = await requestAsPromise(transaction.objectStore(STORE_NAME).getAll())
  database.close()
  return images.sort((first, second) => second.createdAt - first.createdAt)
}

export const saveGalleryImage = async (blob, metadata) => {
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
  const database = await openDatabase()
  const transaction = database.transaction(STORE_NAME, 'readwrite')
  await requestAsPromise(transaction.objectStore(STORE_NAME).delete(id))
  database.close()
}
