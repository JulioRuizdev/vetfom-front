import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import { QuiscoProvider } from './context/QuiscoProvider'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuiscoProvider>
      <RouterProvider router={router} />
    </QuiscoProvider>
  </StrictMode>,
)
