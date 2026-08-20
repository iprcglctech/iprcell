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
  intervalMs = 2800, // Smooth comfortable viewing pace
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
      className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-[460px] h-full flex items-center justify-center depth-carousel-container">
        {items.map((item, index) => {
          const cardState = getCardClass(index);
          const isActive = cardState === "active";

          return (
            <div
              key={item.image + index}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[280px] sm:w-[340px] lg:w-[380px] h-[240px] sm:h-[280px] lg:h-[320px] rounded-xl overflow-hidden shadow-2xl cursor-pointer depth-carousel-card ${cardState} group`}
            >
              {/* Image Frame */}
              <div className="relative w-full h-full bg-navy-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft natural gradient on bottom for text readability */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                />

                {/* Title reveal on hover (clean minimal text, no box) */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 p-5 transition-all duration-300 ${
                    isActive && isHovered
                      ? "opacity-100 translate-y-0"
                      : isActive
                      ? "opacity-80 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="space-y-1">
                    {item.subtitle && (
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-medium">
                        {item.subtitle}
                      </p>
                    )}
                    <h3 className="text-xs sm:text-sm font-serif text-white font-normal leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Progress Indicators (No blue boxes) */}
      <div className="absolute -bottom-2 sm:bottom-1 flex items-center space-x-1.5 z-30">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-6 bg-white"
                : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
