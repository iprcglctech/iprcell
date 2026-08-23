"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import joinData from "@/content/join.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function JoinCta() {
  return (
    <section className="relative min-h-[calc(100dvh-64px)] md:min-h-[calc(100vh-72px)] flex flex-col justify-center py-6 sm:py-10 lg:py-16 bg-cream-100 overflow-hidden">
      {/* ── Antique Legal Heritage Wide Panorama Background Watermark on Off-White Canvas (High Visibility) ── */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[450px] sm:h-[680px] lg:h-[820px] pointer-events-none select-none z-0 opacity-[0.25] sm:opacity-[0.38] mix-blend-multiply">
        <Image
          src="/images/legal-heritage-panorama.jpg"
          alt="Neoclassical Legal Heritage Panorama Engraving"
          fill
          className="object-cover object-center"
        />
        {/* Soft edge gradients to seamlessly dissolve into the cream background */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100/90 via-transparent to-cream-100/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100/90 via-transparent to-cream-100/90" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <ScrollReveal
          delay={0.1}
          yOffset={24}
          className="bg-navy-950 text-white rounded-xl sm:rounded-2xl p-5 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-navy-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal tracking-tight">
                {joinData.whyJoin.headline}
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl font-sans">
                {joinData.whyJoin.intro}
              </p>

              {/* Three Tier Pathway as clean responsive grid / rule */}
              <div className="pt-4 sm:pt-6 border-t border-navy-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x divide-navy-800">
                {joinData.hierarchy.map((tier, idx) => (
                  <div
                    key={tier.tier}
                    className={`${idx === 0 ? "sm:pr-6" : "sm:px-6"} space-y-0.5`}
                  >
                    <div className="font-mono text-[9px] sm:text-[10px] text-electric-light uppercase font-bold tracking-wider">
                      {tier.badge}
                    </div>
                    <div className="font-sans text-xs sm:text-sm font-semibold text-slate-100">
                      {tier.tier}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 w-full">
              <Link
                href="/join"
                className="inline-flex items-center justify-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-5 sm:px-6 py-3.5 sm:py-4 rounded shadow-institutional transition-all hover:translate-y-[-1px] w-full text-center"
              >
                <span>Apply for Induction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs sm:text-sm uppercase tracking-wider font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded transition-all w-full text-center"
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
