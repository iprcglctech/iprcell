import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import InstitutionalFooter from "@/components/footer/InstitutionalFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iprcellglc.in"),
  title: "IPR Cell | Government Law College, Mumbai",
  description:
    "Official website of the Intellectual Property Rights (IPR) Cell, Government Law College, Mumbai (Estd. 1855). Pioneering IP legal scholarship, Trademark Opposition Competitions (TOC), Executive Certificate Courses, and clinical research.",
  keywords: [
    "Government Law College Mumbai",
    "GLC Mumbai",
    "IPR Cell",
    "Intellectual Property Rights",
    "IPR Cell GLC Mumbai",
    "Trademark Opposition Competition",
    "TOC GLC",
    "Intellectual Property Law Mumbai",
    "Tehemtan Daruwalla",
    "IPR Journal GLC"
  ],
  authors: [{ name: "Intellectual Property Rights Cell, GLC Mumbai" }],
  creator: "Government Law College, Mumbai",
  openGraph: {
    title: "IPR Cell — Government Law College, Mumbai",
    description:
      "Asia's oldest law college (Estd. 1855). Promoting advanced research, competition simulations, and practitioner-led certification in Intellectual Property Law.",
    url: "https://iprcellglc.in",
    siteName: "IPR Cell GLC Mumbai",
    images: [
      {
        url: "/images/glc-campus-main.png",
        width: 1200,
        height: 630,
        alt: "Government Law College Mumbai Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/images/favicon-tab.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#071A33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-surface-offwhite text-ink flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
