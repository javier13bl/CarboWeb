import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './styles/normalize.css'
import './styles/index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Nosotros from './pages/Nosotros'
import Sostenible from './pages/Sostenible'
import Contacto, {action as contactoAction} from './pages/Contacto'
import ErrorPage from './components/ErrorPage'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/productos',
        element: <Productos/>
      },
      {
        path: '/nosotros',
        element: <Nosotros/>
      },
      {
        path: '/sostenible',
        element: <Sostenible/>
      },
      {
        path: '/contacto',
        element: <Contacto/>,
        action: contactoAction
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)