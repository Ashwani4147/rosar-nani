// src/components/MainHeading.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function MainHeading() {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#86C9D81A" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl mb-6"
          style={{ color: "#419fa4" }}
        >
          {t("mainHeadingBeauty.heading")}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("mainHeadingBeauty.description")}
        </p>
      </div>
    </section>
  );
}
