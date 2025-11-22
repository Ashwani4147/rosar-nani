// src/components/Hero.js
import React from "react";
import { Button } from "../../button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Overlay Gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1674049406467-824ea37c7184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGJlYXV0eXxlbnwxfHx8fDE3NjMyNjg2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl mb-6 font-bold text-white">
          {t("hero.eyelashtitle")}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          {t("hero.eyelashsubtitle")}
        </p>

        {/* Button — scrolls to categories section */}
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
            e.currentTarget.style.backgroundColor = "#c49654";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f8be6a";
          }}
        >
          {t("hero.button")}
        </Button>
      </div>
    </section>
  );
}
