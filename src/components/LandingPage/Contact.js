import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // ✅ new: loading state to prevent multiple submits

  // Validation function
  const validate = (fieldValues = formData) => {
    const tempErrors = { ...errors };

    if ("name" in fieldValues) {
      if (!fieldValues.name.trim()) tempErrors.name = "Name is required";
      else if (fieldValues.name.trim().length < 3 || fieldValues.name.trim().length > 20)
        tempErrors.name = "Name must be between 3 and 20 characters";
      else tempErrors.name = "";
    }

    if ("email" in fieldValues) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValues.email.trim()) tempErrors.email = "Email is required";
      else if (!emailRegex.test(fieldValues.email.trim())) tempErrors.email = "Invalid email address";
      else tempErrors.email = "";
    }

    if ("message" in fieldValues) {
      if (!fieldValues.message.trim()) tempErrors.message = "Message is required";
      else if (fieldValues.message.trim().length < 10 || fieldValues.message.trim().length > 1000)
        tempErrors.message = "Message must be between 10 and 1000 characters";
      else tempErrors.message = "";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // live validation
    let fieldError = "";
    if (name === "name") {
      if (!value.trim()) fieldError = "Name is required";
      else if (value.trim().length < 3 || value.trim().length > 20)
        fieldError = "Name must be between 3 and 20 characters";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) fieldError = "Email is required";
      else if (!emailRegex.test(value.trim())) fieldError = "Invalid email address";
    } else if (name === "message") {
      if (!value.trim()) fieldError = "Message is required";
      else if (value.trim().length < 10 || value.trim().length > 1000)
        fieldError = "Message must be between 10 and 1000 characters";
    }
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // prevent submit if validation fails
    if (loading) return;      // ✅ prevent multiple clicks

    setLoading(true);
    setPopupMessage("");
    setShowPopup(false);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setPopupMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setPopupMessage("❌ Failed to send message");
      }
    } catch (err) {
      console.error("Error:", err);
      setPopupMessage("⚠️ An error occurred while sending message");
    } finally {
      setShowPopup(true);
      setLoading(false); // ✅ re-enable button
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  // Disable submit button if form is invalid or loading
  const isSubmitDisabled =
    !formData.name ||
    !formData.email ||
    !formData.message ||
    Object.values(errors).some((x) => x !== "") ||
    loading; // ✅ added loading here

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6" style={{ color: "#419fa4" }}>
            {t("contactTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("contactText")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="border-0 shadow-lg rounded-lg" style={{ backgroundColor: "#ffffff" }}>
            <div className="p-8">
              <h3 className="text-2xl mb-6" style={{ color: "#419fa4" }}>
                {t("contactFormTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
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
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                    }`}
                    placeholder={t("namePlaceholder")}
                  />
                  {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
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
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                    }`}
                    placeholder={t("emailPlaceholder")}
                  />
                  {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
                    }`}
                    placeholder={t("messagePlaceholder")}
                  ></textarea>
                  {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className={`w-full py-3 px-6 text-white font-semibold rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg ${
                    isSubmitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#419fa4] hover:bg-[#50c4ca]"
                  }`}
                >
                  {loading ? "Sending..." : t("sendButton")}
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
               <p className="text-gray-600 mb-8 leading-relaxed">{t("contactInfoText")}</p>
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
                    href="https://www.google.com/maps?q=16.633680,103.783387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4]"
                  >
                    {t("locationText")}
                  </a>
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
                    className="text-gray-600 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4]"
                  >
                    {t("phoneText")}
                  </a>
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
                    className="text-gray-600 hover:text-[#419fa4] hover:underline hover:decoration-[#419fa4]"
                  >
                    {t("emailText")}
                  </a>
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


      {/* Popup notification */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-3 text-gray-800 z-50">
          {popupMessage}
        </div>
      )}
    </section>
  );
}
