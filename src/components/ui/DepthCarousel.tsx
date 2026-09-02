"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  intervalMs = 3800,
  autoPlay = true,
}: DepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch Swipe Handling for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, isHovered, intervalMs, nextSlide]);

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
      className="relative w-full h-[340px] xs:h-[370px] sm:h-[360px] md:h-[440px] lg:h-[500px] xl:h-[530px] flex items-center justify-center select-none group/carousel overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Navigation Buttons: Previous */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous slide"
        className="absolute left-0.5 sm:left-4 md:left-8 z-40 p-1.5 sm:p-2.5 rounded-full bg-navy-950/85 hover:bg-navy-900 text-white/90 hover:text-white border border-white/15 hover:border-electric-light/50 backdrop-blur-md shadow-xl transition-all hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Navigation Buttons: Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next slide"
        className="absolute right-0.5 sm:right-4 md:right-8 z-40 p-1.5 sm:p-2.5 rounded-full bg-navy-950/85 hover:bg-navy-900 text-white/90 hover:text-white border border-white/15 hover:border-electric-light/50 backdrop-blur-md shadow-xl transition-all hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <div className="relative w-full max-w-6xl h-full flex items-center justify-center depth-carousel-container">
        {items.map((item, index) => {
          const cardState = getCardClass(index);
          const isActive = cardState === "active";

          return (
            <div
              key={item.image + index}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[92vw] max-w-[420px] sm:w-[500px] sm:max-w-none md:w-[680px] lg:w-[840px] xl:w-[920px] h-[260px] xs:h-[290px] sm:h-[290px] md:h-[370px] lg:h-[430px] xl:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-pointer depth-carousel-card ${cardState} group`}
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
                  className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                />

                {/* Title and Subheading overlay */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="space-y-1 sm:space-y-1.5 max-w-3xl">
                    {item.subtitle && (
                      <p className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-wider sm:tracking-[0.2em] text-electric-light font-bold drop-shadow-md line-clamp-1">
                        {item.subtitle}
                      </p>
                    )}
                    <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-serif text-white font-normal leading-snug drop-shadow-lg line-clamp-2">
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
      <div className="absolute bottom-0.5 sm:bottom-2 flex items-center space-x-1.5 sm:space-x-2 z-30">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? "w-5 sm:w-7 h-1 sm:h-1.5 bg-electric-light"
                : "w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
