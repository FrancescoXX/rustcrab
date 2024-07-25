"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 }); // Set consent cookie for 1 year
    setShowBanner(false);
  };

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center z-20">
      <p>
        This website uses cookies to enhance the user experience.
        <button
          onClick={handleAccept}
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          I understand
        </button>
      </p>
    </div>
  );
};

export default CookieConsent;
