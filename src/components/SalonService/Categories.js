// src/components/Services.js
import React from "react";
import { Scissors, Sparkles, Star, Heart } from "lucide-react";
import { Card, CardContent } from "../../card";
import { ImageWithFallback } from "../../ImageWithFallback";

export default function Services() {
  // ✅ Consistent color palette (same as demo)
  const titleColor = "#419fa4"; // Section + card title color
  const hoverOverlayColor = "rgba(65, 159, 164, 0.2)"; // Hover overlay
  const cardBg = "var(--food-secondary)"; // Card background
  const iconColor = "var(--food-tertiary)"; // Icon color

  const services = [
    {
      title: "Hair Styling",
      description:
        "Expert cuts, coloring, and styling services with the latest techniques and premium products.",
      image:
        "https://images.unsplash.com/photo-1712641966879-63f3bc1a47e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMHNhbG9ufGVufDF8fHx8MTc1NzkxODc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Scissors className="w-8 h-8" style={{ color: iconColor }} />,
    },
    {
      title: "Spa Treatments",
      description:
        "Relaxing facials, rejuvenating masks, and therapeutic treatments for radiant skin.",
      image:
        "https://images.unsplash.com/photo-1559185590-d545a0c5a1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU3OTM0NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Sparkles className="w-8 h-8" style={{ color: iconColor }} />,
    },
    {
      title: "Nail Services",
      description:
        "Professional manicures, pedicures, and nail art with attention to detail and hygiene.",
      image:
        "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZXxlbnwxfHx8fDE3NTc4NzM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Star className="w-8 h-8" style={{ color: iconColor }} />,
    },
    {
      title: "Beauty Makeup",
      description:
        "Professional makeup services for special events, photoshoots, and everyday glamour.",
      image:
        "https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBiZWF1dHklMjBzYWxvbnxlbnwxfHx8fDE3NTc5MzQ2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Heart className="w-8 h-8" style={{ color: iconColor }} />,
    },
  ];

  return (
    <section
      id="categories"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(255, 228, 235, 0.3)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ✅ Section Title */}
        <h2
          className="text-3xl md:text-4xl text-center mb-12 font-semibold"
          style={{ color: titleColor }}
        >
          Our Signature Services
        </h2>

        {/* ✅ Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: cardBg }}
            >
              {/* ✅ Image with Hover Overlay */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: hoverOverlayColor }}
                ></div>
                <div className="absolute top-4 left-4">{service.icon}</div>
              </div>

              {/* ✅ Card Content */}
              <CardContent className="p-6">
                <h3
                  className="text-xl mb-2 font-semibold"
                  style={{ color: titleColor }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
