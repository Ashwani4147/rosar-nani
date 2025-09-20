// import React, { useState, useEffect, useRef } from "react";
// import { X, Menu } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { changeLanguage } from "../../i18n";
// import logos1 from "../../assets/logos1.png";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const { t, i18n } = useTranslation();
//   const menuRef = useRef(null); // ✅ Ref for menu container
//   const buttonRef = useRef(null); // ✅ Ref for hamburger button

//   const navLinks = [
//     { name: t("welcome"), href: "home" },
//     { name: t("about"), href: "about" },
//     { name: t("services"), href: "services" },
//     { name: t("quality"), href: "quality" },
//     { name: t("testimonials"), href: "testimonials" },
//     { name: t("contact"), href: "contact" },
//   ];

//   const handleNavClick = (id) => {
//     setActiveSection(id);
//     setIsMenuOpen(false);
//     const section = document.getElementById(id);
//     if (section) {
//       const headerHeight = document.querySelector("header")?.offsetHeight || 0;
//       const sectionTop = section.offsetTop - headerHeight;
//       window.scrollTo({
//         top: sectionTop,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + window.innerHeight / 3;
//       for (let link of navLinks) {
//         const section = document.getElementById(link.href);
//         if (section) {
//           const { offsetTop, offsetHeight } = section;
//           if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
//             setActiveSection(link.href);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMenuOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
//       <nav className="container mx-auto max-w-full px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center flex-shrink-0">
//           <button
//             onClick={() => handleNavClick("home")}
//             className="flex items-center hover:scale-105 transition-transform duration-200"
//           >
//             <img
//               src={logos1}
//               alt="Rosar Nani Logo"
//               className="h-8 sm:h-9 md:h-10 w-auto"
//             />
//           </button>
//         </div>

//         <div className="hidden xl:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <button
//               key={link.href}
//               onClick={() => handleNavClick(link.href)}
//               className={`font-medium transition-colors duration-300 hover:scale-105 ${
//                 activeSection === link.href
//                   ? "text-[#419fa4] border-b-2 border-[#419fa4] font-semibold"
//                   : "text-gray-700 hover:text-[#419fa4]"
//               }`}
//             >
//               {link.name}
//             </button>
//           ))}
//           <select
//             value={i18n.language}
//             onChange={(e) => changeLanguage(e.target.value)}
//             className="border border-[#419fa4] rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center focus:outline-none focus:ring-2 focus:ring-[#419fa4] focus:border-[#419fa4] transition duration-200 hover:shadow-md"
//           >
//             <option value="en">English</option>
//             <option value="th">ไทย/Thai</option>
//           </select>
//         </div>

//         <div className="flex items-center xl:hidden">
//           <button
//             ref={buttonRef} // ✅ Attach ref to hamburger button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#419fa4] rounded-md p-2"
//             aria-label="Toggle navigation menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {isMenuOpen && (
//         <div
//           ref={menuRef}
//           className="xl:hidden bg-white shadow-lg border-t border-gray-100"
//         >
//           <div className="flex flex-col items-center py-4 space-y-4">
//             {navLinks.map((link) => (
//               <button
//                 key={link.href}
//                 onClick={() => handleNavClick(link.href)}
//                 className={`w-full text-center py-3 text-lg transition-colors duration-300 ${
//                   activeSection === link.href
//                     ? "text-[#419fa4] bg-gray-100 font-bold"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 {link.name}
//               </button>
//             ))}
//             <select
//               value={i18n.language}
//               onChange={(e) => changeLanguage(e.target.value)}
//               className="border border-[#419fa4] rounded-lg px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center focus:outline-none focus:ring-2 focus:ring-[#419fa4] focus:border-[#419fa4] transition duration-200 hover:shadow-md"
//             >
//               <option value="en">English</option>
//               <option value="th">ไทย/Thai</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;



////  
import React, { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";
import logos1 from "../../assets/logos1.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = [
    { name: t("welcome"), href: "home" },
    { name: t("about"), href: "about" },
    { name: t("servicesLabel1"), href: "services" },
    { name: t("quality"), href: "quality" },
    { name: t("testimonials"), href: "testimonials" },
    { name: t("contact"), href: "contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // ✅ Language dropdown logic: show current language in box, other as option
  const languageOptions = () => {
    if (i18n.language === "th") {
      return <option value="en">English</option>;
    } else {
      return <option value="th">ไทย</option>;
    }
  };

  const languageLabel = i18n.language === "th" ? "ไทย" : "English"; // ✅ Display in box

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="container mx-auto max-w-full px-4 py-4 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={logos1}
              alt="Rosar Nani Logo"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
          </button>
        </div>

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
            value={i18n.language}
            onChange={(e) => {changeLanguage(e.target.value);
               e.target.blur();
            }}
           // className="px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center rounded-lg focus:outline-none transition duration-200 hover:shadow-md"
        className="border border-[#419fa4] rounded-lg px-4 py-2 text-gray-700 bg-white w-32 text-center
             focus:outline-none focus:ring-2 focus:ring-[#267b7f] focus:border-[#267b7f] transition duration-200"
>
            <option value={i18n.language}>{languageLabel}</option> {/* ✅ Current language */}
            {languageOptions()}
          </select>
        </div>

        <div className="flex items-center xl:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#419fa4] rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div ref={menuRef} className="xl:hidden bg-white shadow-lg border-t border-gray-100">
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
            {/* <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center rounded-lg focus:outline-none transition duration-200 hover:shadow-md"
            >
              <option value={i18n.language}>{languageLabel}</option>
              {languageOptions()}
            </select> */}
             <select
            value={i18n.language}
            onChange={(e) => {changeLanguage(e.target.value);
               e.target.blur();
            }}
           // className="px-4 py-2 text-gray-700 bg-white shadow-sm w-32 text-center rounded-lg focus:outline-none transition duration-200 hover:shadow-md"
        className="border border-[#419fa4] rounded-lg px-4 py-2 text-gray-700 bg-white w-32 text-center
             focus:outline-none focus:ring-2 focus:ring-[#267b7f] focus:border-[#267b7f] transition duration-200"
>
            <option value={i18n.language}>{languageLabel}</option> {/* ✅ Current language */}
            {languageOptions()}
          </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

