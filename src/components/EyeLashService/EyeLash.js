import Header from "./Header";
import Footer from './Footer';
import CallToAction from "./CallToAction";
import Quality from "./Quality";
import Categories from "./Categories";
import MainHeading from "./MainHeading";
import Features  from "./Features";
import Hero from "./Hero";
// import Gallery from "./Gallery";
// import { Contact } from "./Contact";

export default function Nail() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        // backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1691187905851-656bd11482eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc1ODI5Mzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Header Section imported from Header.js */}
      <Header />

      {/* Hero Section */}
      <section id="home"><Hero /></section>

      <Features />

      {/* Main Heading Section */}
      <MainHeading />

      {/* Nail Categories Section */}
      <Categories />

      {/* Gallery Section */}
      {/* <Gallery /> */}

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