import React from "react";
import { Eye, Sparkles, Timer, HeartPulse } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = t("nailfeatures.list", { returnObjects: true });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                p-6 
                rounded-lg 
                text-center 
                transition-transform 
                hover:scale-105 
                duration-300 
                shadow-md
              "
              style={{
                backgroundColor: "white",   // ✅ FIX → doesn't merge anymore
              }}
            >

              {/* ICON CIRCLE */}
              <div
                className="flex justify-center mb-4 p-4 rounded-full"
                style={{
                  backgroundColor: "white",
                  width: "70px",
                  height: "70px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)", // subtle circle shadow like main code
                }}
              >
                {index === 0 && <Eye className="w-10 h-10" style={{ color: "#419fa4" }} />}
                {index === 1 && <Sparkles className="w-10 h-10" style={{ color: "#419fa4" }} />}
                {index === 2 && <Timer className="w-10 h-10" style={{ color: "#419fa4" }} />}
                {index === 3 && <HeartPulse className="w-10 h-10" style={{ color: "#419fa4" }} />}
              </div>

              {/* TITLE */}
              <h3 className="mb-2 text-lg font-semibold"
                style={{
                  color: "#419fa4",
                }}
              >
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm"
                style={{
                  color: "black",
                  opacity: 0.9,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
