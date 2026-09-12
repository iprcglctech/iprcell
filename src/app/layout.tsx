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
  metadataBase: new URL("https://iprcellglcmumbai.in"),
  title: {
    default: "IPR Cell | Government Law College, Mumbai",
    template: "%s | IPR Cell, GLC Mumbai",
  },
  description:
    "Official portal of the Intellectual Property Rights (IPR) Cell at Government Law College, Mumbai (Estd. 1855). Asia's oldest law institution hosting the Trademark Opposition Competition (TOC), Executive Certificate Courses, the peer-reviewed IPR Journal, and Grassroots IPR Clinic.",
  keywords: [
    "Government Law College Mumbai",
    "GLC Mumbai",
    "IPR Cell GLC Mumbai",
    "Intellectual Property Rights Cell",
    "Trademark Opposition Competition",
    "TOC GLC Mumbai",
    "Inter-TOC",
    "Intra-TOC",
    "IPR Journal GLC",
    "IP Law Certificate Course Mumbai",
    "Intellectual Property Law India",
    "Pro Bono IPR Clinic Mumbai"
  ],
  authors: [{ name: "Intellectual Property Rights Cell, GLC Mumbai" }],
  creator: "Government Law College, Mumbai",
  publisher: "Government Law College, Mumbai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "IPR Cell | Government Law College, Mumbai",
    description:
      "Official portal of the Intellectual Property Rights Cell, Government Law College Mumbai (Estd. 1855). Pioneering legal scholarship, moot opposition proceedings, and certificate programs.",
    url: "https://iprcellglcmumbai.in",
    siteName: "IPR Cell — GLC Mumbai",
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
  twitter: {
    card: "summary_large_image",
    title: "IPR Cell | Government Law College, Mumbai",
    description:
      "Official portal of the Intellectual Property Rights Cell, Government Law College Mumbai (Estd. 1855).",
    images: ["/images/glc-campus-main.png"],
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

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://iprcellglcmumbai.in/#organization",
  "name": "Intellectual Property Rights Cell, Government Law College, Mumbai",
  "alternateName": ["IPR Cell GLC Mumbai", "GLC Mumbai IPR Cell", "IPR Cell"],
  "url": "https://iprcellglcmumbai.in",
  "logo": "https://iprcellglcmumbai.in/images/glc-crest.png",
  "image": "https://iprcellglcmumbai.in/images/glc-campus-main.png",
  "description": "The Intellectual Property Rights Cell of Government Law College Mumbai (Estd. 1855) is dedicated to advancing IP education, advocacy simulations, peer-reviewed scholarship, and pro bono community advisory.",
  "foundingDate": "2023",
  "knowsAbout": [
    "Intellectual Property Law",
    "Trademark Opposition Proceedings",
    "Section 21 Trade Marks Act 1999",
    "Trade Marks Rules 2017",
    "Copyright Law and Generative AI",
    "Patent Drafting & Prosecution",
    "Pro Bono IPR Legal Advisory",
    "Legal Scholarship & Peer-Reviewed Journals"
  ],
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "name": "Government Law College, Mumbai",
    "alternateName": "GLC Mumbai",
    "foundingDate": "1855",
    "url": "https://glcmumbai.com",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Government_Law_College,_Mumbai",
      "https://www.wikidata.org/wiki/Q5588970"
    ]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "'A' Road, Churchgate",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400020",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "iprcellglc@gmail.com",
    "contactType": "Administrative Inquiries",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/iprcellglcmumbai/",
    "https://instagram.com/iprcell.glc"
  ]
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
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
