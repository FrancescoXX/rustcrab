"use client";

import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [userHasConsented, setUserHasConsented] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const cookieConsent = cookies.get('cookieConsent');
    if (cookieConsent) {
      setUserHasConsented(true);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    cookies.set('cookieConsent', true, {
      maxAge: 150 * 24 * 60 * 60, // 150 days in seconds
    });
    setUserHasConsented(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    cookies.set('cookieConsent', false, {
      maxAge: 150 * 24 * 60 * 60, // 150 days in seconds
    });
    setUserHasConsented(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
  <p>This website uses cookies to improve your experience. By continuing to use this website, you consent to our use of cookies.</p>
  <button className="accept-button" onClick={handleAccept}>Accept</button>
  <button className="decline-button" onClick={handleDecline}>Decline</button>
</div>
  );
};

export default CookieConsentBanner;