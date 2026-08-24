import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Cream Editorial Palette
        cream: {
          50: "#FCFAF7",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EAE3D5",
          border: "#E7E0D2",
        },
        cool: {
          50: "#FCFAF7",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EAE3D5",
          border: "#E7E0D2",
        },
        // Deep Institutional Navy
        navy: {
          950: "#07162C",
          900: "#0B1B32",
          850: "#0F223F",
          800: "#132D52",
          700: "#1E3E6B",
        },
        // Heritage Gold Accents
        gold: {
          DEFAULT: "#B89B5E",
          dark: "#9E834B",
          light: "#CEB681",
          soft: "#F8F5EE",
        },
        accent: {
          DEFAULT: "#B89B5E",
          hover: "#9E834B",
          light: "#CEB681",
          soft: "#F8F5EE",
        },
        // Requested #2A54A7 for buttons and actions
        electric: {
          DEFAULT: "#2A54A7", // Primary Action Blue
          dark: "#1E3F80",
          light: "#3E6DC9",
          soft: "#D9E3F5",
          ultralight: "#EEF3FC",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#334155",
        },
        slate: {
          muted: "#475569",
          light: "#64748B",
          ultralight: "#94A3B8",
        },
        surface: {
          offwhite: "#FAF7F2",
          card: "#FFFFFF",
          border: "#E7E0D2",
          borderDark: "#1B3356",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        institutional: "0 4px 20px -2px rgba(11, 27, 50, 0.06), 0 2px 6px -1px rgba(11, 27, 50, 0.04)",
        elevated: "0 20px 40px -15px rgba(11, 27, 50, 0.14)",
        subtle: "0 1px 3px rgba(11, 27, 50, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
