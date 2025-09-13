import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Rosar Nani exceeded all my expectations! The food was absolutely divine, and the spa treatment left me feeling completely rejuvenated. The personalized approach made all the difference.",
      service: "Food & Spa Experience"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The customized skincare products are amazing! They really took the time to understand my skin type and created products that work perfectly for me. Highly recommend!",
      service: "Customized Products"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "What a unique concept! Being able to enjoy gourmet food and then pamper myself with salon treatments all in one place is incredible. The quality is top-notch.",
      service: "Complete Experience"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "The attention to detail is remarkable. Every aspect of my visit was tailored to my preferences. The staff truly cares about customer satisfaction.",
      service: "Personalized Service"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-purple-800">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their personalized experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="border-0 shadow-xl bg-white rounded-lg">
            <div className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Customer Info */}
                <div>
                  <h4 className="text-xl text-purple-800 mb-2">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentSlide].service}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-pink-100 border border-purple-800 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-pink-100 border border-purple-800 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 shadow-md"
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
                  index === currentSlide ? 'bg-purple-800' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
