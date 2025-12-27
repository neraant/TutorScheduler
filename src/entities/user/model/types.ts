import type { Tables } from '@/shared/types/supabase'

export type Profile = Tables<'profiles'>

export type User = Profile & {
  email: string
}
