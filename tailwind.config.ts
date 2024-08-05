/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Inter", "ui-sans-serif", "system-ui"],
      },

      screens: {
        'extra-small':'320px',
        // => @media (min-width: 320px) { ... }
        'small':'420px',
        // => @media (min-width: 420px) { ... }
        'small-medium':'640px',
        // => @media (min-width: 640px) { ... }

      },
    },
  },
  plugins: [],
};
