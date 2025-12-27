import { useEffect } from 'react'

import { createSupabaseClient } from '@/shared/config/createSupabaseClient'
import { Button } from '@/shared/ui/button'

import { MainLayout } from './layouts/MainLayout'

function App() {
  useEffect(() => {
    const getLessons = async () => {
      const supa = await createSupabaseClient()
      console.log(supa)
    }

    getLessons()
  }, [])

  return (
    <MainLayout>
      <Button>Click me!</Button>
    </MainLayout>
  )
}

export default App
