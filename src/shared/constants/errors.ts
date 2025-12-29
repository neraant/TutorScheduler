export const ERROR_MESSAGES: Record<string, string> = {
  // Auth ошибки
  'Invalid login credentials': 'Invalid email or password',
  'Email not confirmed': 'Please confirm your email first',
  'User already registered': 'Account with this email already exists',
  'Password should be at least 6 characters':
    'Password must be at least 6 characters',
  'Email rate limit exceeded': 'Too many attempts. Try again later',
  'For security purposes, you can only request this once every 60 seconds':
    'Please wait 60 seconds before trying again',

  // Database ошибки
  'duplicate key value violates unique constraint':
    'This record already exists',
  'violates foreign key constraint': 'Related record not found',
  'new row violates row-level security policy':
    "You don't have permission for this action",

  // Network
  'Failed to fetch': 'Network error. Check your connection',
  FetchError: 'Network error. Check your connection',
};
