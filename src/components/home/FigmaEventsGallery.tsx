"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DepthCarousel, { CarouselItem } from "@/components/ui/DepthCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FigmaEventsGallery() {
  const eventsGallery: CarouselItem[] = [
    {
      image: "/images/hero/convocation-winners-inter-toc.jpg",
      title: "Convocation of Winners — Intra-TOC 2025–26",
      subtitle: "Flagship Moot Ceremony",
    },
    {
      image: "/images/hero/javed-akhtar-panel.jpg",
      title: "Artists' Rights in the Film Industry with Shri Javed Akhtar, Ms. Priyanka Khimani & Mr. Ameet Datta",
      subtitle: "Eminent Guest Colloquium",
    },
    {
      image: "/images/hero/in-conversation-priyanka-khimani.jpg",
      title: "In Conversation with Ms. Priyanka Khimani",
      subtitle: "Media, Entertainment & Music IP",
    },
    {
      image: "/images/hero/inter-toc-proceedings.jpg",
      title: "Intra-TOC 2025–26",
      subtitle: "Procedural Trademark Moot",
    },
    {
      image: "/images/hero/inter-toc-rounds.jpg",
      title: "Inter-TOC 2025–26 Final Rounds",
      subtitle: "Procedural Advocacy",
    },
    {
      image: "/images/hero/artists-rights-panel.jpg",
      title: "Panel: Shri Javed Akhtar, Ms. Priyanka Khimani & Mr. Ameet Datta",
      subtitle: "Industry Dialogue",
    },
  ];

  return (
    <section className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-4 sm:py-6 lg:py-8 bg-navy-900 text-white border-b border-navy-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 w-full my-auto">
        {/* Streamlined Sleek Header */}
        <ScrollReveal delay={0.1} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 border-b border-navy-800/80 pb-2.5 sm:pb-3">
          <div>
            <h2 className="text-base sm:text-2xl lg:text-3xl font-serif font-normal text-white tracking-tight">
              Moments from our flagship initiatives
            </h2>
          </div>

          <div className="shrink-0 self-end sm:self-auto">
            <Link
              href="/events"
              className="inline-flex items-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-xs uppercase font-bold tracking-wider sm:tracking-widest text-slate-200 hover:text-electric-light transition-colors group border border-white/20 hover:border-electric px-2.5 sm:px-4 py-1 sm:py-2 rounded"
            >
              <span>EXPLORE ALL EVENTS</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3D Depth Carousel Showcase */}
        <ScrollReveal delay={0.2} yOffset={16} className="flex justify-center items-center w-full">
          <DepthCarousel
            items={eventsGallery}
            intervalMs={4000}
            autoPlay={true}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
