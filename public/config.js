// Runtime configuration for Supabase
// This file is loaded at runtime and can be configured without rebuilding
// CONFIGURED WITH YOUR SUPABASE CREDENTIALS:

window.SUPABASE_CONFIG = {
  url: 'https://hrdqfmrgwouuxlcwmgmp.supabase.co',
  key: 'sb_publishable_jYBmSGghWt0LBcYpjJde9w_vHzehQaU'
}

// Don't modify below this line
if (window.SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL_HERE' || 
    window.SUPABASE_CONFIG.key === 'YOUR_SUPABASE_ANON_KEY_HERE') {
  console.warn('⚠️ Please configure your Supabase credentials in public/config.js')
  console.warn('⚠️ Without configuration, the app will use local storage only')
}
