import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className="m-auto h-dvh w-dvw px-4">
      <Outlet />
    </div>
  )
}
