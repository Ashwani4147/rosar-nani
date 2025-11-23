import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = t("footerQuickLinks", { returnObjects: true });
    // Convert policies object to array
  const policies = Object.values(t("footerPolicies", { returnObjects: true }));
  const contact = t("footerContact", { returnObjects: true });


  const openContactPopup = (policy) => {
    console.log("Selected policy:", policy);
    setSelectedPolicy(policy);
    setIsContactOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactOpen(false);
    setSelectedPolicy(null);
  };

  return (
    <>
      <footer id="footer" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#419fa4" }}
              >
                {t("footerBrand")}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("footerDescriptionlashsrv")}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
                    style={{ backgroundColor: "#419fa4" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#50c4ca")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#419fa4")
                    }
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "#419fa4" }}
              >
                {t("footerQuickLinksTitle")}
              </h4>
              <ul className="space-y-2">
                {t("footerQuickLinksfoodsrv", { returnObjects: true }).map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 transition-colors duration-300 hover:text-[#86c9d8]"
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "#419fa4" }}
              >
                {t("footerContactTitle")}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps?q=16.633680,103.783387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4]"
                  >
                    {contact.location}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-300 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4]"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-300 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4]"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "#419fa4" }}
              >
                {t("footerPoliciesTitle")}
              </h4>
              <ul className="space-y-2">
                {policies.map((policy, index) => (
                  <li key={index}>
                    {/* Option 1: Old link behavior */}
                    {/* <a
                      href={policy.href}
                      className="text-gray-300 hover:text-[#86c9d8] transition-colors duration-300"
                    >
                      {policy.name}
                    </a> */}

                    {/* Option 2: New popup behavior */}
                    <button
                      onClick={() => openContactPopup(policy)}
                      className="text-gray-300 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4] transition-colors duration-300"
                    >
                      {policy.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">{t("footerCopyright")}</p>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      {isContactOpen && selectedPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg relative">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#419fa4" }}
            >
              {selectedPolicy.name}
            </h3>
            <p className="text-gray-600">{selectedPolicy.description}</p>
            <div className="mt-4 text-center">
              <button
                onClick={closeContactPopup}
                className="px-4 py-2 bg-[#419fa4] text-white rounded hover:bg-opacity-90 transition"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
