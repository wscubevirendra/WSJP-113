import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import NotFound from "./pages/NotFound"
import Cart from './pages/Cart'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:slug?",
          element: <Home />
        },
        {
          path: "/product/detail/:id",
          element: <Details />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    },

  ])
  return (
    <RouterProvider router={routers} />
  )
}
