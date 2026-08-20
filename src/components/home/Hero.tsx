"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TypewriterHeroHeading from "@/components/home/TypewriterHeroHeading";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start">
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

          {/* Right Column: Dual Institutional Crest Emblem (Enlarged & Top-Aligned) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center lg:items-start pt-0 lg:pt-1">
            <div className="relative w-full max-w-[560px] lg:max-w-[680px] xl:max-w-[720px] flex items-center justify-center">
              <Image
                src="/images/glc-ipr-dual-crest.png"
                alt="Government Law College Mumbai & IPR Cell Emblem — No Recreation of Creation"
                width={1200}
                height={600}
                priority
                className="w-full h-auto object-contain select-none pointer-events-none transform lg:-translate-y-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
