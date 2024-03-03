import { createRootRoute } from '@tanstack/react-router'

import { getRoutesByRoot } from './routes'

export const rootRoute = createRootRoute()

export const routeTree = getRoutesByRoot(rootRoute)
