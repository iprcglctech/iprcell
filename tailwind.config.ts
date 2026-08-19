import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF7",
          100: "#FAF7F2", // Main Figma Warm Editorial Background
          200: "#F4EFE6",
          300: "#EAE3D5",
          border: "#E7E0D2",
        },
        navy: {
          950: "#07162C", // Deepest background
          900: "#0B1B32", // Figma Dark Section Navy
          850: "#0F223F",
          800: "#132D52",
          700: "#1E3E6B",
        },
        electric: {
          DEFAULT: "#2563EB", // Primary Complimentary Accent
          dark: "#1D4ED8",
          light: "#3B82F6",
          soft: "#DBEAFE",
          ultralight: "#EFF6FF",
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
        serif: ["var(--font-serif)", "Newsreader", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
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
