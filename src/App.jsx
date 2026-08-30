import { useEffect, useRef, useState } from 'react'
import { getGalleryImages, removeGalleryImage, saveGalleryImage } from './galleryStorage'
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
  { initials: 'M2', name: 'Member 2', role: 'Hardware', dept: 'ESP32-CAM Setup' },
  { initials: 'M3', name: 'Member 3', role: 'AI / ML', dept: 'Model Training' },
  { initials: 'M4', name: 'Member 4', role: 'Backend', dept: 'Server & API' },
  { initials: 'M5', name: 'Member 5', role: 'Research', dept: 'Dataset & Domain' },
]

const builtWith = ['ESP32-CAM', 'ReactJS', 'Generative AI', 'AI / ML', 'HTML/CSS/JS']
const MAX_IMAGE_SIZE = 10 * 1024 * 1024
const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const plantLabels = ['plant', 'leaf', 'tree', 'flower', 'vegetable', 'fruit', 'corn', 'broccoli', 'cauliflower', 'cucumber', 'zucchini', 'squash', 'pepper', 'potato', 'banana', 'pineapple', 'strawberry', 'orange', 'lemon', 'fig', 'vine', 'greenhouse', 'daisy', 'rose', 'sunflower']
const faceLabels = ['person', 'face', 'man', 'woman', 'boy', 'girl', 'head', 'human']

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
  const [scanCount, setScanCount] = useState(0)
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
  const [uploadError, setUploadError] = useState('')
  const [shutterDisabled, setShutterDisabled] = useState(true)
  const videoRef = useRef(null)
  const fileInputRef = useRef(null)
  const deviceCameraStream = useRef(null)
  const plantModel = useRef(null)
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
    ]).then(async ([tf, , , { load }]) => {
      await tf.setBackend('webgl').catch(() => tf.setBackend('cpu'))
      await tf.ready()
      return load({ version: 2, alpha: 1.0 })
    }).then((model) => {
      if (!cancelled) {
        plantModel.current = model
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
    }).catch(() => {})

    return () => {
      active = false
      objectUrls.forEach((url) => URL.revokeObjectURL(url))
    }
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
      const image = await saveGalleryImage(blob, metadata)
      const url = URL.createObjectURL(image.blob)
      galleryObjectUrls.current.push(url)
      setGallery((previous) => [{ ...image, url }, ...previous])
      setSelectedGalleryImageId(image.id)
    } catch {
      setHintText('image captured · browser storage unavailable')
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

  const getRecommendations = (isHealthy) => isHealthy
    ? [
        'Keep the current watering and light routine consistent.',
        'Check leaves regularly for early discoloration or pests.',
        'Keep airflow around the plant clear to reduce moisture buildup.',
      ]
    : [
        'Inspect both sides of the leaves for pests, spots, or yellowing.',
        'Check soil moisture and drainage before watering again.',
        'Remove severely damaged leaves and compare a new scan soon.',
        'Use an agronomist or soil test before applying treatment or fertilizer.',
      ]

  const getCropRecommendations = (isHealthy, plantName) => {
    const crop = plantName.toLowerCase()
    const recommendations = getRecommendations(isHealthy)

    if (crop.includes('tomato')) recommendations.push('For tomato plants, check leaf undersides for whitefly and keep foliage dry overnight.')
    if (crop.includes('corn')) recommendations.push('For corn, inspect the whorl and lower leaves for chewing damage and nutrient striping.')
    if (crop.includes('banana')) recommendations.push('For banana plants, check older leaves for fungal spots and keep the soil well drained.')
    return recommendations
  }

  const viewGalleryImage = (image) => {
    const isHealthy = image.status === 'healthy'
    setSelectedGalleryImageId(image.id)
    setFeedImage(image.url)
    setStampText(isHealthy ? 'Healthy' : 'At Risk')
    setStampKind(isHealthy ? 'healthy' : 'risk')
    setStampVisible(true)
    setReadoutLeft('saved scan result')
    setReadoutRight(`${image.confidence}% confidence`)
    setLastScan(`${image.confidence}%`)
    setRecommendations(getCropRecommendations(isHealthy, image.plantName || 'Plant / crop'))
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
    if (!plantModel.current) return { accepted: false, reason: classifierStatus === 'loading' ? 'plant checker is still loading' : 'plant checker unavailable' }

    const predictions = await plantModel.current.classify(canvas, 5)
    const hasFace = predictions.some(({ className, probability }) => {
      const label = className.toLowerCase()
      return probability >= 0.08 && faceLabels.some((term) => label.includes(term))
    })
    const hasPlant = predictions.some(({ className, probability }) => {
      const label = className.toLowerCase()
      return probability >= 0.12 && plantLabels.some((term) => label.includes(term))
    })
    const plantPrediction = predictions
      .filter(({ className, probability }) => probability >= 0.12 && plantLabels.some((term) => className.toLowerCase().includes(term)))
      .sort((first, second) => second.probability - first.probability)[0]

    if (hasFace) return { accepted: false, reason: 'person detected · frame rejected' }
    if (!hasPlant) return { accepted: false, reason: 'plant or crop not detected' }
    return { accepted: true, plantName: plantPrediction?.className || 'Plant / crop' }
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

    canvas.toBlob((blob) => {
      if (!blob) {
        rejectFrame('could not capture camera frame')
        return
      }
      setFeedImage(URL.createObjectURL(blob))
      setStampVisible(false)
      const result = estimatePlantHealth(canvas)
      setReadoutLeft('visual health screening complete')
      setReadoutRight('visual health score')
      setHintText('screening estimate only: confirm results with an agronomist or trained model')
      void addGalleryImage(blob, { source: 'device camera', plantName: validation.plantName, status: result.isHealthy ? 'healthy' : 'risk', confidence: result.confidence })
      showResult(result.isHealthy, result.confidence, validation.plantName)
    }, 'image/jpeg', 0.9)
  }

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
      setUploadError('Unsupported format. Choose a JPG, PNG, or WebP image.')
      rejectFrame('unsupported image format')
      setHintText('choose a JPG, PNG, or WebP image')
      return
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setUploadError('Image is too large. Choose a file smaller than 10 MB.')
      rejectFrame('image is too large')
      setHintText('choose an image smaller than 10 MB')
      return
    }
    if (scanInProgress.current) return

    setUploadError('')
    scanInProgress.current = true
    setShutterDisabled(true)
    setStampVisible(false)
    setReadoutLeft('checking selected image…')
    setReadoutRight('AI validation')
    const previewUrl = URL.createObjectURL(file)
    const image = new Image()
    image.onload = async () => {
      const scale = Math.min(1, 1280 / Math.max(image.naturalWidth, image.naturalHeight))
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(image.naturalWidth * scale)
      canvas.height = Math.round(image.naturalHeight * scale)
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height)

      try {
        const validation = await validatePlantFrame(canvas)
        if (!validation.accepted) {
          URL.revokeObjectURL(previewUrl)
          setUploadError(validation.reason === 'plant or crop not detected'
            ? 'Only clear plant or crop images are supported.'
            : validation.reason)
          rejectFrame(validation.reason)
          return
        }

        const result = estimatePlantHealth(canvas)
        galleryObjectUrls.current.push(previewUrl)
        setFeedImage(previewUrl)
        setReadoutLeft('visual health screening complete')
        setReadoutRight('local estimate')
        setHintText('for research use: confirm results with an agronomist or trained model')
        void addGalleryImage(file, { source: 'device gallery', plantName: validation.plantName, status: result.isHealthy ? 'healthy' : 'risk', confidence: result.confidence })
        showResult(result.isHealthy, result.confidence, validation.plantName)
      } catch {
        URL.revokeObjectURL(previewUrl)
        rejectFrame('plant checker unavailable')
      }
    }
    image.onerror = () => {
      URL.revokeObjectURL(previewUrl)
      rejectFrame('could not read selected image')
    }
    image.src = previewUrl
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

  const showResult = (isHealthy, confidence, plantName = 'Plant / crop') => {
    setTimeout(() => {
      scanInProgress.current = false
      setStampText(isHealthy ? 'Healthy' : 'At Risk')
      setStampKind(isHealthy ? 'healthy' : 'risk')
      setStampVisible(true)
      setReadoutLeft('diagnosis complete')
      setReadoutRight(`${confidence}% confidence`)
      setShutterDisabled(false)
      setLastScan(`${confidence}%`)
      setScanCount((count) => count + 1)
      setRecommendations(getCropRecommendations(isHealthy, plantName))
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

  const selectedPlantName = gallery.find((image) => image.id === selectedGalleryImageId)?.plantName

  return (
    <>
      <div className="veins" />

      <nav>
        <div className="nav-inner wrap">
          <div className="brand">
            <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80" alt="Crop Doctor" />
            <span>Crop Doctor</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}><a href={`#${navTargets[item]}`}>{item}</a></li>
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
                <div className="readout">
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
                  <input ref={fileInputRef} className="file-input" type="file" accept="image/*" onChange={handleImageSelect} />
                  <button type="button" className="btn btn-upload" onClick={() => fileInputRef.current?.click()}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />
                    </svg>
                    Choose plant image
                  </button>
                  {uploadError && <div className="upload-error" role="alert">{uploadError}</div>}
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

              <div className="gallery-box">
                <div className="log-head">Plant gallery <span>{gallery.length} saved</span></div>
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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAEgCAIAAAAWjH6DAAEAAElEQVR42rT9d7xkRdU1ju9dVed0uvnOnZwjw8yQo2QEQVFEEBETZsX8mLP4mPFBMWfFhAoqoiRBJAeBYQgDk3OeOzeH7j6nqvbvjxO6TuzG7/ub9/34XG7oPn1O1a691157LdRaAwARISJE/xEAAiAiEZnfR0QgIu8L8L5sfB3+sved1D/P+o75gqn/YteJABR8M/myqe8YvpH5Te/r5E1IXpX5h6nvGPuT2AvmXGT0Rbzb37iNzX6fYvcw9o5Nb1H4vuFfe78YvFrza865500vvpWPaT4sRNRam38Su9WpNwSjHyPlCo3fiC3jnOXUeH1z9RIBIGDeB0RAAopeU/BrBETk/QwRzStvemPNJ05EjLGstd18cXovEtnd/gphzddv9LXIiA1mmAi/xuDZGq+B8YBkLE3zLcwXjMSpzIdkXCo1X3OxV4svrBa2aNZSNl/fC6zJOJgVv9I+u7/P8y8pduWpv29+9mZRg8ydhegtEYpFjdjDynrN5O1NvYCcS0o9YLIicnLxhLGy8dOW3zrrZuYsp/jNMS4p/lLhsgdCL7gE/z/c82BsGooe0jk3PLYkyNi/TaNG+g1BpPhSD37iZRzJc5WMfdl4m+AF0HyNZg/ePMcaLxjE46yPkXsyoH/bIfKckLwrp5S3jH7G/HdskuZEt7p5koe/2cp56/1O8m+T72smOKkHYGp8Tw+F1FiRWRlTGIUSS8o7cFLO+dSULXYNqUmB+VPzR4yxrL1NRCz8yCnHeDzOQXTpmo/QW4IURBWGzPvPSGZt7Fvvxc3tnRPIMnJkbLy+9yQSVwfewWN8utQk179mxrLOWnNd5bxCagTxvxncgZRVFwaO1s9ZiAWfnL0RTXMJgGUUBXnhEBEoCBLe8wufpZk8xd7X22aJJDu5W1KLl9w4SObR13QbY8YSbxpWvGw8uSfDcBP7jn+FaXE6I4x66zOZFwAAMYZmwZL6SZMnPGRXjsnvx64r9gp5mTmRdxhi7G8R0Szzgt+MvEjjXSmeC+eu3uanWnj9iXuPiN53vahBFIAAKS+fdlXBUjfDRE7ikwzrseOn9WoleGrg56PBr7PU+xVJrlLz+YxzLxJZjHzXv630Aur22At6WIYXQSBMHIy7jRBLCAkA9AvJjXPywKwjvZV/ulnUSH3fMEiZz9vc5OmFSWK9hf8H/QUcyZkxmv+bL5NzM/KLuyTylXYMAiIyBslFjIiMsbwVEuTPscofAEhrSlucYViJLt3gYG/tqeSXZthIyfy7jI0dEIkaANhYz0Cx0w4Bw0vy7hcae9B8d+8uJXd+7OtI+dOshEzNCgGANBkgDGZmHP6J7eGmGc8Qg/UVWaQZm8RLLyktm0yeqJHQkHaWxvMuRKAXht41P9Oa1ZAtAp9Nc6ucMJqa+YeLJhWTDhEWaoY0h1l61nW+8CTp/w1KmlOkmPfKW7dptZhfTcU+WDId8xLSFnPnlGM8WRMZmxViiU80unsXGMtDI4AAIsvtITRtOCRx4pyMNf9FvBvl3UX/b4FYShCNYqIxkDMMcRSL1sGNC6DK+AfTjbMsHsaNUzGepfnbQGuKPvJI+AxexHypHEi89RWfBTG2ii1lpy1N88z814zlI5D/IRu5dKyvkP5xQlg2HdtLuzPJX0htIhhLyD+EETIxzuQJn3r34ji9efwYO7mxXLMy4twbHjtmUqDWaCpBARqSkhBi5LIbfxxrF4aRKBorX1Dq6qVvWZnICwj9jSaff9hg2I5NvU+YFjUxWIEY/TrZS0w/EIynm92pSkm8W4marbc/shppWQBkfkTPf6/8Tm1OpDfBl2QGESt6s+ChJCzn71iEF4w35eIR+S+CHjaF4eEPwPxqP+fFc+qdVtoHcYzJWH4pSVY25hEDqiIfP8jdE" alt="Crop Doctor logo" />
          <img className="footer-logo" src="/crop-doctor-react/favicon.svg" alt="Crop Doctor logo" />
          <p>Crop Doctor — Team NeuralNexus. Built for field diagnostics over local Wi-Fi.</p>
        </div>
      </footer>
    </>
  )
}

export default App
