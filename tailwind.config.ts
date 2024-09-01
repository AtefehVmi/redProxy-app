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
            fontSize: {
                'xs': ['0.625rem', {
                    lineHeight: '0.75rem',
                    fontWeight: '500',
                }],
                'sm': ['0.75rem', {
                    lineHeight: '0.9rem',
                    fontWeight: '500',
                }],
                'base-500': ['0.875rem', {
                    lineHeight: '1.05rem',
                    fontWeight: '500',
                }],
                'base-600': ['0.875rem', {
                    lineHeight: '1.05rem',
                    fontWeight: '600',
                }],
                'lg': ['1rem', {
                    lineHeight: '1.2rem',
                    fontWeight: '600',
                }],
                'xl': ['1.25rem', {
                    lineHeight: '1.5rem',
                    fontWeight: '600',
                }],
                '2xl': ['1.375rem', {
                    lineHeight: '1.65rem',
                    fontWeight: '600',
                }],
                '3xl': ['2rem', {
                    lineHeight: '2.4rem',
                    fontWeight: '600',
                }],
            },
            colors: {
                "main-bg": "#0E1214",
                "nav-sub-menu-heading-text": "#726D6A",
                "sidebar-bg": "#F8F8F805",
                "nav-link-active-bg": "#F8F8F81A",
                "custom-card-bg": "#14181A",
                "profile-card-text": "#B0B0B0",
                "proxy-color": "#2ECB6D",

            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "custom-card-gradiant-border":
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
            },
            boxShadow: {
                "nav-link": "0px 37.33px 28px -18.67px #00000066",
                "custom-card": "0px 37.33px 28px -18.67px rgba(0, 0, 0, 0.24), 0px 0px 9.33px 0px rgba(248, 248, 248, 0.15) inset"
            }
        },
    },
    plugins: [],
};
export default config;
