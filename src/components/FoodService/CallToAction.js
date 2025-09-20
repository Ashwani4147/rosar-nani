import React from "react";
import { Button } from "../../button";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 text-center"
      style={{ backgroundColor: "#f1eaec" }} // Background color changed to #f1eaec
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#419fa4" }}>
          {t("food.cta.title")}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {t("food.cta.description")}
        </p>
        {/* <Button
          size="lg"
          className="text-white transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#f8be6a", // Default color
            borderColor: "var(--food-tertiary)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c49654"; // Hover color
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f8be6a"; // Revert to default
          }}
        >
          {t("food.cta.button")}
        </Button> */}

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
          {t("food.cta.button")}
        </button>
      </div>
    </section>
  );
}
