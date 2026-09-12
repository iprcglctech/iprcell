import type { Metadata } from "next";
import React from "react";
import TeamClient from "@/components/team/TeamClient";

export const metadata: Metadata = {
  title: "Faculty Guidance & Student Executive Leadership",
  description:
    "Meet the professors-in-charge, core leadership, and departmental student heads of the Intellectual Property Rights Cell at Government Law College, Mumbai.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Faculty & Core Leadership | IPR Cell GLC Mumbai",
    description:
      "Governance, professors in-charge, and student executive leadership at Government Law College Mumbai.",
    url: "https://iprcellglcmumbai.in/team",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
