"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import eventsData from "@/content/events.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EventsOverviewPage() {
  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Victorian Courtroom Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/victorian-courtroom-engraving.jpg"
            alt="Victorian Courtroom Engraving"
            fill
            priority
            className="object-cover object-center opacity-[0.20] filter invert contrast-125 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-transparent to-navy-950/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Academic Flagships <br />
              &amp; Initiatives
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              The IPR Cell convenes India&apos;s leading trademark practitioners, academics, and jurists to host simulated courtroom disputes, practitioner-led certificate courses, and national intellectual property discourses.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#flagships"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Explore Flagships</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Inquire for Partnerships</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Three Major Academic Flagships (Warm Cream Canvas) ── */}
      <section id="flagships" className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Law Treatise Watermark on Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[480px] pointer-events-none select-none z-0 opacity-[0.14] mix-blend-multiply">
          <Image
            src="/images/law-treatise-engraving.jpg"
            alt="Law Treatise Antique Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Flagship Pillars
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Comprehensive institutional programs bridging academic jurisprudence with real-world practitioner masterclasses.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Certificate Course */}
            <ScrollReveal
              delay={0.1}
              yOffset={24}
              className="bg-white border border-cream-border rounded-2xl p-8 flex flex-col justify-between hover:border-electric transition-all shadow-card group"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                  01 • PRACTITIONER MASTERCLASS
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink group-hover:text-navy-950 transition-colors">
                  Executive Certificate Courses
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans">
                  Structured weekend certificate programs covering Patent &amp; Copyright doctrines, Media &amp; Entertainment Law, and Cybersecurity instructed by Partners from Khaitan &amp; Co, Mulla &amp; Mulla, Trilegal, and Cyril Amarchand Mangaldas.
                </p>
                <div className="space-y-1 text-xs text-slate-700 bg-surface-offwhite p-4 rounded-xl border border-cream-border font-sans">
                  <div className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider mb-1">
                    Recent Editions:
                  </div>
                  <div>• 2026: Cyber Security in Media &amp; Ent.</div>
                  <div>• 2025: Copyright &amp; Media Law</div>
                  <div>• 2024: TechDat AI &amp; Technologies</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-cream-border">
                <Link
                  href="/events/certificate-course"
                  className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric hover:text-electric-dark transition-colors group/btn"
                >
                  <span>View Full Course Editions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Trademark Opposition Competition */}
            <ScrollReveal
              delay={0.2}
              yOffset={24}
              className="bg-white border border-cream-border rounded-2xl p-8 flex flex-col justify-between hover:border-electric transition-all shadow-card group"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                  02 • NATIONAL MOOT SIMULATION
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink group-hover:text-navy-950 transition-colors">
                  Trademark Opposition Competition
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans">
                  India&apos;s first-of-its-kind Trademark Opposition Competition simulating opposition proceedings under Section 21 of the Trade Marks Act, 1999 read with Rule 42 to Rule 50 of the Trade Marks Rules, 2017 in two phases, Inter (National) and Intra (Institutional) level competition.
                </p>
                <div className="space-y-1 text-xs text-slate-700 bg-surface-offwhite p-4 rounded-xl border border-cream-border font-sans">
                  <div className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider mb-1">
                    Procedural Scope:
                  </div>
                  <div>• Written Submissions (Rules 42–47)</div>
                  <div>• Oral Hearings before Registrar (Rule 50)</div>
                  <div>• National Finals at GLC Mumbai</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-cream-border">
                <Link
                  href="/events/toc"
                  className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric hover:text-electric-dark transition-colors group/btn"
                >
                  <span>TOC Overview &amp; Archives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3: Guest Lectures & Colloquiums */}
            <ScrollReveal
              delay={0.3}
              yOffset={24}
              className="bg-white border border-cream-border rounded-2xl p-8 flex flex-col justify-between hover:border-electric transition-all shadow-card group"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                  03 • PUBLIC DISCOURSE &amp; PANELS
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink group-hover:text-navy-950 transition-colors">
                  Guest Lectures &amp; Colloquiums
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans">
                  Dynamic intellectual exchanges addressing pressing industry debates, including World IP Day colloquiums on AI-generated content, personality rights, and anti-counterfeiting campaigns.
                </p>
                <div className="space-y-1 text-xs text-slate-700 bg-surface-offwhite p-4 rounded-xl border border-cream-border font-sans">
                  <div className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider mb-1">
                    Key Highlights:
                  </div>
                  <div>• Javed Akhtar on Copyright &amp; Lyrics</div>
                  <div>• AI vs Artist World IP Day Panel</div>
                  <div>• In Conversation with Priyanka Khimani</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-cream-border">
                <Link
                  href="/events/guest-lectures"
                  className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric hover:text-electric-dark transition-colors group/btn"
                >
                  <span>Explore Lecture Series</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Flagship Photo Archives ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal delay={0.1} className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-ink font-normal">
              Flagship Photo Archives
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Visual documentation of national rounds, guest lectures, and campus colloquiums.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/events/ai-artist-1.jpg", label: "AI vs Artist Colloquium" },
              { src: "/images/events/inter-toc-1.jpg", label: "Inter-TOC Oral Rounds" },
              { src: "/images/events/javed-akhtar-1.jpg", label: "Colloquium with Javed Akhtar" },
              { src: "/images/events/priyanka-khimani-1.jpg", label: "Masterclass with Priyanka Khimani" },
            ].map((photo, idx) => (
              <ScrollReveal
                key={photo.src}
                delay={0.1 + idx * 0.08}
                className="relative h-48 rounded-2xl overflow-hidden border border-cream-border group shadow-xs"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-serif text-white font-normal drop-shadow-sm">
                  {photo.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Partnership / Inquiry CTA (Floating Navy Card) ── */}
      <section className="relative py-16 lg:py-24 bg-cream-100 overflow-hidden">
        {/* Wide Panorama Watermark on Canvas */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[550px] sm:h-[680px] lg:h-[800px] pointer-events-none select-none z-0 opacity-[0.35] mix-blend-multiply">
          <Image
            src="/images/legal-heritage-panorama.jpg"
            alt="Legal Heritage Panorama"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-100/90 via-transparent to-cream-100/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-100/90 via-transparent to-cream-100/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal
            delay={0.1}
            yOffset={24}
            className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-2 relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Partner with the IPR Cell
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Are you an IP firm partner, senior jurist, or corporate counsel interested in speaking at our colloquiums or mentoring certificate cohorts?
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Connect with Coordinators</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
