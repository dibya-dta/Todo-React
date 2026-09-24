import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LocalStorage from './Component/LocalStorage.jsx'
import SessionStorage from './Component/SessionStorage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'LocalStorage',
    element: <LocalStorage />
  },
  {
    path: 'SessionStorage',
    element: <SessionStorage/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
