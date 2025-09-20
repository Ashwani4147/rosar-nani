import React from "react";

export default function MainHeading() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#86C9D81A" }} // Light blue background with 10% opacity
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl mb-6"
          style={{ color: "#419fa4" }}
        >
          Food that Speaks to Your Soul
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From savory bites to sweet treats, every dish is thoughtfully
          prepared with fresh ingredients and a passion for flavor. Dive into
          a menu designed to delight your senses.
        </p>
      </div>
    </section>
  );
}
