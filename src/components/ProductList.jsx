import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './ProductList.css';
import { CartContext } from '../CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
