import React from "react";
import { useTranslation } from "react-i18next";
import { Star, Leaf, Shield, Heart } from "lucide-react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { Card, CardContent } from "../../card";

export default function Categories() {
  const { t } = useTranslation();

  const categoryTitleColor = "#419fa4";
  const hoverOverlayColor = "rgba(65, 159, 164, 0.2)";

  const images = [
    "https://images.unsplash.com/photo-1644903751036-adeda377f28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
    "https://images.unsplash.com/photo-1738248393412-87ecae54d5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
    "https://images.unsplash.com/photo-1661069387738-f959149d8888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
    "https://images.unsplash.com/photo-1735151226446-1d364b4adc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80"
  ];

  const icons = [
    <Heart className="w-8 h-8" />,
    <Star className="w-8 h-8" />,
    <Shield className="w-8 h-8" />,
    <Leaf className="w-8 h-8" />
  ];

  // ⭐ i18n categories (English + Thai)
  const categories = t("Eyelash", { returnObjects: true });

  const sectionTitle = t("EyelashSectionTitle");

  return (
    <section
      id="categories"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "rgba(255, 228, 235, 0.3)",
        color: categoryTitleColor
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ color: categoryTitleColor }}
        >
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: hoverOverlayColor }}
                ></div>

                <div className="absolute top-4 left-4">
                  {icons[index]}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl mb-2" style={{ color: categoryTitleColor }}>
                  {category.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
