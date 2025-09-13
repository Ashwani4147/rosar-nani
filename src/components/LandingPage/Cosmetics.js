import React from 'react';

export function Cosmetics() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
          Cosmetics Collection
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover our curated selection of high-quality cosmetic products that enhance your natural beauty.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Skincare Essentials</h3>
            <p className="text-gray-600">Moisturizers, cleansers, and serums for glowing skin.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Makeup Products</h3>
            <p className="text-gray-600">Foundations, lipsticks, and palettes for every style.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Hair Care</h3>
            <p className="text-gray-600">Shampoos, conditioners, and treatments for healthy hair.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Fragrances</h3>
            <p className="text-gray-600">Refreshing perfumes and body mists for every occasion.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Natural & Organic</h3>
            <p className="text-gray-600">Eco-friendly products made with natural ingredients.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Gift Sets</h3>
            <p className="text-gray-600">Perfect bundles for loved ones and special occasions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cosmetics;
