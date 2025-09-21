import React from "react";


// import { Card, CardContent } from "../../card";

// import { Star, ChefHat, Leaf, Clock, Shield } from "lucide-react";
import Header from "./Header";
import Footer from './Footer';
import CallToAction from "./CallToAction";
import Quality from "./Quality";
import Categories from "./Categories";
import MainHeading from "./MainHeading";
import Hero from "./Hero";
import { Contact } from "./Contact";


export default function Food() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1708335583165-57aa131a4969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjBmb29kJTIwdGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3NTgwNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
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

      {/* Contact Section */}
      {/* <Contact /> */}
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
