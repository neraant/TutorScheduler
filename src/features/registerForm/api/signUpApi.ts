import type { UserRoles } from '@/entities/user';
import { supabase } from '@/shared/config/createSupabaseClient';

import type { RegisterFormData } from '../model/shemas';

export const signInWithEmailAndPassword = async (
  values: RegisterFormData & { role: UserRoles }
) => {
  const { email, fullName, role, password } = values;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role,
      },
    },
  });

  if (error) throw error;

  return data;
};
