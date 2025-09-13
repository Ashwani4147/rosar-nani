import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Salon', href: '#salon' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Rosar Nani
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your personalized destination for food delicacies, salon treatments, and customized products.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">
              Quick Links
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
            <h4 className="text-lg font-semibold mb-4 text-pink-500">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">123 Wellness Street, Gourmet District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">hello@rosarnani.com</span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">
              Legal
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
          <p className="text-gray-400">
            © 2025 Rosar Nani. All rights reserved. Designed with care for your personalized experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
