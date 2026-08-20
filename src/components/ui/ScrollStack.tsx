"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export interface ScrollStackItemProps {
  children: React.ReactNode;
  index?: number;
  total?: number;
  className?: string;
  topOffset?: number;
  scaleFactor?: number;
  dimOnStack?: boolean;
}

export function ScrollStackItem({
  children,
  index = 0,
  total = 7,
  className,
  topOffset = 72, // Clears the sticky Navbar height
  scaleFactor = 0.03,
  dimOnStack = true,
}: ScrollStackItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // When scrolling past this card, smoothly scale it down slightly
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - Math.min(scaleFactor * 1.2, 0.05)]
  );

  // Subtle brightness/opacity dimming as subsequent cards stack on top
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [1, 0.95, 0.75]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky top-0 w-full min-h-[calc(100vh-72px)] min-h-[calc(100svh-72px)] flex flex-col justify-center",
        className
      )}
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity: dimOnStack ? opacity : 1,
          transformOrigin: "top center",
        }}
        className="w-full transition-shadow duration-300 shadow-2xl overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function ScrollStack({ children, className }: ScrollStackProps) {
  return (
    <div className={cn("relative w-full flex flex-col", className)}>
      {children}
    </div>
  );
}
