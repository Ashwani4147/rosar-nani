import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../button";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#86c9d8] via-[#efb1fa] to-[#f8be6a] text-center">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl mb-6 font-bold text-white "
          style={{ color: "" }}
        >
          {t("lashcta.title")}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-white ">
          {t("lashcta.description")}
        </p>

        {/* CTA BUTTON */}
        <Button
          size="lg"
          className="text-white transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#f8be6a",
            borderColor: "var(--food-tertiary)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c49654";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f8be6a";
          }}
        >
          {t("lashcta.button")}
        </Button>
      </div>
    </section>
  );
}
