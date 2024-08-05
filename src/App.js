import React from 'react';
import './index.css';
import Offers from './pages/Offers';
import ProductList from './pages/ProductList';
import AboutCompany from './pages/AboutCompany';
import ContactEmail from './pages/ContactEmail';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar, Home } from './Component/Land'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetails';
import ConfirmPurchase from './pages/ConfirmPurchase';
import ProductSearchPage from './pages/productsearchpage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/contact/email" element={<ContactEmail />} />
        <Route path="/product/apple" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/confirm" element={<ConfirmPurchase />} />
        <Route path="/search" element={<ProductSearchPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
