"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TypewriterHeroHeading from "@/components/home/TypewriterHeroHeading";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden min-h-[92vh] sm:min-h-[94vh] lg:min-h-[96vh] flex flex-col justify-center py-12 sm:py-16 lg:py-24 border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-7 space-y-8">
            {/* Animated Typographer Heading */}
            <TypewriterHeroHeading />

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
              The Intellectual Property Rights Cell at Asia&apos;s oldest law institution brings together rigorous doctrinal research, India&apos;s premier procedural Trademark Opposition Competition, and masterclasses led by leading IP practitioners.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="inline-flex items-center space-x-2.5 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-8 py-4 rounded shadow-institutional transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Our Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dual Institutional Crest Emblem (Enlarged & Prominent) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[580px] lg:max-w-[760px] xl:max-w-[840px] flex items-center justify-center">
              <Image
                src="/images/glc-ipr-dual-crest.png"
                alt="Government Law College Mumbai & IPR Cell Emblem — No Recreation of Creation"
                width={1400}
                height={700}
                priority
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
