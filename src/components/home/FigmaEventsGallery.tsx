"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DepthCarousel, { CarouselItem } from "@/components/ui/DepthCarousel";

export default function FigmaEventsGallery() {
  const eventsGallery: CarouselItem[] = [
    {
      image: "/images/hero/convocation-winners-inter-toc.jpg",
      title: "Convocation of Winners — Inter-TOC 2025–26",
      subtitle: "Flagship Moot Ceremony",
    },
    {
      image: "/images/hero/javed-akhtar-panel.jpg",
      title: "Artists' Rights in the Film Industry with Shri Javed Akhtar",
      subtitle: "Eminent Guest Colloquium",
    },
    {
      image: "/images/hero/in-conversation-priyanka-khimani.jpg",
      title: "In Conversation with Ms. Priyanka Khimani",
      subtitle: "Media, Entertainment & Music IP",
    },
    {
      image: "/images/hero/inter-toc-proceedings.jpg",
      title: "Inter-TOC 2025–26 Oral Advocacy Proceedings",
      subtitle: "Procedural Trademark Moot",
    },
    {
      image: "/images/hero/inter-toc-rounds.jpg",
      title: "Inter-TOC Courtroom Advocacy & Opposition Rounds",
      subtitle: "Procedural Advocacy",
    },
    {
      image: "/images/hero/artists-rights-panel.jpg",
      title: "Panel: Shri Javed Akhtar, Ms. Priyanka Khimani & Mr. Ameet Datta",
      subtitle: "Industry Dialogue",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-electric-light font-sans">
              EVENTS &amp; FLAGSHIPS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight">
              Moments from our flagship initiatives
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Capturing simulated courtroom proceedings, practitioner masterclasses, and national dispute competitions at Government Law College, Mumbai.
            </p>
          </div>

          <div>
            <Link
              href="/events"
              className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-slate-200 hover:text-electric-light transition-colors group border border-white/20 hover:border-electric px-5 py-3 rounded"
            >
              <span>EXPLORE ALL EVENTS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3D Depth Carousel Showcase */}
        <div className="pt-4 flex justify-center items-center">
          <DepthCarousel
            items={eventsGallery}
            intervalMs={2500}
            autoPlay={true}
          />
        </div>
      </div>
    </section>
  );
}
