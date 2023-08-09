import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth.context.jsx'
import { PortfolioProvider } from './context/portfolio.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PortfolioProvider>
    </BrowserRouter>
  </React.StrictMode>,
)