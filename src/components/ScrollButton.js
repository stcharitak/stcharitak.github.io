import React, { useEffect, useState } from "react";

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <div onClick={handleScrollToTop} className="lmpixels-scroll-to-top">
      <i className="lnr lnr-chevron-up"></i>
    </div>
  ) : null;
}
