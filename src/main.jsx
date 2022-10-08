import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Layout from './components/layout/layout'
import './index.css'
import { AuthProvider } from "./context/authContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Layout>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
