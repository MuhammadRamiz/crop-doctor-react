import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeAnalytics } from './analytics.js'
import './index.css'
import App from './App.jsx'

initializeAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
