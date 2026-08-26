import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import eventsData from "@/content/events.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Executive Certificate Course Series in IP Law",
  description:
    "Intensive weekend executive certificate courses in intellectual property law instructed by senior partners and IP heads from Khaitan & Co, Mulla & Mulla, Trilegal, and Fox Mandal.",
  alternates: {
    canonical: "/events/certificate-course",
  },
  openGraph: {
    title: "Executive Certificate Course Series in IP Law | GLC Mumbai",
    description:
      "Practitioner-led certificate courses instructed by India's leading IP attorneys at Government Law College Mumbai.",
    url: "https://iprcellglc.in/events/certificate-course",
  },
};

export default function CertificateCoursePage() {
  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Clinic Forum Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/clinic-forum-panorama.jpg"
            alt="Classical Academic Forum"
            fill
            className="object-cover object-center opacity-[0.14] filter invert contrast-125 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Executive Certificate <br />
              Course Series
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              A comprehensive, practitioner-led academic initiative bridging intellectual property doctrines with real-world industry scenarios, held over intensive weekend modules with partners from India&apos;s tier-1 law firms.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#editions"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Browse Course Editions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Inquire for Enrollment</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Course Editions (Warm Cream Canvas) ── */}
      <section id="editions" className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Innovation & Key Watermark on Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[460px] pointer-events-none select-none z-0 opacity-[0.13] mix-blend-multiply">
          <Image
            src="/images/innovation-protection-engraving.jpg"
            alt="Innovation and Protection Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Chronological Editions
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Modular specialized curricula curated and delivered by leading IP practitioners.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {eventsData.certificateCourses.map((course, idx) => (
              <ScrollReveal
                key={course.id}
                delay={0.1 + idx * 0.08}
                yOffset={24}
                className="bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card hover:border-electric transition-all space-y-8"
              >
                {/* Edition Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cream-border pb-6">
                  <div>
                    <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                      EDITION {course.year} • PRACTITIONER MODULE
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-ink mt-2">
                      {course.title}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right font-sans">
                    <div className="text-xs font-mono text-slate-700 bg-surface-offwhite px-3 py-1 rounded border border-cream-border inline-block">
                      Status: {course.status}
                    </div>
                    <div className="text-xs text-slate-muted font-sans mt-1.5">
                      {course.dates}
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Curriculum &amp; Doctrinal Scope
                  </div>
                  <p className="text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {course.description}
                  </p>
                </div>

                {/* Featured Faculty Grid */}
                {course.featuredExperts && (
                  <div className="space-y-4 pt-2">
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Featured Faculty &amp; Industry Experts
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {course.featuredExperts.map((expert) => (
                        <div
                          key={expert.name}
                          className="p-4 rounded-xl bg-surface-offwhite border border-cream-border flex items-center space-x-3.5 shadow-xs"
                        >
                          <div className="w-10 h-10 rounded-full bg-navy-950 text-white flex items-center justify-center text-xs font-serif font-bold shrink-0">
                            {expert.name.charAt(0)}
                          </div>
                          <div className="space-y-0.5 overflow-hidden">
                            <div className="text-xs sm:text-sm font-semibold text-ink font-sans truncate">
                              {expert.name}
                            </div>
                            <div className="text-[11px] text-slate-muted truncate font-sans">
                              {expert.role}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Upcoming Cohort Inquiries CTA ── */}
      <section className="relative py-16 lg:py-24 bg-cream-100 overflow-hidden">
        {/* Wide Panorama Watermark */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[550px] sm:h-[680px] lg:h-[800px] pointer-events-none select-none z-0 opacity-[0.35] mix-blend-multiply">
          <Image
            src="/images/clinic-forum-panorama.jpg"
            alt="Classical Forum Panorama"
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
                Interested in Enrolling in the Next Certificate Cohort?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Curriculum notifications, faculty rosters, and registration links are published periodically via official cell announcements.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Inquire for Cohort Updates</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
