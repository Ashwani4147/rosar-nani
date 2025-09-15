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

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-100 to-pink-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h2 className="text-3xl md:text-5xl mb-8 text-purple-800">
            {t('aboutTitle')}
          </h2> */}
          <h2
            className="text-3xl md:text-5xl mb-8"
            style={{ color: "#419fa4" }}
          >
            {t("aboutTitle")}
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            {t("aboutText")}
          </p>
        </div>
      </div>
    </section>
  );
}
