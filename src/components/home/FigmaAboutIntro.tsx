"use client";

import React from "react";
import Image from "next/image";
import siteData from "@/content/site.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FigmaAboutIntro() {
  return (
    <section
      id="about-section"
      className="relative min-h-[calc(100dvh-64px)] md:min-h-[calc(100vh-72px)] flex flex-col justify-center py-6 sm:py-10 lg:py-16 bg-cream-100 border-b border-cream-border scroll-mt-20 overflow-hidden"
    >
      {/* ── Antique Law Treatise, Pillar & Quill Engraving Watermark ── */}
      <div className="absolute right-0 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 w-[220px] sm:w-[360px] lg:w-[460px] xl:w-[520px] pointer-events-none select-none z-0 opacity-[0.08] sm:opacity-[0.11] mix-blend-multiply transform translate-x-1/6 sm:translate-x-0">
        <Image
          src="/images/law-treatise-engraving.jpg"
          alt="Antique Law Treatise, Column and Quill Engraving"
          width={900}
          height={1200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading with Staggered Reveal */}
          <ScrollReveal className="lg:col-span-6 space-y-2 sm:space-y-3" delay={0.1}>
            <div className="eyebrow-tag">
              ABOUT THE IPR CELL
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.15]">
              Building IPR minds.<br />
              <span className="italic text-slate-800">Creating impact.</span>
            </h2>
          </ScrollReveal>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-8">
            <ScrollReveal delay={0.2} className="space-y-3 sm:space-y-4 text-slate-muted text-xs sm:text-base leading-relaxed font-sans font-normal">
              <p>
                The IPR Cell of Government Law College, Mumbai exists to cultivate a culture of awareness, innovation, and practical learning in the field of intellectual property law.
              </p>
              <p>
                Through education, research, competitions, expert interaction and pro bono initiatives, we provide students with the tools to engage meaningfully with evolving legal and technological landscapes.
              </p>
            </ScrollReveal>

            {/* 3 Stats Grid */}
            <ScrollReveal delay={0.3} className="pt-4 sm:pt-6 border-t border-cream-border grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="text-xl sm:text-3xl font-serif text-ink font-normal">
                  1000+
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-muted mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                  Students engaged across initiatives
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-3xl font-serif text-ink font-normal">
                  20+
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-muted mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                  Events, courses &amp; competitions
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-3xl font-serif text-ink font-normal">
                  Since 2023
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-muted mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                  Building the IPR community at GLC
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
