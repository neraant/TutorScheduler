export const getRequiredMessage = (name: string) => {
  return `${name} is requred`;
};

export const getInvalidFormatMessage = (name: string) => {
  return `Invalid ${name} format`;
};

// Password
export const PASSWORDS_DONT_MATCH = `Passwords don't match`;
export const PASSWORD_MINIMUM_LEN_MESSAGE = 'Minimum 8 characters';
export const PASSWORD_MINIMUM_LEN = 8;
export const PASSWORD_LETTERS_REGEX = /[A-Z]/;
export const PASSWORD_NUMBERS_REGEX = /[0-9]/;
