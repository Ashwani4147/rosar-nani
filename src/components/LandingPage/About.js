// import React from 'react';

// export function About() {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-5xl mb-8 text-purple-800">
//             About Rosar Nani
//           </h2>
//           <p className="text-lg md:text-xl leading-relaxed text-gray-700">
//             Rosar Nani is a platform/shop which provides you food delicacies and soothing
//             salon experience along with cosmetic products specially customised for you.
//             We believe in creating personalized experiences that nourish both your body
//             and soul, offering the perfect blend of culinary delights and wellness treatments
//             tailored to your unique preferences.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useTranslation } from "react-i18next";

// Example image URLs
const aboutImageLeft = "https://images.unsplash.com/photo-1629195352884-1ec52b94ffa7";
const aboutImageRight = "http://asteriskengineering.com/wp-content/uploads/2023/07/10-1-1200x556.jpg";

export function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-16 space-y-16">

        {/* Section 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start">
            <img
              src={aboutImageLeft}
              alt="About Rosar Nani"
              className="rounded-xl shadow-lg w-full max-w-md h-64 md:h-80 object-cover"
            />
          </div>

          {/* Right: Text (vertically centered) */}
          <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left h-64 md:h-80">
            <h2
              className="text-3xl md:text-4xl mb-4 font-semibold"
              style={{ color: "#419fa4" }}
            >
              {t("aboutTitle")}
            </h2>
            <p className="text-base md:text-lg leading-relaxed italic text-gray-700">
              {t("aboutText")}
            </p>
          </div>
        </div>

        {/* Section 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 max-w-6xl mx-auto">
          {/* Right: Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <img
              src={aboutImageRight}
              alt="Rosar Nani Experience"
              className="rounded-xl shadow-lg w-full max-w-md h-64 md:h-80 object-cover"
            />
          </div>

          {/* Left: Text (vertically centered) */}
          <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left h-64 md:h-80">
            <h2
              className="text-3xl md:text-4xl mb-4 font-semibold"
              style={{ color: "#419fa4" }}
            >
              Our Unique Experience
            </h2>
            <p className="text-base md:text-lg leading-relaxed italic text-gray-700">
              At Rosar Nani, every visit is a delightful escape.  
              Handpicked culinary treats and rejuvenating wellness moments  
              crafted just for you, leaving you refreshed and inspired.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

