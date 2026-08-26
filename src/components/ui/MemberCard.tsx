"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
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
}: MemberProps) {
  const [isHovered, setIsHovered] = useState(false);
  const displayRole = position || designation || "Committee Member";

  const tagLabel =
    tier === "faculty"
      ? "Faculty In-Charge"
      : tier === "senior"
      ? "Senior Core"
      : department || "Junior Core";

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

          {/* Tag badge — only displayed on hover */}
          <div
            className={`absolute top-3 left-3 z-20 pointer-events-none transition-all duration-300 ease-out ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1.5"
            } ${compactOnMobile ? "hidden sm:block" : ""}`}
          >
            <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase tracking-[0.2em] bg-[#07162C]/90 text-white backdrop-blur-md border border-white/10 shadow-md">
              {tagLabel}
            </span>
          </div>

          {/* LinkedIn hover overlay on image (desktop only) */}
          {linkedin && (
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
        <div className={`${compactOnMobile ? "py-4 pr-4 pl-0 sm:p-5" : "p-4 sm:p-5"} flex flex-col gap-1 bg-white z-10 min-w-0 flex-1`}>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
            {displayRole}
          </p>
          <div className="flex items-center justify-between gap-1.5">
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
            <p className="text-[10px] font-mono text-slate-400">{academicYear}</p>
          )}
        </div>
      </div>
    </TiltedCard>
  );
}
