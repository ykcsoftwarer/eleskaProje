/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{jsx,js}",
    "./node_modules/tw-elements/dist/js/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#E12A32",
        },
      },
      screens: {
        xsm: "340px",
        sm: { max: "639px" },
        md: { max: "769px" },
        lg: { min: "770px", max: "1024px" },
        xl: { min: "1025px" },
      },
      boxShadow: {
        Cs: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        sliderShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    
    },
  },

  plugins: [
    require("tw-elements/dist/plugin", "flowbite/plugin", "tailwind-scrollbar"),
  ],
};
