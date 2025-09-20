import React from "react";
import { Shield, Sparkles, Users, Star } from "lucide-react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { Badge } from "../../badge";
import { useTranslation } from "react-i18next";

export default function QualitySalon() {
  const { t } = useTranslation();

  // Get features array from i18n
  const features = t("qualitySalon.features", { returnObjects: true });

  // Define icons in the same order as features
  const icons = [
    <Shield className="w-6 h-6 text-white" />,
    <Sparkles className="w-6 h-6 text-white" />,
    <Users className="w-6 h-6 text-white" />,
    <Star className="w-6 h-6 text-white" />
  ];

  return (
    <section
      id="quality"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(134, 201, 216, 0.1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text and Features */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: "#419fa4" }}>
              {t("qualitySalon.heading")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("qualitySalon.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="flex-shrink-0 p-2 rounded-lg"
                    style={{ backgroundColor: "#419fa4" }}
                  >
                    {icons[index]}
                  </div>
                  <div>
                    <h4 className="mb-1" style={{ color: "var(--food-primary)" }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1710367847914-a1c8d2c5aa63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGlzdCUyMHdvcmtpbmd8ZW58MXx8fHwxNzU3OTM0NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional stylist working"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
              <Badge
                variant="secondary"
                className="text-white px-4 py-2"
                style={{ backgroundColor: "#f8be6a" }}
              >
                {t("qualitySalon.badge")}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
