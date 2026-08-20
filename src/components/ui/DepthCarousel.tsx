"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./DepthCarousel.css";

export interface CarouselItem {
  image: string;
  title: string;
  subtitle?: string;
}

interface DepthCarouselProps {
  items: CarouselItem[];
  intervalMs?: number;
  autoPlay?: boolean;
}

export default function DepthCarousel({
  items,
  intervalMs = 2800,
  autoPlay = true,
}: DepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, intervalMs, nextSlide]);

  const getCardClass = (index: number) => {
    const total = items.length;
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
      className="relative w-full h-[240px] sm:h-[290px] md:h-[330px] lg:h-[360px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-5xl h-full flex items-center justify-center depth-carousel-container">
        {items.map((item, index) => {
          const cardState = getCardClass(index);
          const isActive = cardState === "active";

          return (
            <div
              key={item.image + index}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[170px] sm:h-[220px] md:h-[260px] lg:h-[290px] rounded-xl overflow-hidden shadow-2xl cursor-pointer depth-carousel-card ${cardState} group`}
            >
              {/* Image Frame */}
              <div className="relative w-full h-full bg-navy-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft natural gradient on bottom for text readability */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                />

                {/* Title reveal on hover / active */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4 lg:p-5 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="space-y-0.5 sm:space-y-1 max-w-xl">
                    {item.subtitle && (
                      <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-300 font-semibold drop-shadow-sm">
                        {item.subtitle}
                      </p>
                    )}
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-serif text-white font-normal leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Progress Indicators */}
      <div className="absolute -bottom-1 sm:bottom-0 flex items-center space-x-2 z-30">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? "w-6 h-1.5 bg-electric-light"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
