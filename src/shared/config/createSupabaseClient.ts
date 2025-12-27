import { createClient } from '@supabase/supabase-js'

import type { Database } from '../types/supabase'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_PUBLISH_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const createSupabaseClient = () => {
  return createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISH_KEY)
}
