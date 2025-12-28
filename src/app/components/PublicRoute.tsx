import { Navigate, Outlet } from 'react-router';

import { ROUTES } from '@/app/constants/routes';
import { useProfile } from '@/entities/user';
import { useAuth } from '@/shared/hooks/useAuth';

export const PublicRoute = () => {
  const { user, isLoading: authLoading } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile();

  if (authLoading || profileLoading) return <div>Loading...</div>;

  if (user && profile) {
    const redirectTo =
      profile.role === 'tutor' ? ROUTES.DASHBOARD : ROUTES.STUDENT.LESSONS;
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};
