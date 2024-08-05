// src/AboutCompany.js
import React from 'react';
import './AboutCompany.css'; // Importing the CSS file for styling

const AboutCompany = () => {
  return (
    <div className="about-company-page">
      <section className="hero">
        {/* Hero section with title and description */}
        <div className="hero-content">
          <h1>About Our Company</h1>
          <p>Discover our journey, values, and future ambitions.</p>
        </div>
      </section>
      <section className="sections">
        {/* Section describing the company's history */}
        <div className="section history">
          <h2>Our History</h2>
          <p>
            Founded in [Year], our company has transformed from a small startup to an industry leader, with a commitment to innovation and excellence.
          </p>
        </div>
        {/* Section describing the company's values */}
        <div className="section values">
          <h2>Our Values</h2>
          <p>
            Integrity, customer satisfaction, and quality are at the heart of everything we do. We are dedicated to exceeding your expectations.
          </p>
        </div>
        {/* Section highlighting the company's achievements */}
        <div className="section achievements">
          <h2>Achievements</h2>
          <p>
            We have received numerous awards for our outstanding products and services, reflecting our dedication and success in the industry.
          </p>
        </div>
        {/* Section outlining the company's future plans */}
        <div className="section future">
          <h2>Future Plans</h2>
          <p>
            Our future is filled with exciting opportunities. We are expanding our product line and exploring new markets to better serve our customers.
          </p>
        </div>
      </section>
      {/* Footer with current year and copyright notice */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutCompany; // Exporting the AboutCompany component as the default export
