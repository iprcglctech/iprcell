"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface DualEmblemProps {
  className?: string;
}

export default function DualEmblem({ className = "" }: DualEmblemProps) {
  // State: 'line' (straight |) or 'cross' (✕)
  const [isCross, setIsCross] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial entrance sequence: starts as a straight line |, then after 1s morphs into ✕
    const timer = setTimeout(() => {
      setIsCross(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  // Determine current active state (hover toggles or state)
  const activeCross = isHovered ? !isCross : isCross;

  return (
    <div
      className={`relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsCross((prev) => !prev)}
      role="button"
      tabIndex={0}
      title="Click or hover to toggle transition"
      aria-label="Government Law College Mumbai and IPR Cell Emblems with interactive collaboration symbol"
    >
      {/* Background ambient glow for premium look */}
      <div className="absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent pointer-events-none blur-2xl" />

      {/* Left Emblem: GLC Mumbai Heritage Crest */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex justify-center items-center relative group/left"
      >
        <div className="relative w-full max-w-[150px] sm:max-w-[180px] md:max-w-[210px] lg:max-w-[230px] aspect-[380/412] transition-transform duration-500 group-hover/left:scale-105">
          <Image
            src="/images/glc-crest-white.png"
            alt="Government Law College Mumbai Crest - Estd. 1855"
            fill
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
            priority
            className="object-contain drop-shadow-[0_4px_16px_rgba(255,255,255,0.12)] filter"
          />
        </div>
      </motion.div>

      {/* Center Divider: Morphing Straight Line (|) to Cross (✕) */}
      <div className="relative flex items-center justify-center shrink-0 w-8 sm:w-12 h-44 sm:h-52 md:h-60 lg:h-64 cursor-pointer">
        {/* Subtle background glow circle on hover/active */}
        <motion.div
          animate={{
            scale: activeCross ? 1.1 : 0.8,
            opacity: activeCross ? 0.25 : 0.1,
          }}
          transition={{ duration: 0.5 }}
          className="absolute w-12 h-12 rounded-full bg-electric-light blur-md pointer-events-none"
        />

        {/* Morphing Line / X container */}
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
          {/* First Bar: 
              In 'line' state: vertical (0deg), height ~ 160px
              In 'cross' state: rotated (45deg), height ~ 28px
          */}
          <motion.span
            animate={{
              rotate: activeCross ? 45 : 0,
              height: activeCross ? 28 : 160,
              width: activeCross ? 2.5 : 1.5,
              backgroundColor: activeCross ? "#60a5fa" : "#ffffff",
              boxShadow: activeCross
                ? "0 0 12px rgba(96, 165, 250, 0.8), 0 0 2px rgba(255, 255, 255, 0.9)"
                : "0 0 8px rgba(255, 255, 255, 0.4)",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 0.8,
            }}
            className="absolute rounded-full origin-center transition-colors"
          />

          {/* Second Bar: 
              In 'line' state: vertical (0deg), height ~ 160px, opacity 0 or 1 overlapping perfectly
              In 'cross' state: rotated (-45deg), height ~ 28px, opacity 1
          */}
          <motion.span
            animate={{
              rotate: activeCross ? -45 : 0,
              height: activeCross ? 28 : 160,
              width: activeCross ? 2.5 : 1.5,
              opacity: activeCross ? 1 : 0,
              backgroundColor: activeCross ? "#60a5fa" : "#ffffff",
              boxShadow: activeCross
                ? "0 0 12px rgba(96, 165, 250, 0.8), 0 0 2px rgba(255, 255, 255, 0.9)"
                : "0 0 8px rgba(255, 255, 255, 0.4)",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 0.8,
            }}
            className="absolute rounded-full origin-center transition-colors"
          />
        </div>
      </div>

      {/* Right Emblem: IPR Cell Circular Seal */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex justify-center items-center relative group/right"
      >
        <div className="relative w-full max-w-[145px] sm:max-w-[175px] md:max-w-[205px] lg:max-w-[225px] aspect-[389/378] transition-transform duration-500 group-hover/right:scale-105">
          <Image
            src="/images/ipr-seal-white.png"
            alt="IPR Cell Seal - No Recreation of Creation"
            fill
            sizes="(max-width: 640px) 145px, (max-width: 1024px) 195px, 235px"
            priority
            className="object-contain drop-shadow-[0_4px_16px_rgba(255,255,255,0.12)] filter"
          />
        </div>
      </motion.div>
    </div>
  );
}
