import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();

  const originalTestimonials = t("testimonialsList", { returnObjects: true });
  const additionalTestimonials = [
    {
      name: "Rohan B.",
      service: "Culinary & Wellness Experience",
      rating: 5,
      text: "I loved the personalized food delicacies and relaxing wellness treatments. Everything felt tailored just for me, making my visit unforgettable."
    },
    {
      name: "Ashwani K.",
      service: "Culinary & Wellness Experience",
      rating: 5,
      text: "Rosar Nani provides a perfect combination of delicious food and soothing treatments. Each visit is refreshing and truly customized."
    }
  ];

  const testimonials = [...originalTestimonials, ...additionalTestimonials];
  const totalSlides = testimonials.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) handleNext();
    else if (deltaX < -50) handlePrev();
    setIsPaused(false);
  };

  // Mobile click areas
  const handleMouseDown = (e) => {
    setIsPaused(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // X inside the container
    if (clickX < rect.width / 2) handlePrev();
    else handleNext();
  };
  const handleMouseUp = () => setIsPaused(false);

  return (
    <section className="py-20" style={{ backgroundColor: "#86C9D81A" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6" style={{ color: "#419fa4" }}>
            {t("testimonialsTitle")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-800">
            {t("testimonialsText")}
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown} // For mobile/desktop tap
          onMouseUp={handleMouseUp}     // Release to resume
        >
          <div
            ref={slideRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 w-full px-4">
                <div className="border-0 shadow-xl bg-white rounded-lg p-8 md:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl mb-2" style={{ color: "#419fa4" }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons for large screens */}
          <button
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-pink-100 border border-blue-800 text-blue-800 rounded-full w-10 h-10 items-center justify-center transition-colors duration-300 shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-pink-100 border border-blue-800 text-blue-800 rounded-full w-10 h-10 items-center justify-center transition-colors duration-300 shadow-md"
            onClick={handleNext}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? "bg-[#419fa4]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
