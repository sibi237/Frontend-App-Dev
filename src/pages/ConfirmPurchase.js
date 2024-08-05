// src/ConfirmPurchase.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmPurchase.css'; // Importing CSS for styling

const ConfirmPurchase = () => {
  // Using useLocation to access the state passed from the previous page
  const { state } = useLocation();
  const { product, address, quantity } = state || {}; // Destructuring state properties
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for controlling sidebar visibility

  // Return early if any required details are missing
  if (!product || !address || !quantity) {
    return <div>Invalid order details.</div>;
  }

  // Function to handle completing the purchase
  const handleCompletePurchase = () => {
    setSidebarOpen(true); // Open the sidebar on completion
  };

  return (
    <div className="confirm-purchase">
      <h1>Order Confirmation</h1>
      <div className="order-container">
        <div className="order-summary">
          <h2>Product Details</h2>
          {/* Display product image and details */}
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h3>Price: ${product.price.toFixed(2)}</h3>
          <h3>Quantity: {quantity}</h3>
          <h3>Total: ${(product.price * quantity).toFixed(2)}</h3>
        </div>
        <div className="shipping-details">
          <h2>Shipping Address</h2>
          {/* Display shipping address details */}
          <p>Name: {address.name}</p>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>ZIP Code: {address.zip}</p>
          <p>Country: {address.country}</p>
        </div>
      </div>
      {/* Button to complete the purchase */}
      <button className="complete-purchase" onClick={handleCompletePurchase}>
        Complete Purchase
      </button>

      {/* Sidebar for post-purchase message */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Thank You!</h2>
        </div>
        <div className="sidebar-content">
          <p>Your purchase is complete. We will process your order shortly.</p>
          <p>Order Details:</p>
          <p>Product: {product.name}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Quantity: {quantity}</p>
          <p>Total: ${(product.price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchase; // Exporting the component
