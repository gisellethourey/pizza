import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { PizzaProvider } from './context/PizzaContext.jsx'
import { SelectedPizzaProvider } from './context/SelectedPizzaContext';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <PizzaProvider>
    <SelectedPizzaProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </SelectedPizzaProvider>
 </PizzaProvider>
  </React.StrictMode>,
)
