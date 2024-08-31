import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MonaSans', 'sans-serif'],
      },
      fontWeight: {
        "regular": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700"
      },
      colors:{
        "main-bg":"#0E1214",
        "nav-sub-menu-heading-text":"#726D6A",
        "sidebar-bg":"#F8F8F805",
        "nav-link-active-bg": "#F8F8F81A"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
        "nav-link": "0px 37.33px 28px -18.67px #00000066"
      }
    },
  },
  plugins: [],
};
export default config;
