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
          "25%": {
            transform: "translateY(0px)",
          },
          "75%": {},
          "90%": {
            transform: "",
          },
          "100%": {
            transform: "translateY(320px)",
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
        "top-right-entry": {
          "0%": {
            transform: "translate(235%, -200%)",
          },
          "100%": {
            transform: "translate(100%, -50%)",
          },
        },
        "top-left-entry": {
          "0%": {
            transform: "translate(-200%, -250%)",
          },
          "100%": {
            transform: "translate(-65%, -125%)",
          },
        },
        "bottom-right-entry": {
          "0%": {
            transform: "translate(275%, -75%)",
          },
          "100%": {
            transform: "translate(100%, -135%)",
          },
        },
        "bottom-left-entry": {
          "0%": {
            transform: "translate(-225%, -100%)",
          },
          "100%": {
            transform: "translate(-65%, -250%)",
          },
        },
        "tr": {
          "0%": {
            transform: "translate(200%, -100%)",
          },
          "100%": {
            transform: "translate(65%, -45%)",
          },
        },
        "tl": {
          "0%": {
            transform: "translate(-200%, -250%)",
          },
          "100%": {
            transform: "translate(-65%, -135%)",
          },
        },
        "br": {
          "0%": {
            transform: "translate(200%, -100%)",
          },
          "100%": {
            transform: "translate(100%, -150%)",
          },
        },
        "bl": {
          "0%": {
            transform: "translate(-100%, -100%)",
          },
          "100%": {
            transform: "translate(-65%, -250%)",
          },
        },
        "flap": {
          "0%": {
            "transform": "rotateY(45deg)"
          },
          "100%": {
            "transform": "rotateY(-45deg)"
          }
        }
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "circle-loop": "circle-loop 8s linear infinite",
        "-circle-loop": "-circle-loop 8s linear infinite",
        "bounce": "bounce 4s infinite ease-in-out",
        "disfigure": "disfigure 5s infinite alternate",
        "top-right-entry": "top-right-entry 3s forwards alternate",
        "top-left-entry": "top-left-entry 3s forwards alternate",
        "bottom-left-entry": "bottom-left-entry 3s forwards alternate",
        "bottom-right-entry": "bottom-right-entry 3s forwards alternate",
        "tr": "tr 3s forwards alternate",
        "tl": "tl 3s forwards alternate",
        "br": "br 3s forwards alternate",
        "bl": "bl 3s forwards alternate",
        "flap": "flap 500ms ease-in-out infinite;",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
