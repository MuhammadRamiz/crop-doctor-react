/**
 * Common utility functions with type definitions
 */

/**
 * @typedef {Object} ImageData
 * @property {number} id - Unique identifier
 * @property {Blob} blob - Image blob data
 * @property {string} plantName - Name of the detected plant
 * @property {string} status - Health status ('healthy' or 'risk')
 * @property {number} confidence - Confidence score (0-100)
 * @property {string} source - Source of the image
 * @property {number} createdAt - Timestamp in milliseconds
 * @property {Array<Object>} diseases - Detected diseases
 * @property {string} imageHash - SHA-256 hash of the image
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} accepted - Whether the frame was accepted
 * @property {string} reason - Reason for rejection (if rejected)
 * @property {string} plantName - Detected plant name (if accepted)
 */

/**
 * @typedef {Object} HealthEstimate
 * @property {boolean} isHealthy - Whether the plant is healthy
 * @property {number} confidence - Health score (0-100)
 */

/**
 * @typedef {Object} DiseaseIndicator
 * @property {string} type - Type of disease (fungal, bacterial, pest, nutrient)
 * @property {string} name - Display name of the disease
 * @property {number} severity - Severity score (0-100)
 */

/**
 * Format a plant name from classifier output
 * @param {string} className - Raw class name from classifier
 * @returns {string} - Formatted plant name
 */
export const formatPlantName = (className) => {
  const rawName = (className || '').split(',')[0].trim()
  const name = rawName.replace(/[_-]+/g, ' ')
  if (!name) return 'Plant / crop'

  return name
    .split(' ')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ')
}

/**
 * Validate image file before processing
 * @param {File} file - The file to validate
 * @param {string[]} supportedTypes - Supported MIME types
 * @param {number} maxSize - Maximum file size in bytes
 * @returns {{valid: boolean, error?: string}} - Validation result
 */
export const validateImageFile = (file, supportedTypes, maxSize) => {
  if (!file) {
    return { valid: false, error: 'No file provided' }
  }

  if (!supportedTypes.includes(file.type)) {
    return { valid: false, error: 'Unsupported format. Choose a JPG, PNG, or WebP image.' }
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'Image is too large. Choose a file smaller than 10 MB.' }
  }

  return { valid: true }
}

/**
 * Create and draw image on canvas with scaling
 * @param {HTMLImageElement} image - The image element
 * @param {number} maxDimension - Maximum dimension for scaling
 * @returns {HTMLCanvasElement} - Canvas with the drawn image
 */
export const drawImageOnCanvas = (image, maxDimension) => {
  const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(image.naturalWidth * scale)
  canvas.height = Math.round(image.naturalHeight * scale)

  const context = canvas.getContext('2d')
  if (!context) {
    throw new Error('Failed to get canvas context')
  }

  context.drawImage(image, 0, 0, canvas.width, canvas.height)
  return canvas
}

/**
 * Convert Blob to Object URL and track for cleanup
 * @param {Blob} blob - The blob to convert
 * @returns {string} - Object URL
 */
export const createBlobUrl = (blob) => {
  if (!(blob instanceof Blob)) {
    throw new Error('Invalid blob object')
  }
  return URL.createObjectURL(blob)
}

/**
 * Safely revoke object URL
 * @param {string} url - The object URL to revoke
 */
export const revokeBlobUrl = (url) => {
  if (typeof url === 'string' && url.startsWith('blob:')) {
    try {
      URL.revokeObjectURL(url)
    } catch (error) {
      console.warn('Failed to revoke object URL:', error)
    }
  }
}

/**
 * Calculate text contrast ratio for accessibility
 * @param {string} rgb1 - First RGB color as "r,g,b"
 * @param {string} rgb2 - Second RGB color as "r,g,b"
 * @returns {number} - Contrast ratio
 */
export const getContrastRatio = (rgb1, rgb2) => {
  const getLuminance = (rgb) => {
    const [r, g, b] = rgb.split(',').map((x) => {
      const val = parseInt(x, 10) / 255
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const l1 = getLuminance(rgb1)
  const l2 = getLuminance(rgb2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Debounce a function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle a function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle interval in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}
