/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "circle-loop": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "-circle-loop": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "bounce": {
          "0%": {
            transform: "translateY(0%)",
          },
          "25%": {
            transform: "translateY(15%)",
          },
          "50%": {
            transform: "translateY(-15%)",
          },
          "75%": {
            transform: "translateY(15%)",
          },
          "100%": {
            transform: "translateY(-15%)",
            easing: "ease-in-out",
          },
        },
        "disfigure": {
          "0%, 100%": {
            borderTopLeftRadius: "30%",
            borderTopRightRadius: "65%",
            borderBottomLeftRadius: "55%",
            borderBottomRightRadius: "40%",
          },
          "25%": {
            borderTopLeftRadius: "57%",
            borderTopRightRadius: "30%",
            borderBottomLeftRadius: "63%",
            borderBottomRightRadius: "55%",
          },
          "50%": {
            borderTopLeftRadius: "40%",
            borderTopRightRadius: "55%",
            borderBottomLeftRadius: "30%",
            borderBottomRightRadius: "57%",
          },
          "75%": {
            borderTopLeftRadius: "55%",
            borderTopRightRadius: "40%",
            borderBottomLeftRadius: "57%",
            borderBottomRightRadius: "70%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "circle-loop": "circle-loop 8s linear infinite",
        "-circle-loop": "-circle-loop 8s linear infinite",
        "bounce": "bounce 2s infinite ease-in-out",
        "disfigure": "disfigure 5s infinite alternate"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
