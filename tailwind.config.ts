import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          950: "#1a0510",
          900: "#2b0a18",
          800: "#3a0d1f",
          700: "#4d1329",
          600: "#661a35",
        },
        gold: {
          400: "#e8cd7a",
          500: "#d4af37",
          600: "#c9a227",
          700: "#a9822055",
        },
        blush: {
          300: "#f2c6d9",
          400: "#e8a0b8",
          500: "#d9789e",
        },
        ivory: "#f6ede0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "wine-radial":
          "radial-gradient(circle at 20% 20%, #4d1329 0%, #2b0a18 45%, #1a0510 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
