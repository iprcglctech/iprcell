import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import joinData from "@/content/join.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Student Induction & Membership Pathway",
  description:
    "Explore the selection protocol, tiered committee hierarchy, and recruitment roadmap to join the Intellectual Property Rights (IPR) Cell at Government Law College, Mumbai.",
  alternates: {
    canonical: "/join",
  },
  openGraph: {
    title: "Join the IPR Cell | Government Law College, Mumbai",
    description:
      "Recruitment roadmap and membership hierarchy at Asia's oldest law institution.",
    url: "https://iprcellglc.in/join",
  },
};

export default function JoinPage() {
  const { whyJoin, hierarchy, selectionProcess } = joinData;

  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Panoramic Legal Heritage Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/legal-heritage-panorama.jpg"
            alt="Legal Heritage Panorama"
            fill
            className="object-cover object-center opacity-[0.22] filter invert contrast-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Student Induction <br />
              &amp; Membership Pathway
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              {whyJoin.tagline} • Join Asia&apos;s oldest law institution&apos;s premier student-run intellectual property body to lead national moot simulations, publish peer-reviewed scholarship, and engage directly with senior IP jurists.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#hierarchy"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>View Hierarchy &amp; Tiers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#protocol"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Selection Protocol</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Philosophy & Member Benefits (Warm Cream Canvas) ── */}
      <section className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Pro Bono Shield Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[460px] pointer-events-none select-none z-0 opacity-[0.14] mix-blend-multiply">
          <Image
            src="/images/pro-bono-shield-engraving.jpg"
            alt="Pro Bono Protection Shield Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal leading-snug">
              A Platform for Curious Minds <br />
              in Intellectual Property Law
            </h2>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
              {whyJoin.intro}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.benefits.map((benefit, idx) => (
              <ScrollReveal
                key={benefit.title}
                delay={0.1 + idx * 0.08}
                yOffset={20}
                className="bg-white border border-cream-border p-8 rounded-2xl shadow-card space-y-3"
              >
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                  0{idx + 1} • ADVANTAGE
                </div>
                <h3 className="font-serif font-normal text-xl text-ink">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Structured 3-Tier Membership Pathway ── */}
      <section id="hierarchy" className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              3-Tier Leadership Hierarchy
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Structured progressive advancement designed for student advocates from first year through final year.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hierarchy.map((tier, idx) => (
              <ScrollReveal
                key={tier.tier}
                delay={0.1 + idx * 0.1}
                yOffset={24}
                className="bg-surface-offwhite border border-cream-border rounded-2xl p-8 flex flex-col justify-between hover:border-electric transition-all shadow-xs space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                      TIER 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-700 bg-white border border-cream-border px-2.5 py-1 rounded-md shadow-xs">
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
                    {tier.tier}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm font-sans pt-2">
                    <div className="space-y-1">
                      <span className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider block text-slate-400">
                        Eligibility:
                      </span>
                      <p className="text-slate-muted leading-relaxed">{tier.eligibility}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider block text-slate-400">
                        Core Responsibilities:
                      </span>
                      <p className="text-slate-muted leading-relaxed">{tier.responsibilities}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-cream-border text-[11px] font-mono text-slate-400">
                  Government Law College IPR Cell
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Eligibility & Selection Protocol ── */}
      <section id="protocol" className="py-16 lg:py-24 bg-cream-100 border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Induction Guidelines &amp; Protocol
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Official eligibility criteria and the evaluation stages for prospective student inductees.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Applicant Criteria */}
            <ScrollReveal delay={0.1} className="lg:col-span-6 bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
                    Eligibility &amp; Candidate Attributes
                  </h3>
                  <p className="text-xs text-slate-muted mt-1 font-sans">
                    Qualifications and commitments required for cell induction.
                  </p>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-muted font-sans">
                  <li className="flex items-start space-x-3">
                    <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <span><strong className="text-ink font-semibold">Enrolled GLC Students:</strong> Open to students in their V-I (5-Year) and III-I (3-Year) cohorts at Government Law College, Mumbai.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <span><strong className="text-ink font-semibold">Intellectual Curiosity:</strong> Passion for trademark jurisprudence, patent analytics, media/entertainment law, and copyright policy.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <span><strong className="text-ink font-semibold">Commitment to Rigor:</strong> Dedication to collaborative event execution, doctrinal research, and institutional integrity.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-cream-border text-xs text-slate-500 font-sans">
                Notice of induction rounds is published each academic session via official college notices and cell notifications.
              </div>
            </ScrollReveal>

            {/* Right: 3-Step Selection Protocol */}
            <ScrollReveal delay={0.2} yOffset={24} className="lg:col-span-6 bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
                    3-Step Selection Protocol
                  </h3>
                  <p className="text-xs text-slate-muted mt-1 font-sans">
                    Standard multi-stage evaluation process for inductees.
                  </p>
                </div>

                <div className="space-y-3 text-xs font-sans">
                  {selectionProcess.map((step) => (
                    <div key={step.step} className="p-4 rounded-xl bg-surface-offwhite border border-cream-border flex items-start space-x-3.5 shadow-xs">
                      <span className="font-mono text-electric font-bold text-sm">{step.step}</span>
                      <div className="space-y-0.5">
                        <div className="font-semibold text-ink text-sm">{step.name}</div>
                        <div className="text-slate-muted text-xs leading-relaxed">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-cream-border">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric hover:text-electric-dark transition-colors group"
                >
                  <span>Inquire with the Student Secretariat</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Secretariat Notice Banner ── */}
      <section className="relative py-16 lg:py-24 bg-cream-100 overflow-hidden">
        {/* Wide Panorama Watermark */}
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
                Upcoming Academic Induction Cycle
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Induction notifications and written application deadlines are posted each autumn semester. For queries regarding the intake cycle, contact the student secretariat.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Contact Secretariat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
