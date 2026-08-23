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
  topOffset = 72,
  scaleFactor = 0.04,
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
    [0, 0.7, 1],
    [1, 1, 0.85]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky top-16 md:top-[72px] w-full min-h-[calc(100dvh-64px)] md:min-h-[calc(100vh-72px)] flex flex-col justify-center",
        className
      )}
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity: dimOnStack ? opacity : 1,
          transformOrigin: "top center",
        }}
        className="w-full transition-shadow duration-300 shadow-2xl"
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
