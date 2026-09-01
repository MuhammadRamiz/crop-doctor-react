/**
 * Application constants
 */

// Navigation
export const NAV_ITEMS = ['Overview', 'How it works', 'Benefits', 'Team', 'Contact']

export const NAV_TARGETS = {
  Overview: 'overview',
  'How it works': 'how-it-works',
  Benefits: 'benefits',
  Team: 'team',
  Contact: 'contact',
}

// Badge Items
export const BADGE_ITEMS = ['AI crop grader', 'Plant stress detection', 'Field-ready scan']

// How It Works
export const HOW_ITEMS = [
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

// Why Choose Crop Doctor
export const WHY_ITEMS = [
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

// Image constraints
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024 // 10 MB
export const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

// Plant detection labels
export const PLANT_LABELS = [
  'plant',
  'leaf',
  'tree',
  'flower',
  'vegetable',
  'fruit',
  'corn',
  'broccoli',
  'cauliflower',
  'cucumber',
  'zucchini',
  'squash',
  'pepper',
  'potato',
  'banana',
  'pineapple',
  'strawberry',
  'orange',
  'lemon',
  'fig',
  'vine',
  'greenhouse',
  'daisy',
  'rose',
  'sunflower',
  'cactus',
  'succulent',
  'aloe',
  'agave',
  'jade',
  'fern',
  'palm',
  'orchid',
  'monstera',
  'bamboo',
  'ivy',
  'spider plant',
  'prickly pear',
  'bonsai',
  'herb',
  'bush',
  'shrub',
  'tree trunk',
  'grass',
  'grape',
  'olive',
  'pepper plant',
  'tomato',
  'tomato plant',
  'rose bush',
  'cane',
  'berry',
]

export const GENERIC_PLANT_LABELS = [
  'plant',
  'leaf',
  'tree',
  'flower',
  'vegetable',
  'fruit',
  'hip',
  'pot',
  'flowerpot',
  'vine',
  'greenhouse',
  'shrub',
  'bush',
  'bushes',
  'grass',
  'grass family',
]

// Plant name recognition mappings
export const RECOGNIZED_PLANT_NAMES = [
  {
    keywords: ['cactus', 'succulent', 'echeveria', 'prickly pear', 'aloe', 'agave', 'jade'],
    label: 'Cactus',
  },
  {
    keywords: ['palm', 'palm tree', 'date palm', 'coconut palm'],
    label: 'Palm tree',
  },
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
  {
    keywords: ['tree', 'pine', 'oak', 'birch', 'maple', 'spruce'],
    label: 'Tree',
  },
]

// Health thresholds
export const HEALTH_SCORE_THRESHOLDS = {
  MIN: 5,
  MAX: 98,
  HEALTHY: 55,
}

// Disease detection thresholds
export const DISEASE_THRESHOLDS = {
  FUNGAL: 0.05,
  BACTERIAL: 0.05,
  PEST: 0.08,
  NUTRIENT: 0.1,
}

// Plant color indicators
export const COLOR_INDICATORS = {
  GREEN: {
    minGreen: 1.05,
    minBlueRatio: 1.05,
    minValue: 45,
  },
  STRESS: {
    redBlueRatio: 1.35,
    greenBlueRatio: 1.15,
    redGreenRatio: 0.75,
  },
  VEGETATION: {
    greenRedRatio: 1.03,
    greenBlueRatio: 1.03,
    minGreen: 40,
    minRatio: 0.08,
  },
}

// Model configuration
export const MODEL_CONFIG = {
  MOBILENET: {
    version: 2,
    alpha: 1.0,
  },
  MIN_PROBABILITY: 0.12,
  FACE_CONFIDENCE_THRESHOLD: 0.9,
  FALLBACK_MIN_PROBABILITY: 0.2,
}

// Team members
export const TEAM_MEMBERS = [
  {
    initials: 'D',
    name: 'Danish',
    role: 'Team Leader',
    dept: 'AI / Backend',
    imageRequired: true,
  },
  {
    initials: 'R',
    name: 'Ramiz',
    role: 'Frontend',
    dept: 'ReactJS and AI/AML',
    imageRequired: true,
  },
  {
    initials: 'S',
    name: 'Saquib',
    role: 'Hardware',
    dept: 'ESP32-CAM Setup',
    imageRequired: true,
  },
  {
    initials: 'A',
    name: 'Aadil',
    role: 'AI / ML',
    dept: 'Model Training',
    imageRequired: true,
  },
  {
    initials: 'Z',
    name: 'Zohra',
    role: 'Backend',
    dept: 'Server & API',
    imageRequired: false,
  },
  {
    initials: 'F',
    name: 'Faiza',
    role: 'Research',
    dept: 'Dataset & Domain',
    imageRequired: false,
  },
]

// Technologies
export const BUILT_WITH = ['ESP32-CAM', 'ReactJS', 'Generative AI', 'AI / ML', 'HTML/CSS/JS']

// Analytics events
export const ANALYTICS_EVENTS = {
  PLANT_SCAN_COMPLETED: 'plant_scan_completed',
}

// UI timeouts (in milliseconds)
export const TIMEOUTS = {
  FRAME_SCAN: 1300,
  RESULT_DISPLAY: 1000,
  GALLERY_HINT: 3000,
  FETCH_TIMEOUT: 5000,
}

// Gallery configuration
export const GALLERY_CONFIG = {
  DATABASE_NAME: 'crop-doctor-gallery',
  STORE_NAME: 'images',
  DATABASE_VERSION: 1,
  BUCKET_NAME: 'plant-images',
}

// Image processing
export const IMAGE_PROCESSING = {
  MAX_DIMENSION: 1280,
  JPEG_QUALITY: 0.9,
  PIXEL_STEP: 16,
  MIN_BRIGHTNESS: 45,
  VEGETATION_MIN_BRIGHTNESS: 60,
}

// Supabase table name
export const SUPABASE_TABLE = 'scans'
