import React from 'react';
// Importing necessary modules from React Router and Swiper
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// Importing Swiper modules and styles for various effects
import { EffectCoverflow, Autoplay, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import './App.css';
// Importing a logo image and custom CSS
import logo from '../assets/Images/prime1.png';

// Navbar component for site navigation
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo image */}
        <img src={logo} alt="Logo" className='logo-image'/>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li className="dropdown">
          {/* Dropdown menu for "About" section */}
          <Link to="#" className="dropbtn">About</Link>
          <div className="dropdown-content">
            <Link to="/about/company">Company</Link>
          </div>
        </li>
        <li className="dropdown">
          {/* Dropdown menu for "Contact Us" section */}
          <Link to="#" className="dropbtn">Contact Us</Link>
          <div className="dropdown-content">
            <Link to="/contact/email">Email</Link>
          </div>
        </li>
        <li className="dropdown">
          {/* Link to SignIn page */}
          <a href='/signin'>SignIn</a>
        </li>
      </ul>
    </nav>
  );
};

// Home component with Swiper for displaying featured products
export const Home = () => (
  <div className="container">
    <div className="side-info">
      <span>discover</span>
      <h1>Mobile Case</h1>
      <hr />
      <p>Find the perfect case for your mobile device.</p>
      {/* Link to Offers page */}
      <Link to="/search">Browse More</Link>
    </div>
    {/* Swiper component setup */}
    <Swiper
      modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, Mousewheel]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      keyboard={{ enabled: true }}
      mousewheel={{ thresholdDelta: 70 }}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1560: { slidesPerView: 3 },
      }}
      className="swiper"
    >
      {/* Individual slides for different product categories */}
      <SwiperSlide className="swiper-slide slide-one">
        <div>
          <h2>Apple</h2>
          <p>Premium cases for Apple devices.</p>
          {/* Link to Apple product page */}
          <Link to="/product/apple">View More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide slide-two">
        <div>
          <h2>OnePlus</h2>
          <p>Stylish cases for OnePlus phones.</p>
          {/* Link to OnePlus product page */}
          <Link to="/product/oneplus">View More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide slide-three">
        <div>
          <h2>Vivo</h2>
          <p>Durable cases for Vivo devices.</p>
          {/* Link to Vivo product page */}
          <Link to="/viewmore">View More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide slide-four">
        <div>
          <h2>Samsung</h2>
          <p>Top-notch cases for Samsung phones.</p>
          {/* Link to Samsung product page */}
          <Link to="/product/samsung">View More</Link>
        </div>
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  </div>
);

// ContactSupport component for support information
export const ContactSupport = () => (
  <div>
    <h2>Support</h2>
    <p>Need help? Contact our support team.</p>
  </div>
);