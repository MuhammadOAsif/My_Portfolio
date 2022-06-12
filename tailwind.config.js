module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary:
        "@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Dancing+Script&family=Lato&family=Merriweather+Sans&family=Poppins&display=swap')",
      body: "@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Dancing+Script&family=Lato&family=Merriweather+Sans&family=Poppins&display=swap')",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#ac6b34",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [require("daisyui")],
};
