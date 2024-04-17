import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './root-cmp'
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>,
)
