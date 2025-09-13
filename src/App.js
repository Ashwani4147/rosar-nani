import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import Image from './components/LandingPage/Image';
import { About } from './components/LandingPage/About';
import { Services } from './components/LandingPage/Services';
import { QualityPromise } from './components/LandingPage/QualityPromise';
import { Testimonials } from './components/LandingPage/Testimonials';
import { Contact } from './components/LandingPage/Contact';
import { Footer } from './components/LandingPage/Footer';
import { Food } from './components/LandingPage/Food';
// import './App.css'; // Assuming you have an App.css for global styles

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
       <section id="home"><Image /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="quality"><QualityPromise /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      
    </div>
  );
};

const App1 = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="src/components/LandingPAge/Food.js" element={<Food />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
