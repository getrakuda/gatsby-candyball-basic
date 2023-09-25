/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "modal": "rgba(0, 0, 0, 0.7)",
        "drk-base": "#272935",
        "drk-primary": "#a991f7",
        "drk-secondary": "#f6d860",
        "drk-accent": "#37cdbe",
        "drk-neutral": "#3d4451",

        "drk-txt-high": "#F8F8F2",
        "drk-txt-base": "#CDCECC",


        "base": "#FAF7F5",
        "primary": "#a991f7",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",

        "txt-high": "#291334",
        "txt-base": "#53415B",
      },
    },
  },
  plugins: [],
}

