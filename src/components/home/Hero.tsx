"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DepthCarousel, { CarouselItem } from "@/components/ui/DepthCarousel";
import TypewriterHeroHeading from "@/components/home/TypewriterHeroHeading";

export default function Hero() {
  const heroGallery: CarouselItem[] = [
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
    <section className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Animated Typographer Heading */}
            <TypewriterHeroHeading />

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              The Intellectual Property Rights Cell at Asia&apos;s oldest law institution brings together rigorous doctrinal research, India&apos;s premier procedural Trademark Opposition Competition, and masterclasses led by leading IP practitioners.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-6 py-3.5 rounded shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Our Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D DepthCarousel with Smooth Loop & Hover Reveals */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <DepthCarousel
              items={heroGallery}
              intervalMs={2500}
              autoPlay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
