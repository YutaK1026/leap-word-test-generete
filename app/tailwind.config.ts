import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main": "#87CEEB",
        "accent": "#FF8C00",
        "text": "#333333",
        "sub-text": "#666666",
        "line": "#d3d3d3",
        "link": "#4682B4",
        "link-hover": "#1E90FF",
      }
    },
  },
  plugins: [],
};
export default config;
