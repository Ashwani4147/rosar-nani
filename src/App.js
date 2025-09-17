import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // Make sure i18n is initialized
import Header from './components/LandingPage/Header';
import Image from './components/LandingPage/Image';
import { About } from './components/LandingPage/About';
import { Services } from './components/LandingPage/Services';
import { QualityPromise } from './components/LandingPage/QualityPromise';
import { Testimonials } from './components/LandingPage/Testimonials';
import { Contact } from './components/LandingPage/Contact';
import { Footer } from './components/LandingPage/Footer';
import  Food  from './components/FoodService/Food';
import Salon from './components/SalonService/Salon';
import Cosmetics from './components/LandingPage/Cosmetics';
// import Food from './components/LandingPage/Food';

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

// Router setup for separate pages like Food
const AppWithRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/food/" element={<Food />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppWithRouter;
