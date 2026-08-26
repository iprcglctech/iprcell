"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, X, Building2, Mail, Maximize2, ChevronRight, Linkedin } from "lucide-react";
import teamData from "@/content/team.json";
import TiltedCard from "@/components/ui/TiltedCard";

interface LeadershipMember {
  name: string;
  role: string;
  department?: string;
  bio?: string;
  image: string;
  tier: "faculty" | "senior";
  tag?: string;
  linkedin?: string;
}

export default function LeadershipTeaser() {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const professors: LeadershipMember[] = teamData.professorsInCharge.map((p) => ({
    name: p.name,
    role: p.designation,
    department: p.department,
    image: p.image,
    tier: "faculty" as const,
    tag: "Faculty Leadership",
    bio: `${p.name} serves as ${p.designation} at Government Law College, Mumbai, providing institutional guidance and oversight for the Intellectual Property Rights Cell's academic initiatives.`,
  }));

  const seniorCore: LeadershipMember[] = teamData.seniorCore.map((s) => ({
    name: s.name,
    role: s.position,
    department: "Executive Committee (2024–2026)",
    bio: s.bio,
    image: s.image,
    tier: "senior" as const,
    tag: "Senior Core Executive",
    linkedin: s.linkedin,
  }));

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
              Faculty &amp; Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
              Institutional Leadership &amp; Core Committee.
            </h2>
            <p className="text-xs sm:text-sm text-slate-muted font-sans mt-2">
              Click any card to expand full profile and leadership mandates.
            </p>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-electric hover:text-electric-dark shrink-0 py-2 px-4 rounded-xl bg-surface-offwhite border border-surface-border hover:border-electric transition-all"
          >
            <span>View Full Junior &amp; Senior Core</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Professors In-Charge */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-light flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-electric" />
            <span>Professors In-Charge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {professors.map((prof) => (
              <TiltedCard
                key={prof.name}
                maxTilt={16}
                scale={1.04}
                glareOpacity={0.2}
                className="w-full h-full"
              >
                <motion.div
                  layoutId={`teaser-card-${prof.name}`}
                  onClick={() => setSelectedMember(prof)}
                  className="bg-surface-offwhite border border-surface-border rounded-2xl p-5 sm:p-6 flex items-center space-x-5 shadow-subtle hover:border-electric transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  <motion.div
                    layoutId={`teaser-avatar-${prof.name}`}
                    className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-200 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={prof.image}
                      alt={prof.name}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <motion.h3
                      layoutId={`teaser-name-${prof.name}`}
                      className="text-lg sm:text-xl font-serif font-bold text-ink truncate group-hover:text-electric transition-colors"
                    >
                      {prof.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`teaser-role-${prof.name}`}
                      className="text-xs font-mono font-bold text-electric uppercase tracking-wider truncate"
                    >
                      {prof.role}
                    </motion.p>
                    <p className="text-[11px] text-slate-muted font-sans truncate">
                      Government Law College, Mumbai
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-electric group-hover:text-white text-slate-400 flex items-center justify-center transition-colors shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              </TiltedCard>
            ))}
          </div>
        </div>

        {/* Senior Core Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-light">
            Senior Core Committee (2024–2026)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorCore.map((member) => (
              <TiltedCard
                key={member.name}
                maxTilt={16}
                scale={1.04}
                glareOpacity={0.2}
                className="w-full h-full"
              >
                <motion.div
                  layoutId={`teaser-card-${member.name}`}
                  onClick={() => setSelectedMember(member)}
                  className="bg-surface-offwhite border border-surface-border rounded-2xl p-5 text-center flex flex-col items-center justify-between shadow-subtle hover:border-electric transition-all duration-300 cursor-pointer group relative overflow-hidden h-full"
                >
                  <div className="flex flex-col items-center w-full">
                    <motion.div
                      layoutId={`teaser-avatar-${member.name}`}
                      className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden mb-4 border border-surface-border shadow-sm group-hover:scale-105 group-hover:border-electric/30 transition-all duration-300 bg-white"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </motion.div>

                    <motion.h3
                      layoutId={`teaser-name-${member.name}`}
                      className="text-base sm:text-lg font-serif font-bold text-ink group-hover:text-electric transition-colors"
                    >
                      {member.name}
                    </motion.h3>

                    <motion.div layoutId={`teaser-role-${member.name}`} className="mt-1.5">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-electric bg-electric-ultralight border border-electric/20 px-3 py-0.5 rounded-full">
                        {member.role}
                      </span>
                    </motion.div>
                  </div>

                  <div className="w-full pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-center space-x-1 text-[11px] font-mono text-slate-400 group-hover:text-electric transition-colors">
                    <span>Click to expand</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              </TiltedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Big Card Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-navy-950/75 backdrop-blur-md"
            />

            <motion.div
              layoutId={`teaser-card-${selectedMember.name}`}
              className="relative w-full max-w-2xl bg-white border border-surface-border rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-gold via-electric to-gold" />

              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-navy-950/10 hover:bg-navy-950/20 text-ink flex items-center justify-center transition-colors"
                aria-label="Close card"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.div
                    layoutId={`teaser-avatar-${selectedMember.name}`}
                    className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-surface-border shadow-md bg-slate-100"
                  >
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>

                  <div className="text-center sm:text-left space-y-2 flex-1">
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-electric bg-electric-ultralight border border-electric/20 px-3 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                      <span>{selectedMember.tag}</span>
                    </span>

                    <motion.h2
                      layoutId={`teaser-name-${selectedMember.name}`}
                      className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight flex items-center gap-2"
                    >
                      <span>{selectedMember.name}</span>
                      {selectedMember.linkedin && (
                        <a
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0A66C2] hover:text-[#004182] transition-transform hover:scale-110 shrink-0"
                          title="View LinkedIn Profile"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </motion.h2>

                    <motion.div
                      layoutId={`teaser-role-${selectedMember.name}`}
                      className="text-sm sm:text-base font-mono font-semibold text-electric uppercase tracking-wider"
                    >
                      {selectedMember.role}
                    </motion.div>

                    {selectedMember.department && (
                      <p className="text-xs text-slate-muted font-sans">
                        {selectedMember.department}
                      </p>
                    )}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="bg-surface-offwhite border border-surface-border rounded-2xl p-5 sm:p-6 space-y-3"
                >
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-light flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-gold-dark" />
                    <span>Leadership Mandate &amp; Profile</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center space-x-3 text-xs">
                    <Building2 className="w-4 h-4 text-electric shrink-0" />
                    <div>
                      <div className="font-semibold text-ink">Government Law College</div>
                      <div className="text-[11px] text-slate-light">Churchgate, Mumbai (Estd. 1855)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center space-x-3 text-xs">
                    <Mail className="w-4 h-4 text-electric shrink-0" />
                    <div>
                      <div className="font-semibold text-ink">Cell Office</div>
                      <div className="text-[11px] text-slate-light">iprcell.glc@gmail.com</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                  <Link
                    href="/team"
                    className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-electric hover:underline"
                  >
                    <span>View Full 3D Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-mono font-semibold transition-colors shadow-subtle"
                  >
                    Close Profile
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
