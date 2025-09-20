import React from "react";
import { Shield, Leaf, Clock, Star } from "lucide-react";
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
          <div>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ color: "#419fa4" }} // Heading in light blue
            >
              Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to excellence means every dish meets the highest
              standards of quality, freshness, and flavor. We maintain rigorous
              quality checks throughout our preparation process.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-white" />,
                  title: "Safety First",
                  description: "Strict hygiene and safety protocols",
                },
                {
                  icon: <Leaf className="w-6 h-6 text-white" />,
                  title: "Fresh Daily",
                  description: "Ingredients sourced fresh every day",
                },
                {
                  icon: <Clock className="w-6 h-6 text-white" />,
                  title: "Made to Order",
                  description: "Prepared fresh when you order",
                },
                {
                  icon: <Star className="w-6 h-6 text-white" />,
                  title: "Premium Quality",
                  description: "Only the finest ingredients used",
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
                    <h4
                      className="mb-1"
                      style={{ color: "240000" }} // Title in light blue
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1629407119384-d42320c3e576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWZ8ZW58MXx8fHwxNzU3NTQ5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional kitchen"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
              <Badge
                variant="secondary"
                className="text-white px-4 py-2"
                style={{ backgroundColor: "#f8be6a" }}
              >
                5-Star Quality
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
