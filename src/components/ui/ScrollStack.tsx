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
  topOffset = 0,
  scaleFactor = 0.035,
  dimOnStack = true,
}: ScrollStackItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down smoothly as subsequent cards slide over it
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - scaleFactor]
  );

  // Subtle dimming as the next card stacks over
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 1, 0.88]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky top-0 w-full min-h-screen min-h-[100dvh] flex flex-col justify-center transform-gpu",
        className
      )}
      style={{
        zIndex: index + 1,
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <motion.div
        style={{
          scale,
          opacity: dimOnStack ? opacity : 1,
          transformOrigin: "top center",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translate3d(0, 0, 0)",
        }}
        className="w-full transform-gpu will-change-[transform,opacity] transition-shadow duration-300 shadow-2xl"
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
