"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import FigmaAboutIntro from "@/components/home/FigmaAboutIntro";
import FigmaEventsGallery from "@/components/home/FigmaEventsGallery";
import FigmaWhatWeDo from "@/components/home/FigmaWhatWeDo";
import FigmaFlagshipToc from "@/components/home/FigmaFlagshipToc";
import FigmaClinicProBono from "@/components/home/FigmaClinicProBono";
import FigmaJournalPlatform from "@/components/home/FigmaJournalPlatform";
import JoinCta from "@/components/home/JoinCta";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

export default function HomePage() {
  const sections = [
    { id: "about", component: <FigmaAboutIntro /> },
    { id: "events", component: <FigmaEventsGallery /> },
    { id: "what-we-do", component: <FigmaWhatWeDo /> },
    { id: "flagship-toc", component: <FigmaFlagshipToc /> },
    { id: "clinic", component: <FigmaClinicProBono /> },
    { id: "journal", component: <FigmaJournalPlatform /> },
    { id: "join", component: <JoinCta /> },
  ];

  return (
    <main className="relative w-full overflow-x-clip bg-navy-950">
      <Hero />
      <ScrollStack>
        {sections.map((sec, idx) => (
          <ScrollStackItem
            key={sec.id}
            index={idx}
            total={sections.length}
            topOffset={72}
          >
            {sec.component}
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </main>
  );
}
