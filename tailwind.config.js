export default {
  content: [
    "./theme/views/**/*.twig",
    "./theme/blocks/**/*.twig",
    "./theme/assets/**/*.js",
    "./theme/assets/**/*.css",
  ],
  theme: {
    extend: {
      spacing: {
        px: "1px",
        "2px": "2px",
      },
      colors: {
        eg: {
          blue: "#3485a7",
          darkblue: "#1C285C",
          black: "#424b54",
        },
        gray: "#3D3D3D",
        offwhite: "#EEEEEE",
        primary: "#E58B00",
        hover: "#096285",
      },
      fontSize: {
        mega: "8rem",
        mighty: "12rem",
        massive: "16rem",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        popp: ["Poppins", "serif"],
        ant: ["Anton", "sans-serif"],
      },
      inset: {
        "1/2": "50%",
      },
      minHeight: {
        300: "300px",
        450: "450px",
      },
      screens: {
        sm: "530px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      keyframes: {
        rotateClosed: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        rotateOpen: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-180deg)" },
        },
      },
      animation: {
        rotateClosed: "rotateClosed 1s ease-in-out",
        rotateOpen: "rotateOpen 1s ease-in-out",
      },
      maxWidth: {
        wide: "100%",
        narrow: "33rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
