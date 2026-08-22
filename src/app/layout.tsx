import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import InstitutionalFooter from "@/components/footer/InstitutionalFooter";

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
      { url: "/images/favicon-tab.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/images/favicon-tab.png",
    shortcut: "/images/favicon-tab.png",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-offwhite text-ink flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
