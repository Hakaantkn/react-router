import React from 'react'
import { AuthProvider } from './store/provider.jsx'
import ReactDOM from 'react-dom/client'
import {Router} from './router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
)
