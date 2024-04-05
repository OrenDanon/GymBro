import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { HomePage } from '../pages/HomePage.tsx'
import { ROUTES } from "./router.tsx"

export function RouterComponent() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.path} />
      ))
    )
  )

  return <RouterProvider router={router} />
}
