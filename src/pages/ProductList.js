import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';
import ProductCard from './ProductCard';
const ProductList = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProductlist(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
      <>
        <ProductCard products={productlist}/>
      </>
  );
};

export default ProductList;
