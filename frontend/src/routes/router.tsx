import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage'
import { About } from '../pages/About'

const ROUTES = [
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

export const router = createBrowserRouter(
  createRoutesFromElements(
    ROUTES.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))
  )
)