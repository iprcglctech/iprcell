import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FigmaClinicProBono() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="eyebrow-tag">
              IPR CLINIC — PRO BONO
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.12]">
              Applying legal expertise<br />
              <span className="italic text-slate-800">where it matters most.</span>
            </h2>

            <p className="text-slate-muted text-xs sm:text-sm leading-relaxed font-sans max-w-lg">
              The IPR Clinic&apos;s pro bono initiative reflects the Cell&apos;s commitment to applying legal expertise where it matters most, offering free assistance with trademark, copyright, and design registration applications.
            </p>

            <div className="pt-2">
              <Link
                href="/ipr-clinic"
                className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-ink hover:text-electric transition-colors group"
              >
                <span>LEARN ABOUT THE CLINIC</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Deep Navy Quote Block */}
          <div className="lg:col-span-6">
            <div className="bg-navy-950 text-white rounded-xl p-8 sm:p-10 shadow-elevated border border-navy-800 space-y-6">

              {/* Quotation */}
              <div className="space-y-4">
                <blockquote className="text-base sm:text-lg lg:text-xl font-serif italic text-slate-200 leading-relaxed">
                  &ldquo;Intellectual property is the oil of the 21st century. Look at the richest men a hundred years ago — they all made their money extracting natural resources. The richest men of today extract knowledge.&rdquo;
                </blockquote>
                <div className="text-xs font-mono uppercase tracking-wider text-electric-light font-semibold">
                  Mark Getty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
