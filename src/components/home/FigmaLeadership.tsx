import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import teamData from "@/content/team.json";

export default function FigmaLeadership() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="eyebrow-tag mb-2">
              FACULTY &amp; GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.12]">
              Institutional Leadership &amp;<br />
              <span className="italic text-slate-800">Core Committee</span>
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-bold text-ink hover:text-electric transition-colors shrink-0 group"
          >
            <span>VIEW FULL COMMITTEE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Professors In-Charge Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamData.professorsInCharge.map((prof) => (
            <div
              key={prof.name}
              className="bg-white border border-cream-border p-6 rounded-lg flex items-center space-x-5 shadow-subtle hover:border-electric transition-colors"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-cream-100">
                <Image
                  src={prof.image}
                  alt={prof.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-serif font-normal text-ink">
                  {prof.name}
                </h3>
                <p className="text-xs text-electric font-mono uppercase font-bold mt-0.5">
                  {prof.designation}
                </p>
                <p className="text-[11px] text-slate-muted mt-1">
                  {prof.department}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Senior Core Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.seniorCore.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-cream-border rounded-lg p-5 text-center flex flex-col items-center hover:border-electric transition-all shadow-subtle group"
            >
              <div className="relative w-32 h-32 rounded-lg overflow-hidden mb-4 border border-cream-border shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-serif font-normal text-ink">
                {member.name}
              </h3>
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-electric bg-electric/10 px-2 py-0.5 rounded mt-1">
                {member.position}
              </span>
              <p className="text-xs text-slate-muted mt-2.5 line-clamp-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
