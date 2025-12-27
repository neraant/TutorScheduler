import { Button } from '@/shared/ui/button'

import { MainLayout } from '../shared/layouts/MainLayout'
import { Providers } from './Providers'

function App() {
  return (
    <Providers>
      <MainLayout>
        <Button>Click me!</Button>
      </MainLayout>
    </Providers>
  )
}

export default App
