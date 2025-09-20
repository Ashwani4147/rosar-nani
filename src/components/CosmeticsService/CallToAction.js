// src/components/CallToAction.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../button";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#86c9d8] via-[#efb1fa] to-[#f8be6a] text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("cosmetic.cta.title")}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-8">
          {t("cosmetic.cta.description")}
        </p>

        {/* Button */}
        <button
          className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#f8be6a", // Default color
            border: "1px solid var(--food-tertiary)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c49654"; // Hover color
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f8be6a"; // Revert to default
          }}
        >
          {t("cosmetic.cta.button")}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
