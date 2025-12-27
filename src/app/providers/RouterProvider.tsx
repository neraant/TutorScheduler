import { createBrowserRouter } from 'react-router'
import { RouterProvider as ReactRouterProvider } from 'react-router/dom'

import { UserRoles } from '@/entities/user'
import { DashboardPage } from '@/pages/dashboard'
import { ErrorPage } from '@/pages/error'
import { LoginPage } from '@/pages/login'
import { MyLessonsPage } from '@/pages/myLessons'
import { NotFoundPage } from '@/pages/notFound'
import { RegisterPage } from '@/pages/register'
import { MainLayout } from '@/shared/layouts/MainLayout'

import { ProtectedRoute } from '../components/ProtectedRoute'

const router = createBrowserRouter([
  // error
  { errorElement: <ErrorPage /> },

  // general
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },

  {
    element: <MainLayout />,
    children: [
      // base route
      {
        path: '/',
        element: <ProtectedRoute />,
      },

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

  // not found
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />
}
