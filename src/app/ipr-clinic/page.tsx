"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  HelpCircle,
  FileText,
  ArrowRight,
  Lightbulb,
  Sparkles,
  Scale,
  Compass,
  CheckCircle2,
  Mail,
} from "lucide-react";
import clinicData from "@/content/clinic.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function IprClinicPage() {
  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Brand New Clinic Forum Panorama Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/clinic-forum-panorama.jpg"
            alt="Classical Legal Clinic and Academy Panorama"
            fill
            className="object-cover object-center opacity-[0.14] filter invert contrast-125 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Government Law College <br />
              <span className="italic text-slate-300">IPR Clinic</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Applying legal expertise where it matters most — providing pro bono preliminary guidance, procedural awareness, and literacy workshops for student innovators, artists, and grassroots creators.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#mandate"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Explore Clinic Mandate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Request Guidance Session</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Clinic Philosophy & Vision (Warm Cream Canvas) ── */}
      <section className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Brand New Innovation & Key Protection Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[460px] pointer-events-none select-none z-0 opacity-[0.13] mix-blend-multiply">
          <Image
            src="/images/innovation-protection-engraving.jpg"
            alt="Allegory of Innovation and Intellectual Property Protection Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal delay={0.1} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal leading-snug">
                Demystifying Intellectual Property <br />
                <span className="italic text-slate-800">for Creators &amp; Grassroots Founders</span>
              </h2>

              <div className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
                <p>
                  {clinicData.vision}
                </p>
                <p>
                  Through structured workshops, clinical research fellowships, and one-on-one preliminary advisory sessions, the Clinic bridges academic jurisprudence with practical community outreach, ensuring creators understand how to protect their creative output.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Four Clinical Mandate Areas ── */}
      <section id="mandate" className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Core Mandate &amp; Workflows
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Structured clinical advisory streams empowering student advocates and local creators alike.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicData.mandate.map((item, idx) => (
              <ScrollReveal
                key={item.title}
                delay={0.1 + idx * 0.08}
                yOffset={20}
                className="bg-surface-offwhite border border-cream-border p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-electric transition-all hover:shadow-card group"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                    0{idx + 1} • CLINICAL STREAM
                  </div>
                  <h3 className="font-serif font-normal text-xl text-ink group-hover:text-navy-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-border text-[11px] font-mono text-slate-400">
                  Government Law College Legal Clinic
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Request Guidance Session CTA (Floating Card over Panorama) ── */}
      <section className="relative py-16 lg:py-24 bg-cream-100 overflow-hidden">
        {/* Wide Panorama Engraving Watermark on Off-White Canvas */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[550px] sm:h-[680px] lg:h-[800px] pointer-events-none select-none z-0 opacity-[0.38] mix-blend-multiply">
          <Image
            src="/images/clinic-forum-panorama.jpg"
            alt="Classical Legal Clinic Panorama"
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
                Request an IPR Clinic Guidance Session
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Are you a student inventor, artist, or early-stage founder? Reach out to our student clinic coordinators for introductory intellectual property awareness.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Contact Clinic Coordinators</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
