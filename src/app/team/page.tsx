import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, GraduationCap, Award, ArrowRight } from "lucide-react";
import teamData from "@/content/team.json";
import siteData from "@/content/site.json";

export default function TeamPage() {
  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Governance & Committee Members
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            Our People: Faculty & Core Committee
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            The Intellectual Property Rights Cell is driven by distinguished faculty guidance, dedicated student leadership, and active departmental committees across research, competitions, and clinic operations.
          </p>
        </div>

        {/* 1. Faculty In-Charge */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric">
            <ShieldCheck className="w-4 h-4" />
            <span>Faculty Leadership</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamData.professorsInCharge.map((prof) => (
              <div
                key={prof.name}
                className="bg-white border border-surface-border p-6 rounded-xl flex items-center space-x-5 shadow-subtle hover:border-electric transition-all"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-navy-950/20 bg-slate-100">
                  <Image
                    src={prof.image}
                    alt={prof.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-ink">
                    {prof.name}
                  </h3>
                  <p className="text-xs text-electric font-semibold font-sans mt-0.5">
                    {prof.designation}
                  </p>
                  <p className="text-xs text-slate-muted mt-1">
                    {prof.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Senior Core Committee */}
        <div className="space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-light">
            Senior Core Committee (2024–2026)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.seniorCore.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-surface-border rounded-xl p-5 text-center flex flex-col items-center hover:border-electric transition-all shadow-subtle group"
              >
                <div className="relative w-36 h-36 rounded-lg overflow-hidden mb-4 border border-surface-border shadow-sm group-hover:scale-105 transition-transform duration-300">
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
                <span className="inline-block text-[11px] font-mono font-semibold uppercase text-electric bg-electric/10 px-2.5 py-0.5 rounded mt-1">
                  {member.position}
                </span>
                <p className="text-xs text-slate-muted mt-3 line-clamp-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Junior Core Department Heads */}
        <div className="space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-light">
            Junior Core & Departmental Heads
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamData.juniorCore.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-surface-border rounded-xl p-4 flex items-center space-x-3.5 hover:border-electric transition-all shadow-subtle group"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 group-hover:scale-105 transition-transform">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-serif font-bold text-ink truncate group-hover:text-electric transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-[11px] font-mono text-electric truncate">
                    {member.position}
                  </div>
                  <div className="text-[10px] text-slate-light truncate mt-0.5">
                    {member.department}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Founding Perspective Card */}
        <div className="bg-navy-950 text-white rounded-xl p-6 sm:p-10 border border-navy-800 shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center">
              <div className="relative w-36 h-44 rounded-lg overflow-hidden border-2 border-electric/40">
                <Image
                  src={siteData.messages.founder.image}
                  alt={siteData.messages.founder.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-9 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-electric-soft bg-electric/20 px-2.5 py-0.5 rounded">
                Founding Inception (2023)
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                {siteData.messages.founder.name}
              </h3>
              <p className="text-xs text-electric-soft font-mono">
                {siteData.messages.founder.designation}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-serif pt-1">
                &ldquo;{siteData.messages.founder.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
