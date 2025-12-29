import { ERROR_MESSAGES } from '../constants/errors';

export const getErrorMessage = (error: unknown): string => {
  if (!error) return 'Unknown error occurred';

  if (typeof error === 'object' && 'message' in error) {
    const message = (error as { message: string }).message;

    if (ERROR_MESSAGES[message]) {
      return ERROR_MESSAGES[message];
    }

    for (const [key, value] of Object.entries(ERROR_MESSAGES)) {
      if (message.includes(key)) {
        return value;
      }
    }

    return message;
  }

  if (typeof error === 'string') {
    return ERROR_MESSAGES[error] || error;
  }

  return 'Something went wrong';
};
