import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Services() {
  const { t, i18n } = useTranslation(); 
  const hoverOverlayColor = "rgba(65, 159, 164, 0.2)";

  // Define services array with routing links and image
  const servicesData = [
    {
      titleKey: "servicesList.0.title",
      descriptionKey: "servicesList.0.description",
      image:
        "https://images.unsplash.com/photo-1757358958170-501b384915b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMGRlbGljYWNpZXN8ZW58MXx8fHwxNzU3NTczMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/food",
    },
    {
      titleKey: "servicesList.1.title",
      descriptionKey: "servicesList.1.description",
      image:
        "https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWxvbiUyMHNwYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTc1NzMwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/salon",
    },
    {
      titleKey: "servicesList.2.title",
      descriptionKey: "servicesList.2.description",
      image:
        "https://images.unsplash.com/photo-1644641811682-0439fd0185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb3NtZXRpYyUyMHByb2R1Y3RzJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzU3NTczMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/cosmetics",
    },
  ];

  const currentLang = i18n.language || "en"; // fallback to English

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6" style={{ color: "#419fa4" }}>
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicesText')}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link
              key={index}
              to={`/${currentLang}${service.link}`} // ✅ language prefix
              className="group overflow-hidden border-0 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white block"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* ✅ Hover overlay same as demo */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: hoverOverlayColor }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3" style={{ color: "#419fa4" }}>
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
