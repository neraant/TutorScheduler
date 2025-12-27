import { QueryProvider } from './QueryProvider'
import { RouterProvider } from './RouterProvider'

export const Providers = () => {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  )
}
