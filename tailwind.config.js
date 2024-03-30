/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blanchedalmond: "#f1e4c3",
        c6a9692: "#c6a969",
        gray: {
          "100": "#161616",
          "200": "#040000",
          "300": "#010101",
          "400": "rgba(0, 0, 0, 0.4)",
          "500": "rgba(0, 0, 0, 0.08)",
          "600": "rgba(255, 255, 255, 0.4)",
          "700": "rgba(130, 130, 130, 0.7)",
        },
        "eventjoy-grayish-black": "#1d1d1d",
        "assignment-1-yellow": "#ffe047",
        black: "#000",
        "eventify-dark-bluish-grey": "#2d2c3c",
        "eventify-dark-grey": "#5a5a5a",
        e52: "#597e52",
        "assignment-1-dark-bluish-grey": "#2d2c3b",
        c6a969: "#f2ead3",
        ffffec: "#ffffec",
        dimgray: {
          "100": "#6f6f6f",
          "200": "#636363",
          "300": "rgba(111, 111, 111, 0.5)",
          "400": "rgba(90, 90, 90, 0.6)",
          "500": "rgba(90, 90, 90, 0.5)",
        },
        gold: {
          "100": "#ffe045",
          "200": "#f2db0c",
        },
        "eventify-white": "#fff",
        burlywood: "#be9058",
        darkgray: {
          "100": "#acacac",
          "200": "#a9a9a9",
          "300": "#a3a3a3",
        },
        rosybrown: "#916060",
        "eventify-light-grey": "#eee",
        slateblue: "#4539b4",
        "green-green200": "#c6f6d5",
        "green-green600": "#38a169",
        "orange-orange200": "#feebc8",
        "orange-orange600": "#dd6b20",
        "red-red100": "#fff5f5",
        "purple-purple100": "#faf5ff",
        "blue-blue100": "#ebf8ff",
        "green-green100": "#f0fff4",
        "gray-gray200": "#edf2f7",
        "gray-gray400": "#cbd5e0",
        "gray-gray600": "#718096",
        primary: "#615ef0",
        "gray-gray300": "#e2e8f0",
        "eventify-dark-navy-blue": "#2b293d",
        gainsboro: {
          "100": "#dcdcdc",
          "200": "#d8d8d8",
        },
        silver: {
          "100": "#bfb8b9",
          "200": "#b9b9b9",
        },
        whitesmoke: {
          "100": "#f8f7fa",
          "200": "#f1f1f1",
        },
        "green-green400": "#68d391",
        mediumslateblue: "rgba(97, 94, 240, 0.06)",
        lightgray: "#d9cece",
        lightslategray: "#7f9fbe",
      },
      spacing: {},
      fontFamily: {
        "la-belle-aurore": "'La Belle Aurore'",
        "assignment-1-big-title": "Montserrat",
        "assignment-1-small-title": "'Open Sans'",
        lalezar: "Lalezar",
        inter: "Inter",
        asap: "Asap",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "21xl": "40px",
        "12xs-5": "0.5px",
        "51xl": "70px",
        "101xl": "120px",
        "4xs-3": "8.3px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "5xl": "24px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      "21xl": "40px",
      "9xl": "28px",
      "7xl": "26px",
      "3xl": "22px",
      lgi: "19px",
      "17xl": "36px",
      xs: "12px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
