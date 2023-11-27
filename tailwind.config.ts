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
      gray: "#6b7280",
      grayCien: "#f3f4f6",
      slateGray: "#626E8E",
      dimGray: "#303646",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
