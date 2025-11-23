import React, { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";
import logos1 from "../../assets/logos1.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  // Desktop Services dropdown
  const [isServicesOpenDesktop, setIsServicesOpenDesktop] = useState(false);
  const [isServicesClickedDesktop, setIsServicesClickedDesktop] =
    useState(false);
  const servicesTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Mobile Services dropdown
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  // Main nav links (mix of sections + routes)
  const navLinks = [
    { name: t("welcomeHairService"), href: "home", type: "section" },
    { name: t("Home"), href: "/", type: "page" },
    { name: t("servicesLabel1"), href: "services", type: "section" },
    { name: t("Categories"), href: "categories", type: "section" },
    { name: t("qualitysrv"), href: "quality", type: "section" },
    { name: t("contact"), href: "footer", type: "section" },
  ];

  // Service sub-links (some are new pages)
  const serviceSubLinks = [
    // { name: "Food Service", href: "home", type: "section" },
    // { name: "Salon Service", href: "/salon", type: "page" },
    // { name: "Cosmetics Service", href: "/cosmetics", type: "page" },
    { name: t("serviceLash"), href: "home", type: "section" },
     { name: t("serviceNail"), href: "/nail", type: "page" },
    { name: t("serviceHair"), href: "/hair", type: "page" },
  ];

  // Handle in-page navigation (smooth scroll)
  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    setIsServicesOpenDesktop(false);
    setIsServicesClickedDesktop(false);
    setIsServicesOpenMobile(false);

    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Scroll spy (highlight section)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let link of navLinks) {
        if (link.type === "section") {
          const section = document.getElementById(link.href);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (
              scrollPos >= offsetTop &&
              scrollPos < offsetTop + offsetHeight
            ) {
              setActiveSection(link.href);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsServicesOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close desktop Services dropdown on outside click
  useEffect(() => {
    const handleClickOutsideServices = (event) => {
      if (
        (isServicesOpenDesktop || isServicesClickedDesktop) &&
        servicesRef.current &&
        servicesButtonRef.current &&
        !servicesRef.current.contains(event.target) &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesOpenDesktop(false);
        setIsServicesClickedDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideServices);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideServices);
  }, [isServicesOpenDesktop, isServicesClickedDesktop]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="container mx-auto max-w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={logos1}
              alt="Rosar Nani Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.href === "services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  if (!isServicesClickedDesktop) {
                    clearTimeout(servicesTimeoutRef.current);
                    setIsServicesOpenDesktop(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isServicesClickedDesktop) {
                    servicesTimeoutRef.current = setTimeout(
                      () => setIsServicesOpenDesktop(false),
                      200
                    );
                  }
                }}
              >
                <button
                  ref={servicesButtonRef}
                  onClick={() => setIsServicesClickedDesktop((prev) => !prev)}
                  className={`font-medium transition-colors duration-300 hover:scale-105 ${
                    activeSection === link.href ||
                    location.pathname === link.href
                      ? "text-[#419fa4] border-b-2 border-[#419fa4] font-semibold"
                      : "text-gray-700 hover:text-[#419fa4]"
                  }`}
                >
                  {link.name}
                </button>

                {(isServicesOpenDesktop || isServicesClickedDesktop) && (
                  <div
                    ref={servicesRef}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50"
                  >
                    {serviceSubLinks.map((subLink) =>
                      subLink.type === "page" ? (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => {
                            setIsServicesOpenDesktop(false);
                            setIsServicesClickedDesktop(false);
                          }}
                        >
                          {subLink.name}
                        </Link>
                      ) : (
                        <button
                          key={subLink.href}
                          onClick={() => handleNavClick(subLink.href)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {subLink.name}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : link.type === "page" ? (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-300 hover:scale-105 ${
                  location.pathname === link.href
                    ? "text-[#419fa4] border-b-2 border-[#419fa4] font-semibold"
                    : "text-gray-700 hover:text-[#419fa4]"
                }`}
              >
                {link.name}
              </Link>
            ) : (
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
            )
          )}

          {/* Language Selector */}
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-[#419fa4] rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center focus:outline-none focus:ring-2 focus:ring-[#419fa4] focus:border-[#419fa4] transition duration-200 hover:shadow-md"
          >
            <option value="en">English</option>
            <option value="th">ไทย/Thai</option>
          </select>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center xl:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#419fa4] rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="xl:hidden bg-white shadow-lg border-t border-gray-100"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) =>
              link.href === "services" ? (
                <div key={link.href} className="w-full">
                  <button
                    onClick={() => setIsServicesOpenMobile((prev) => !prev)}
                    className={`w-full text-center py-3 text-lg transition-colors duration-300 ${
                      activeSection === link.href
                        ? "text-[#419fa4] bg-gray-100 font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </button>

                  {isServicesOpenMobile && (
                    <div className="flex flex-col w-full bg-gray-50">
                      {serviceSubLinks.map((subLink) =>
                        subLink.type === "page" ? (
                          <Link
                            key={subLink.href}
                            to={subLink.href}
                            className="w-full text-center py-2 text-gray-700 hover:bg-gray-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpenMobile(false);
                            }}
                          >
                            {subLink.name}
                          </Link>
                        ) : (
                          <button
                            key={subLink.href}
                            onClick={() => handleNavClick(subLink.href)}
                            className="w-full text-center py-2 text-gray-700 hover:bg-gray-200"
                          >
                            {subLink.name}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : link.type === "page" ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`w-full text-center py-3 text-lg transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-[#419fa4] bg-gray-100 font-bold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
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
              )
            )}

            {/* Language Selector */}
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border border-[#419fa4] rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center focus:outline-none focus:ring-2 focus:ring-[#419fa4] focus:border-[#419fa4] transition duration-200 hover:shadow-md"
            >
              <option value="en">English</option>
              <option value="th">ไทย/Thai</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
