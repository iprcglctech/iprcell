"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Building2,
  Mail,
  GraduationCap,
  Sparkles,
  BookOpen,
  Send,
} from "lucide-react";

export interface SelectedMemberData {
  name: string;
  position?: string;
  designation?: string;
  department?: string;
  bio?: string;
  image: string;
  specialization?: string;
  academicYear?: string;
  email?: string;
  keyInitiatives?: string;
  tier: "faculty" | "senior" | "junior";
}

interface MemberModalProps {
  member: SelectedMemberData | null;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (member) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  const displayRole = member?.position || member?.designation || "Committee Member";
  const displayEmail = member?.email || `${member?.name.toLowerCase().replace(/[^a-z]/g, "")}@glcmumbai.com`;

  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#07162C]/85 backdrop-blur-md"
          />

          {/* Large Executive Dossier Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E7E0D2] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col"
          >
            {/* Top Fine Brass Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#B89B5E] via-[#D4B97B] to-[#B89B5E] shrink-0" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-[#07162C] hover:text-white text-[#07162C] flex items-center justify-center transition-colors border border-[#E7E0D2] shadow-sm"
              aria-label="Close dossier"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              
              {/* Top Banner: Big Image & Identity Header */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pb-8 border-b border-[#E7E0D2]">
                
                {/* BIG Image Showcase Frame */}
                <div className="md:col-span-5 flex justify-center md:justify-start">
                  <div className="relative w-56 sm:w-64 md:w-full aspect-[3/3.8] rounded-2xl overflow-hidden border-2 border-[#E7E0D2] bg-white shadow-xl group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      priority
                      className="object-cover object-top filter grayscale contrast-[1.02] group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Top Tier Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#07162C]/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                        <ShieldCheck className="w-3 h-3 text-[#B89B5E]" />
                        <span>
                          {member.tier === "faculty"
                            ? "Faculty"
                            : member.tier === "senior"
                            ? "Senior Board"
                            : "Junior Core"}
                        </span>
                      </span>
                    </div>

                    {/* Subtle bottom shadow vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07162C]/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Person Information & Primary Metrics */}
                <div className="md:col-span-7 space-y-4 text-center md:text-left">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#B89B5E] bg-white border border-[#E7E0D2] px-3 py-1 rounded-full shadow-2xs">
                      <span>{member.department || "IPR Cell Executive Committee"}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#07162C] font-normal tracking-tight">
                      {member.name}
                    </h2>

                    <p className="text-base sm:text-lg font-mono uppercase tracking-wider text-[#2A54A7] font-semibold">
                      {displayRole}
                    </p>
                  </div>

                  {/* Badges / Key Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {member.academicYear && (
                      <div className="p-3.5 rounded-xl bg-white border border-[#E7E0D2] text-left">
                        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                          <GraduationCap className="w-3.5 h-3.5 text-[#B89B5E]" />
                          <span>Academic Standing</span>
                        </div>
                        <div className="text-xs font-semibold text-[#07162C] mt-1 font-sans">
                          {member.academicYear}
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
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <a
                      href={`mailto:${displayEmail}`}
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-[#07162C] text-white hover:bg-[#2A54A7] transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B89B5E]" />
                      <span>{displayEmail}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Specialization & Focus Area */}
              {member.specialization && (
                <div className="p-5 rounded-2xl bg-white border border-[#E7E0D2] space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#B89B5E]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Domain Specialization &amp; Research Focus</span>
                  </div>
                  <p className="text-sm font-sans text-[#07162C] font-medium leading-relaxed">
                    {member.specialization}
                  </p>
                </div>
              )}

              {/* Key Initiatives / Responsibilities */}
              {member.keyInitiatives && (
                <div className="p-5 rounded-2xl bg-white border border-[#E7E0D2] space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#2A54A7]">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Institutional Portfolios &amp; Initiatives</span>
                  </div>
                  <p className="text-sm font-sans text-slate-700 leading-relaxed">
                    {member.keyInitiatives}
                  </p>
                </div>
              )}

              {/* Individual Bio / Mandate Statement */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                  Leadership Mandate &amp; Profile Summary
                </div>
                <blockquote className="text-sm sm:text-base text-slate-800 font-serif leading-relaxed italic bg-white border border-[#E7E0D2] p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#B89B5E] shadow-2xs">
                  &ldquo;
                  {member.bio ||
                    `${member.name} serves as ${displayRole} in the ${member.department || "IPR Cell"} at Government Law College, Mumbai, contributing to the Cell's academic conferences, publications, and pro bono legal literacy initiatives.`}
                  &rdquo;
                </blockquote>
              </div>

              {/* Footer action */}
              <div className="pt-4 border-t border-[#E7E0D2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500">
                  Government Law College, Mumbai • Estd. 1855
                </span>
                <button
                  onClick={onClose}
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
  );
}
