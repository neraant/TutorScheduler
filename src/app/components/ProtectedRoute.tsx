import { Navigate, Outlet } from 'react-router'

import { useProfile, type UserRoles } from '@/entities/user'
import { useAuth } from '@/shared/hooks/useAuth'

interface ProtectedRouteProps {
  allowedRoles?: UserRoles[]
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user, isLoading: authLoading } = useAuth()
  const { data: profile, isLoading: isProfileLoading } = useProfile()

  if (authLoading || isProfileLoading) {
    return <div>Loading...</div>
  }

  if (!user) return <Navigate to="/login" replace />

  if (
    allowedRoles &&
    profile &&
    !allowedRoles.includes(profile.role as UserRoles)
  ) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
