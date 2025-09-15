// import React from 'react';
// import { CheckCircle, Users, Sparkles } from 'lucide-react';

// export function QualityPromise() {
//   const promises = [
//     {
//       icon: CheckCircle,
//       title: "Quality Checks",
//       description: "Every product and service undergoes rigorous quality assurance to ensure excellence"
//     },
//     {
//       icon: Sparkles,
//       title: "Customized",
//       description: "Tailored experiences and products designed specifically for your unique needs and preferences"
//     },
//     {
//       icon: Users,
//       title: "Customer Satisfaction",
//       description: "Your happiness is our priority - we go above and beyond to exceed expectations"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl mb-6 text-purple-800">
//             Our Quality Promise
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             We are committed to delivering exceptional experiences through our core values
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {promises.map((promise, index) => (
//             <div 
//               key={index}
//               className="text-center group hover:transform hover:scale-105 transition-all duration-300"
//             >
//               <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-purple-800 rounded-full group-hover:bg-pink-500 transition-colors duration-300">
//                 <promise.icon className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-xl mb-4 text-purple-800">
//                 {promise.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {promise.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { CheckCircle, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export function QualityPromise() {
  const { t } = useTranslation();

  const promises = [
    {
      icon: CheckCircle,
      title: t("qualityCheckTitle"),
      description: t("qualityCheckDesc"),
    },
    {
      icon: Sparkles,
      title: t("customizedTitle"),
      description: t("customizedDesc"),
    },
    {
      icon: Users,
      title: t("customerSatisfactionTitle"),
      description: t("customerSatisfactionDesc"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ color: "#419fa4" }} // Our Quality Promise title in light blue
          >
            {t("qualityTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("qualityText")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full transition-colors duration-300 bg-[#419fa4] group-hover:bg-[#50c4ca]">
                <promise.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl mb-4 transition-colors duration-300 text-[#419fa4] group-hover:text-[#50c4ca]">
                {promise.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
