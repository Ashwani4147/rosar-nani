
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import MainHeading from "./MainHeading";
import Categories from "./Categories";
import Quality from "./Quality";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import { Contact } from "./Contact";
// import { Star, Scissors, Sparkles, Clock, Shield, Heart, Users } from "lucide-react";

export default function Salon() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1633681138600-295fcd688876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb24lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NzkzNDYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Header Section imported from Header.js */}
      <Header />

      {/* Hero Section */}
      <section id="home"><Hero /></section>

      {/* Main Heading Section */}
      <MainHeading />

      {/* Food Categories Section */}
      <Categories />

      {/* Quality Assurance Section */}
      <Quality />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Call to Quality Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}