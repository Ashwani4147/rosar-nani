// src/components/Hero.js
import React from "react";
import { Button } from "../../button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3NDg3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />

      {/* Overlay with Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjMwOTc5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl mb-6 font-bold text-white">
          Nail Perfection at your fingertips
        </h1>

        {/* Sub Title */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Where artistry meets elegance in every detail. Experience luxury nail care with precision and style.
        </p>

        {/* Button WITH ORIGINAL FUNCTIONALITY */}
        <Button
          size="lg"
          className="text-white transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#f8be6a",
            borderColor: "var(--food-tertiary)",
          }}
          onClick={() => {
            const section = document.getElementById("categories");
            if (section) {
              const headerOffset = 70;
              const elementPosition = section.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c49654";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f8be6a";
          }}
        >
          {t("hero.button")}
        </Button>
      </div>
    </section>
  );
}
