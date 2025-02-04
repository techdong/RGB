import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkerBackground: "#241a28",
        LightPurple: "#fefdff",
        purpleGray: "#857b92",
        lavenderPurple: "#c49df7",
        card: "#fbfbfb"
      },
    },
  },
  plugins: [],
} satisfies Config;
