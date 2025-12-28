import * as yup from 'yup';

import { emailSchema, passwordSchema } from '@/shared/schemas/userSchemas';

export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
