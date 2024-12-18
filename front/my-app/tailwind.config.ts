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
        "electricPurple": "#9140CB",
        "smeraldGreen": "#2ECC71",
        "obsidian": "#1E1E1E"
      },
    },
  },
  plugins: [],
} satisfies Config;
