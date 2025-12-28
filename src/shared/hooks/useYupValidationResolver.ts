import { useCallback } from 'react';
import type { ObjectSchema, ValidationError } from 'yup';

export const useYupValidationResolver = <T extends Record<string, unknown>>(
  validationSchema: ObjectSchema<T>
) =>
  useCallback(
    async (data: T) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (e) {
        const errors = e as ValidationError;

        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path as string]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
