import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, ArrowRight, ShieldCheck } from "lucide-react";
import teamData from "@/content/team.json";

export default function LeadershipTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
              Faculty & Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
              Institutional Leadership & Core Committee.
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-electric hover:text-electric-dark shrink-0"
          >
            <span>View Full Junior & Senior Core</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Professors In-Charge Strip */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-light mb-4 flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-electric" />
            <span>Professors In-Charge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamData.professorsInCharge.map((prof) => (
              <div
                key={prof.name}
                className="bg-surface-offwhite border border-surface-border p-5 rounded-xl flex items-center space-x-4 hover:border-electric transition-colors"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-navy-950/10 bg-white">
                  <Image
                    src={prof.image}
                    alt={prof.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-ink">
                    {prof.name}
                  </h3>
                  <p className="text-xs text-electric font-semibold font-sans">
                    {prof.designation}
                  </p>
                  <p className="text-[11px] text-slate-light mt-0.5">
                    {prof.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Core Grid */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-light mb-4">
            Senior Core Committee (2024–2026)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.seniorCore.map((member) => (
              <div
                key={member.name}
                className="bg-surface-offwhite border border-surface-border rounded-xl p-5 text-center flex flex-col items-center hover:border-electric transition-all group"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden mb-4 border border-surface-border shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-serif font-bold text-ink group-hover:text-electric transition-colors">
                  {member.name}
                </h3>
                <span className="inline-block text-[11px] font-mono font-semibold uppercase text-electric bg-electric/10 px-2 py-0.5 rounded mt-1">
                  {member.position}
                </span>
                <p className="text-xs text-slate-muted mt-2.5 line-clamp-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
