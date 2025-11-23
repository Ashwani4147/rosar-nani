// import React from "react";
// import { useTranslation } from "react-i18next";

// const ImageAndText = () => {
//   const { t } = useTranslation();
//   // const imageUrl =
//   //   "https://images.unsplash.com/photo-1629195352884-1ec52b94ffa7";

//   const imageUrl = "/homeImg.png"

//   // Function to scroll to the "services" section
//   const handleExploreClick = () => {
//     const section = document.getElementById("services");

//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       /* 
//         Set the image container height to 85% of viewport (85vh) for all screens
//         This overrides the previous full-screen height
//         Text size and button remain unchanged
//       */
//       className="relative w-full min-h-[85vh] bg-cover bg-center"
//       style={{ backgroundImage: `url('${imageUrl}')` }}
//     >
//       {/* Overlay to darken the image and create a gradient */}
//       <div className="absolute inset-0 bg-black/40"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-500/20"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex items-center justify-center p-4 pt-40">
//         <div className="text-center text-white">
//           {/* Title */}
//           <h1 className="text-6xl font-bold mb-4" style={{ color: "#d4af37" }} >{t("hero.landtitle")}</h1>

//           {/* Subtitle */}
//           {/* <p className="text-xl mb-8">{t("hero.landsubtitle")}</p> */}

//           {/* Button */}
//           {/* <button
//             onClick={handleExploreClick}
//             style={{ backgroundColor: "#f8be6a" }}
//             className="text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full hover:opacity-90"
//           >
//             {t("hero.button")}
//           </button> */}

//           {/* Buttons */}
// <div className="flex items-center justify-center gap-6 mt-8">
//   <button
//     onClick={handleExploreClick}
//     style={{ backgroundColor: "#f8be6a" }}
//     className="text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full hover:opacity-90"
//   >
//     {t("hero.button")}
//   </button>

//   <button
//     style={{ backgroundColor: "#f8be6a" }}
//     className="text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full hover:opacity-90"
//   >
//     {t("hero.secondbutton")}
//   </button>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageAndText;


// with popup component

import React from "react";
import { useTranslation } from "react-i18next";
import AppointmentPopup from "../AppointmentPopup"; // make sure path is correct

const ImageAndText = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const imageUrl = "/homeImg.png";

  // Scroll to services section
  const handleExploreClick = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full min-h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-500/20"></div>

      {/* Text and Buttons */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pt-40">
        <div className="text-center text-white">
          {/* Title */}
          <h1
            className="text-6xl font-bold mb-4"
            style={{ color: "#d4af37" }}
          >
            {t("hero.landtitle")}
          </h1>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* First Button */}
            <button
              onClick={handleExploreClick}
              style={{ backgroundColor: "#f8be6a" }}
              className="text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full hover:opacity-90"
            >
              {t("hero.button")}
            </button>

            {/* Second Button — Opens Popup */}
            <button
              onClick={() => setOpen(true)}
              style={{ backgroundColor: "#f8be6a" }}
              className="text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-full hover:opacity-90"
            >
              {t("hero.secondbutton")}
            </button>
          </div>
        </div>
      </div>

      {/* Popup Component */}
      <AppointmentPopup open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ImageAndText;
