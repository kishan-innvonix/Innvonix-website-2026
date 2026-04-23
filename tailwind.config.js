// tailwind.config.js (or tailwind.config.ts)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ for App Router
    "./src/pages/**/*.{js,ts,jsx,tsx}", // ✅ for Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        mlg: "1080px",
        xl: "1280px",
        mxl: "87rem",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
