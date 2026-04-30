import "./App.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Shop from './features/shop/Shop'

const router = createBrowserRouter([
  {
    index: true,
    element: <App />
  },
  {
    path: "/shop",
    element: <Shop />
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
