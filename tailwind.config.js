/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "androidchromeaddress-field-background-light":
          "var(--androidchromeaddress-field-background-light)",
        "androidtext-secondary": "var(--androidtext-secondary)",
        black: "var(--black)",
        "deepblue-140": "var(--deepblue-140)",
        "gray-70": "var(--gray-70)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-bold": "var(--body-bold-font-family)",
        "body-medium": "var(--body-medium-font-family)",
        "caption-m-medium": "var(--caption-m-medium-font-family)",
        "header-1": "var(--header-1-font-family)",
        "header-3": "var(--header-3-font-family)",
      },
    },
  },
  plugins: [],
};
