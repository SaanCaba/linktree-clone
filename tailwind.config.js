/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#7c7a7a",
        blackHover: "#a6a4a4",
        green: "#b6f2c4",
        greenHover: "#9bc9a6",
        twitter: "#3aa0f2",
        linkedin: "#98c7ed",
        github: "#474747",
        portfolio: "#121212",
      },
      boxShadow: {
        circle:
          "5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0,98,90,0.3), 15px 15px rgba(0,98,90,0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)",
      },
    },
  },
  plugins: [],
};
