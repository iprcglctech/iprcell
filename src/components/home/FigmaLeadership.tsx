"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  X,
  Building2,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  BookOpen,
} from "lucide-react";
import teamData from "@/content/team.json";

interface LeadershipMember {
  name: string;
  role: string;
  department?: string;
  bio?: string;
  image: string;
  specialization?: string;
  academicYear?: string;
  email?: string;
  keyInitiatives?: string;
  tier: "faculty" | "senior";
  tag: string;
  period?: string;
}

export default function FigmaLeadership() {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedMember]);

  const professors: LeadershipMember[] = teamData.professorsInCharge.map((p) => ({
    name: p.name,
    role: p.designation,
    department: p.department,
    image: p.image,
    specialization: p.specialization,
    academicYear: p.academicYear,
    email: p.email,
    keyInitiatives: p.keyInitiatives,
    tier: "faculty" as const,
    tag: "Faculty Leadership",
    period: "Permanent Faculty Roster",
    bio: p.bio,
  }));

  const seniorCore: LeadershipMember[] = teamData.seniorCore.map((s) => ({
    name: s.name,
    role: s.position,
    department: s.department || "Executive Committee",
    bio: s.bio,
    image: s.image,
    specialization: s.specialization,
    academicYear: s.academicYear,
    email: s.email,
    keyInitiatives: s.keyInitiatives,
    tier: "senior" as const,
    tag: "Executive Committee",
    period: "Academic Tenure 2024–2026",
  }));

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E7E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E7E0D2]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#B89B5E]">
              <span className="w-2 h-2 rounded-full bg-[#B89B5E]" />
              <span>Faculty Guidance &amp; Executive Board</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#07162C] font-normal tracking-tight">
              Institutional Leadership &amp;{" "}
              <span className="italic text-slate-600">Governance</span>
            </h2>
            <p className="text-sm text-slate-500 font-sans max-w-2xl leading-relaxed">
              Supervised under the Faculty of Law, Government Law College Mumbai.
              Click any leader to view their detailed dossier, specialization, and direct contact.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest font-semibold text-[#07162C] hover:text-[#2A54A7] shrink-0 py-2.5 px-5 rounded-xl bg-white border border-[#E7E0D2] shadow-subtle hover:border-[#07162C] transition-all group"
          >
            <span>Full Directory (17)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── 01 Professors In-Charge ── */}
        <div className="space-y-5">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
            01 / Professors In-Charge
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {professors.map((prof) => (
              <div
                key={prof.name}
                className="will-change-transform transition-transform duration-300 hover:scale-[1.015] cursor-pointer"
              >
                <div
                  onClick={() => setSelectedMember(prof)}
                  className={[
                    "relative flex items-center gap-5 p-5 sm:p-6 bg-white",
                    "rounded-2xl border border-[#E7E0D2] shadow-subtle group",
                    "hover:shadow-institutional hover:border-[#07162C] transition-[box-shadow,border-color] duration-300",
                    "before:absolute before:inset-y-5 before:left-0 before:w-[3px]",
                    "before:bg-[#B89B5E] before:rounded-full",
                  ].join(" ")}
                >
                  <div className="relative w-[72px] h-[88px] sm:w-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#E7E0D2] bg-slate-100 shadow-sm ml-3">
                    <Image
                      src={prof.image}
                      alt={prof.name}
                      fill
                      className="object-cover object-top grayscale contrast-[1.04] group-hover:grayscale-0 transition-[filter] duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
                      {prof.tag}
                    </p>
                    <h3 className="text-lg sm:text-xl font-serif font-normal text-[#07162C] leading-snug group-hover:text-[#2A54A7] transition-colors">
                      {prof.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                      {prof.role}
                    </p>
                    {prof.specialization && (
                      <p className="text-[11px] font-sans text-slate-400 truncate">
                        {prof.specialization}
                      </p>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-full border border-slate-200 text-slate-400 group-hover:border-[#07162C] group-hover:text-[#07162C] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 02 Senior Core Executive Board ── */}
        <div className="space-y-5">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
            02 / Executive Board (2024–2026)
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {seniorCore.map((member) => (
              <div
                key={member.name}
                className="will-change-transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div
                  onClick={() => setSelectedMember(member)}
                  className="bg-white border border-[#E7E0D2] rounded-2xl overflow-hidden shadow-subtle hover:shadow-institutional hover:border-[#07162C] transition-[box-shadow,border-color] duration-300 group flex flex-col h-full"
                >
                  {/* Portrait */}
                  <div className="relative w-full aspect-[3/3.4] bg-slate-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale contrast-[1.04] group-hover:grayscale-0 transition-[filter] duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  </div>

                  {/* Name + Role + CTA */}
                  <div className="px-4 pt-2 pb-4 flex flex-col flex-1 justify-between">
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
                        {member.role}
                      </p>
                      <h3 className="text-sm sm:text-base font-serif font-normal text-[#07162C] leading-snug group-hover:text-[#2A54A7] transition-colors">
                        {member.name}
                      </h3>
                      {member.specialization && (
                        <p className="text-[10px] text-slate-400 truncate pt-0.5">
                          {member.specialization}
                        </p>
                      )}
                    </div>

                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-end text-[11px] font-mono text-slate-400 mt-3 group-hover:text-[#07162C] transition-colors">
                      <span className="flex items-center space-x-1">
                        <span>View Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Rich Executive Dossier Modal ── */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#07162C]/85 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E7E0D2] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col"
            >
              {/* Gold ribbon */}
              <div className="h-1 w-full bg-gradient-to-r from-[#B89B5E] via-[#D4B97B] to-[#B89B5E] shrink-0" />

              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-[#07162C] hover:text-white text-[#07162C] flex items-center justify-center border border-[#E7E0D2] shadow-sm transition-colors"
                aria-label="Close dossier"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-10 space-y-8">

                {/* Profile Header with BIG Image */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pb-8 border-b border-[#E7E0D2]">
                  
                  {/* BIG Image Showcase Frame */}
                  <div className="md:col-span-5 flex justify-center md:justify-start">
                    <div className="relative w-56 sm:w-64 md:w-full aspect-[3/3.8] rounded-2xl overflow-hidden border-2 border-[#E7E0D2] bg-white shadow-xl group">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        priority
                        className="object-cover object-top filter grayscale contrast-[1.02] group-hover:grayscale-0 transition-all duration-700"
                      />
                      
                      {/* Top Tier Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#07162C]/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                          <ShieldCheck className="w-3 h-3 text-[#B89B5E]" />
                          <span>{selectedMember.tag}</span>
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Header Details */}
                  <div className="md:col-span-7 space-y-4 text-center md:text-left">
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#B89B5E] bg-white border border-[#E7E0D2] px-3 py-1 rounded-full shadow-2xs">
                        <span>{selectedMember.department || selectedMember.tag}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#07162C] font-normal tracking-tight">
                        {selectedMember.name}
                      </h2>

                      <p className="text-base sm:text-lg font-mono uppercase tracking-wider text-[#2A54A7] font-semibold">
                        {selectedMember.role}
                      </p>
                    </div>

                    {/* Metadata boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {selectedMember.academicYear && (
                        <div className="p-3.5 rounded-xl bg-white border border-[#E7E0D2] text-left">
                          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                            <GraduationCap className="w-3.5 h-3.5 text-[#B89B5E]" />
                            <span>Academic Standing</span>
                          </div>
                          <div className="text-xs font-semibold text-[#07162C] mt-1 font-sans">
                            {selectedMember.academicYear}
                          </div>
                        </div>
                      )}

                      <div className="p-3.5 rounded-xl bg-white border border-[#E7E0D2] text-left">
                        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                          <Building2 className="w-3.5 h-3.5 text-[#B89B5E]" />
                          <span>Institution</span>
                        </div>
                        <div className="text-xs font-semibold text-[#07162C] mt-1 font-sans">
                          Government Law College, Mumbai
                        </div>
                      </div>
                    </div>

                    {/* Direct Contact Button */}
                    {selectedMember.email && (
                      <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-[#07162C] text-white hover:bg-[#2A54A7] transition-colors shadow-sm"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#B89B5E]" />
                          <span>{selectedMember.email}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Specialization & Focus Area */}
                {selectedMember.specialization && (
                  <div className="p-5 rounded-2xl bg-white border border-[#E7E0D2] space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#B89B5E]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Domain Specialization &amp; Research Focus</span>
                    </div>
                    <p className="text-sm font-sans text-[#07162C] font-medium leading-relaxed">
                      {selectedMember.specialization}
                    </p>
                  </div>
                )}

                {/* Key Initiatives / Portfolios */}
                {selectedMember.keyInitiatives && (
                  <div className="p-5 rounded-2xl bg-white border border-[#E7E0D2] space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#2A54A7]">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Key Institutional Portfolios &amp; Initiatives</span>
                    </div>
                    <p className="text-sm font-sans text-slate-700 leading-relaxed">
                      {selectedMember.keyInitiatives}
                    </p>
                  </div>
                )}

                {/* Bio / Mandate Statement */}
                <div className="space-y-3">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                    Executive Profile &amp; Responsibilities
                  </p>
                  <blockquote className="font-serif italic text-sm sm:text-base text-slate-700 leading-relaxed bg-white border border-[#E7E0D2] border-l-4 border-l-[#B89B5E] p-5 sm:p-6 rounded-2xl">
                    &ldquo;{selectedMember.bio}&rdquo;
                  </blockquote>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-[#E7E0D2] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Link
                    href="/team"
                    onClick={() => setSelectedMember(null)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#07162C] hover:text-[#2A54A7] transition-colors"
                  >
                    <span>View Full Governance Roster</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-[#07162C] hover:bg-[#0B1B32] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Close Dossier
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
