// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
// import './i18n'; // Make sure i18n is initialized
// import { useTranslation } from "react-i18next";
// import Header from './components/LandingPage/Header';
// import Image from './components/LandingPage/Image';
// import { About } from './components/LandingPage/About';
// import { Services } from './components/LandingPage/Services';
// import { QualityPromise } from './components/LandingPage/QualityPromise';
// import { Testimonials } from './components/LandingPage/Testimonials';
// import { Contact } from './components/LandingPage/Contact';
// import { Footer } from './components/LandingPage/Footer';
// //import  Food  from './components/FoodService/Food';
// import Salon from './components/LandingPage/Salon';
// import Cosmetics from './components/LandingPage/Cosmetics';
// import Food from './components/LandingPage/Food';

// const App = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <Header />
//       <section id="home"><Image /></section>
//       <section id="about"><About /></section>
//       <section id="services"><Services /></section>
//       <section id="quality"><QualityPromise /></section>
//       <section id="testimonials"><Testimonials /></section>
//       <section id="contact"><Contact /></section>
//       <Footer />
//     </div>
//   );
// };

// const AppWithRouter = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/food" element={<Food />} />
//           <Route path="/salon" element={<Salon />} />
//           <Route path="/cosmetics" element={<Cosmetics />} />
//         </Routes>
//       </Router>
//     </Suspense>
//   );
// };



// export default AppWithRouter;




import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n"; // Make sure i18n is initialized

import Header from "./components/LandingPage/Header";
import Image from "./components/LandingPage/Image";
import { About } from "./components/LandingPage/About";
import { Services } from "./components/LandingPage/Services";
import { QualityPromise } from "./components/LandingPage/QualityPromise";
import { Testimonials } from "./components/LandingPage/Testimonials";
import { Contact } from "./components/LandingPage/Contact";
import { Footer } from "./components/LandingPage/Footer";

import Salon from "./components/LandingPage/Salon";
import Cosmetics from "./components/LandingPage/Cosmetics";
import Food from "./components/LandingPage/Food";


// ================= MAIN PAGE (uses translations) =================
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


// ================= LANGUAGE HANDLER =================
const LanguageHandler = ({ children }) => {
  const { i18n } = useTranslation();
  const { lng } = useParams(); // from URL
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // If URL doesn’t have a language, redirect to current language
  if (!lng) {
    const currentLang = i18n.language || "en";
    return <Navigate to={`/${currentLang}`} replace />;
  }

  return children;
};


// ================= ROUTER =================
const AppWithRouter = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en"; // fallback to English

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          {/* Default redirect to current language */}
          <Route path="/" element={<Navigate to={`/${currentLang}`} replace />} />

          {/* Language-based routes */}
          <Route
            path="/:lng"
            element={
              <LanguageHandler>
                <App />
              </LanguageHandler>
            }
          />
          <Route
            path="/:lng/food"
            element={
              <LanguageHandler>
                <Food />
              </LanguageHandler>
            }
          />
          <Route
            path="/:lng/salon"
            element={
              <LanguageHandler>
                <Salon />
              </LanguageHandler>
            }
          />
          <Route
            path="/:lng/cosmetics"
            element={
              <LanguageHandler>
                <Cosmetics />
              </LanguageHandler>
            }
          />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to={`/${currentLang}`} replace />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppWithRouter;
