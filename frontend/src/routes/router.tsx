// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { About } from '../pages/About'

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
  {
    path: "/about",
    element: <About/>
  }
]