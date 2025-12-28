import { createBrowserRouter } from 'react-router';
import { RouterProvider as ReactRouterProvider } from 'react-router/dom';

import { UserRoles } from '@/entities/user';
import { DashboardPage } from '@/pages/dashboard';
import { ErrorPage } from '@/pages/error';
import { LoginPage } from '@/pages/login';
import { MyLessonsPage } from '@/pages/myLessons';
import { NotFoundPage } from '@/pages/notFound';
import { RegisterPage } from '@/pages/register';
import { MainLayout } from '@/shared/layouts/MainLayout';

import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';
import { ROUTES } from '../constants/routes';
import { AuthLayout } from '../layouts/AuthLayout';

const router = createBrowserRouter([
  // error
  { errorElement: <ErrorPage /> },

  // general
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
        ],
      },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      // base route
      {
        element: <PublicRoute />,
        children: [
          {
            path: ROUTES.MAIN,
            element: <ProtectedRoute />,
          },
        ],
      },

      // tutor
      {
        element: <ProtectedRoute allowedRoles={[UserRoles.TUTOR]} />,
        children: [{ path: ROUTES.DASHBOARD, element: <DashboardPage /> }],
      },

      // student
      {
        element: <ProtectedRoute allowedRoles={[UserRoles.STUDENT]} />,
        children: [
          { path: ROUTES.STUDENT.LESSONS, element: <MyLessonsPage /> },
        ],
      },
    ],
  },

  // not found
  {
    path: ROUTES.OTHERS,
    element: <NotFoundPage />,
  },
]);

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
