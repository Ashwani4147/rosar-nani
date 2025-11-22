import React, { Suspense, useEffect } from 'react'; // <-- ADD useEffect here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Header from './components/LandingPage/Header';
import Image from './components/LandingPage/Image';
import { About } from './components/LandingPage/About';
import { Services } from './components/LandingPage/Services';
import { QualityPromise } from './components/LandingPage/QualityPromise';
import { Testimonials } from './components/LandingPage/Testimonials';
import { Contact } from './components/LandingPage/Contact';
import { Footer } from './components/LandingPage/Footer';
import Food from './components/FoodService/Food';
import Salon from './components/SalonService/Salon';
import Cosmetics from './components/CosmeticsService/Cosmetics';
import Nail from './components/NailService/Nail';
import EyeLash from './components/EyeLashService/EyeLash';
import Hair from './components/HairService/Hair';
import ScrollToTop from './ScrollToTop';

const App = () => {
  
  // 🚀 SCROLL LOGIC ADDED HERE
  useEffect(() => {
    // 1. Check if a hash (e.g., #contact) is present in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Extracts 'contact'
      const element = document.getElementById(id);

      // 2. Use a short timeout to wait for the component to render before scrolling
      const timer = setTimeout(() => {
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Scroll until the element is at the top of the viewport
          });
        }
      }, 50); // 50ms delay
      
      return () => clearTimeout(timer); // Cleanup function
    }
  }, []); // The empty dependency array ensures this runs only on mount/initial load
  // END OF SCROLL LOGIC

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

const AppWithRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/food" element={<Food />} /> */}
          {/* <Route path="/salon" element={<Salon />} /> */}
           <Route path="/hair" element={<Hair />} />
          {/* <Route path="/cosmetics" element={<Cosmetics />} /> */}
          <Route path="/nail" element={<Nail />} />
          <Route path="/eyeLash" element={<EyeLash />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppWithRouter;