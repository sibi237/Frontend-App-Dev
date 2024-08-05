import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    general: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    setError({ email: '', password: '', general: '' }); // Reset errors

    if (email && password) {
      try {
        const response = await axios.get('http://localhost:8080/api/ent');
        const userExist = response.data.some(
          (data) => data.email === email && data.password === password
        );
        if (userExist) {
          navigate("/");
        } else {
          setError((prevState) => ({
            ...prevState,
            general: 'Invalid email or password',
          }));
        }
      } catch (error) {
        console.error('Error fetching users', error);
        setError((prevState) => ({
          ...prevState,
          general: 'Error logging in',
        }));
      }
    } else {
      setError((prevState) => ({
        ...prevState,
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
      }));
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleLoginSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          {error.email && <span className="error-message">{error.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          {error.password && <span className="error-message">{error.password}</span>}
        </div>
        {error.general && <div className="general-error">{error.general}</div>}
        <button type="submit" className="signin-button">Sign In</button>
        <p>Don't have an account? <a href="/signup">Create One</a></p>
      </form>
    </div>
  );
};

export default SignIn;
