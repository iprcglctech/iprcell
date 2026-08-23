"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FigmaFlagshipToc() {
  return (
    <section className="bg-navy-900 border-b border-navy-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[520px]">
        {/* Left Column: Courtroom / Moot Hall Image */}
        <div className="lg:col-span-7 relative h-56 sm:h-72 lg:h-auto min-h-[240px] sm:min-h-[320px] overflow-hidden">
          <Image
            src="/images/hero/inter-toc-rounds.jpg"
            alt="Inter-TOC Trademark Opposition Courtroom Proceedings at GLC Mumbai"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/20" />

          {/* Bottom Tabs Badge */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex space-x-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider sm:tracking-widest text-slate-300 bg-navy-950/85 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded border border-white/10">
            <span>INTER-TOC</span>
            <span className="text-electric-light">/</span>
            <span>INTRA-TOC</span>
          </div>
        </div>

        {/* Right Column: Deep Navy Information Card with ScrollReveal */}
        <ScrollReveal
          delay={0.15}
          className="lg:col-span-5 bg-navy-950 p-6 sm:p-10 lg:p-16 flex flex-col justify-center space-y-4 sm:space-y-6 text-white border-t lg:border-t-0 lg:border-l border-navy-800"
        >
          <div className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-electric-light font-sans">
            FLAGSHIP INITIATIVE
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15]">
            Trademark<br />
            Opposition<br />
            <span className="italic text-electric-soft">Competition</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-sans">
            A first-of-its-kind initiative providing students with practical exposure to trademark opposition proceedings — from research and drafting to oral advocacy before a simulated tribunal.
          </p>

          <div className="pt-1 sm:pt-2">
            <Link
              href="/events/toc"
              className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-slate-200 hover:text-electric-light transition-colors group"
            >
              <span>EXPLORE COMPETITION</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
