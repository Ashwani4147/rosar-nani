import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";
import logos1 from "../../assets/logos1.png"; // The logo you want to use

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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
    setActiveSection(id);
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let link of navLinks) {
        const section = document.getElementById(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      {/* ✅ Added max-w-full to container to ensure full width on screens wider than 1280px */}
      <nav className="container mx-auto max-w-full px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={logos1}
              alt="Rosar Nani Logo"
              className="h-8 md:h-10 w-auto" // ✅ h-8 on small screens, h-10 on medium and larger screens
            />
          </button>
        </div>

        {/* Full Header Menu - visible only on xl and larger screens (>= 1280px) */}
        <div className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium transition-colors duration-300 hover:scale-105 ${
                activeSection === link.href
                  ? "text-[#419fa4] border-b-2 border-[#419fa4] font-semibold"
                  : "text-gray-700 hover:text-[#419fa4]"
              }`}
            >
              {link.name}
            </button>
          ))}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-gray-700"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
          </select>
        </div>

        {/* Hamburger Menu Button - visible on screens smaller than xl */}
        <div className="flex items-center xl:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#419fa4] rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - shown only on smaller than xl screens when hamburger is clicked */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-center py-3 text-lg transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-[#419fa4] bg-gray-100 font-bold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ))}
            {/* Language Selector for Mobile View */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-gray-700 w-3/4 text-center"
            >
              <option value="en">English</option>
              <option value="th">ไทย</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
