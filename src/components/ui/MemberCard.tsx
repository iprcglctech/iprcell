"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, GraduationCap } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard";

export interface MemberProps {
  name: string;
  position?: string;
  designation?: string;
  department?: string;
  bio?: string;
  academicYear?: string;
  email?: string;
  keyInitiatives?: string;
  image: string;
  tier: "faculty" | "senior" | "junior";
  compactOnMobile?: boolean;
  linkedin?: string;
  qualification?: string;
  subject?: string;
}

export default function MemberCard({
  name,
  position,
  designation,
  department,
  academicYear,
  image,
  tier,
  compactOnMobile = false,
  linkedin,
  qualification,
  subject,
}: MemberProps) {
  const [isHovered, setIsHovered] = useState(false);
  const displayRole = position || designation || "Committee Member";

  const imageAspect = compactOnMobile
    ? "w-20 h-20 sm:w-full sm:h-auto sm:aspect-[3/3.4] rounded-xl sm:rounded-none m-4 sm:m-0"
    : "w-full aspect-[3/3.4]";
  const cardLayout = compactOnMobile
    ? "flex-row items-center sm:flex-col sm:items-stretch"
    : "flex-col";

  return (
    <TiltedCard maxTilt={14} scale={1.03} glareOpacity={0.18} className="h-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative bg-white border rounded-2xl overflow-hidden flex ${cardLayout} h-full transition-all duration-300 group ${
          isHovered
            ? "border-[#B89B5E] shadow-elevated"
            : "border-[#E7E0D2] shadow-subtle"
        }`}
      >
        {/* Image with hover overlay */}
        <div className={`relative ${imageAspect} bg-slate-100 overflow-hidden shrink-0`}>
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover object-top transition-transform duration-500 ease-out ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />

          {/* Academic Qualification & Subject hover overlay on image */}
          {qualification && (
            <div
              className={`absolute inset-0 transition-all duration-300 ease-out bg-[#07162C]/92 backdrop-blur-xs p-4 flex flex-col justify-end z-20 ${
                isHovered
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="space-y-1.5 text-left">
                <div className="flex items-center space-x-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-[#CEB681]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#CEB681]" />
                  <span>Academic Qualification</span>
                </div>
                <div className="text-xs font-serif text-white font-normal leading-snug">
                  {qualification}
                </div>
                {subject && (
                  <div className="text-[11px] font-sans text-slate-300 pt-1 border-t border-white/10">
                    <span className="text-slate-400 font-mono text-[9px] uppercase">Subject:</span> <strong className="text-white font-medium">{subject}</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* LinkedIn hover overlay on image (desktop only when no qualification) */}
          {linkedin && !qualification && (
            <div
              className={`hidden sm:flex absolute inset-x-0 bottom-0 transition-all duration-300 ease-out bg-gradient-to-t from-[#07162C]/90 via-[#07162C]/60 to-transparent px-4 pt-8 pb-3.5 z-20 items-center justify-center ${
                isHovered
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-mono font-semibold px-3.5 py-1.5 rounded-lg shadow-md transition-all hover:scale-105"
              >
                <Linkedin className="w-3.5 h-3.5 text-white" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          )}
        </div>

        {/* Name & Designation — always visible */}
        <div className={`${compactOnMobile ? "py-4 pr-4 pl-0 sm:p-5" : "p-4 sm:p-5"} flex flex-col gap-1 bg-white z-10 min-w-0 flex-1 justify-between`}>
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
              {displayRole}
            </p>
            <div className="flex items-center justify-between gap-1.5 mt-0.5">
              <h3 className="text-base sm:text-lg font-serif font-normal text-[#07162C] leading-snug">
                {name}
              </h3>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${name}'s LinkedIn profile`}
                  className={`text-[#0A66C2] hover:text-[#004182] transition-all duration-300 hover:scale-110 shrink-0 p-0.5 ${
                    isHovered ? "opacity-100 scale-105" : "opacity-100 sm:opacity-60 group-hover:opacity-100"
                  }`}
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
            {academicYear && (
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">{academicYear}</p>
            )}
          </div>
        </div>
      </div>
    </TiltedCard>
  );
}
