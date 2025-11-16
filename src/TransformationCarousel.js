import { useState, useEffect } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Card, CardContent } from "./card";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function TransformationCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length, slidesToShow]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-6 transition-transform duration-500">
          {getVisibleItems().map((item, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / slidesToShow}% - ${
                  (24 * (slidesToShow - 1)) / slidesToShow
                }px)`,
              }}
            >
              <Card className="overflow-hidden border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative">
                        <ImageWithFallback
                          src={item.beforeImage}
                          alt={`${item.title} before`}
                          className="w-full h-64 object-cover"
                        />
                        <div
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm"
                          style={{ backgroundColor: "#419fa4" }}
                        >
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <ImageWithFallback
                          src={item.afterImage}
                          alt={`${item.title} after`}
                          className="w-full h-64 object-cover"
                        />
                        <div
                          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm"
                          style={{ backgroundColor: "#f8be6a" }}
                        >
                          After
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg"
                      style={{ backgroundColor: "#fab2f9" }}
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl" style={{ color: "#419fa4" }}>
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-10"
        style={{ color: "var(--food-primary)" }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-10"
        style={{ color: "var(--food-primary)" }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor:
                index === currentIndex ? "#419fa4" : "#d1d5db",
              width: index === currentIndex ? "24px" : "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
