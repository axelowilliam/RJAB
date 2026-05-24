import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bronze: "#9D7134",
        charcoal: "#1a1a1a",
        cream: "#faf8f5",
        muted: "#6b6b6b",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.08em",
      },
    },
  },
  plugins: [],
};
export default config;
