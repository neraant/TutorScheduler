import * as yup from 'yup';

import {
  getInvalidFormatMessage,
  getRequiredMessage,
  PASSWORD_LETTERS_REGEX,
  PASSWORD_MINIMUM_LEN,
  PASSWORD_MINIMUM_LEN_MESSAGE,
  PASSWORD_NUMBERS_REGEX,
} from '../constants/validation';

export const emailSchema = yup
  .string()
  .email(getInvalidFormatMessage('email'))
  .required(getRequiredMessage('Email'));

export const passwordSchema = yup
  .string()
  .min(PASSWORD_MINIMUM_LEN, PASSWORD_MINIMUM_LEN_MESSAGE)
  .matches(PASSWORD_LETTERS_REGEX, 'Include uppercase letter')
  .matches(PASSWORD_NUMBERS_REGEX, 'Include number')
  .required(getRequiredMessage('Password'));
