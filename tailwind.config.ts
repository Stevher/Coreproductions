import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060608",
          900: "#0c0c10",
          850: "#111116",
          800: "#18181f",
          700: "#22222c",
        },
        // Core Productions brand orange
        accent: {
          DEFAULT: "#f58220",
          light: "#ff9c4d",
          dark: "#d96d10",
          muted: "#c2701f",
        },
        bone: "#EDE9E0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        display: "-0.01em",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-2%, 1%)" },
          "50%": { transform: "translate(1%, -2%)" },
          "75%": { transform: "translate(-1%, 2%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "grain-shift": "grain-shift 8s steps(4) infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
