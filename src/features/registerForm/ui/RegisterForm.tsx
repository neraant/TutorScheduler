import { useMutation } from '@tanstack/react-query';
import { Calendar, Eye, EyeClosed, GraduationCap, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { ROUTES } from '@/app/constants/routes';
import { UserRoles } from '@/entities/user';
import { RoleCard } from '@/shared/components/roleCard';
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import { signInWithEmailAndPassword } from '../api/signUpApi';
import { SUCCESS_SIGN_UP_MESSAGE } from '../constants';
import { type RegisterFormData, registerSchema } from '../model/shemas';

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRoles>(UserRoles.TUTOR);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      await signInWithEmailAndPassword({ ...data, role: selectedRole });
      navigate(ROUTES.LOGIN, { replace: true });
    },
    onSuccess: () => {
      toast.success(SUCCESS_SIGN_UP_MESSAGE);
    },
    onError: (error) => toast.error(error.message),
  });

  const resolver = useYupValidationResolver(registerSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver });

  const togglePasswordVisibillity = (type: 'password' | 'confirmPassword') => {
    if (type === 'password') {
      setIsPassword((prev) => !prev);
    } else {
      setIsConfirmPassword((prev) => !prev);
    }
  };

  const toggleRole = (newRole: UserRoles) => setSelectedRole(newRole);

  return (
    <div className="flex w-full max-w-125 flex-col gap-10">
      <div className="mr-auto flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mb-3 text-gray-900/50">Choose your role to get start</p>

        <div className="flex items-center gap-2">
          <RoleCard
            icon={Calendar}
            title={`I'm a Tutor`}
            description="Manage students and schedule lessons"
            isSelected={selectedRole === UserRoles.TUTOR}
            role={UserRoles.TUTOR}
            onSelect={toggleRole}
          />
          <RoleCard
            icon={GraduationCap}
            title={`I'm a Student`}
            description="Book lessons with your tutor"
            isSelected={selectedRole === UserRoles.STUDENT}
            role={UserRoles.STUDENT}
            onSelect={toggleRole}
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit((data) => mutateAsync(data))}
        className="flex w-full flex-col items-center gap-4"
      >
        <div className="grid w-full items-center">
          <Label htmlFor="fullName" className="mb-3">
            Full Name
          </Label>
          <Input
            {...register('fullName')}
            id="fullName"
            placeholder="Full Name"
            className={errors.fullName ? 'border-error' : ''}
          />
          {errors.fullName && (
            <p className="text-error mt-1 text-sm">{errors.fullName.message}</p>
          )}
        </div>

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
              onClick={() => togglePasswordVisibillity('password')}
              className="absolute right-0 pt-5"
            >
              {isPassword ? <Eye color="gray" /> : <EyeClosed color="gray" />}
            </Button>
          </div>

          {errors.password && (
            <p className="text-error mt-1 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="grid w-full items-center">
          <Label htmlFor="password" className="mb-3">
            Confirm Password
          </Label>

          <div className="relative">
            <Input
              {...register('confirmPassword')}
              id="confirmPassword"
              placeholder="Confirm Password"
              type={isConfirmPassword ? 'password' : 'text'}
              className={`pr-10 ${errors.password ? 'border-error' : ''}`}
            />

            <Button
              variant="link"
              type="button"
              onClick={() => togglePasswordVisibillity('confirmPassword')}
              className="absolute right-0 pt-5"
            >
              {isConfirmPassword ? (
                <Eye color="gray" />
              ) : (
                <EyeClosed color="gray" />
              )}
            </Button>
          </div>

          {errors.confirmPassword && (
            <p className="text-error mt-1 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          className="mt-3 flex w-full items-center gap-2"
          type="submit"
          disabled={isPending}
        >
          Create Account
          {isPending && <Loader2 className="animate-spin" />}
        </Button>
      </form>
    </div>
  );
};
