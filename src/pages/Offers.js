// OfferPage.js
import React from 'react';
import './OfferPage.css'; // Importing CSS for styling

// Array of offer objects with details about each offer
const offers = [
  {
    title: 'Summer Sale',
    description: 'Up to 50% off on select items',
    image: 'Summersale.jpeg', // Image path for the offer
    discount: '50%', // Discount details
  },
  {
    title: 'Buy One Get One Free',
    description: 'On select products',
    image: 'iPhone-SE-Silicone-Case.jpg', // Image path for the offer
    discount: 'BOGO', // Discount details
  },
  // Additional offers can be added here
];

// Array of payment offer objects with details about each payment offer
const paymentOffers = [
  {
    title: '10% off with Credit Card',
    description: 'Valid on all purchases above $100',
    image: 'credit card.jpeg', // Image path for the payment offer
  },
  {
    title: '5% cashback on PayPal',
    description: 'Use PayPal and get 5% cashback',
    image: 'paypal.jpeg', // Image path for the payment offer
  },
  // Additional payment offers can be added here
];

const OfferPage = () => {
  return (
    <div className="offer-page">
      <h1>Exclusive Offers</h1>
      <div className="offer-cards">
        {/* Mapping through the offers array to display each offer */}
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.image} alt={offer.title} />
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <span className="discount">{offer.discount}</span>
          </div>
        ))}
      </div>

      <h1>Payment Offers</h1>
      <div className="payment-cards">
        {/* Mapping through the paymentOffers array to display each payment offer */}
        {paymentOffers.map((payment, index) => (
          <div className="payment-card" key={index}>
            <img src={payment.image} alt={payment.title} />
            <h2>{payment.title}</h2>
            <p>{payment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage; // Exporting the component
