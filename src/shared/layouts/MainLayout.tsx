import type { ReactNode } from 'react'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="m-auto h-dvh w-dvw px-4">{children}</div>
}
