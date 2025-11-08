import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppSolutions from './AppSolutions.jsx'  
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppSolutions />  
  </React.StrictMode>,
)

