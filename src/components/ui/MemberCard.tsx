"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const displayRole = position || designation || "Committee Member";

  const tagLabel =
    tier === "faculty"
      ? "Faculty In-Charge"
      : tier === "senior"
      ? "Senior Core"
      : department || "Junior Core";

  const imageAspect =
    tier === "faculty"
      ? "aspect-[4/3]"
      : tier === "senior"
      ? "aspect-[3/3.4]"
      : "aspect-[3/3.2]";

  return (
    <motion.div
      className="w-full h-full relative"
      whileHover={{ scale: 1.07, zIndex: 30 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <TiltedCard maxTilt={6} scale={1.01} glareOpacity={0} className="w-full h-full">
      <div className="relative bg-white border border-[#E7E0D2] rounded-2xl overflow-hidden shadow-subtle hover:shadow-institutional hover:border-[#B89B5E] transition-all duration-300 flex flex-col h-full group">

        {/* Image with hover overlay */}
        <div className={`relative w-full ${imageAspect} bg-slate-100 overflow-hidden shrink-0`}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top transition-all duration-500 ease-out"
          />

          {/* Tag badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase tracking-[0.2em] bg-[#07162C]/85 text-white backdrop-blur-md border border-white/10 shadow-xs">
              {tagLabel}
            </span>
          </div>

          {/* Specialization overlay — fades + slides up on hover */}
          {specialization && (
            <div className="absolute inset-x-0 bottom-0 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-[#07162C]/95 via-[#07162C]/75 to-transparent px-4 pt-10 pb-4 z-10">
              <p className="text-[12px] font-sans text-white leading-snug font-medium">
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
      </TiltedCard>
    </motion.div>
  );
}
