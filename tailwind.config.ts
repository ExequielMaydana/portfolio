import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      m: "390px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#191C24",
      gray1: "#f3f4f6",
      gray4: "#9ca3af",
      gray5: "#6b7280",
      gray6: "#4b5563",
      slate1: "#f1f5f9",
      indigo6: "#4f46e5",
      indigo7: "#4338ca",
      indigo9: "#312e81",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
