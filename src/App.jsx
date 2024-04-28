
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import NavBar from './components/NavBar';
import PizzaDetail from './views/PizzaDetail';
import ShoppingCart from './views/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/home" element={<Home />} />
                            <Route path="/pizza/:id" element={<PizzaDetail />} />
                            <Route path="/carrito" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}