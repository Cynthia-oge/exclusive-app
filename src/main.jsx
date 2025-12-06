import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ProductContextProvider from './context/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProductContextProvider>
)
