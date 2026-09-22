"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TypewriterHeroHeading from "@/components/home/TypewriterHeroHeading";

import DualEmblem from "@/components/home/DualEmblem";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden min-h-[88vh] sm:min-h-[94vh] lg:min-h-[96vh] flex flex-col justify-center py-8 sm:py-16 lg:py-24 border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Animated Typographer Heading */}
            <TypewriterHeroHeading />

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans font-normal">
              The Intellectual Property Rights Cell at Asia&apos;s oldest law institution brings together rigorous doctrinal research, India&apos;s premier procedural Trademark Opposition Competition, and masterclasses led by leading IP practitioners.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center space-x-2.5 bg-electric hover:bg-electric-dark active:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-institutional transition-all hover:translate-y-[-1px] active:translate-y-0 w-full sm:w-auto text-center"
              >
                <span>Explore Our Initiatives</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/events/upcoming"
                className="inline-flex items-center justify-center space-x-2.5 bg-electric hover:bg-electric-dark active:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-institutional transition-all hover:translate-y-[-1px] active:translate-y-0 w-full sm:w-auto text-center"
              >
                <span>Upcoming Initiatives</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dual Institutional Crest Emblem with Animated | to ✕ Transition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start pt-1 lg:pt-2">
            <DualEmblem />
          </div>
        </div>
      </div>
    </section>
  );
}
