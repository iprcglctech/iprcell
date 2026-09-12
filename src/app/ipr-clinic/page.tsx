import type { Metadata } from "next";
import React from "react";
import ClinicClient from "@/components/clinic/ClinicClient";

export const metadata: Metadata = {
  title: "Pro Bono IPR Clinic for Creators & Innovators",
  description:
    "Providing pro bono preliminary guidance, trademark assistance, copyright literacy workshops, and patent awareness for student innovators, artists, and grassroots founders.",
  alternates: {
    canonical: "/ipr-clinic",
  },
  openGraph: {
    title: "Pro Bono IPR Clinic | Government Law College Mumbai",
    description:
      "Free preliminary IP advisory and protection guidance for artists, startups, and innovators.",
    url: "https://iprcellglcmumbai.in/ipr-clinic",
  },
};

export default function IPRClinicPage() {
  return <ClinicClient />;
}
