import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import joinData from "@/content/join.json";

export default function JoinCta() {
  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-elevated border border-navy-800">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal tracking-tight">
                {joinData.whyJoin.headline}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                {joinData.whyJoin.intro}
              </p>

              {/* Three Tier Pathway summary */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {joinData.hierarchy.map((tier) => (
                  <div
                    key={tier.tier}
                    className="p-3 bg-navy-900/80 border border-navy-800 rounded text-xs"
                  >
                    <div className="font-mono text-[10px] text-electric-light uppercase font-bold">
                      {tier.badge}
                    </div>
                    <div className="font-semibold text-white mt-0.5">{tier.tier}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/join"
                className="inline-flex items-center justify-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-6 py-4 rounded shadow-institutional transition-all"
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
        </div>
      </div>
    </section>
  );
}
