import React from "react";
import { Shield, Star, Clock, Leaf } from "lucide-react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { Badge } from "../../badge";
import { useTranslation } from "react-i18next";

export default function Quality() {
  const { t } = useTranslation();

  // Ensures features is always an array
  const features = t("hairquality.features", { returnObjects: true }) || [];

  const icons = [
    <Shield className="w-6 h-6 text-white" />,
    <Star className="w-6 h-6 text-white" />,
    <Clock className="w-6 h-6 text-white" />,
    <Leaf className="w-6 h-6 text-white" />
  ];

  return (
    <section
      id="quality"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(134, 201, 216, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#419fa4" }}>
              {t("hairquality.heading")}
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              {t("hairquality.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div
                    className="flex-shrink-0 p-2 rounded-lg"
                    style={{ backgroundColor: "#419fa4", color: "white" }}
                  >
                    {icons[i]}
                  </div>

                  <div>
                    <h4 className="mb-1" style={{ color: "#419fa4" }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <ImageWithFallback
             // src="https://images.unsplash.com/photo-1663330789058-c7b4c491c88d?auto=format&w=1200&q=80"
             src="/excelHair.png"
              alt="Professional lash salon"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />

            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
              <Badge
                variant="secondary"
                className="text-white px-4 py-2"
                style={{ backgroundColor: "#f8be6a" }}
              >
                {t("hairquality.badge")}
              </Badge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
