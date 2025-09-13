import React from 'react';

export function Services() {
  const services = [
    {
      title: "Food Delicacies",
      description: "Savor exquisite culinary creations crafted with the finest ingredients, tailored to your taste preferences and dietary needs.",
      image: "https://images.unsplash.com/photo-1757358958170-501b384915b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMGRlbGljYWNpZXN8ZW58MXx8fHwxNzU3NTczMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Salon Treatments",
      description: "Indulge in rejuvenating spa and salon services designed to refresh your mind, body, and spirit with personalized care.",
      image: "https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWxvbiUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTc1NzMwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Customized Products",
      description: "Discover premium cosmetic and wellness products specially formulated to match your skin type and personal preferences.",
      image: "https://images.unsplash.com/photo-1644641811682-0439fd0185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb3NtZXRpYyUyMHByb2R1Y3RzJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3NTczMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-purple-800">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our unique blend of culinary excellence, wellness treatments, and personalized products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group overflow-hidden border-0 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3 text-purple-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
