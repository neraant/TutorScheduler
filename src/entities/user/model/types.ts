import type { Tables } from '@/shared/types/supabase'

export const enum UserRoles {
  TUTOR = 'tutor',
  STUDENT = 'student',
}

export type Profile = Tables<'profiles'>

export type User = Profile & {
  email: string
}
