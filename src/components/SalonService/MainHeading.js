// src/components/MainHeading.js
import React from "react";

export default function MainHeading() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8"
    style={{ backgroundColor: "#86C9D81A" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#419fa4' }}>
          Elevate Your Natural Beauty
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From precision cuts to rejuvenating treatments, every service is crafted with expertise and passion. Discover a full range of beauty services designed to enhance your confidence and style.
        </p>
      </div>
    </section>
  );
}
