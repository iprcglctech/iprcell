import type { Metadata } from "next";
import React from "react";
import UpcomingEventsClient, { EventItem } from "@/components/events/UpcomingEventsClient";
import upcomingEventsData from "@/content/upcoming-events.json";

export const metadata: Metadata = {
  title: "Upcoming & Active Events | Academic Initiatives",
  description:
    "Explore scheduled workshops, masterclasses, national moot simulations, guest colloquiums, and active registrations hosted by the IPR Cell at Government Law College, Mumbai.",
  alternates: {
    canonical: "/events/upcoming",
  },
  openGraph: {
    title: "Upcoming & Active Events | IPR Cell GLC Mumbai",
    description:
      "Workshops, masterclasses, and national colloquiums at Government Law College Mumbai.",
    url: "https://iprcellglcmumbai.in/events/upcoming",
  },
};

export default function UpcomingEventsPage() {
  const events = (upcomingEventsData.events || []) as EventItem[];
  return <UpcomingEventsClient initialEvents={events} />;
}
