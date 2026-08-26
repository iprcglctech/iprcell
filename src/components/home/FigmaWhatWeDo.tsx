"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PillarData {
  number: string;
  title: string;
  description: string;
  bg: string;
  items: { label: string; href: string }[];
}

const PILLARS: PillarData[] = [
  {
    number: "01",
    title: "Educate",
    description:
      "Structured learning pathways led by practitioners and academics at the frontier of IP law.",
    bg: "bg-[#FAF7F2]", // Warm Cream
    items: [
      { label: "CERTIFICATE COURSES", href: "/events/certificate-course" },
      { label: "GUEST LECTURES & WEBINARS", href: "/events/guest-lectures" },
    ],
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Simulated proceedings that build real drafting, research, and oral advocacy skills.",
    bg: "bg-[#FFFFFF]", // Pure White
    items: [
      { label: "INTER-TOC / INTRA-TOC", href: "/events/toc" },
    ],
  },
  {
    number: "03",
    title: "Research",
    description:
      "Peer-reviewed publication and scholarship that contributes to the IP discourse.",
    bg: "bg-[#FAF7F2]", // Warm Cream
    items: [
      { label: "IPR JOURNAL", href: "/journal" },
      { label: "GUIDELINES FOR SUBMISSIONS", href: "/journal#cfp" },
    ],
  },
  {
    number: "04",
    title: "Serve",
    description:
      "Applying IP knowledge where it matters most — to help those who need it.",
    bg: "bg-[#FFFFFF]", // Pure White
    items: [
      { label: "IPR CLINIC", href: "/ipr-clinic" },
    ],
  },
];

export default function FigmaWhatWeDo() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-6 sm:py-10 lg:py-12 bg-navy-950 text-white border-b border-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 lg:space-y-8 w-full my-auto">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal delay={0.1} className="space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-electric-light font-sans">
            WHAT WE DO
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-normal text-white tracking-tight">
            Four ways we advance intellectual property
          </h2>
        </ScrollReveal>

        {/* ── Interactive Editorial Cards Row (Desktop Unfurl / Mobile Accordion) ── */}
        <ScrollReveal
          delay={0.2}
          yOffset={24}
          className="rounded-xl sm:rounded-2xl overflow-hidden border border-cream-border/20 shadow-2xl bg-white"
        >
          <div
            onMouseLeave={() => setActiveIdx(0)}
            className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#E7E0D2]"
          >
            {PILLARS.map((pillar, i) => {
              const isActive = activeIdx === i;
              const isAnyActive = activeIdx !== null;

              return (
                <motion.div
                  key={pillar.number}
                  layout
                  transition={{
                    layout: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    duration: 0.4,
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  className={cn(
                    pillar.bg,
                    "p-4 sm:p-6 lg:p-8 flex flex-col justify-between transition-colors duration-300 relative cursor-pointer group",
                    // Dynamic desktop width distribution using flex
                    isActive
                      ? "lg:flex-[1.5] bg-white shadow-inner"
                      : isAnyActive
                        ? "lg:flex-[0.83]"
                        : "lg:flex-1",
                    "lg:min-h-[360px]"
                  )}
                >
                  {/* Top Block: Number, Title, Description */}
                  <div className="space-y-2 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                          {pillar.number}
                        </span>
                        <h3 className="text-base sm:text-xl lg:text-2xl font-serif font-normal text-navy-950 group-hover:text-electric transition-colors duration-300">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Mobile Accordion Indicator & Desktop Icon */}
                      <div className="text-electric flex items-center">
                        <ChevronDown className={cn(
                          "w-4 h-4 lg:hidden transition-transform duration-300",
                          isActive && "rotate-180"
                        )} />
                        <motion.div
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.85,
                            x: isActive ? 0 : -3,
                          }}
                          transition={{ duration: 0.3 }}
                          className="hidden lg:block"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Description: Always visible on desktop, animated accordion on mobile */}
                    <div className={cn(
                      "space-y-2",
                      isActive ? "block" : "hidden lg:block"
                    )}>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Block: Linked Initiatives */}
                  <div className={cn(
                    "pt-3 sm:pt-6 border-t border-[#EAE3D5]/80 space-y-1.5 sm:space-y-2 mt-3 lg:mt-0",
                    isActive ? "block" : "hidden lg:block"
                  )}>
                    {pillar.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-slate-800 hover:text-electric transition-colors duration-200 group/link py-0.5"
                      >
                        <span className="text-slate-400 group-hover/link:text-electric transition-colors">
                          •
                        </span>
                        <span className="group-hover/link:underline underline-offset-4">
                          {item.label}
                        </span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all duration-300 text-electric ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
