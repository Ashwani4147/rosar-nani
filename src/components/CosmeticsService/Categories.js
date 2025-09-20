import React from "react";
import { Heart, Sparkles, Star, Palette } from "lucide-react";
import { Card, CardContent } from "../../card";
import { ImageWithFallback } from "../../ImageWithFallback";

export default function Categories() {
  const categoryTitleColor = "#419fa4"; // ✅ Title color
  const hoverOverlayColor = "rgba(65, 159, 164, 0.2)"; // ✅
  return (
    <section
      id="categories"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(255, 228, 235, 0.3)", color: "#f8be6a" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ color: "#419fa4" }}
        >
          Our Signature Collections
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ color: "#419fa4" }}
        >
          {[
            {
              title: "Lip Collection",
              description:
                "Luxurious lipsticks, glosses, and balms in stunning shades that complement every skin tone.",
              image:
                "https://images.unsplash.com/photo-1585519356004-2bd6527d9cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMG1ha2V1cCUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNTg1NTE5MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              icon: (
                <Heart
                  className="w-8 h-8"
                  style={{ color: "var(--food-tertiary)" }}
                />
              ),
            },
            {
              title: "Skincare Essentials",
              description:
                "Nourishing serums, moisturizers, and treatments for healthy, glowing skin at any age.",
              image:
                "https://images.unsplash.com/photo-1644641811682-0439fd0185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc1ODI0OTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              icon: (
                <Sparkles
                  className="w-8 h-8"
                  style={{ color: "var(--food-tertiary)" }}
                />
              ),
            },
            {
              title: "Eye Makeup",
              description:
                "Captivating eyeshadows, mascaras, and liners to create mesmerizing looks that last all day.",
              image:
                "https://images.unsplash.com/photo-1594903696739-2551e8c2d0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVzaGFkb3clMjBwYWxldHRlJTIwbWFrZXVwfGVufDF8fHx8MTc1ODI3NTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              icon: (
                <Star
                  className="w-8 h-8"
                  style={{ color: "var(--food-tertiary)" }}
                />
              ),
            },
            {
              title: "Fragrance",
              description:
                "Exquisite perfumes and eau de toilettes with sophisticated scents for every occasion.",
              image:
                "https://images.unsplash.com/photo-1732870094545-f6de09bfeae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZnJhZ3JhbmNlJTIwYm90dGxlc3xlbnwxfHx8fDE3NTgyOTM5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              icon: (
                <Palette
                  className="w-8 h-8"
                  style={{ color: "var(--food-tertiary)" }}
                />
              ),
            },
          ].map((product, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--food-secondary)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover overlay with new color */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: hoverOverlayColor }}
                ></div>
                <div className="absolute top-4 left-4">{product.icon}</div>
              </div>
              <CardContent className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ color: categoryTitleColor }}
                >
                  {product.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
