import { supabase } from '@/shared/config/createSupabaseClient';

import type { LoginFormData } from '../model/shemas';

export const signInWithEmailAndPassword = async (values: LoginFormData) => {
  const { email, password } = values;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
};
