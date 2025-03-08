/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: "var(--white-color)",
        blackColor: "var(--black-color)",
        themeColor: "var(--theme-color)",
        buySectionBg: "var(--buy-section-bg)",
        buySectionCardColor: "var(--buy-section-card-color)",
        footerColor: "var(--footer-color)",
        launchpadBg: "var(--launchpad-bg)",
      },
    },
  },
  plugins: [],
};
