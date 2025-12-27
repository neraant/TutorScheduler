import { createBrowserRouter } from 'react-router'
import { RouterProvider as ReactRouterProvider } from 'react-router/dom'

import { UserRoles } from '@/entities/user'
import { DashboardPage } from '@/pages/dashboard'
import { LoginPage } from '@/pages/login'
import { MyLessonsPage } from '@/pages/myLessons'
import { RegisterPage } from '@/pages/register'
import { MainLayout } from '@/shared/layouts/MainLayout'

import { ProtectedRoute } from '../components/ProtectedRoute'

const router = createBrowserRouter([
  // general
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },

  {
    element: <MainLayout />,
    children: [
      // tutor
      {
        element: <ProtectedRoute allowedRoles={[UserRoles.TUTOR]} />,
        children: [{ path: '/dashboard', element: <DashboardPage /> }],
      },

      // student
      {
        element: <ProtectedRoute allowedRoles={[UserRoles.STUDENT]} />,
        children: [{ path: '/student/lessons', element: <MyLessonsPage /> }],
      },
    ],
  },
])

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />
}
