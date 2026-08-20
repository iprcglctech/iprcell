"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import joinData from "@/content/join.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function JoinCta() {
  return (
    <section className="py-20 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          delay={0.1}
          yOffset={32}
          className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-elevated border border-navy-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal tracking-tight">
                {joinData.whyJoin.headline}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                {joinData.whyJoin.intro}
              </p>

              {/* Three Tier Pathway as clean horizontal line rule */}
              <div className="pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center sm:divide-x divide-navy-800 gap-4 sm:gap-0">
                {joinData.hierarchy.map((tier, idx) => (
                  <div
                    key={tier.tier}
                    className={`${idx === 0 ? "sm:pr-8" : "sm:px-8"} space-y-0.5`}
                  >
                    <div className="font-mono text-[10px] text-electric-light uppercase font-bold tracking-wider">
                      {tier.badge}
                    </div>
                    <div className="font-sans text-xs sm:text-sm font-semibold text-slate-100">
                      {tier.tier}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/join"
                className="inline-flex items-center justify-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-6 py-4 rounded shadow-institutional transition-all hover:translate-y-[-1px]"
              >
                <span>Apply for Induction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs sm:text-sm uppercase tracking-wider font-semibold px-6 py-3.5 rounded transition-all text-center"
              >
                <span>Contact Office Bearers</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
