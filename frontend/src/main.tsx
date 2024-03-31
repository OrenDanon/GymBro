import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './root-cmp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>,
)
