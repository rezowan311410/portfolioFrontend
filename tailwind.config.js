/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1140px",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        bg_color: "#f5f5f5",
      },
      colors: {
        Nav_color: "#36454F",
      },
      boxShadow: {
        boxS: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        contact_res: "550px",
        // => @media (min-width: 640px) { ... }

        lg_res: "1140px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      spacing: {
        max_w: "1000px",
      },
    },
  },
  plugins: [],
};
