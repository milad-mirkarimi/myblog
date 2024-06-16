/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

