import React from 'react'
import ReactDOM from 'react-dom/client'
// Line 4 ko aisa change karein:
import { App } from './App'  
import './index.css' // ya './styles/globals.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)