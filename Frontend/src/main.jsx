import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LocalStorage from './Component/LocalStorage.jsx'
import SessionStorage from './Component/SessionStorage.jsx'
import { AuthProvider } from './context/context.jsx'
import BackendAndDatabase from './Component/BackendAndDatabase.jsx'

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
  },
  {
    path: 'BackendAndDatabase',
    element: <BackendAndDatabase/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
