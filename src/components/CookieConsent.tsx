"use client";
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center">
            <p>
                This website uses cookies to enhance the user experience.
                <button
                    onClick={handleAccept}
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    I understand
                </button>
            </p>
        </div>
    );
};

export default CookieConsent;
