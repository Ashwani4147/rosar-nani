import React from 'react';

export function Food() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
          Food Delicacies
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore our wide range of exquisite culinary creations, from gourmet dishes to sweet treats, crafted to delight your senses.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Gourmet Meals</h3>
            <p className="text-gray-600">Delicious main courses crafted with the finest ingredients.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Pastries & Desserts</h3>
            <p className="text-gray-600">Indulgent sweets and pastries to satisfy your cravings.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Healthy Snacks</h3>
            <p className="text-gray-600">Nutritious and delicious options for a quick bite.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Vegan Options</h3>
            <p className="text-gray-600">Flavorful plant-based dishes that are good for you and the planet.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Drinks & Smoothies</h3>
            <p className="text-gray-600">Refreshing beverages and superfood smoothies.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Seasonal Specials</h3>
            <p className="text-gray-600">Unique dishes that feature fresh, seasonal ingredients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
