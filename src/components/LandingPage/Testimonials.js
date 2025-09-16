import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const testimonials = t("testimonialsList", { returnObjects: true });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === testimonials.length - 1) {
        setTransitionEnabled(false);
        setCurrentSlide(0);
      } else {
        setTransitionEnabled(true);
        setCurrentSlide((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  useEffect(() => {
    if (currentSlide === 0 && !transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, transitionEnabled]);

  // Mobile touch handlers
  const handleTouchStart = (e) => {
    if (window.innerWidth >= 768) return; // Only apply on mobile
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
    setTransitionEnabled(false);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping || window.innerWidth >= 768) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwiping || window.innerWidth >= 768) return;
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }
    setIsSwiping(false);
    setTransitionEnabled(true);
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#86C9D81A" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ color: "#419fa4" }}
          >
            {t("testimonialsTitle")}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-gray-100"
            style={{ color: "rgb(55, 65, 81)" }}
          >
            {t("testimonialsText")}
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: transitionEnabled
                ? "transform 700ms ease-in-out"
                : "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full px-2">
                <div className="border-0 shadow-xl bg-white rounded-lg">
                  <div className="p-8 md:p-12">
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                        "{testimonial.text}"
                      </blockquote>
                      <div>
                        <h4
                          className="text-xl mb-2"
                          style={{ color: "#419fa4" }}
                        >
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons only for md and larger screens */}
          {/* <button
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-pink-100 border border-blue-800 text-blue-800 rounded-full w-10 h-10 items-center justify-center transition-colors duration-300 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </button> */}
          <button
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#86c9d8] border border-blue-800 text-blue-800 rounded-full w-10 h-10 items-center justify-center transition-colors duration-300 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#86c9d8] border border-blue-800 text-blue-800 rounded-full w-10 h-10 items-center justify-center transition-colors duration-300 shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#419fa4]" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
