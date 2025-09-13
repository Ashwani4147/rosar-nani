import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { t } = useTranslation();

  const navLinks = [
    { name: t("welcome"), href: "home" },
    { name: t("about"), href: "about" },
    { name: t("services"), href: "services" },
    { name: t("quality"), href: "quality" },
    { name: t("testimonials"), href: "testimonials" },
    { name: t("contact"), href: "contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(`#${id}`);
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold text-purple-800 hover:scale-105 transition-transform duration-300"
        >
          Rosar Nani
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium transition-colors duration-300 hover:scale-105 ${
                activeSection === `#${link.href}`
                  ? "text-purple-800 border-b-2 border-purple-800 font-semibold"
                  : "text-gray-700 hover:text-purple-800"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Language Dropdown */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-gray-700"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-center py-3 text-lg transition-colors duration-300 ${
                  activeSection === `#${link.href}`
                    ? "text-purple-800 bg-gray-100 font-bold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
