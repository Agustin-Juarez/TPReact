import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      <div className="cart-items-container">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.price}$</p>
            <button onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
            <hr />
          </div>
        ))}
      </div>
      <h3 id="total">Total: ${getTotalPrice()}</h3>
    </div>
  );
};

export default Cart;
