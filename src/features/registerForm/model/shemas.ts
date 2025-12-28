import * as yup from 'yup';

import {
  getRequiredMessage,
  PASSWORDS_DONT_MATCH,
} from '@/shared/constants/validation';
import { emailSchema, passwordSchema } from '@/shared/schemas/userSchemas';

export const registerSchema = yup.object({
  email: emailSchema,
  fullName: yup.string().required(getRequiredMessage('Fullname')),
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], PASSWORDS_DONT_MATCH)
    .required(getRequiredMessage('Confirm password')),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
