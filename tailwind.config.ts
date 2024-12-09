import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    "text-iron",
    "text-bronze",
    "text-silver",
    "text-gold",
    "text-platinum",
    "text-emerald",
    "text-diamond",
    "text-master",
    "text-grandmaster",
    "text-challenger",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      textColor: {
        iron: "var(--iron)",
        bronze: "var(--bronze)",
        silver: "var(--silver)",
        gold: "var(--gold)",
        platinum: "var(--platinum)",
        emerald: "var(--emerald)",
        diamond: "var(--diamond)",
        master: "var(--master)",
        grandmaster: "var(--grandmaster)",
        challenger: "var(--challenger)",
      }
    },
  },
  plugins: [],
} satisfies Config;
