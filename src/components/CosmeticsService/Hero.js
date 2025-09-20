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
          backgroundImage: `url('https://images.unsplash.com/photo-1654973433534-1238e06f6b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTgyOTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      {/* Overlay with Gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1738935367100-60409f85ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwcHJvZHVjdHMlMjBnb2xkfGVufDF8fHx8MTc1ODI5NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-6xl md:text-6xl font-bold mb-6 text-white">
          {t("hero.cosmeticstitle")}
        </h1>
        {/* Sub Title */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          {t("hero.cosmeticssubtitle")}
        </p>
        {/* Button */}
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
              // Adjust for fixed header height (e.g., 70px)
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
