// import React from "react";
// import { ChefHat, Leaf, Star } from "lucide-react";
// import { ImageWithFallback } from "../../ImageWithFallback";
// import { Card, CardContent } from "../../card";

// export default function Categories() {
//   const categoryTitleColor = "#419fa4"; // ✅ Title color
//   const hoverOverlayColor = "rgba(65, 159, 164, 0.2)"; // ✅ Hover overlay color

//   return (
//     <section
//       id="categories"
//       className="py-16 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: "rgba(255, 228, 235, 0.3)", color: "#f8be6a" }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2
//           className="text-3xl md:text-4xl text-center mb-12"
//           style={{ color: "#419fa4" }}
//         >
//           Our Delicious Categories
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ color: "#419fa4" }}>
//           {[
//             {
//               title: "Gourmet Entrees",
//               description:
//                 "Expertly crafted main dishes that showcase premium ingredients and culinary artistry.",
//               image:
//                 "https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3NDg3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//               icon: <ChefHat className="w-8 h-8" style={{ color: categoryTitleColor }} />,
//             },
//             {
//               title: "Fresh Pasta",
//               description:
//                 "Handmade pasta dishes with authentic flavors and traditional cooking techniques.",
//               image:
//                 "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmcmVzaCUyMHBhc3RhJTIwZGlzaGVzfGVufDF8fHx8MTc1NzU3Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//               icon: <Leaf className="w-8 h-8" style={{ color: categoryTitleColor }} />,
//             },
//             {
//               title: "Artisan Desserts",
//               description:
//                 "Decadent pastries and sweets made with the finest ingredients and attention to detail.",
//               image:
//                 "https://images.unsplash.com/photo-1671652640587-1d302c15a89f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXNzZXJ0JTIwcGFzdHJpZXN8ZW58MXx8fHwxNzU3NTc5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//               icon: <Star className="w-8 h-8" style={{ color: categoryTitleColor }} />,
//             },
//             {
//               title: "Healthy Bowls",
//               description:
//                 "Nutritious and colorful bowls packed with fresh vegetables, grains, and superfoods.",
//               image:
//                 "https://images.unsplash.com/photo-1643750182373-b4a55a8c2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoZWFsdGh5JTIwc2FsYWQlMjBib3dsc3xlbnwxfHx8fDE3NTc1MDEzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//               icon: <Leaf className="w-8 h-8" style={{ color: categoryTitleColor }} />,
//             },
//           ].map((category, index) => (
//             <Card
//               key={index}
//               className="group cursor-pointer border-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
//               style={{ backgroundColor: "var(--food-secondary)" }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <ImageWithFallback
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* Hover overlay with new color */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ backgroundColor: hoverOverlayColor }}
//                 ></div>
//                 <div className="absolute top-4 left-4">{category.icon}</div>
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl mb-2" style={{ color: categoryTitleColor }}>
//                   {category.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">{category.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { useTranslation } from "react-i18next";
import { ChefHat, Leaf, Star } from "lucide-react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { Card, CardContent } from "../../card";

export default function Categories() {
  const { t } = useTranslation();

  // ✅ Keep your previous colors
  const categoryTitleColor = "#419fa4";
  const hoverOverlayColor = "rgba(65, 159, 164, 0.2)";

  // ✅ Keep your icons and images
  const icons = [<ChefHat />, <Leaf />, <Star />, <Leaf />];
  const images = [
    "https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3NDg3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmcmVzaCUyMHBhc3RhJTIwZGlzaGVzfGVufDF8fHx8MTc1NzU3Mjg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1671652640587-1d302c15a89f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXNzZXJ0JTIwcGFzdHJpZXN8ZW58MXx8fHwxNzU3NTc5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1643750182373-b4a55a8c2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoZWFsdGh5JTIwc2FsYWQlMjBib3dsc3xlbnwxfHx8fDE3NTc1MDEzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  // ✅ Fetch categories from i18n
  const categories = t("categories", { returnObjects: true });
  const sectionTitle = t("categoriesSectionTitle");

  return (
    <section
      id="categories"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(255, 228, 235, 0.3)", color: "#f8be6a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ✅ Heading from i18n */}
        <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ color: categoryTitleColor }}>
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ color: categoryTitleColor }}>
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--food-secondary)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={images[index]}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover overlay with new color */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: hoverOverlayColor }}
                ></div>
                <div className="absolute top-4 left-4" style={{ color: categoryTitleColor }}>
                  {React.cloneElement(icons[index], { className: "w-8 h-8", style: { color: categoryTitleColor } })}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2" style={{ color: categoryTitleColor }}>
                  {category.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
