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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed: '#C02424',
        customBlue: '#146FE8',
        customOrange: '#E76666',
        customGreen:'#A0FCD9',
        Button:'#4000FF'
      },
    },
  },
  plugins: [],
};
