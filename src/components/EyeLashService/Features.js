import React from "react";
import { Star, Leaf, Shield, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = t("eyelashfeatures.list", { returnObjects: true });

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(134, 201, 216, 0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="inline-flex p-4 rounded-full mb-4"
                style={{ backgroundColor: "#419fa4", color: "white" }}
              >
                {index === 0 && <Star className="w-12 h-12" />}
                {index === 1 && <Shield className="w-12 h-12" />}
                {index === 2 && <Clock className="w-12 h-12" />}
                {index === 3 && <Leaf className="w-12 h-12" />}
              </div>

              <h3 className="text-xl mb-3" style={{ color: "#419fa4" }}>
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
