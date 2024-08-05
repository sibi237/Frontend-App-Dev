import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpass: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmpass: '',
    general: '',
  });
  const [success, setSuccess] = useState('');

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmpass } = signupData;
    setError({ name: '', email: '', password: '', confirmpass: '', general: '' });
    setSuccess('');

    if (!name) {
      setError((prevState) => ({ ...prevState, name: 'Name is required' }));
    }
    if (!email) {
      setError((prevState) => ({ ...prevState, email: 'Email is required' }));
    }
    if (!password) {
      setError((prevState) => ({ ...prevState, password: 'Password is required' }));
    }
    if (password !== confirmpass) {
      setError((prevState) => ({ ...prevState, confirmpass: 'Passwords do not match' }));
    }

    if (name && email && password && password === confirmpass) {
      try {
        await axios.post('http://localhost:8080/api/ent', signupData);
        setSuccess('User Created Successfully');
        setTimeout(() => navigate('/'), 2000); // Navigate after 2 seconds to show success message
      } catch (error) {
        setError((prevState) => ({ ...prevState, general: 'Error creating user' }));
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignupSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={signupData.name}
            onChange={handleSignupChange}
          />
          {error.name && <span className="error-message">{error.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleSignupChange}
          />
          {error.email && <span className="error-message">{error.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
          />
          {error.password && <span className="error-message">{error.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpass"
            value={signupData.confirmpass}
            onChange={handleSignupChange}
          />
          {error.confirmpass && <span className="error-message">{error.confirmpass}</span>}
        </div>
        {error.general && <div className="general-error">{error.general}</div>}
        {success && <div className="success-message">{success}</div>}
        <button type="submit" className="signup-button">Sign Up</button>
        <a href='/signin'>Already have an account?</a>
      </form>
    </div>
  );
};

export default SignUp;
