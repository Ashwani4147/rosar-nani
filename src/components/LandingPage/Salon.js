import React from 'react';

export function Salon() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">
          Salon Experience
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Relax and rejuvenate with our premium salon services designed to pamper you from head to toe.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Hair Styling</h3>
            <p className="text-gray-600">Trendy cuts, colors, and treatments for a fresh look.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Facials & Skin Care</h3>
            <p className="text-gray-600">Revitalize your skin with our nourishing treatments.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Manicure & Pedicure</h3>
            <p className="text-gray-600">Pamper your hands and feet with expert care.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Massage Therapy</h3>
            <p className="text-gray-600">Relax your body and mind with soothing massages.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Makeup Services</h3>
            <p className="text-gray-600">Perfect looks for parties, weddings, or casual outings.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Bridal Packages</h3>
            <p className="text-gray-600">Comprehensive beauty care for your big day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salon;
