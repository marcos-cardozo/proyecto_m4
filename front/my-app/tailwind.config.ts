// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ["cabinet", "sans-serif"],
        satoshi: ['Satoshi', 'sans-serif'],
        telma: ['Telma', "sans-serif"],
        archivo: ['Archivo', "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        electricPurple: "#9140CB",
        smeraldGreen: "#2ECC71",
        obsidian: "#1E1E1E",
      },
    },
  },
  plugins: [],
} satisfies Config;
