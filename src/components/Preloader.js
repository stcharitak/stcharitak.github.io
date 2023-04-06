import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [hideLoader, setHiddenLoader] = useState(false);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (!hideLoader) {
        setHiddenLoader(true);
      }
    }, 1000);
    return () => clearInterval(timeout);
  }, [hideLoader]);

  return (
    <div className={hideLoader ? "hidden" : ""}>
      <div className="preloader">
        <div className="preloader-animation">
          <div className="preloader-spinner"></div>
        </div>
      </div>
    </div>
  );
}
