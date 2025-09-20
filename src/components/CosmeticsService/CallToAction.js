// src/components/CallToAction.js
import React from "react";
import { Button } from "../../button";

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#86c9d8] via-[#efb1fa] to-[#f8be6a] text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Elevate Your Beauty Routine
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Join thousands of beauty enthusiasts who trust us for luxurious,
          high-quality cosmetics made to inspire confidence.
        </p>

        <button
          className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#f8be6a", // Default color
            border: "1px solid var(--food-tertiary)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c49654"; // Hover color
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f8be6a"; // Revert to default
          }}
        >
          Visit Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
