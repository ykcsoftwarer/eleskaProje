/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{jsx,js}",
    "./node_modules/tw-elements/dist/js/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      screens: {
       
        xxls: "2000px",
        // => @media (min-width: 1536px) { ... }
        
        smx: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        mdx: { max: "769px" },
        // => @media (max-width: 639px) { ... }
        range: { min: "768px", max: "1024px" },
        // => @media (min-width: 1280px and max-width: 1535px
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
