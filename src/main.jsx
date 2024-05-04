import React from 'react'
import ReactDOM from 'react-dom/client'

import { Page } from './Page'
import Global from './styles/global.styles'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
    <Global />
  </React.StrictMode>
)
