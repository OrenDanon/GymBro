import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

export function RootCmp() {
return (
  <div>
<RouterProvider router={router} />
  </div>
  )
}