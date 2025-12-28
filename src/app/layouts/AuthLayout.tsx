import { Clock } from 'lucide-react';
import { NavLink, Outlet } from 'react-router';

import { cn } from '@/shared/lib/utils';

import { ROUTES } from '../constants/routes';

export const AuthLayout = () => {
  return (
    <div className="flex h-full w-full">
      <div className="to-primary flex flex-1 flex-col items-center justify-center bg-linear-to-br from-blue-400 p-2">
        <div className="mt-8 ml-8 flex items-center gap-2 self-start">
          <div className="flex items-center justify-center rounded-md bg-white/30 p-2">
            <Clock color="white" />
          </div>

          <h2 className="text-center text-xl leading-normal font-bold text-white">
            TutorSchedule
          </h2>
        </div>

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

      <div className="flex w-full flex-1/8 flex-col items-center justify-center">
        <div className="mb-8 flex w-full max-w-125">
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

        <Outlet />
      </div>
    </div>
  );
};
