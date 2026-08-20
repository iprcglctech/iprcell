"use client";

import React from "react";
import AnimatedList, { AnimatedListItem } from "@/components/ui/AnimatedList";

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
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          {/* Header Block */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B89B5E] font-sans">
              IPR JOURNAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.12] tracking-tight">
              A platform for<br />
              <span className="italic text-slate-800">thought leadership</span>
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm leading-relaxed max-w-2xl font-sans pt-2">
              The IPR Journal is an annual, peer-reviewed publication that encourages rigorous research and analysis on contemporary issues in intellectual property law and beyond.
            </p>
          </div>

          {/* 2x2 Feature Grid with Thin Hairlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-6 border-t border-cream-border">
            <div className="space-y-1">
              <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                PEER REVIEWED
              </div>
              <div className="text-xs text-slate-muted leading-relaxed">
                Double-blind review process ensuring academic rigour
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                ANNUAL PUBLICATION
              </div>
              <div className="text-xs text-slate-muted leading-relaxed">
                Bringing out the best in IP scholarship each year
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                MULTIPLE CATEGORIES
              </div>
              <div className="text-xs text-slate-muted leading-relaxed">
                Articles, essays, case comments and more
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                CONTRIBUTE &amp; COLLABORATE
              </div>
              <div className="text-xs text-slate-muted leading-relaxed">
                Join a community of thoughtful legal minds
              </div>
            </div>
          </div>

          {/* React Bits AnimatedList Component */}
          <div className="pt-2">
            <AnimatedList items={journalLinks} delayStep={0.07} />
          </div>
        </div>
      </div>
    </section>
  );
}
