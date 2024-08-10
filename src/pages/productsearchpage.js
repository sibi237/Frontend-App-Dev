import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductSearchPage.css';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const ProductSearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get('http://localhost:8080/api/Search/search?name='+encodeURI(query));
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products`);
        setProducts(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-search-page">
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <ProductList products={products} />
    </div>
  );
};

export default ProductSearchPage;
