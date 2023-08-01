import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Productos</Link>
              </li>
              <li>
                <Link to="/cart">Carrito</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
