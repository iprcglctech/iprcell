"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "./LogoLoop.css";

export interface LogoItem {
  src: string;
  alt: string;
  name?: string;
  role?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number | string; // e.g., 30 or "30s"
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  repeatCount?: number;
}

export default function LogoLoop({
  logos,
  speed = 32,
  direction = "left",
  pauseOnHover = true,
  className,
  cardClassName,
  imageClassName,
  repeatCount = 3,
}: LogoLoopProps) {
  const speedStr = typeof speed === "number" ? `${speed}s` : speed;

  // Duplicate logos array repeatCount times for seamless infinite looping
  const repeatedLogos = Array.from({ length: repeatCount }, () => logos).flat();

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 logoloop-container logoloop-mask select-none",
        className
      )}
    >
      <div
        className={cn(
          "logoloop-track flex items-center gap-6 sm:gap-8 lg:gap-10",
          direction === "right" && "reverse",
          pauseOnHover && "pause-on-hover"
        )}
        style={{
          ["--logoloop-speed" as string]: speedStr,
        }}
      >
        {repeatedLogos.map((logo, index) => {
          const cardContent = (
            <div
              key={`${logo.alt}-${index}`}
              className={cn(
                "group relative shrink-0 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-cream-border/80 shadow-xs hover:shadow-card hover:border-electric/40 transition-all duration-300 w-[180px] sm:w-[220px] lg:w-[250px] h-[90px] sm:h-[105px] lg:h-[115px]",
                cardClassName
              )}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 250px"
                  className={cn(
                    "object-contain p-2 filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300",
                    imageClassName
                  )}
                />
              </div>
            </div>
          );

          if (logo.href) {
            return (
              <a
                key={`${logo.alt}-${index}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer focus:outline-none"
              >
                {cardContent}
              </a>
            );
          }

          return <div key={`${logo.alt}-${index}`}>{cardContent}</div>;
        })}
      </div>
    </div>
  );
}
