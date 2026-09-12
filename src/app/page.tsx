import type { Metadata } from "next";
import React from "react";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "IPR Cell | Government Law College, Mumbai",
  description:
    "Official portal of the Intellectual Property Rights (IPR) Cell, Government Law College Mumbai (Estd. 1855). Asia's oldest law institution hosting the Trademark Opposition Competition (TOC), Executive Certificate Courses, the peer-reviewed IPR Journal, and Grassroots IPR Clinic.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IPR Cell | Government Law College, Mumbai",
    description:
      "Asia's oldest law institution (Estd. 1855). Advancing IP education, moot opposition proceedings, and peer-reviewed scholarship.",
    url: "https://iprcellglcmumbai.in",
  },
};

const jsonLdHome = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://iprcellglcmumbai.in/#website",
      "url": "https://iprcellglcmumbai.in",
      "name": "Intellectual Property Rights Cell — GLC Mumbai",
      "description": "Official portal of the IPR Cell at Government Law College Mumbai (Estd. 1855).",
      "publisher": {
        "@id": "https://iprcellglcmumbai.in/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "Event",
      "name": "Trademark Opposition Competition (TOC)",
      "description": "India's premier procedural trademark opposition simulation under Section 21 of the Trade Marks Act, 1999 and Rules 42–50 of the Trade Marks Rules, 2017.",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Government Law College, Mumbai",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "'A' Road, Churchgate",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400020",
          "addressCountry": "IN"
        }
      },
      "organizer": {
        "@type": "EducationalOrganization",
        "name": "Intellectual Property Rights Cell, GLC Mumbai",
        "url": "https://iprcellglcmumbai.in"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <HomeClient />
    </>
  );
}
