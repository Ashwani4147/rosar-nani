import React from "react";
import { Button } from "../../button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3NDg3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1553024838-a90a23993a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU3NTgyNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-6xl font-bold mb-6 text-white">
          {t("hero.foodtitle")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          {t("hero.foodsubtitle")}
        </p>
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
              const elementPosition =
                section.getBoundingClientRect().top + window.scrollY;
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
