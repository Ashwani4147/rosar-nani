import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AppointmentPopup from "../AppointmentPopup";

const CallToAction = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-[#86c9d8] via-[#efb1fa] to-[#f8be6a] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("cosmetic.cta.title")}
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            {t("cosmetic.cta.description")}
          </p>

          {/* CTA BUTTON */}
          <button
            className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#f8be6a",
              border: "1px solid var(--food-tertiary)",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#c49654")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f8be6a")}
            onClick={() => setOpen(true)}
          >
            Book an Appointment
          </button>
        </div>
      </section>

      {/* REUSABLE POPUP COMPONENT */}
      <AppointmentPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CallToAction;
