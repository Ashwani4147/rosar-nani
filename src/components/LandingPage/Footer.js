import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = t('footerQuickLinks', { returnObjects: true });
  const policies = t('footerPolicies', { returnObjects: true });
  const contact = t('footerContact', { returnObjects: true });

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#86c9d8" }}>
              {t('footerBrand')}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
                  style={{ backgroundColor: "#86c9d8" }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1e3a8a"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#86c9d8"}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: "#86c9d8" }}>
              {t('footerQuickLinksTitle')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-800 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: "#86c9d8" }}>
              {t('footerContactTitle')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{contact.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: "#86c9d8" }}>
              {t('footerPoliciesTitle')}
            </h4>
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href={policy.href}
                    className="text-gray-300 hover:text-purple-800 transition-colors duration-300"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
}
