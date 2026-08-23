"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 36,
  duration = 0.7,
  once = false,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.18 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Silky smooth cubic bezier pop
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
