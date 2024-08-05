import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const [product, setProduct] = useState(null); // State for storing product details
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
    country: '',
  }); // State for storing shipping address details
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // State for storing payment method
  const [quantity, setQuantity] = useState(1); // State for storing product quantity
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    console.log('Product added to cart:', product, 'Quantity:', quantity);
    // Implement cart addition logic here
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.values(address).some((value) => !value)) {
  //     alert('Please fill in all address fields.');
  //     return;
  //   }
  //   console.log('Order submitted:', product, address, paymentMethod);
  //   navigate('/confirm', { state: { product, address, paymentMethod, quantity } });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(address).some((value) => !value)) {
      alert('Please fill in all address fields.');
      return;
    }
    
    const order = {
      productName: product.name,
      price: product.price,
      quantity,
      ...address,
      paymentMethod
    };
    
    try {
      await axios.post('http://localhost:8080/api/orders', order);
      navigate('/confirm', { state: { product, address, paymentMethod, quantity } });
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-info">
        <h1>{product.name}</h1>
        <img src={`/${product.image}`} name="image" alt={product.name} />
        <h3>${product.price.toFixed(2)}</h3>
        <div className="add-to-cart">
          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </label>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="address-form-container">
        <form onSubmit={handleSubmit} className="address-form">
          <h2>Shipping Address</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={address.zip}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={address.country}
            onChange={handleInputChange}
            required
          />

          <div className="payment-method">
            <h2>Payment Method</h2>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentChange}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentChange}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </label>
          </div>

          <button type="submit" className="confirm">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
