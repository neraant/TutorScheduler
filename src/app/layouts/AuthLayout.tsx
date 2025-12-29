import { NavLink, Outlet, useLocation } from 'react-router';

import { Logo } from '@/shared/components/logo';
import { cn } from '@/shared/lib/utils';

import { ROUTES } from '../constants/routes';

export const AuthLayout = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === ROUTES.LOGIN;

  return (
    <div className="flex h-full w-full flex-1">
      <div className="to-primary hidden flex-1 flex-col items-center justify-center bg-linear-to-br from-blue-400 p-2 lg:flex">
        <Logo />

        <div className="mt-auto mb-8 ml-8 flex flex-col gap-2 self-start">
          <p className="max-w-95 text-3xl font-bold text-white">
            Manage your students and schedule with ease
          </p>

          <p className="max-w-75 text-white/70">
            Join thousands of tutors and students streamlining their learning
            journey.
          </p>
        </div>
      </div>

      <Logo
        containerClassName="flex lg:hidden absolute m-0 top-4 sm:left-4 sm:translate-x-0 left-[50%] translate-x-[-50%]"
        iconClassName="text-primary"
        iconContainerClassName="bg-primary/10"
        textClassName="text-primary"
      />

      <div className="mt-18 flex w-full flex-1/8 flex-col items-center md:justify-center lg:mt-0">
        <div className="mb-8 flex w-full max-w-130 p-4">
          <NavLink
            to={ROUTES.LOGIN}
            className={({ isActive }) =>
              cn(
                'flex-1 border-b-2 px-4 py-3 text-center',
                isActive
                  ? 'border-primary text-primary font-semibold'
                  : 'text-muted-foreground border-muted'
              )
            }
          >
            Sign in
          </NavLink>
          <NavLink
            to={ROUTES.REGISTER}
            className={({ isActive }) =>
              cn(
                'flex-1 border-b-2 px-4 py-3 text-center',
                isActive
                  ? 'border-primary text-primary font-semibold'
                  : 'text-muted-foreground border-muted'
              )
            }
          >
            Sign up
          </NavLink>
        </div>

        <div
          key={pathname}
          className={cn(
            'flex w-full max-w-130 flex-col gap-10 p-4',
            isLogin ? 'animate-slide-left' : 'animate-slide-right'
          )}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
