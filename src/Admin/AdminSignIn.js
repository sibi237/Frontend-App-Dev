import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSignIn.css';
import axios from 'axios';

const AdminSignIn = () => {
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
        const response = await axios.get('http://localhost:8080/api/admin');
        const userExist = response.data.some(
          (data) => data.email === email && data.password === password
        );
        // console.log("Success");
        if (userExist) {
          navigate("/AdminPage"); // Redirect to the admin dashboard
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
    <div className="admin-signin-container">
      <form className="admin-signin-form" onSubmit={handleLoginSubmit}>
        <h2>Admin Sign In</h2>
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
        <button type="submit" className="admin-signin-button">Sign In</button>
        <p>Forgot Password? </p>
      </form>
    </div>
  );
};

export default AdminSignIn;
