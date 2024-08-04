import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreConstextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter >
 <StoreConstextProvider>
    <App />
 </StoreConstextProvider>
 </BrowserRouter>
  
)
