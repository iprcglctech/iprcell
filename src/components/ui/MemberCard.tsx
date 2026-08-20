"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TiltedCard from "./TiltedCard";

export interface MemberProps {
  name: string;
  position?: string;
  designation?: string;
  department?: string;
  bio?: string;
  specialization?: string;
  academicYear?: string;
  email?: string;
  keyInitiatives?: string;
  image: string;
  tier: "faculty" | "senior" | "junior";
  onSelect?: () => void;
}

export default function MemberCard({
  name,
  position,
  designation,
  department,
  bio,
  specialization,
  academicYear,
  email,
  keyInitiatives,
  image,
  tier,
  onSelect,
}: MemberProps) {
  const displayRole = position || designation || "Committee Member";

  /* ─────────────────────────────────────────────────────────────
     TIER 1 — Faculty In-Charge
     Horizontal card: portrait left, info right, signature left border
  ───────────────────────────────────────────────────────────── */
  if (tier === "faculty") {
    return (
      <TiltedCard maxTilt={4} scale={1.015} glareOpacity={0.07} className="w-full h-full">
        <div
          onClick={onSelect}
          className={[
            "relative flex items-center gap-5 p-5 sm:p-6 bg-white cursor-pointer group",
            "rounded-2xl border border-[#E7E0D2] shadow-subtle",
            "hover:shadow-institutional hover:border-[#07162C] transition-all duration-300",
            // Signature left accent border
            "before:absolute before:inset-y-5 before:left-0 before:w-[3px]",
            "before:bg-[#B89B5E] before:rounded-full",
          ].join(" ")}
        >
          {/* Portrait */}
          <div className="relative w-[72px] h-[88px] sm:w-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#E7E0D2] bg-slate-100 shadow-sm ml-3">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top grayscale contrast-[1.04] group-hover:grayscale-0 transition-[filter] duration-500"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
              Faculty In-Charge
            </p>
            <h3 className="text-lg sm:text-xl font-serif font-normal text-[#07162C] leading-snug group-hover:text-[#2A54A7] transition-colors">
              {name}
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
              {displayRole}
            </p>
            {department && (
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed pt-0.5 line-clamp-1">
                {department}
              </p>
            )}
          </div>

          {/* Arrow */}
          <div className="w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:border-[#07162C] group-hover:text-[#07162C] flex items-center justify-center shrink-0 transition-colors">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </TiltedCard>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     TIER 2 — Senior Core Executive Committee
     Tall portrait card: full-bleed image top, name + role below
     No bio here — bio revealed in the modal on click
  ───────────────────────────────────────────────────────────── */
  if (tier === "senior") {
    return (
      <TiltedCard maxTilt={5} scale={1.02} glareOpacity={0.08} className="w-full h-full">
        <div
          onClick={onSelect}
          className="bg-white border border-[#E7E0D2] rounded-2xl overflow-hidden shadow-subtle hover:shadow-institutional hover:border-[#07162C] transition-all duration-300 cursor-pointer group flex flex-col h-full"
        >
          {/* Full-bleed portrait with gradient falloff */}
          <div className="relative w-full aspect-[3/3.5] bg-slate-100 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top grayscale contrast-[1.04] group-hover:grayscale-0 transition-[filter] duration-500"
            />
            {/* Bottom gradient so text reads cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
          </div>

          {/* Name + Role + CTA */}
          <div className="px-4 pt-2 pb-4 flex flex-col flex-1 justify-between">
            <div className="space-y-0.5">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
                {displayRole}
              </p>
              <h3 className="text-base sm:text-lg font-serif font-normal text-[#07162C] leading-snug group-hover:text-[#2A54A7] transition-colors">
                {name}
              </h3>
              {specialization && (
                <p className="text-[10px] text-slate-400 font-sans truncate pt-0.5">
                  {specialization}
                </p>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 mt-3">
              <span>2024–2026</span>
              <span className="flex items-center space-x-1 group-hover:text-[#07162C] transition-colors">
                <span>View Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </TiltedCard>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     TIER 3 — Junior Core & Departmental Heads
     Compact horizontal list-style card
  ───────────────────────────────────────────────────────────── */
  return (
    <TiltedCard maxTilt={4} scale={1.01} glareOpacity={0.05} className="w-full h-full">
      <div
        onClick={onSelect}
        className={[
          "relative flex items-center gap-3.5 p-4 bg-white cursor-pointer group",
          "rounded-xl border border-[#E7E0D2] shadow-subtle",
          "hover:shadow-sm hover:border-[#07162C] transition-all duration-300",
          "before:absolute before:inset-y-3.5 before:left-0 before:w-[3px]",
          "before:bg-[#B89B5E]/50 before:rounded-full group-hover:before:bg-[#B89B5E]",
          "before:transition-colors",
        ].join(" ")}
      >
        {/* Avatar */}
        <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#E7E0D2] bg-slate-50 shadow-sm ml-2">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top grayscale contrast-[1.04] group-hover:grayscale-0 transition-[filter] duration-500"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-serif font-normal text-[#07162C] truncate group-hover:text-[#2A54A7] transition-colors">
            {name}
          </h4>
          <p className="text-[11px] font-mono font-semibold text-[#B89B5E] uppercase tracking-wider truncate mt-0.5">
            {displayRole}
          </p>
          {department && (
            <p className="text-[10px] text-slate-400 truncate mt-0.5">
              {department}
            </p>
          )}
        </div>

        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#07162C] shrink-0 transition-colors" />
      </div>
    </TiltedCard>
  );
}
