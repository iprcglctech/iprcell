import React from "react";
import Hero from "@/components/home/Hero";
import FigmaAboutIntro from "@/components/home/FigmaAboutIntro";
import FigmaEventsGallery from "@/components/home/FigmaEventsGallery";
import FigmaWhatWeDo from "@/components/home/FigmaWhatWeDo";
import FigmaFlagshipToc from "@/components/home/FigmaFlagshipToc";
import FigmaClinicProBono from "@/components/home/FigmaClinicProBono";
import FigmaJournalPlatform from "@/components/home/FigmaJournalPlatform";
import JoinCta from "@/components/home/JoinCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FigmaAboutIntro />
      <FigmaEventsGallery />
      <FigmaWhatWeDo />
      <FigmaFlagshipToc />
      <FigmaClinicProBono />
      <FigmaJournalPlatform />
      <JoinCta />
    </>
  );
}
