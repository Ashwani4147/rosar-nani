// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 12.9716, // Replace with your latitude
//   lng: 77.5946, // Replace with your longitude
// };

// const Map = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCQWB9ZQeRPn9z-EUv5mJTB4LE2rba8mUM">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;


import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "150px", // small map for your contact card
};

const center = {
  lat: 16.633680, // replace with your latitude
  lng: 103.783387, // replace with your longitude
};

const MyMap = () => {
    const center = lat && lng ? { lat, lng } : center;
  return (
    <LoadScript googleMapsApiKey="AIzaSyCQWB9ZQeRPn9z-EUv5mJTB4LE2rba8mUM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
