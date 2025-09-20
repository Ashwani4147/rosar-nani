import React from "react";
import { Shield, Sparkles, Star, Users } from "lucide-react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { Badge } from "../../badge";

export default function Quality() {
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
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ color: "#419fa4" }} // Heading in light blue
            >
              Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to cosmetic excellence means every product meets the highest
              standards of quality, safety, and performance. We use premium ingredients
              and cutting-edge formulations to deliver exceptional results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-white" />,
                  title: "Cruelty-Free",
                  description: "Never tested on animals, always ethical",
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-white" />,
                  title: "Premium Ingredients",
                  description: "Only the finest natural and synthetic components",
                },
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Expert Formulation",
                  description: "Developed by leading cosmetic scientists",
                },
                {
                  icon: <Star className="w-6 h-6 text-white" />,
                  title: "Long-Lasting",
                  description: "Formulas designed for all-day wear",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="flex-shrink-0 p-2 rounded-lg"
                    style={{
                      backgroundColor: "#419fa4", // Background color for icon circles
                    }}
                  >
                    {item.icon}
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
              src="https://images.unsplash.com/photo-1654973433534-1238e06f6b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTgyOTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Luxury cosmetic products"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
              <Badge
                variant="secondary"
                className="text-white px-4 py-2"
                style={{ backgroundColor: "#f8be6a" }}
              >
                Premium Brand
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
