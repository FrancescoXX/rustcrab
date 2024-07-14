import { useEffect } from 'react';

declare global {
  interface Window {
    CustomSubstackWidget: {
      substackUrl: string;
      placeholder: string;
      buttonText: string;
      theme: string;
    };
  }
}

export default function SubstackCustom() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;

    document.body.appendChild(script);

    window.CustomSubstackWidget = {
      substackUrl: "francescociulla.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "orange",
    };
  }, []);

  return <div id="custom-substack-embed" className="w-full max-w-md mx-auto my-8"></div>;
}
