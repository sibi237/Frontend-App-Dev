import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductCard = ({products}) => {


  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={`/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>
              <button>Buy Now</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Search for products.</p>
      )}
    </div>
  );
};

export default ProductCard;
