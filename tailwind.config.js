/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ["Unbounded", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(146deg, #FFBA74 6.85%, #F2D3B5 89.97%)",
        "line-gradient":
          "linear-gradient(146deg, #3B3386 6.85%, #F2D3B5 89.97%)",
        "blue-gradient":
          "linear-gradient(149deg, #34A6FF 0.65%, #DFF5FF 101.54%)",
        "blue-line-gradient":
          "linear-gradient(347deg, #379FFF 17.13%, #0888FF 96.38%)",
        "radio-gradient":
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 52.08%)",
      },

      backgroundColor: {
        "custom-background": "rgba(255, 255, 255, 0.40)",
        "link-background": "rgba(255, 255, 255, 0.20)",
      },

      borderColor: {
        "custom-border": "rgba(255, 255, 255, 0.30)",
      },

      backdropBlur: {
        custom: "30px",
      },

      borderRadius: {
        "custom-large": "1266.508px",
      },

      opacity: {
        20: "0.2",
      },

      rotate: {
        "-132": "-132.577deg",
      },

      boxShadow: {
        "custom-shadow": "20px 6px 60px 0px rgba(58, 60, 70, 0.15)",
      },
    },
  },
  plugins: [],
};
