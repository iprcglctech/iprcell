"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedListItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

interface AnimatedListProps {
  items: AnimatedListItem[];
  className?: string;
  itemClassName?: string;
  delayStep?: number;
}

export default function AnimatedList({
  items,
  className,
  itemClassName,
  delayStep = 0.08,
}: AnimatedListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("w-full border-t border-cream-border divide-y divide-cream-border", className)}>
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={item.label + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * delayStep,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative overflow-hidden"
          >
            <Link
              href={item.href}
              className={cn(
                "py-4 px-2 sm:px-3 flex items-center justify-between text-xs sm:text-sm text-ink transition-all duration-300 group rounded-md",
                isHovered ? "bg-white/70 shadow-sm" : "bg-transparent",
                itemClassName
              )}
            >
              <div className="flex items-center space-x-3">
                <motion.span
                  animate={{
                    x: isHovered ? 4 : 0,
                    color: isHovered ? "#2A54A7" : "#0F172A",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="font-sans font-medium text-sm sm:text-base"
                >
                  {item.label}
                </motion.span>
                {item.badge && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cream-200 text-slate-600">
                    {item.badge}
                  </span>
                )}
              </div>

              <motion.div
                animate={{
                  x: isHovered ? 4 : 0,
                  color: isHovered ? "#2A54A7" : "#94A3B8",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex items-center"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
