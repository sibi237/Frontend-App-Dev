import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({products}) => {

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={`/${product.image}`} name="image" alt={product.name} />
          <h3 name="name">{product.name}</h3>
          <p name="price">${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>
            <button>Buy Now</button>
          </Link>
        </div>
      ))}
    
    </div>
  );
};

export default ProductList;
