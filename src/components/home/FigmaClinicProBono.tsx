import React from "react";
import Link from "next/link";
import Image from "next/image";
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

            {/* Small Crest & Title */}
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-navy-950 p-1 flex items-center justify-center">
                <Image
                  src="/images/glc-crest.png"
                  alt="GLC Crest"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-muted">
                GLC MUMBAI IPR CELL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.12]">
              Knowledge should not<br />
              <span className="italic text-slate-800">stop in the classroom.</span>
            </h2>

            <p className="text-slate-muted text-xs sm:text-sm leading-relaxed font-sans max-w-lg">
              The IPR Clinic and pro bono initiative is the Cell&apos;s commitment to applying legal knowledge where it matters most. It represents the Serve dimension of our work — extending IP awareness and assistance beyond the classroom.
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

          {/* Right Column: Deep Navy Quote Block with Subnav */}
          <div className="lg:col-span-6">
            <div className="bg-navy-950 text-white rounded-xl p-8 sm:p-10 shadow-elevated border border-navy-800 space-y-8">
              {/* Minimal Top Subnav Links */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase font-mono tracking-widest text-slate-400 border-b border-navy-800 pb-4">
                <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
                <Link href="/events" className="hover:text-white transition-colors">EVENTS &amp; PROGRAMS</Link>
                <Link href="/journal" className="hover:text-white transition-colors">JOURNAL</Link>
                <Link href="/ipr-clinic" className="text-electric-light font-bold">IPR CLINIC</Link>
                <Link href="/join" className="hover:text-white transition-colors">JOIN US</Link>
                <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
              </div>

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
