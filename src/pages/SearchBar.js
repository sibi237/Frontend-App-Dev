import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className='search-form'>
      <div className='form-wrap'>
          <div>
              <input
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={handleChange}
              />
          </div>
          <div>
               <button type="submit" className='search-btn-submit'>Search</button>
          </div>
      </div>
      </form>
    </div>
  );
};

export default SearchBar;
