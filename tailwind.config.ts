import type {Config} from "tailwindcss";

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
            colors: {
                "main-bg": "#0E1214",
                "nav-sub-menu-heading-text": "#726D6A",
                "sidebar-bg": "#F8F8F805",
                "nav-link-active-bg": "#F8F8F81A",
                "custom-card-bg": "#14181A",
                "profile-card-text": "#B0B0B0"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "custom-card-gradiant-border":
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 14.19%, rgba(255, 255, 255, 0.000025) 50.59%, rgba(255, 255, 255, 0.000025) 68.79%, rgba(255, 255, 255, 0.025) 105.18%)"
            },
            boxShadow: {
                "nav-link": "0px 37.33px 28px -18.67px #00000066",
                "custom-card": "0px 37.33px 28px -18.67px #00000066, 0px 0px 9.33px 0px #F8F8F840 inset"
            }
        },
    },
    plugins: [],
};
export default config;
