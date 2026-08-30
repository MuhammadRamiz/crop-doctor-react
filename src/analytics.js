const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

export const initializeAnalytics = () => {
  if (!measurementId || typeof document === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args) => window.dataLayer.push(args)
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export const trackEvent = (name, parameters = {}) => {
  if (typeof window.gtag === 'function') window.gtag('event', name, parameters)
}
