import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6" style={{ color: "#419fa4" }}>
            {t("contactTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contactText")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="border-0 shadow-lg rounded-lg" style={{ backgroundColor: "#ffffff" }}>
            <div className="p-8">
              <h3 className="text-2xl mb-6" style={{ color: "#419fa4" }}>
                {t("contactFormTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    {t("emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={t("messagePlaceholder")}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-semibold rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: "#419fa4" }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#75b3c3")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#419fa4")}
                >
                  {t("sendButton")}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6" style={{ color: "#419fa4" }}>
                {t("contactInfoTitle")}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t("contactInfoText")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#419fa4] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1" style={{ color: "#419fa4" }}>
                    {t("locationTitle")}
                  </h4>
                 <a
        href="https://www.google.com/maps?q=28.6129,77.2295" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:underline"
      >
        {t("locationText")}
      </a>
                 {/* <p className="text-gray-600">{t("locationText")}</p> */}

                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1" style={{ color: "#419fa4" }}>
                    {t("phoneTitle")}
                  </h4>

                  <a
        href="tel:+15551234567"
        className="text-gray-600 hover:underline"
      >
        {t("phoneText")}
      </a>

                 {/* <p className="text-gray-600">{t("phoneText")}</p> */}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1" style={{ color: "#419fa4" }}>
                    {t("emailTitle")}
                  </h4>

                  <a
        href="mailto:hello@rosarnani.com"
        className="text-gray-600 hover:underline"
      >
        {t("emailText")}
      </a>
               {/*   <p className="text-gray-600">{t("emailText")}</p> */}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
              <h4 className="text-lg text-purple-800 mb-3">{t("businessHoursTitle")}</h4>
              <div className="space-y-2 text-gray-600">
                <p>{t("businessHoursMonFri")}</p>
                <p>{t("businessHoursSat")}</p>
                <p>{t("businessHoursSun")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
