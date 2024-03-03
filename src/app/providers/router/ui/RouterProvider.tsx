import { createRouter, RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'
import { Suspense } from 'react'

import { routeTree } from '../module/routesTree'

const router = createRouter({ routeTree })

export const RouterProvider = () => {
  return (
    <Suspense fallback={'loading...'}>
      <TanstackRouterProvider router={router} />
    </Suspense>
  )
}
