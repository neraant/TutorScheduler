import { useQuery } from '@tanstack/react-query'

import { supabase } from '@/shared/config/createSupabaseClient'
import { useAuth } from '@/shared/hooks/useAuth'

import { PROFILE_KEY } from '../constants/queryKeys'
import type { Profile } from '../model/types'

export const useProfile = () => {
  const { user } = useAuth()

  return useQuery({
    queryKey: [PROFILE_KEY, user?.id],
    queryFn: async (): Promise<Profile | null> => {
      if (!user) return null

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        throw error
      }

      return data
    },
  })
}
