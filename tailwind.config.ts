import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: "#41B34C", // hijau utama “Bali”
                    greenDark: "#2E7D32",
                    greenSoft: "#E9F7EC",
                },
            },
            fontFamily: {
                sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
            },
            boxShadow: {
                soft: "0 18px 45px rgba(0,0,0,0.06)",
            },
            borderRadius: {
                "3xl": "1.75rem",
            },
            backgroundImage: {
                "footer-gradient": "linear-gradient(90deg,#41B34C,#9CE66F)",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    md: "1.5rem",
                },
            },
        },
    },
    plugins: [],
};
export default config;
