import { useMutation } from '@tanstack/react-query';
import { Eye, EyeClosed, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { ROUTES } from '@/app/constants/routes';
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver';
import { getErrorMessage } from '@/shared/lib/getErrorMessage';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import { signInWithEmailAndPassword } from '../api/signInApi';
import { SUCCESS_SIGN_IN_MESSAGE } from '../constants';
import { type LoginFormData, loginSchema } from '../model/shemas';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: LoginFormData) => {
      await signInWithEmailAndPassword(data);
      navigate(ROUTES.MAIN, { replace: true });
    },
    onSuccess: () => {
      toast.success(SUCCESS_SIGN_IN_MESSAGE);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const resolver = useYupValidationResolver(loginSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver });

  const togglePasswordVisibillity = () => setIsPassword((prev) => !prev);

  return (
    <>
      <div className="mr-auto flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-900/50">Sign in to your account</p>
      </div>

      <form
        onSubmit={handleSubmit((data) => mutateAsync(data))}
        className="flex w-full flex-col items-center gap-4"
      >
        <div className="grid w-full items-center">
          <Label htmlFor="email" className="mb-3">
            Email
          </Label>
          <Input
            {...register('email')}
            id="email"
            placeholder="Email"
            className={errors.email ? 'border-error' : ''}
          />
          {errors.email && (
            <p className="text-error mt-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="grid w-full items-center">
          <Label htmlFor="password" className="mb-3">
            Password
          </Label>

          <div className="relative">
            <Input
              {...register('password')}
              id="password"
              placeholder="Password"
              type={isPassword ? 'password' : 'text'}
              className={`pr-10 ${errors.password ? 'border-error' : ''}`}
            />

            <Button
              variant="link"
              type="button"
              onClick={togglePasswordVisibillity}
              className="absolute right-0 pt-5.5"
            >
              {isPassword ? <Eye color="gray" /> : <EyeClosed color="gray" />}
            </Button>
          </div>

          {errors.password && (
            <p className="text-error mt-1 text-sm">{errors.password.message}</p>
          )}

          <NavLink
            className="text-primary mt-2 ml-auto p-0 text-sm"
            to={ROUTES.LOGIN}
          >
            Forgot password?
          </NavLink>
        </div>

        <Button
          className="mt-3 flex w-full items-center gap-2"
          type="submit"
          disabled={isPending}
        >
          Sign In
          {isPending && <Loader2 className="animate-spin" />}
        </Button>
      </form>
    </>
  );
};
