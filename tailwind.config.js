const defaultTheme = require("tailwindcss/defaultTheme")

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      display: [
        "Inter var",
        "Noto Sans Thai",
        "SF Pro Display",
        "Sukhumvit Set",
        "Kanit",
        ...defaultTheme.fontFamily.sans,
      ],
      texts: ["Bai Jamjuree", ...defaultTheme.fontFamily.sans],
      game: ["Prompt", "Inter var", ...defaultTheme.fontFamily.sans],
      mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
    },
    screens: {
      xs: "500px",
      sm: "640px",
      // md: "768px",
      lg: "768px",
      xl: "1280px",
    },

    fontSize: {
      xs: ["12px", "15px"],
      sm: ["16px", "27.2px"],
      md: ["20px", "24.2px"],
      xl: ["24px", "29px"],
      "2xl": ["36px", "44px"],
      "3xl": ["48px", "56px"],
      "4xl": ["64px", "72px"],
      "5xl": ["80px", "88px"],
      "6xl": ["96px", "104px"],
    },
    colors: {
      "cyan-text": "#4461AD",
      "blue-edit": {
        300: "#4565DB",
      },
      "blue-text": "#37498B",
      white: "#ffffff",
      gray: {
        300: "#D9D9D9",
        500: "#828282",
      },
      cream: "#FFF6E8",
      orange: "#F68D55",
      black: "000000",
      purple: "#1B0C76",
      "deep-turquoise": "#004373",
      "bright-orange": "#E96F26",
    },
  },

  plugins: [require("@tailwindcss/typography")],
}
