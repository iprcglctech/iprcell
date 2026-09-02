"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Users,
  Sparkles,
  Info,
} from "lucide-react";
import clinicData from "@/content/clinic.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClinicClient() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const calendlyUrl = clinicData.calendlyUrl || "https://calendly.com/iprcellglc";

  useEffect(() => {
    if (typeof window !== "undefined" && (window as unknown as { Calendly?: { initInlineWidget: (config: { url: string; parentElement: HTMLElement | null }) => void } }).Calendly) {
      setCalendlyLoaded(true);
    }
  }, []);

  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* Calendly Official Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setCalendlyLoaded(true)}
      />

      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Clinic Forum Panorama Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/clinic-forum-panorama.jpg"
            alt="Classical Legal Clinic and Academy Panorama"
            fill
            className="object-cover object-center opacity-[0.22] filter invert contrast-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <div className="eyebrow-tag border-white/20 text-electric-light">
              PRO BONO INITIATIVE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Government Law College <br />
              IPR Clinic
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Applying legal expertise where it matters most &mdash; providing pro bono preliminary guidance, procedural awareness, and literacy workshops for student innovators, artists, and grassroots creators.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#schedule"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Guidance Session (Calendly)</span>
              </a>
              <a
                href="#mandate"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Explore Clinic Mandate</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Clinic Philosophy & Vision (Warm Cream Canvas) ── */}
      <section className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Innovation & Key Protection Watermark */}
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
              <div className="eyebrow-tag">
                CLINICAL VISION
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal leading-snug">
                Demystifying Intellectual Property <br />
                for Creators &amp; Grassroots Founders
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
            <div className="eyebrow-tag">
              CORE WORKFLOWS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Core Mandate &amp; Practice Streams
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
                className="bg-surface-offwhite border border-cream-border p-8 rounded-2xl shadow-card space-y-3 hover:border-electric transition-all group"
              >
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-normal text-xl text-ink group-hover:text-navy-950 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Calendly Appointment Integration Suite ── */}
      <section id="schedule" className="py-16 lg:py-24 bg-cream-100 border-b border-cream-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-2">
            <div className="eyebrow-tag">
              ONLINE SCHEDULER
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Schedule a Pro Bono Guidance Session
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm leading-relaxed font-sans">
              Select a convenient time slot via our official Calendly integration to meet with student coordinators and researchers from the GLC IPR Clinic.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Guidance Session Information */}
            <ScrollReveal
              delay={0.15}
              yOffset={20}
              className="lg:col-span-4 bg-white border border-cream-border rounded-3xl p-6 sm:p-8 shadow-card space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-5 font-sans">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono font-bold text-electric uppercase tracking-wider">
                    CONSULTATION DETAILS
                  </div>
                  <h3 className="font-serif font-normal text-2xl text-ink">
                    Preliminary IP Advisory
                  </h3>
                  <p className="text-xs text-slate-muted leading-relaxed pt-1">
                    30-minute introductory consultation to analyze your intellectual property inquiries and outline statutory procedures.
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-cream-border text-xs text-slate-700">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-semibold">Duration:</strong>
                      <span>30 Minutes / Session</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Video className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-semibold">Meeting Mode:</strong>
                      <span>Virtual via Google Meet or In-person at GLC Campus</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-semibold">Eligible Beneficiaries:</strong>
                      <span>Student innovators, independent creators, artists, grassroots founders</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-semibold">Supervision:</strong>
                      <span>Conducted under Faculty In-Charge oversight</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-surface-offwhite border border-cream-border rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-ink uppercase">
                    <Info className="w-3.5 h-3.5 text-electric" />
                    <span>What to Prepare</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Brief description of your brand, design, or invention</li>
                    <li>Specific trademark or copyright questions</li>
                    <li>Current filing status (if any)</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-border space-y-2">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-electric hover:bg-electric-dark text-white font-mono uppercase font-bold tracking-wider text-xs py-3.5 rounded-xl shadow-institutional transition-all hover:-translate-y-0.5"
                >
                  <span>Open in Calendly Directly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[10px] text-slate-400 font-mono text-center">
                  SSL encrypted &bull; Instant calendar confirmation
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Embedded Calendly Widget Frame */}
            <ScrollReveal
              delay={0.2}
              yOffset={20}
              className="lg:col-span-8 bg-white border border-cream-border rounded-3xl p-2 sm:p-4 shadow-card overflow-hidden min-h-[680px] flex flex-col justify-center"
            >
              <div className="w-full h-full min-h-[660px] rounded-2xl overflow-hidden relative bg-surface-offwhite">
                <iframe
                  src={`${calendlyUrl}?embed_domain=localhost&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=07162c&primary_color=2a54a7`}
                  width="100%"
                  height="660"
                  frameBorder="0"
                  title="IPR Clinic Calendly Scheduler"
                  className="w-full h-[660px] rounded-2xl border-0"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Academic Disclaimer Note ── */}
      <section className="py-10 bg-white border-b border-cream-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-xs text-slate-500 font-sans leading-relaxed space-y-1">
          <p className="font-semibold text-slate-700">Institutional Academic Disclaimer:</p>
          <p>{clinicData.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
