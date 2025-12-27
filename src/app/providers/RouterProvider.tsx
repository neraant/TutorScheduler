import { createBrowserRouter } from 'react-router'
import { RouterProvider as ReactRouterProvider } from 'react-router/dom'

import { MainLayout } from '@/shared/layouts/MainLayout'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <div>Hello World</div> },
      { path: '/bye', element: <div>Bye world</div> },
    ],
  },
])

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />
}
