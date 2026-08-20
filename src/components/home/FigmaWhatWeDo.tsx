"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      { label: "TRADEMARK OPPOSITION COMPETITION", href: "/events/toc" },
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
      { label: "ACADEMIC RESEARCH", href: "/journal" },
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
      { label: "PRO BONO INITIATIVES", href: "/ipr-clinic" },
    ],
  },
];

export default function FigmaWhatWeDo() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white border-b border-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-electric-light font-sans">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight">
            Four ways we advance intellectual property
          </h2>
        </div>

        {/* ── Interactive Editorial Cards Row with Silky Smooth Unfurling Transition ── */}
        <div
          onMouseLeave={() => setActiveIdx(null)}
          className="rounded-2xl overflow-hidden border border-cream-border/20 shadow-2xl bg-white"
        >
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#E7E0D2]">
            {PILLARS.map((pillar, i) => {
              const isActive = activeIdx === i;
              const isAnyActive = activeIdx !== null;

              return (
                <motion.div
                  key={pillar.number}
                  layout
                  transition={{
                    layout: {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1], // Smooth editorial ease-out curve
                    },
                    duration: 0.5,
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  className={cn(
                    pillar.bg,
                    "p-8 sm:p-10 flex flex-col justify-between transition-colors duration-500 relative cursor-pointer group",
                    // Dynamic width distribution using flex
                    isActive
                      ? "lg:flex-[1.5] bg-white shadow-inner"
                      : isAnyActive
                      ? "lg:flex-[0.83]"
                      : "lg:flex-1"
                  )}
                  style={{ minHeight: "440px" }}
                >
                  {/* Top Block: Number, Title, Description */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                        {pillar.number}
                      </span>
                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.85,
                          x: isActive ? 0 : -3,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-electric"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-serif font-normal text-navy-950 group-hover:text-electric transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Block: Linked Initiatives */}
                  <div className="pt-8 border-t border-[#EAE3D5]/80 space-y-2.5">
                    {pillar.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-[11px] font-mono tracking-wider font-semibold text-slate-800 hover:text-electric transition-colors duration-200 group/link py-0.5"
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
        </div>
      </div>
    </section>
  );
}
