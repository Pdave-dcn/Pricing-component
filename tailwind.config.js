/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "hsl(230, 100%, 99%)",
        "pricing-comp-bg": "hsl(0, 0%, 100%)",
        "dark-desat-blue": "hsl(227, 35%, 25%)",
        "grayish-blue": "hsl(225, 20%, 60%)",
        "cust-discount": "hsl(15, 100%, 70%)",
        "cust-discount-bg": "hsl(14, 92%, 95%)",
        "cust-cta": "hsl(226, 100%, 87%)",
        "cust-toggle-bg": "hsl(223, 50%, 87%)",
        "cust-toggle-hvr": "hsl(174, 77%, 80%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
