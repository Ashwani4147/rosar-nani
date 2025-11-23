import React, { useState } from "react";

const AppointmentPopup = ({ open, onClose }) => {

  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    timing: "",
    service: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const resetAll = () => {
    setFormData(initialFormState);
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT with API CALL (same style as Contact.js)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setPopupMessage("");
    setShowPopup(false);

    try {
      const res = await fetch("http://localhost:5000/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setPopupMessage("✅ Appointment booked successfully!");
        resetAll();
      } else {
        setPopupMessage("❌ Failed to book appointment");
      }
    } catch (err) {
      console.error("Error:", err);
      setPopupMessage("⚠️ Error while booking appointment");
    } finally {
      setShowPopup(true);
      setLoading(false);

      // Auto fade in 5 seconds
      setTimeout(() => {
        setShowPopup(false);
        handleClose(); // close popup
      }, 5000);
    }
  };

  return (
    <>
      {/* <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"> */}
      <div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
        onClick={handleClose}   // Close when clicking outside
      >
        {/* <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative"> */}
        <div
          className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative"
          onClick={(e) => e.stopPropagation()}  // Prevent close when clicking inside
        >

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
            onClick={handleClose}
          >
            &times;
          </button>

          <h3 className="text-2xl mb-4 font-bold text-center" style={{ color: "#419fa4" }}>
            Book Your Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-1 text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* TIMING DROPDOWN */}
            {/* <div>
              <label className="block mb-1 text-gray-700">Preferred Timing</label>
              <select
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled>
                  Select timing
                </option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div> */}

            {/* SERVICE DROPDOWN */}
            <div>
              <label className="block mb-1 text-gray-700">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled>Select service</option>
                <option value="hairService">Hair Service</option>
                <option value="nailService">Nail Service</option>
                <option value="lashService">EyeLash Service</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            {!loading && (
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#419fa4" }}
              >
                Submit
              </button>
            )}

            {loading && (
              <button
                disabled
                className="w-full py-3 px-6 bg-gray-400 text-white rounded-md"
              >
                Submitting...
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-3 text-gray-800 z-50">
          {popupMessage}
        </div>
      )}
    </>
  );
};

export default AppointmentPopup;
