"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
}

export default function MemberCard({
  name,
  position,
  designation,
  department,
  specialization,
  academicYear,
  image,
  tier,
}: MemberProps) {
  const [isHovered, setIsHovered] = useState(false);
  const displayRole = position || designation || "Committee Member";

  const tagLabel =
    tier === "faculty"
      ? "Faculty In-Charge"
      : tier === "senior"
      ? "Senior Core"
      : department || "Junior Core";

  const imageAspect = "aspect-[3/3.4]";

  return (
    <motion.div
      className="w-full h-full relative cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.03 : 1,
        zIndex: isHovered ? 25 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div
        className={`relative bg-white border rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 ${
          isHovered
            ? "border-[#B89B5E] shadow-elevated"
            : "border-[#E7E0D2] shadow-subtle"
        }`}
      >
        {/* Image with hover overlay */}
        <div className={`relative w-full ${imageAspect} bg-slate-100 overflow-hidden shrink-0`}>
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
            }`}
          >
            <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase tracking-[0.2em] bg-[#07162C]/90 text-white backdrop-blur-md border border-white/10 shadow-md">
              {tagLabel}
            </span>
          </div>

          {/* Specialization overlay — only displayed on hover */}
          {specialization && (
            <div
              className={`absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-300 ease-out bg-gradient-to-t from-[#07162C]/95 via-[#07162C]/80 to-transparent px-4 pt-8 pb-3.5 z-20 ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <p className="text-[11px] font-sans text-white/90 leading-snug font-normal">
                {specialization}
              </p>
            </div>
          )}
        </div>

        {/* Name & Designation — always visible */}
        <div className="p-4 sm:p-5 flex flex-col gap-1 bg-white z-10">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
            {displayRole}
          </p>
          <h3 className="text-base sm:text-lg font-serif font-normal text-[#07162C] leading-snug">
            {name}
          </h3>
          {academicYear && (
            <p className="text-[10px] font-mono text-slate-400">{academicYear}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
