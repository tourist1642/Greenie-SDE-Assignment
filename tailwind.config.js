/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "1p": "1%",
        "2p": "2%",
        "3p": "3%",
      },
      margin: {
        "1p": "1%",
        "2p": "2%",
        "3p": "3%",
        "1w": "1vw",
        "2w": "2vw",
      },
      borderRadius: {
        10: "10px",
      },
      borderColor: {
        b1: "rgba(0, 0, 0, 0.1)", // normal border type 1
        b2: "rgba(0, 0, 0, 0.15)", // normal border type 2
        b3: "rgba(0, 0, 0, 0.2)", // normal border type 3
        b4: "rgba(0, 0, 0, 0.25)", // normal border type 4
        b5: "rgba(46, 60, 82, 0.3)", // for filter btn
        b6: "rgba(0, 0, 0, .4)", // normal border type 5
        b7: "#2E3C52", // for primary button
        b8: "rgba(217, 217, 217, 0.3)", // for dark theme table

        b9: "rgba(255, 255, 255, 0.2)", // for dark theme
        b10: "#4B6DF1", // for border in dark theme around buttons
      },
      height: {
        15: "60px",
      },
      backgroundColor: {
        blue1: "#303E55",
        inputBg: "rgba(0, 0, 0, 0.08)",
        inputBgDark: "#3D495B",
        lightGreyBg: "rgba(245, 245, 245, 0.38)",

        greyBg: "rgba(46, 60, 82, 0.15)",
        greyBg2: "rgba(217, 217, 217, 0.3)",
        greyBg3: "rgba(224, 226, 229, 1)",
        greyBg4: "rgba(217, 217, 217, 0.25)",
        lightBlue: "rgba(244, 248, 255, 0.79)",

        lightGreen: "#EAF2F1",
        lightGreen2: "#539487",

        lightBlack: "#2C394D", // old : "#282D31",
        lightBlack2: "#202B3E", // old : "#21262A",
        lightBlack3: "#3D495B", // old : #404246 , this is darkInputBg
        lightBlack4: "#484C50",
        lightBlack5: "#3B3E4E",
        lightBlack6: "#2F3D56",
        lightBlack6: "#32415E",
      },

      colors: {
        filterText: "rgba(0, 0, 0, 0.5)",
        critical: "#CE3733",
        high: "#EC8830",

        medium: "#FDBC2C",
        low: "#37A440",
        none: "#6B7280",

        lightBlack1: "rgba(255, 255, 255, 0.63)",
        lightBlack2: "rgba(255, 255, 255, 0.5)",

        lightGreen: "#EAF2F1",
        lightGreen2: "#539487",

        blue1: "#4B65ED",
      },
      boxShadow: {
        bs1: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
