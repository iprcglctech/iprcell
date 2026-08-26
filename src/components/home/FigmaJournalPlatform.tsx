"use client";

import React from "react";
import Image from "next/image";
import AnimatedList, { AnimatedListItem } from "@/components/ui/AnimatedList";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FigmaJournalPlatform() {
  const journalLinks: AnimatedListItem[] = [
    {
      label: "Current Volume",
      href: "/journal",
    },
    {
      label: "Call for Papers",
      href: "/journal#cfp",
    },
    {
      label: "Submission Guidelines",
      href: "/journal#cfp",
    },
    {
      label: "Archives",
      href: "/journal",
    },
  ];

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center py-6 sm:py-10 lg:py-16 bg-cream-100 border-b border-cream-border overflow-hidden">
      {/* ── Antique Lady Justice Legal Engraving Watermark ── */}
      <div className="absolute right-0 sm:right-6 lg:right-16 top-1/2 -translate-y-1/2 w-[220px] sm:w-[380px] lg:w-[500px] xl:w-[560px] pointer-events-none select-none z-0 opacity-[0.08] sm:opacity-[0.12] mix-blend-multiply transform translate-x-1/6 sm:translate-x-0">
        <Image
          src="/images/lady-justice-engraving.jpg"
          alt="Lady Justice Antique Legal Engraving"
          width={900}
          height={1200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="max-w-3xl space-y-4 sm:space-y-8">
          {/* Header Block with ScrollReveal */}
          <ScrollReveal delay={0.1} className="space-y-2 sm:space-y-3">
            <div className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#B89B5E] font-sans">
              IPR JOURNAL
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.15] tracking-tight">
              A platform for<br />
              thought leadership
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm leading-relaxed max-w-2xl font-sans pt-1 sm:pt-2">
              The IPR Journal is an annual, peer-reviewed publication that encourages rigorous research and analysis on contemporary issues in intellectual property law and beyond.
            </p>
          </ScrollReveal>

          {/* 2x2 Feature Grid with ScrollReveal */}
          <ScrollReveal delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-6 pt-3 sm:pt-6 border-t border-cream-border">
            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-ink font-sans">
                PEER REVIEWED
              </div>
              <div className="text-[11px] sm:text-xs text-slate-muted leading-relaxed">
                Double-blind review process ensuring academic rigour
              </div>
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-ink font-sans">
                ANNUAL PUBLICATION
              </div>
              <div className="text-[11px] sm:text-xs text-slate-muted leading-relaxed">
                Bringing out the best in IP scholarship each year
              </div>
            </div>

            <div className="space-y-0.5 sm:space-y-1 pt-1 sm:pt-2">
              <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-ink font-sans">
                MULTIPLE CATEGORIES
              </div>
              <div className="text-[11px] sm:text-xs text-slate-muted leading-relaxed">
                Articles, essays, case comments and more
              </div>
            </div>

            <div className="space-y-0.5 sm:space-y-1 pt-1 sm:pt-2">
              <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-ink font-sans">
                CONTRIBUTE &amp; COLLABORATE
              </div>
              <div className="text-[11px] sm:text-xs text-slate-muted leading-relaxed">
                Join a community of thoughtful legal minds
              </div>
            </div>
          </ScrollReveal>

          {/* React Bits AnimatedList Component */}
          <div className="pt-1 sm:pt-2">
            <AnimatedList items={journalLinks} delayStep={0.08} />
          </div>
        </div>
      </div>
    </section>
  );
}
