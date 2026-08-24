"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FigmaClinicProBono() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center py-6 sm:py-10 lg:py-16 bg-cream-100 border-b border-cream-border overflow-hidden">
      {/* ── Antique Pro Bono Legal Shield & Torch Engraving Watermark ── */}
      <div className="absolute left-0 sm:left-4 lg:left-10 top-1/2 -translate-y-1/2 w-[220px] sm:w-[360px] lg:w-[480px] xl:w-[540px] pointer-events-none select-none z-0 opacity-[0.08] sm:opacity-[0.11] mix-blend-multiply transform -translate-x-1/6 sm:translate-x-0">
        <Image
          src="/images/pro-bono-shield-engraving.jpg"
          alt="Antique Pro Bono Legal Protection and Innovation Shield Engraving"
          width={900}
          height={1200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Mission with ScrollReveal */}
          <ScrollReveal delay={0.1} className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="eyebrow-tag">
              IPR CLINIC — PRO BONO
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.15]">
              Applying legal expertise<br />
              <span className="italic text-slate-800">where it matters most.</span>
            </h2>

            <p className="text-slate-muted text-xs sm:text-sm leading-relaxed font-sans max-w-lg">
              The IPR Clinic&apos;s pro bono initiative reflects the Cell&apos;s commitment to applying legal expertise where it matters most, offering free assistance with trademark, copyright, and design registration applications.
            </p>

            <div className="pt-1 sm:pt-2">
              <Link
                href="/ipr-clinic"
                className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-ink hover:text-electric transition-colors group"
              >
                <span>LEARN ABOUT THE CLINIC</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Deep Navy Quote Block with ScrollReveal */}
          <ScrollReveal delay={0.25} yOffset={24} className="lg:col-span-6">
            <div className="bg-navy-950 text-white rounded-xl p-5 sm:p-8 lg:p-10 shadow-elevated border border-navy-800 space-y-4 sm:space-y-6">
              {/* Quotation */}
              <div className="space-y-3 sm:space-y-4">
                <blockquote className="text-sm sm:text-lg lg:text-xl font-serif italic text-slate-200 leading-relaxed">
                  &ldquo;Intellectual property is the oil of the 21st century. Look at the richest men a hundred years ago — they all made their money extracting natural resources. The richest men of today extract knowledge.&rdquo;
                </blockquote>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-electric-light font-semibold">
                  Mark Getty
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
