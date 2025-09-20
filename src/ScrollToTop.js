import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // avoids smooth scroll delay
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
