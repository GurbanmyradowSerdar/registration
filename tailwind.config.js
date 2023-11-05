/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Gayathri: ["Gayathri", "sans-serif"],
      },
      colors: {
        "primary-color": "#1565D8",
        "bold-gray": "#696F79",
      },
      screens: {
        "2xl": "1537px",
        xl: "1281px",
        lg: "1025px",
        md: "769px",
        sm: "641px",
      },
    },
  },
  plugins: [],
};
