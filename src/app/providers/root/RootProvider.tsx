import { RouterProvider } from '../router'

export const RootProvider = () => {
  return (import.meta.env as ImportMetaEnv).DEV ? <RouterProvider /> : null
}
