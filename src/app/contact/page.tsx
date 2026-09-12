import type { Metadata } from "next";
import React from "react";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Institutional Registry & Communications",
  description:
    "Contact the Intellectual Property Rights Cell secretariat, TOC competition convenors, and editorial board at Government Law College, Mumbai (Churchgate, Mumbai 400020).",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Institutional Registry | IPR Cell GLC Mumbai",
    description:
      "Connect with the student secretariat, faculty, and convenors at Government Law College Mumbai.",
    url: "https://iprcellglcmumbai.in/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
