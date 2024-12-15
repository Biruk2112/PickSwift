import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import MerchantSignup from './pages/MerchantSignup';
import ConsumerSignup from './pages/ConsumerSignup';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import MerchantDashboard from './pages/MerchantDashboard';
import ProductDetail from './pages/ProductDetail';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/merchant/signup" element={<MerchantSignup />} />
          <Route path="/signup" element={<ConsumerSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/merchant/dashboard" element={<MerchantDashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;