import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#409191",
          50: "#F0F9F9",
          100: "#E1F2F2",
          200: "#C3E5E5",
          300: "#A5D8D8",
          400: "#87CACA",
          500: "#69BDBD",
          600: "#409191",
          700: "#306D6D",
          800: "#204949",
          900: "#102424",
        },
        secondary: "#344750",
        navy: "#1A252B",
        grey: {
          DEFAULT: "#64748B",
          light: "#F1F5F9",
        },
        accent: "#409191",
        canada: {
          navy: "#0D1B2A",
          red: "#D62828",
          gold: "#F4A261",
        },
        brand: {
          navy: "#0D1B2A",
          blue: "#2563EB",
          orange: "#F97316",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["56px", { lineHeight: "1.1", fontWeight: "800" }],
        "h1": ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        "h2": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "h3": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        "h4": ["22px", { lineHeight: "1.4", fontWeight: "600" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "small": ["14px", { lineHeight: "1.5" }],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #409191 0%, #344750 100%)",
        "gradient-dark": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "gradient-mesh": "radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(205, 98%, 55%, 0.2) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(215, 98%, 61%, 0.1) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.1) 0px, transparent 50%)",
      },
      boxShadow: {
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        "nav": "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
        "glow": "0 0 40px rgba(59, 130, 246, 0.3)",
        "glow-primary": "0 0 30px rgba(64, 145, 145, 0.4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
