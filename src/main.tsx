import "./App.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Shop from './features/shop/Shop'
import Login from "./features/auth/Login"
import AuthAdmin from "./features/auth/AuthAdmin"
import Dashboard from "./features/auth/Dashboard/Dashboard"


const router = createBrowserRouter([
  {
    index: true,
    element: <App />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/dashboard",
    element: <AuthAdmin />,
    children: [
      {
        index:true,
        element:<Dashboard/>
      }
    ]
  },
  {
    path: "/kate.kors/login",
    element: <Login />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
