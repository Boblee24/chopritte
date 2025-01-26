import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "top-bottom":
          "0 -2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1)",
        "top-sm": "0 -2px 4px rgba(0, 0, 0, 0.1)", 
        "top-md": "0 -4px 6px rgba(0, 0, 0, 0.1)", 
        soft: "0 1px 2px rgba(0, 0, 0, 0.05)", 
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
