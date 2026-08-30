import { createClient } from '@supabase/supabase-js'

const getSupabaseConfig = () => {
  const envUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
  const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim()

  if (envUrl && envKey && !envUrl.includes('YOUR_') && !envKey.includes('YOUR_')) {
    return { url: envUrl, key: envKey, source: 'environment' }
  }

  const runtimeConfig = window.SUPABASE_CONFIG ?? {}
  const runtimeUrl = runtimeConfig.url?.trim()
  const runtimeKey = runtimeConfig.key?.trim()

  if (runtimeUrl && runtimeKey && !runtimeUrl.includes('YOUR_') && !runtimeKey.includes('YOUR_')) {
    return { url: runtimeUrl, key: runtimeKey, source: 'runtime' }
  }

  return { url: null, key: null, source: 'none' }
}

const config = getSupabaseConfig()

export const supabase = config.url && config.key
  ? createClient(config.url, config.key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null

export const supabaseConfig = config
