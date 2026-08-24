import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage.js';
import Signup from './landing_page/signup/Signup.js';
import AboutPage from './landing_page/about/AboutPage.js';
import ProductPage from './landing_page/products/Productpage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

