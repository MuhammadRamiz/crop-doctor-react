import { useEffect, useRef, useState } from 'react'
import { getGalleryImages, removeGalleryImage, saveGalleryImage } from './galleryStorage'
import { trackEvent } from './analytics.js'
import danishPortrait from './assets/danish.jpeg'
import ramizPortrait from './assets/ramiz.jpeg'
import './App.css'

const navItems = ['Overview', 'How it works', 'Benefits', 'Team', 'Contact']
const navTargets = {
  Overview: 'overview',
  'How it works': 'how-it-works',
  Benefits: 'benefits',
  Team: 'team',
  Contact: 'contact',
}

const badgeItems = [
  'AI crop grader',
  'Plant stress detection',
  'Field-ready scan',
]

const howItems = [
  {
    title: 'Capture',
    description: 'Collect a crop image from the field using a camera or device feed.',
  },
  {
    title: 'Assess',
    description: 'Analyze the plant structure, leaf health, and visible stress patterns.',
  },
  {
    title: 'Diagnose',
    description: 'Compare image signals against trained crop-health indicators.',
  },
  {
    title: 'Act',
    description: 'Receive a practical insight on plant condition and intervention need.',
  },
]

const whyItems = [
  {
    title: 'Early detection',
    description: 'Spot stress before it damages a whole plot or field.',
    icon: 'leaf',
  },
  {
    title: 'Lower losses',
    description: 'Reduce crop waste through faster, more informed decisions.',
    icon: 'shield',
  },
  {
    title: 'Access anywhere',
    description: 'Support remote inspection with a simple mobile-friendly dashboard.',
    icon: 'signal',
  },
  {
    title: 'Farmer-ready',
    description: 'Designed for quick field use with clear, actionable results.',
    icon: 'spark',
  },
]

const teamMembers = [
  { initials: 'D', name: 'Danish', role: 'Team Leader', dept: 'AI / Backend', image: danishPortrait },
  { initials: 'R', name: 'Ramiz', role: 'Frontend', dept: 'ReactJS and AI/AML', image: ramizPortrait },
  { initials: 'M2', name: 'Saquib', role: 'Hardware', dept: 'ESP32-CAM Setup' },
  { initials: 'M3', name: 'Aadil', role: 'AI / ML', dept: 'Model Training' },
  { initials: 'M4', name: 'Zohra', role: 'Backend', dept: 'Server & API' },
  { initials: 'M5', name: 'Faiza', role: 'Research', dept: 'Dataset & Domain' },
]

const builtWith = ['ESP32-CAM', 'ReactJS', 'Generative AI', 'AI / ML', 'HTML/CSS/JS']
const MAX_IMAGE_SIZE = 10 * 1024 * 1024
const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const plantLabels = [
  'plant', 'leaf', 'tree', 'flower', 'vegetable', 'fruit', 'corn', 'broccoli', 'cauliflower', 'cucumber',
  'zucchini', 'squash', 'pepper', 'potato', 'banana', 'pineapple', 'strawberry', 'orange', 'lemon', 'fig',
  'vine', 'greenhouse', 'daisy', 'rose', 'sunflower', 'cactus', 'succulent', 'aloe', 'agave', 'jade', 'fern',
  'palm', 'orchid', 'monstera', 'bamboo', 'ivy', 'spider plant', 'prickly pear', 'bonsai', 'herb', 'bush', 'shrub',
  'tree trunk', 'grass', 'grape', 'olive', 'pepper plant', 'tomato', 'tomato plant', 'rose bush', 'cane', 'berry'
]
const genericPlantLabels = ['plant', 'leaf', 'tree', 'flower', 'vegetable', 'fruit', 'hip', 'pot', 'flowerpot', 'vine', 'greenhouse', 'shrub', 'bush', 'bushes', 'grass', 'grass family']
const recognizedPlantNames = [
  { keywords: ['cactus', 'succulent', 'echeveria', 'prickly pear', 'aloe', 'agave', 'jade'], label: 'Cactus' },
  { keywords: ['palm', 'palm tree', 'date palm', 'coconut palm'], label: 'Palm tree' },
  { keywords: ['rose', 'rose bush', 'flower', 'daisy'], label: 'Flower' },
  { keywords: ['corn', 'maize', 'sweet corn'], label: 'Corn' },
  { keywords: ['banana', 'banana plant', 'banana tree'], label: 'Banana' },
  { keywords: ['tomato', 'tomato plant'], label: 'Tomato' },
  { keywords: ['pepper', 'pepper plant'], label: 'Pepper' },
  { keywords: ['fern', 'fern plant'], label: 'Fern' },
  { keywords: ['fig', 'fig tree', 'ficus'], label: 'Fig' },
  { keywords: ['olive', 'olive tree'], label: 'Olive' },
  { keywords: ['orange', 'orange tree'], label: 'Orange' },
  { keywords: ['grape', 'grapevine', 'grape vine'], label: 'Grapevine' },
  { keywords: ['tree', 'pine', 'oak', 'birch', 'maple', 'spruce'], label: 'Tree' },
]

const formatPlantName = (className) => {
  const rawName = (className || '').split(',')[0].trim()
  const name = rawName.replace(/[_-]+/g, ' ')
  if (!name) return 'Plant / crop'
  const normalized = name.toLowerCase()
  if (genericPlantLabels.includes(normalized)) return 'Plant / crop'

  const mapped = recognizedPlantNames.find(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword)))
  if (mapped) return mapped.label

  return name.split(' ').map((word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ')
}

const hasVegetationColor = (canvas) => {
  const context = canvas.getContext('2d', { willReadFrequently: true })
  const { data } = context.getImageData(0, 0, canvas.width, canvas.height)
  let vegetationPixels = 0
  let visiblePixels = 0

  for (let index = 0; index < data.length; index += 16) {
    const red = data[index]
    const green = data[index + 1]
    const blue = data[index + 2]
    if (red + green + blue < 60) continue
    visiblePixels += 1
    if (green > red * 1.03 && green > blue * 1.03 && green > 40) vegetationPixels += 1
  }

  return vegetationPixels / Math.max(visiblePixels, 1) >= 0.08
}

const defaultDemoLeaf = (() => {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 225">
      <rect width="300" height="225" fill="#21382b"/>
      <path d="M150 30 C90 60 65 110 65 150 A85 85 0 00235 150 C235 110 210 60 150 30Z" fill="#4F7A5D"/>
      <path d="M150 30 V190" stroke="#0F2016" stroke-width="2"/>
      <path d="M150 70 L110 95 M150 95 L190 120 M150 120 L112 145 M150 145 L188 168" stroke="#0F2016" stroke-width="1.2" fill="none"/>
    </svg>
  `)
})()

function App() {
  const [deviceIP, setDeviceIP] = useState('')
  const [connected, setConnected] = useState(false)
  const [deviceCameraActive, setDeviceCameraActive] = useState(false)
  const [classifierStatus, setClassifierStatus] = useState('loading')
  const [feedImage, setFeedImage] = useState(defaultDemoLeaf)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [frameScanning, setFrameScanning] = useState(false)
  const [stampText, setStampText] = useState('Healthy')
  const [stampKind, setStampKind] = useState('healthy')
  const [stampVisible, setStampVisible] = useState(false)
  const [readoutLeft, setReadoutLeft] = useState('device disconnected')
  const [readoutRight, setReadoutRight] = useState('ready')
  const [hintText, setHintText] = useState('connect to your camera to enable the shutter')
  const [cameraStatus, setCameraStatus] = useState('OFFLINE')
  const [lastScan, setLastScan] = useState('0%')
  const [logs, setLogs] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [gallery, setGallery] = useState([])
  const [selectedGalleryImageId, setSelectedGalleryImageId] = useState(null)
  const [supabaseConnected, setSupabaseConnected] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [shutterDisabled, setShutterDisabled] = useState(true)
  const [activeNavSection, setActiveNavSection] = useState('overview')
  const [showGalleryHint, setShowGalleryHint] = useState(false)
  const videoRef = useRef(null)
  const fileInputRef = useRef(null)
  const galleryBoxRef = useRef(null)
  const deviceCameraStream = useRef(null)
  const plantModel = useRef(null)
  const faceModel = useRef(null)
  const scanInProgress = useRef(false)
  const galleryObjectUrls = useRef([])

  const STREAM_PATH = (ip) => `http://${ip}:81/stream`
  const CAPTURE_PATH = (ip) => `http://${ip}/capture`
  const HEALTH_PATH = (ip) => `http://${ip}/health`

  useEffect(() => () => {
    deviceCameraStream.current?.getTracks().forEach((track) => track.stop())
  }, [])

  useEffect(() => {
    if (!deviceCameraActive || !deviceCameraStream.current || !videoRef.current) return undefined

    const video = videoRef.current
    const stream = deviceCameraStream.current
    const startPlayback = () => video.play().catch(() => {})

    video.srcObject = stream
    video.addEventListener('loadedmetadata', startPlayback)
    startPlayback()

    return () => {
      video.removeEventListener('loadedmetadata', startPlayback)
      video.srcObject = null
    }
  }, [deviceCameraActive])

  useEffect(() => {
    let cancelled = false

    Promise.all([
      import('@tensorflow/tfjs-core'),
      import('@tensorflow/tfjs-backend-webgl'),
      import('@tensorflow/tfjs-backend-cpu'),
      import('@tensorflow-models/mobilenet'),
      import('@tensorflow-models/blazeface'),
    ]).then(async ([tf, , , { load }, { load: loadFaceModel }]) => {
      await tf.setBackend('webgl').catch(() => tf.setBackend('cpu'))
      await tf.ready()
      const [model, detectedFaceModel] = await Promise.all([
        load({ version: 2, alpha: 1.0 }),
        loadFaceModel(),
      ])
      return { model, detectedFaceModel }
    }).then(({ model, detectedFaceModel }) => {
      if (!cancelled) {
        plantModel.current = model
        faceModel.current = detectedFaceModel
        setClassifierStatus('ready')
      }
    }).catch(() => {
      if (!cancelled) setClassifierStatus('unavailable')
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    let active = true
    const objectUrls = galleryObjectUrls.current
    getGalleryImages().then((images) => {
      if (!active) return
      console.log(`🖼️ Loaded ${images.length} images into gallery`)
      setLogs(images.slice(0, 4).map((image) => ({
        isHealthy: image.status === 'healthy',
        confidence: image.confidence,
        time: new Date(image.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })))
      const items = images.map((image) => {
        const url = URL.createObjectURL(image.blob)
        objectUrls.push(url)
        return { ...image, url }
      })
      setGallery(items)
    }).catch((error) => {
      console.error('❌ Error loading gallery images:', error)
    })

    return () => {
      active = false
      objectUrls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  useEffect(() => {
    const checkSupabaseConnection = () => {
      // Check both environment variables and runtime config
      const envUrl = import.meta.env.VITE_SUPABASE_URL
      const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
      const runtimeConfig = window.SUPABASE_CONFIG
      
      const hasEnvUrl = !!envUrl
      const hasEnvKey = !!envKey
      const hasRuntimeConfig = !!(runtimeConfig?.url && runtimeConfig?.key)
      
      const isConnected = hasEnvUrl && hasEnvKey || hasRuntimeConfig
      setSupabaseConnected(isConnected)
      
      console.log('🔌 Supabase connection status:', { 
        hasEnvUrl, 
        hasEnvKey, 
        hasRuntimeConfig,
        isConnected,
        source: hasEnvUrl && hasEnvKey ? 'environment' : (hasRuntimeConfig ? 'runtime' : 'none'),
        urlPrefix: (hasEnvUrl ? envUrl : (hasRuntimeConfig ? runtimeConfig.url : null))?.substring(0, 20) + '...' || 'none'
      })
    }
    
    checkSupabaseConnection()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'how-it-works', 'benefits', 'team', 'contact']
      let currentSection = 'overview'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = section
          }
        }
      }

      setActiveNavSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const setConnectedState = (nextConnected, ip = deviceIP) => {
    setConnected(nextConnected)
    setShutterDisabled(!nextConnected)
    setHintText(
      nextConnected
        ? 'aim at the plant, then press the shutter'
        : 'connect to your camera to enable the shutter',
    )
    setCameraStatus(nextConnected ? 'ONLINE' : 'OFFLINE')
    setReadoutLeft(nextConnected ? 'live feed connected' : 'device disconnected')
    setReadoutRight(nextConnected ? ip : 'ready')
  }

  const addGalleryImage = async (blob, metadata) => {
    try {
      const bytes = await blob.arrayBuffer()
      const digest = await crypto.subtle.digest('SHA-256', bytes)
      const imageHash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
      
      // Analyze disease indicators from the image
      const canvas = document.createElement('canvas')
      const img = await new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => resolve(image)
        image.onerror = () => reject()
        image.src = URL.createObjectURL(blob)
      }).catch(() => null)
      
      let diseases = []
      if (img) {
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        canvas.getContext('2d').drawImage(img, 0, 0)
        diseases = analyzeDiseaseIndicators(canvas)
      }

      const image = await saveGalleryImage(blob, { ...metadata, imageHash, diseases })
      if (image.duplicate) return image
      const url = URL.createObjectURL(image.blob)
      galleryObjectUrls.current.push(url)
      setGallery((previous) => [{ ...image, url }, ...previous])
      setSelectedGalleryImageId(image.id)
      return { ...image, url }
    } catch {
      setHintText('shared gallery setup incomplete · check Supabase bucket and table policies')
      return null
    }
  }

  const deleteGalleryImage = async (image) => {
    await removeGalleryImage(image.id)
    URL.revokeObjectURL(image.url)
    const remainingImages = gallery.filter((item) => item.id !== image.id)
    setGallery(remainingImages)
    if (selectedGalleryImageId === image.id) {
      setSelectedGalleryImageId(null)
      setRecommendations([])
    }
    setLogs(remainingImages.slice(0, 4).map((item) => ({
      isHealthy: item.status === 'healthy',
      confidence: item.confidence,
      time: new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    })))
  }

  const analyzeDiseaseIndicators = (canvas) => {
    const context = canvas.getContext('2d', { willReadFrequently: true })
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height)
    let fungalPixels = 0
    let bacterialPixels = 0
    let pestPixels = 0
    let nutrientPixels = 0
    let visiblePixels = 0

    for (let index = 0; index < data.length; index += 16) {
      const red = data[index]
      const green = data[index + 1]
      const blue = data[index + 2]
      const brightness = red + green + blue

      if (brightness < 45) continue
      visiblePixels += 1

      // Fungal indicators: yellowish-brown, powdery look
      if (red > 150 && green > 120 && green < red && blue < green) fungalPixels += 1

      // Bacterial indicators: dark brown/black spots, water-soaked
      if (red < 100 && green < 90 && blue < 85 && brightness > 30) bacterialPixels += 1

      // Pest damage indicators: holes, irregular edges (high contrast areas)
      if ((red > 200 || blue > 200) && Math.abs(red - green) > 50) pestPixels += 1

      // Nutrient deficiency: yellow/pale leaves
      if (red > 200 && green > 180 && blue < 100) nutrientPixels += 1
    }

    const fungalRatio = fungalPixels / Math.max(visiblePixels, 1)
    const bacterialRatio = bacterialPixels / Math.max(visiblePixels, 1)
    const pestRatio = pestPixels / Math.max(visiblePixels, 1)
    const nutrientRatio = nutrientPixels / Math.max(visiblePixels, 1)

    const diseases = []
    if (fungalRatio > 0.05) diseases.push({ type: 'fungal', severity: Math.min(100, Math.round(fungalRatio * 500)), name: 'Fungal infection' })
    if (bacterialRatio > 0.05) diseases.push({ type: 'bacterial', severity: Math.min(100, Math.round(bacterialRatio * 500)), name: 'Bacterial disease' })
    if (pestRatio > 0.08) diseases.push({ type: 'pest', severity: Math.min(100, Math.round(pestRatio * 300)), name: 'Pest damage' })
    if (nutrientRatio > 0.1) diseases.push({ type: 'nutrient', severity: Math.min(100, Math.round(nutrientRatio * 250)), name: 'Nutrient deficiency' })

    return diseases.sort((a, b) => b.severity - a.severity)
  }

  const getRecommendations = (isHealthy, diseases = []) => {
    const recommendations = []

    if (isHealthy) {
      recommendations.push('Keep the current watering and light routine consistent.')
      recommendations.push('Check leaves regularly for early discoloration or pests.')
      recommendations.push('Keep airflow around the plant clear to reduce moisture buildup.')
    } else {
      recommendations.push('Inspect both sides of the leaves for pests, spots, or yellowing.')
      recommendations.push('Check soil moisture and drainage before watering again.')
      recommendations.push('Remove severely damaged leaves and compare a new scan soon.')
    }

    // Disease-specific recommendations
    diseases.forEach(({ type, name, severity }) => {
      if (type === 'fungal') {
        recommendations.push(`${name}: Reduce humidity and improve air circulation. Apply fungicide if >30% coverage.`)
      } else if (type === 'bacterial') {
        recommendations.push(`${name}: Remove infected leaves and sterilize tools. Avoid overhead watering.`)
      } else if (type === 'pest') {
        recommendations.push(`${name}: Scout for insects and mites. Use organic or synthetic control if populations are high.`)
      } else if (type === 'nutrient') {
        recommendations.push(`${name}: Conduct soil test for NPK levels. Consider foliar feeding for quick recovery.`)
      }
    })

    if (!isHealthy && diseases.length === 0) {
      recommendations.push('Use an agronomist or soil test before applying treatment or fertilizer.')
    }

    return recommendations
  }

  const getCropRecommendations = (isHealthy, plantName, diseases = []) => {
    const crop = plantName.toLowerCase()
    const recommendations = getRecommendations(isHealthy, diseases)

    if (crop.includes('tomato')) recommendations.push('For tomato: Check leaf undersides for whitefly and spider mites. Keep foliage dry overnight to prevent fungal issues.')
    if (crop.includes('corn')) recommendations.push('For corn: Inspect the whorl and lower leaves for chewing damage and nutrient striping. Watch for corn borer.')
    if (crop.includes('banana')) recommendations.push('For banana: Check older leaves for fungal spots and keep soil well drained. Monitor for Panama disease.')
    if (crop.includes('pepper')) recommendations.push('For pepper: Scout for phytophthora and anthracnose. Avoid overcrowding to improve airflow.')
    if (crop.includes('potato')) recommendations.push('For potato: Monitor for late blight, early blight, and Colorado potato beetle. Improve drainage immediately.')
    if (crop.includes('cactus') || crop.includes('succulent')) recommendations.push('For succulents: Ensure well-draining soil. Root rot is common in humid conditions; reduce watering.')
    if (crop.includes('grape') || crop.includes('grapevine')) recommendations.push('For grapevine: Scout for powdery mildew and downy mildew. Prune for airflow in humid regions.')
    if (crop.includes('fig')) recommendations.push('For fig: Watch for fig rust and root-knot nematodes. Ensure proper drainage and spacing.')

    return recommendations
  }

  const viewGalleryImage = (image) => {
    const isHealthy = image.status === 'healthy'
    const diseases = image.diseases || []
    setSelectedGalleryImageId(image.id)
    setFeedImage(image.url)
    setStampText(isHealthy ? 'Healthy' : 'At Risk')
    setStampKind(isHealthy ? 'healthy' : 'risk')
    setStampVisible(true)
    setReadoutLeft('saved scan result')
    setReadoutRight(`${image.confidence}% confidence`)
    setLastScan(`${image.confidence}%`)
    setRecommendations(getCropRecommendations(isHealthy, image.plantName || 'Plant / crop', diseases))
    
    // Scroll to gallery and show hint
    setTimeout(() => {
      if (galleryBoxRef.current) {
        galleryBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setShowGalleryHint(true)
        setTimeout(() => setShowGalleryHint(false), 3000)
      }
    }, 100)
  }

  const handleConnect = async () => {
    const ip = document.getElementById('ipInput')?.value.trim() || ''
    if (!ip) {
      document.getElementById('ipInput')?.focus()
      return
    }

    setConnectedState(false, ip)
    setReadoutLeft('checking camera…')
    setReadoutRight(ip)
    setHintText('waiting for the camera response')

    if (window.location.protocol === 'https:') {
      setReadoutLeft('HTTPS cannot reach a local HTTP camera')
      setHintText('open the local app on the same Wi-Fi, or use a public HTTPS camera API')
      return
    }

    try {
      const response = await fetch(CAPTURE_PATH(ip), {
        cache: 'no-store',
        signal: AbortSignal.timeout(5000),
      })
      if (!response.ok) throw new Error('camera response error')

      await response.blob()
      setDeviceIP(ip)
      setConnectedState(true, ip)
      setFeedImage(`${STREAM_PATH(ip)}?t=${Date.now()}`)
    } catch {
      setReadoutLeft('camera unavailable')
      setReadoutRight(ip)
      setHintText('check the camera IP and connect this device to the same Wi-Fi')
    }
  }

  const startDeviceCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setReadoutLeft('browser camera is not supported')
      setReadoutRight('use a modern browser')
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      })
      deviceCameraStream.current = stream
      setDeviceCameraActive(true)
      setConnectedState(true, 'device camera')
      setHintText('aim at one clear plant or crop, then press the shutter')
    } catch {
      setReadoutLeft('camera permission denied')
      setReadoutRight('allow camera access')
      setHintText('camera access is required to capture a crop')
    }
  }

  const stopDeviceCamera = () => {
    deviceCameraStream.current?.getTracks().forEach((track) => track.stop())
    deviceCameraStream.current = null
    setDeviceCameraActive(false)
    setConnectedState(false)
  }

  const validatePlantFrame = async (canvas) => {
    if (!plantModel.current || !faceModel.current) return { accepted: false, reason: classifierStatus === 'loading' ? 'plant checker is still loading' : 'plant checker unavailable' }

    const faces = await faceModel.current.estimateFaces(canvas, false)
    const confidentFace = faces.some((face) => {
      const probability = typeof face.probability?.dataSync === 'function'
        ? face.probability.dataSync()[0]
        : face.probability
      return probability >= 0.9
    })
    if (confidentFace) return { accepted: false, reason: 'person detected · frame rejected' }

    const predictions = await plantModel.current.classify(canvas, 10)
    const hasPlantLabel = predictions.some(({ className, probability }) => {
      const label = className.toLowerCase()
      return probability >= 0.12 && plantLabels.some((term) => label.includes(term))
    })
    const hasPlant = hasPlantLabel || hasVegetationColor(canvas)
    const plantPrediction = predictions
      .filter(({ className, probability }) => {
        const label = className.toLowerCase()
        return probability >= 0.12 && plantLabels.some((term) => label.includes(term)) && !genericPlantLabels.includes(label.split(',')[0].trim())
      })
      .sort((first, second) => second.probability - first.probability)[0]

    const fallbackPrediction = predictions
      .filter(({ className, probability }) => {
        const label = className.toLowerCase()
        return probability >= 0.2 && !genericPlantLabels.includes(label.split(',')[0].trim())
      })
      .sort((first, second) => second.probability - first.probability)[0]

    if (!hasPlant) return { accepted: false, reason: 'plant or crop not detected' }

    const resolvedPrediction = plantPrediction || fallbackPrediction || predictions[0]
    return { accepted: true, plantName: formatPlantName(resolvedPrediction?.className || 'Plant / crop') }
  }

  const estimatePlantHealth = (canvas) => {
    const context = canvas.getContext('2d')
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height)
    let greenPixels = 0
    let stressPixels = 0
    let visiblePixels = 0

    for (let index = 0; index < data.length; index += 16) {
      const red = data[index]
      const green = data[index + 1]
      const blue = data[index + 2]
      const brightness = red + green + blue

      if (brightness < 45) continue
      visiblePixels += 1
      if (green > red * 1.05 && green > blue * 1.05 && green > 45) greenPixels += 1
      if (red > blue * 1.35 && green > blue * 1.15 && red > green * 0.75) stressPixels += 1
    }

    const greenRatio = greenPixels / Math.max(visiblePixels, 1)
    const stressRatio = stressPixels / Math.max(visiblePixels, 1)
    const healthScore = Math.round(Math.min(98, Math.max(5, 50 + greenRatio * 100 - stressRatio * 55)))
    const isHealthy = healthScore >= 55

    return { isHealthy, confidence: healthScore }
  }

  const captureDeviceFrame = async () => {
    const video = videoRef.current
    if (!video?.videoWidth || !video.videoHeight) {
      rejectFrame('camera is still starting')
      return
    }

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0)

    setShutterDisabled(true)
    setReadoutLeft('checking plant image…')
    setReadoutRight('AI validation')
    let validation
    try {
      validation = await validatePlantFrame(canvas)
    } catch {
      rejectFrame('plant checker unavailable')
      return
    }
    if (!validation.accepted) {
      rejectFrame(validation.reason)
      return
    }

    canvas.toBlob(async (blob) => {
      if (!blob) {
        rejectFrame('could not capture camera frame')
        return
      }
      setFeedImage(URL.createObjectURL(blob))
      setStampVisible(false)
      const result = estimatePlantHealth(canvas)
      const diseases = analyzeDiseaseIndicators(canvas)
      setReadoutLeft('visual health screening complete')
      setReadoutRight('visual health score')
      setHintText('screening estimate only: confirm results with an agronomist or trained model')
      const savedImage = await addGalleryImage(blob, { source: 'device camera', plantName: validation.plantName, status: result.isHealthy ? 'healthy' : 'risk', confidence: result.confidence, diseases })
      if (savedImage?.duplicate) {
        setUploadError('This camera image is already in the gallery.')
      }
      showResult(result.isHealthy, result.confidence, validation.plantName, diseases)
    }, 'image/jpeg', 0.9)
  }

  const processSelectedImage = async (file) => {
    if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
      return { error: 'Unsupported format. Choose a JPG, PNG, or WebP image.' }
    }
    if (file.size > MAX_IMAGE_SIZE) {
      return { error: 'Image is too large. Choose a file smaller than 10 MB.' }
    }

    const previewUrl = URL.createObjectURL(file)
    try {
      const image = await new Promise((resolve, reject) => {
        const imageElement = new Image()
        imageElement.onload = () => resolve(imageElement)
        imageElement.onerror = () => reject(new Error('image read error'))
        imageElement.src = previewUrl
      })
      const scale = Math.min(1, 1280 / Math.max(image.naturalWidth, image.naturalHeight))
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(image.naturalWidth * scale)
      canvas.height = Math.round(image.naturalHeight * scale)
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height)

      const validation = await validatePlantFrame(canvas)
      if (!validation.accepted) {
        return { error: validation.reason === 'plant or crop not detected' ? 'Only clear plant or crop images are supported.' : validation.reason }
      }

      const result = estimatePlantHealth(canvas)
      const diseases = analyzeDiseaseIndicators(canvas)
      const imageRecord = await addGalleryImage(file, {
        source: 'device gallery',
        plantName: validation.plantName,
        status: result.isHealthy ? 'healthy' : 'risk',
        confidence: result.confidence,
        diseases,
      })
      if (imageRecord?.duplicate) return { error: 'This image is already in the gallery.' }
      return imageRecord ? { image: imageRecord, result, plantName: validation.plantName, diseases } : { error: 'shared gallery setup incomplete' }
    } catch {
      return { error: 'plant checker unavailable' }
    } finally {
      URL.revokeObjectURL(previewUrl)
    }
  }

  const handleImageSelect = async (event) => {
    const files = Array.from(event.target.files || [])
    event.target.value = ''
    if (files.length === 0) return
    if (scanInProgress.current) return

    setUploadError('')
    scanInProgress.current = true
    setShutterDisabled(true)
    setStampVisible(false)
    const results = []
    const rejectedFiles = []
    for (const [index, file] of files.entries()) {
      setReadoutLeft(`checking image ${index + 1} of ${files.length}…`)
      setReadoutRight('AI validation')
      const result = await processSelectedImage(file)
      if (result.image) results.push(result)
      if (result.error) rejectedFiles.push({ name: file.name, error: result.error })
    }

    if (rejectedFiles.length > 0) {
      const summaries = [...new Set(rejectedFiles.map(({ error }) => error))].map((error) => {
        const count = rejectedFiles.filter((file) => file.error === error).length
        return `${count} image${count === 1 ? '' : 's'}: ${error}`
      })
      setUploadError(`${files.length} selected · ${results.length} added · ${rejectedFiles.length} rejected. ${summaries.join(' ')}`)
    } else {
      setUploadError(`${files.length} selected · ${results.length} added`)
    }

    const lastResult = results[results.length - 1]
    if (!lastResult) {
      rejectFrame('no supported plant images selected')
      return
    }

    setFeedImage(lastResult.image.url)
    setReadoutLeft(`${results.length} plant image${results.length === 1 ? '' : 's'} added`)
    setReadoutRight('visual health score')
    setHintText('screening estimate only: confirm results with an agronomist or trained model')
    showResult(lastResult.result.isHealthy, lastResult.result.confidence, lastResult.plantName, lastResult.diseases || [])
  }

  const logScan = (isHealthy, confidence) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const entry = {
      isHealthy,
      confidence,
      time,
    }
    setLogs((prev) => [entry, ...prev].slice(0, 4))
  }

  const showResult = (isHealthy, confidence, plantName = 'Plant / crop', diseases = []) => {
    setTimeout(() => {
      scanInProgress.current = false
      setStampText(isHealthy ? 'Healthy' : 'At Risk')
      setStampKind(isHealthy ? 'healthy' : 'risk')
      setStampVisible(true)
      setReadoutLeft('diagnosis complete')
      setReadoutRight(`${confidence}% confidence`)
      setShutterDisabled(false)
      setLastScan(`${confidence}%`)
      setRecommendations(getCropRecommendations(isHealthy, plantName, diseases))
      trackEvent('plant_scan_completed', { status: isHealthy ? 'healthy' : 'at_risk', plant_name: plantName, disease_count: diseases.length })
      logScan(isHealthy, confidence)
    }, 1000)
  }

  const rejectFrame = (message) => {
    scanInProgress.current = false
    setFrameScanning(false)
    setStampVisible(false)
    setShutterDisabled(false)
    setReadoutLeft(message)
    setReadoutRight('scan rejected')
    setHintText('include only a clear plant or crop in the frame')
  }

  const runDiagnosis = () => {
    if (!connected || shutterDisabled || scanInProgress.current) return

    scanInProgress.current = true

    if (deviceCameraActive) {
      captureDeviceFrame()
      return
    }

    setShutterDisabled(true)
    setStampVisible(false)
    setReadoutLeft('capturing frame…')
    setReadoutRight('')
    setFrameScanning(true)
    setTimeout(() => setFrameScanning(false), 1300)

    fetch(CAPTURE_PATH(deviceIP), { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('bad response')
        return response.blob()
      })
      .then((blob) => {
        setFeedImage(URL.createObjectURL(blob))
        return fetch(HEALTH_PATH(deviceIP)).then((response) => {
          if (!response.ok) throw new Error('health service error')
          return response.json().then((data) => ({ data, blob }))
        })
      })
      .then(({ data, blob }) => {
        const plantDetected = data.isPlant === true || data.plantDetected === true
        const faceDetected = data.containsFace === true || data.faceDetected === true

        if (faceDetected) {
          rejectFrame('person detected · frame rejected')
          return
        }

        if (!plantDetected) {
          rejectFrame('plant or crop not detected')
          return
        }

        const plantName = data.plantName || data.cropName || data.plant || 'Plant / crop'
        void addGalleryImage(blob, { source: 'ESP32-CAM', plantName, status: data.status === 'healthy' ? 'healthy' : 'risk', confidence: data.confidence })
        showResult(data.status === 'healthy', data.confidence, plantName)
      })
      .catch(() => {
        rejectFrame('camera or diagnosis service unavailable')
      })
  }

  const getProgressData = () => {
    const plantGroups = {}
    gallery.forEach((image) => {
      const plant = image.plantName || 'Plant / crop'
      if (!plantGroups[plant]) {
        plantGroups[plant] = []
      }
      plantGroups[plant].push({
        id: image.id,
        date: new Date(image.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }),
        time: new Date(image.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        confidence: image.confidence,
        status: image.status,
        diseases: image.diseases || [],
        createdAt: image.createdAt,
      })
    })
    
    // If a plant is selected, show only that plant's data; otherwise show all
    if (selectedPlantName) {
      return { [selectedPlantName]: plantGroups[selectedPlantName] || [] }
    }
    
    return plantGroups
  }

  const selectedPlantName = gallery.find((image) => image.id === selectedGalleryImageId)?.plantName
  const scanCount = gallery.length
  const progressData = getProgressData()

  return (
    <>
      <div className="veins" />

      <button
        type="button"
        className="mobile-fab"
        onClick={() => fileInputRef.current?.click()}
        title="Upload plant image (mobile)"
        aria-label="Upload plant image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
        </svg>
        <span className="mobile-fab-label">Photo</span>
      </button>

      <nav>
        <div className="nav-inner wrap">
          <div className="brand">
            <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80" alt="Crop Doctor" />
            <span>Crop Doctor</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${navTargets[item]}`}
                  className={activeNavSection === navTargets[item] ? 'active' : ''}
                  onClick={() => setActiveNavSection(navTargets[item])}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${navTargets[item]}`} onClick={() => setMobileOpen(false)}>{item}</a>
          ))}
        </div>
      </nav>

      <main>
        <section className="hero-top">
          <div className="wrap">
            <span className="eyebrow">AI crop health scanner</span>
            <h1>
              Detect plant health <em>before</em> it hurts yield.
            </h1>
            <p className="lede">
              Crop Doctor helps farmers and growers monitor crop conditions using field images,
              visual stress indicators, and quick plant health diagnostics.
            </p>
            <div className="badge-row">
              {badgeItems.map((badge) => (
                <div key={badge} className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5C5 8.3 8.3 5 12.5 5c3.2 0 5.5 2.5 5.5 5.5 0 4.3-3.5 7.5-7.5 7.5S5 16.8 5 12.5Z" />
                    <path d="M12.5 5v7.5" />
                    <path d="M12.5 12.5h5" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scanner-section" id="overview">
          <div className="wrap scanner-grid">
            <div className="scanner-side">
              <div className="specimen">
                <div className="specimen-label">
                  <span>Live camera feed</span>
                  <span>{connected ? 'connected' : 'demo'}</span>
                </div>
                <div className={`frame ${frameScanning ? 'scanning' : ''}`} id="frame">
                  <span className="bracket tl" />
                  <span className="bracket tr" />
                  <span className="bracket bl" />
                  <span className="bracket br" />
                  <div className="sweep" />
                  {deviceCameraActive ? (
                    <video ref={videoRef} className="device-video" autoPlay playsInline muted aria-label="Device camera preview" />
                  ) : (
                    <img id="feedImg" src={feedImage} alt="Plant camera feed" />
                  )}
                </div>
                <div className={`stamp ${stampKind}`} style={{ opacity: stampVisible ? 1 : 0 }}>
                  {stampText}
                </div>
                <div className="readout" aria-live="polite" aria-atomic="true">
                  <span id="readoutLeft">{readoutLeft}</span>
                  <span id="readoutRight">{readoutRight}</span>
                </div>
                <div className="connect-row">
                  <input id="ipInput" className="ip-input" type="text" placeholder="Enter camera IP, e.g. 192.168.2.50" />
                  <button type="button" className="btn btn-primary" id="connectBtn" onClick={handleConnect}>Connect</button>
                </div>
                <div className="device-camera-row">
                  {deviceCameraActive ? (
                    <button type="button" className="btn btn-secondary" onClick={stopDeviceCamera}>Stop device camera</button>
                  ) : (
                    <button type="button" className="btn btn-secondary" onClick={startDeviceCamera}>Use this device camera</button>
                  )}
                </div>
                <div className="upload-row">
                  <input ref={fileInputRef} className="file-input" type="file" accept="image/*" multiple onChange={handleImageSelect} />
                  <button type="button" className="btn btn-upload" onClick={() => fileInputRef.current?.click()}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
                    </svg>
                    Choose plant image
                  </button>
                  {uploadError && <div className="upload-error" role="alert" aria-live="assertive">{uploadError}</div>}
                </div>
                <div className="shutter-row">
                  <button type="button" className="shutter-btn" id="shutterBtn" disabled={shutterDisabled} onClick={runDiagnosis} aria-label="Scan plant">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 9.5A2.5 2.5 0 0 1 5.5 7h1.1l1.1-2.2h8.6L17.4 7h1.1A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-7Z" />
                      <circle cx="12" cy="13" r="3.5" />
                    </svg>
                  </button>
                </div>
                <div className="hint" id="hintText">{hintText}</div>
              </div>
            </div>

            <div className="scanner-side">
              <div className="status-card">
                <h3>System status</h3>
                <div className="status-row">
                  <span>Camera</span>
                  <span className={`status-flag ${connected ? 'on' : 'off'}`}>
                    <span className="dot" />
                    <span>{connected ? 'Online' : 'Offline'}</span>
                  </span>
                </div>
                <div className="status-row">
                  <span>Plant checker</span>
                  <span className={`status-flag ${classifierStatus === 'ready' ? 'on' : 'off'}`}><span className="dot" />{classifierStatus === 'ready' ? 'Ready' : 'Loading'}</span>
                </div>
                <div className="status-row">
                  <span>Network</span>
                  <span className="status-flag on"><span className="dot" />Local Wi-Fi</span>
                </div>
                <div className="status-row">
                  <span>Shared gallery</span>
                  <span className={`status-flag ${supabaseConnected ? 'on' : 'off'}`}>
                    <span className="dot" />
                    <span>{supabaseConnected ? 'Connected' : 'Local only'}</span>
                  </span>
                </div>
              </div>

              <div className="tile-row">
                <div className="tile">
                  <div className="tile-label">Camera</div>
                  <div className={`tile-value ${connected ? '' : 'off'}`}>{cameraStatus}</div>
                </div>
                <div className="tile">
                  <div className="tile-label">Last scan</div>
                  <div className="tile-value">{lastScan}</div>
                </div>
                <div className="tile">
                  <div className="tile-label">Scans</div>
                  <div className="tile-value">{scanCount}</div>
                </div>
              </div>

              <div className={`recommendation-box ${recommendations.length === 0 ? 'empty' : ''}`}>
                <div className="log-head">{selectedPlantName ? `Care plan · ${selectedPlantName}` : 'Plant care plan'}</div>
                {recommendations.length === 0 ? (
                  <p>Complete a plant scan to receive care recommendations based on its result.</p>
                ) : (
                  <ul>
                    {recommendations.map((recommendation) => (
                      <li key={recommendation}>{recommendation}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="progress-box">
                <div className="log-head">
                  {selectedPlantName ? `Health timeline · ${selectedPlantName}` : 'Health progress tracker'}
                  {selectedPlantName && <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>Select another plant to view</span>}
                </div>
                {Object.keys(progressData).length === 0 ? (
                  <p>{selectedPlantName ? `No history yet for ${selectedPlantName}. Scan this plant again to build a progress timeline.` : 'Scan the same plant multiple times to track its health progress over time.'}</p>
                ) : (
                  <div className="progress-tracker">
                    {Object.entries(progressData).map(([plant, scans]) => (
                      <div key={plant} className="progress-plant">
                        {!selectedPlantName && <div className="progress-plant-name">{plant}</div>}
                        <div className="progress-timeline">
                          {scans.slice(0, 8).map((scan, idx) => (
                            <div
                              key={idx}
                              className={`progress-dot ${scan.status} ${selectedGalleryImageId === scan.id ? 'active' : ''}`}
                              role="button"
                              tabIndex="0"
                              title={`${scan.date} ${scan.time} - ${scan.confidence}% confidence${scan.diseases.length > 0 ? ` - ${scan.diseases.length} issue(s) detected` : ''} · Click to view`}
                              onClick={() => {
                                const galleryImage = gallery.find((img) => img.id === scan.id)
                                if (galleryImage) viewGalleryImage(galleryImage)
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  const galleryImage = gallery.find((img) => img.id === scan.id)
                                  if (galleryImage) viewGalleryImage(galleryImage)
                                }
                              }}
                            >
                              <span className="progress-value">{scan.confidence}%</span>
                            </div>
                          ))}
                        </div>
                        <div className="progress-legend">
                          <span className="latest">Latest: {scans[0].date}</span>
                          <span className={`trend ${scans[0].status}`}>{scans[0].status === 'healthy' ? '✓ Healthy' : '⚠ At Risk'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="gallery-box" ref={galleryBoxRef}>
                <div className="log-head">Plant gallery <span>{gallery.length} saved</span></div>
                {showGalleryHint && (
                  <div className="gallery-hint" aria-live="polite" role="status">
                    ✓ Image selected — scroll above to view details in the timeline
                  </div>
                )}
                {gallery.length === 0 ? (
                  <p className="gallery-empty">Accepted plant captures will appear here.</p>
                ) : (
                  <div className="gallery-grid">
                    {gallery.map((image) => (
                      <div
                        className={`gallery-item ${selectedGalleryImageId === image.id ? 'selected' : ''}`}
                        key={image.id}
                        role="button"
                        tabIndex="0"
                        onClick={() => viewGalleryImage(image)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') viewGalleryImage(image)
                        }}
                      >
                        <img src={image.url} alt={`Captured ${image.status === 'healthy' ? 'healthy' : 'at-risk'} plant`} />
                        <div className="gallery-meta">
                          <div>
                            <div className="gallery-plant-name">{image.plantName || 'Plant / crop'}</div>
                            <span className={`tag ${image.status}`}>{image.status === 'healthy' ? 'Healthy' : 'At Risk'}</span>
                            <div className="gallery-confidence">{image.confidence}% confidence</div>
                          </div>
                          <button type="button" className="delete-image" title="Delete image" aria-label="Delete image" onClick={(event) => {
                            event.stopPropagation()
                            deleteGalleryImage(image)
                          }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7l1-3h4l1 3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="log-box">
                <div className="log-head">Recent results</div>
                <div className="log-grid" id="logGrid">
                  {logs.length === 0 ? (
                    <div className="log-card empty">Awaiting first scan…</div>
                  ) : (
                    logs.map((log, index) => (
                      <div className="log-card" key={`${log.time}-${index}`}>
                        <span className={`tag ${log.isHealthy ? 'healthy' : 'risk'}`}>
                          {log.isHealthy ? 'Healthy' : 'At Risk'}
                        </span>
                        <div>{log.confidence}% confidence</div>
                        <div className="time">Scan #{index + 1} · {log.time}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="tight" id="how-it-works">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>From field image to actionable crop insight.</h2>
            </div>
            <div className="how-grid">
              {howItems.map((item, index) => (
                <div className="how-card" key={item.title}>
                  <div className="how-num">0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tight" id="benefits">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Why Crop Doctor</span>
              <h2>Built for fast crop monitoring and real decision support.</h2>
            </div>
            <div className="why-grid">
              {whyItems.map((item) => (
                <div className="why-card" key={item.title}>
                  <div className="why-icon">
                    {item.icon === 'leaf' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 3C13.1 3 9 7.2 9 13.3c0 4.9 3.6 7.7 10 7.7V3Z" />
                        <path d="M9 13.3C7 11.8 5 10 4 7.5c2.5 0 4.5 1 5 2.5" />
                      </svg>
                    )}
                    {item.icon === 'shield' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3 5 6v5c0 5 3.3 8.7 7 10 3.7-1.3 7-5 7-10V6l-7-3Z" />
                        <path d="m9.5 12 1.7 1.7 3.8-4.2" />
                      </svg>
                    )}
                    {item.icon === 'signal' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 18V9" />
                        <path d="M10 18V5" />
                        <path d="M16 18v-8" />
                        <path d="M22 18V3" />
                      </svg>
                    )}
                    {item.icon === 'spark' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 2 1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2Z" />
                      </svg>
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tight" id="team">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our team</span>
              <h2>NeuralNexus crop intelligence team.</h2>
            </div>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.name} className="team-card">
                  <div className="avatar">
                    {member.image ? <img className={`portrait-${member.name.toLowerCase()}`} src={member.image} alt={`${member.name} portrait`} /> : member.initials}
                  </div>
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-dept">{member.dept}</div>
                </div>
              ))}
            </div>

            <div className="section-head" style={{ marginTop: '64px', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.5rem' }}>Built With</h2>
            </div>
            <div className="built-grid">
              {builtWith.map((tech) => (
                <div key={tech} className="built-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
                    <circle cx="12" cy="13" r="3.2" />
                  </svg>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-mark">
          {/* Legacy embedded image removed from rendering. */}
          {/*
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAEgCAIAAAAWjH6DAAEAAElEQVR42rT9d7xkRdU1ju9dVed0uvnOnZwjw8yQo2QEQVFEEBETZsX8mLP4mPFBMWfFhAoqoiRBJAeBYQgDk3OeOzeH7j6nqvbvjxO6TuzG7/ub9/34XG7oPn1O1a691157LdRaAwARISJE/xEAAiAiEZnfR0QgIu8L8L5sfB3+sved1D/P+o75gqn/YteJABR8M/myqe8YvpH5Te/r5E1IXpX5h6nvGPuT2AvmXGT0Rbzb37iNzX6fYvcw9o5Nb1H4vuFfe78YvFrza865500vvpWPaT4sRNRam38Su9WpNwSjHyPlCo3fiC3jnOXUeH1z9RIBIGDeB0RAAopeU/BrBETk/QwRzStvemPNJ05EjLGstd18cXovEtnd/gphzddv9LXIiA1mmAi/xuDZGq+B8YBkLE3zLcwXjMSpzIdkXCo1X3OxV4svrBa2aNZSNl/fC6zJOJgVv9I+u7/P8y8pduWpv29+9mZRg8ydhegtEYpFjdjDynrN5O1NvYCcS0o9YLIicnLxhLGy8dOW3zrrZuYsp/jNMS4p/lLhsgdCL7gE/z/c82BsGooe0jk3PLYkyNi/TaNG+g1BpPhSD37iZRzJc5WMfdl4m+AF0HyNZg/ePMcaLxjE46yPkXsyoH/bIfKckLwrp5S3jH7G/HdskuZEt7p5koe/2cp56/1O8m+T72smOKkHYGp8Tw+F1FiRWRlTGIUSS8o7cFLO+dSULXYNqUmB+VPzR4yxrL1NRCz8yCnHeDzOQXTpmo/QW4IURBWGzPvPSGZt7Fvvxc3tnRPIMnJkbLy+9yQSVwfewWN8utQk179mxrLOWnNd5bxCagTxvxncgZRVFwaO1s9ZiAWfnL0RTXMJgGUUBXnhEBEoCBLe8wufpZk8xd7X22aJJDu5W1KLl9w4SObR13QbY8YSbxpWvGw8uSfDcBP7jn+FaXE6I4x66zOZFwAAMYZmwZL6SZMnPGRXjsnvx64r9gp5mTmRdxhi7G8R0Szzgt+MvEjjXSmeC+eu3uanWnj9iXuPiN53vahBFIAAKS+fdlXBUjfDRE7ikwzrseOn9WoleGrg56PBr7PU+xVJrlLz+YxzLxJZjHzXv630Aur22At6WIYXQSBMHIy7jRBLCAkA9AvJjXPywKwjvZV/ulnUSH3fMEiZz9vc5OmFSWK9hf8H/QUcyZkxmv+bL5NzM/KLuyTylXYMAiIyBslFjIiMsbwVEuTPscofAEhrSlucYViJLt3gYG/tqeSXZthIyfy7jI0dEIkaANhYz0Cx0w4Bw0vy7hcae9B8d+8uJXd+7OtI+dOshEzNCgGANBkgDGZmHP6J7eGmGc8Qg/UVWaQZm8RLLyktm0yeqJHQkHaWxvMuRKAXht41P9Oa1ZAtAp9Nc6ucMJqa+YeLJhWTDhEWaoY0h1l61nW+8CTp/w1KmlOkmPfKW7dptZhfTcU+WDId8xLSFnPnlGM8WRMZmxViiU80unsXGMtDI4AAIsvtITRtOCRx4pyMNf9FvBvl3UX/b4FYShCNYqIxkDMMcRSL1sGNC6DK+AfTjbMsHsaNUzGepfnbQGuKPvJI+AxexHypHEi89RWfBTG2ii1lpy1N88z814zlI5D/IRu5dKyvkP5xQlg2HdtLuzPJX0htIhhLyD+EETIxzuQJn3r34ji9efwYO7mxXLMy4twbHjtmUqDWaCpBARqSkhBi5LIbfxxrF4aRKBorX1Dq6qVvWZnICwj9jSaff9hg2I5NvU+YFjUxWIEY/TrZS0w/EIynm92pSkm8W4marbc/shppWQBkfkTPf6/8Tm1OpDfBl2QGESt6s+ChJCzn71iEF4w35eIR+S+CHjaF4eEPwPxqP+fFc+qdVtoHcYzJWH4pSVY25hEDqiIfP8jdE" alt="Crop Doctor logo" />
          */}
          <img className="footer-logo" src="/crop-doctor-react/favicon.svg" alt="Crop Doctor logo" />
          <p>Crop Doctor — Team NeuralNexus. Built for field diagnostics over local Wi-Fi.</p>
        </div>
      </footer>
    </>
  )
}

export default App
