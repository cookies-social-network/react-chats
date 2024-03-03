import { AnyRootRoute, AnyRoute, createRoute, RouteOptions} from '@tanstack/react-router'
import { lazy } from 'react'

type Route = {  //тип массива нужно вынести в отдельную либу
  path: string,
  subRoutes?: Route[]
} & Partial<RouteOptions>

export const routes: Route[] = [
  {
    path: '/test',
    component: lazy(() => import('#pages/PChats')),
    subRoutes: [{
      path: '/test2',
      component: () => 'test2',
      subRoutes: [{
        path: '/test3',
        component: () => 'test3',
      }]
    }]
  }
]

const getRoutes = (routes: Route[], root: AnyRoute): AnyRootRoute => { // Функцию нужно вынести в отдельный npm пакет с утилитами, т.к в дальнейшем она будет использоваться во всех микрофронтах
  root.addChildren(routes.map(route => {
    const r = createRoute({
      getParentRoute: () => root,
      ...route
    })

    if(route.subRoutes){
      getRoutes(route.subRoutes, r)
    }

    return r
  }))
  return root
}

export const getRoutesByRoot = getRoutes.bind(null, routes)
