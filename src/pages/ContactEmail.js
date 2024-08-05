// src/ContactUs.js
import React, { useState } from 'react';
import './ContactEmails.css'; // Importing CSS for styling

const ContactEmail = () => {
  // State for managing form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle changes in the form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Updating the corresponding form field
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    alert('Your message has been sent!'); // Alert to notify user of successful submission
    setFormData({ name: '', email: '', message: '' }); // Resetting form fields
  };

  return (
    <div className="contact-us">
      <header className="contact-header">
        {/* Header section with title and description */}
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
      </header>
      <section className="contact-form-section">
        {/* Form for collecting user input */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          {/* Submit button */}
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
      <footer className="contact-footer">
        {/* Footer with current year and copyright notice */}
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactEmail; // Exporting the component
