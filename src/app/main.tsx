import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RootProvider } from '#app/providers/root'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>,
)
