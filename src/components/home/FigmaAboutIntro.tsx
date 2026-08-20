"use client";

import React from "react";
import siteData from "@/content/site.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FigmaAboutIntro() {
  return (
    <section id="about-section" className="min-h-[calc(100vh-72px)] min-h-[calc(100svh-72px)] flex flex-col justify-center py-10 lg:py-16 bg-cream-100 border-b border-cream-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading with Staggered Reveal */}
          <ScrollReveal className="lg:col-span-6 space-y-3" delay={0.1}>
            <div className="eyebrow-tag">
              ABOUT THE IPR CELL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.12]">
              Building IPR minds.<br />
              <span className="italic text-slate-800">Creating impact.</span>
            </h2>
          </ScrollReveal>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal delay={0.2} className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
              <p>
                The IPR Cell of Government Law College, Mumbai exists to cultivate a culture of awareness, innovation, and practical learning in the field of intellectual property law.
              </p>
              <p>
                Through education, research, competitions, expert interaction and pro bono initiatives, we provide students with the tools to engage meaningfully with evolving legal and technological landscapes.
              </p>
            </ScrollReveal>

            {/* 3 Stats Grid */}
            <ScrollReveal delay={0.3} className="pt-6 border-t border-cream-border grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-ink font-normal">
                  1000+
                </div>
                <div className="text-[11px] text-slate-muted mt-1 leading-snug">
                  Students engaged across initiatives
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif text-ink font-normal">
                  20+
                </div>
                <div className="text-[11px] text-slate-muted mt-1 leading-snug">
                  Events, courses &amp; competitions
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif text-ink font-normal">
                  Since 2023
                </div>
                <div className="text-[11px] text-slate-muted mt-1 leading-snug">
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
