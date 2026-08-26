"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award, ArrowUpRight } from "lucide-react";
import TiltedCard from "./TiltedCard";
import "./DepthCarousel.css";

export interface CoreMemberItem {
  name: string;
  position: string;
  image: string;
  bio?: string;
  department?: string;
  academicYear?: string;
  email?: string;
  linkedin?: string;
  keyInitiatives?: string;
}

interface MemberDepthCarouselProps {
  members: CoreMemberItem[];
  autoPlay?: boolean;
  intervalMs?: number;
}

export default function MemberDepthCarousel({
  members,
  autoPlay = true,
  intervalMs = 4500,
}: MemberDepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = members.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!autoPlay || isPaused || total <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, isPaused, intervalMs, nextSlide, total]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const getCardClass = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return "active";
    if (diff === 1) return "next";
    if (diff === total - 1) return "prev";
    if (diff === 2) return "far-next";
    if (diff === total - 2) return "far-prev";
    return "hidden-card";
  };

  return (
    <div
      className="relative w-full py-4 flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Perspective Stage */}
      <div className="relative w-full h-[460px] sm:h-[500px] md:h-[520px] flex items-center justify-center depth-carousel-container overflow-hidden">
        {members.map((member, index) => {
          const cardState = getCardClass(index);
          const isActive = cardState === "active";

          return (
            <div
              key={member.name + index}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[290px] sm:w-[350px] md:w-[400px] h-[410px] sm:h-[460px] md:h-[480px] rounded-xl cursor-pointer depth-carousel-card ${cardState} transition-all duration-700`}
            >
              {isActive ? (
                /* Active Executive Card */
                <TiltedCard
                  maxTilt={4}
                  scale={1.015}
                  perspective={1400}
                  glareOpacity={0.08}
                  className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#E7E0D2]"
                >
                  <div className="relative w-full h-full flex flex-col overflow-hidden group">
                    {/* Top Gold Ribbon */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-[#B89B5E] z-20" />

                    {/* Full-bleed portrait (68% of card height) */}
                    <div className="relative w-full h-[68%] bg-[#07162C] overflow-hidden shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        priority={index === 0}
                        className="object-cover object-top grayscale contrast-[1.04] group-hover:grayscale-0 transition-[filter] duration-700"
                      />

                      {/* Corner badges */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-start justify-between z-20">
                        <span className="px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-[0.2em] bg-[#07162C]/80 text-white backdrop-blur-md border border-white/10">
                          Executive Board
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/90 text-[#07162C] font-bold backdrop-blur-md">
                          GLC Mumbai
                        </span>
                      </div>

                      {/* Smooth gradient into content panel */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
                    </div>

                    {/* Content panel with left gold accent */}
                    <div
                      className={[
                        "relative z-20 px-5 pb-5 bg-white flex flex-col justify-between flex-1 -mt-5",
                        "before:absolute before:top-3 before:bottom-3 before:left-0 before:w-[3px]",
                        "before:bg-[#B89B5E] before:rounded-full",
                      ].join(" ")}
                    >
                      <div className="pl-3">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#B89B5E]">
                          {member.position}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#07162C] tracking-tight mt-0.5 group-hover:text-[#2A54A7] transition-colors">
                          {member.name}
                        </h3>

                        {member.bio && (
                          <p className="text-xs text-slate-500 font-sans mt-1 line-clamp-2 leading-relaxed">
                            {member.bio}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2 pl-3">
                        <span>Executive Board</span>
                        <span>AY 2024–2026</span>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              ) : (
                /* Inactive Slide — Exhibition gallery stack */
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-[#07162C] border border-[#0B1B32] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top opacity-40 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-[#07162C]/50 to-transparent" />
                  {/* Subtle gold top line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-[#B89B5E]/50" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white z-10">
                    <p className="text-[9px] font-mono text-[#CEB681] uppercase tracking-[0.22em] font-bold">
                      {member.position}
                    </p>
                    <h4 className="text-base font-serif font-normal text-white leading-tight mt-0.5">
                      {member.name}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center space-x-5 mt-4 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous leader"
          className="w-9 h-9 rounded-full bg-white border border-[#E7E0D2] shadow-subtle hover:border-navy-950 hover:bg-navy-950 hover:text-white text-navy-950 flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicator dots */}
        <div className="flex items-center space-x-2">
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to board member ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                  ? "w-7 bg-navy-950"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next leader"
          className="w-9 h-9 rounded-full bg-white border border-[#E7E0D2] shadow-subtle hover:border-navy-950 hover:bg-navy-950 hover:text-white text-navy-950 flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
