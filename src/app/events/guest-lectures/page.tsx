import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ArrowRight } from "lucide-react";
import eventsData from "@/content/events.json";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EventImageCarousel from "@/components/events/EventImageCarousel";

export const metadata: Metadata = {
  title: "Guest Lectures, Colloquiums & Webinars",
  description:
    "Eminent guest lectures and panels on media copyright, artists' rights, and trademark jurisprudence with Shri Javed Akhtar, Ms. Priyanka Khimani, and leading practitioners at GLC Mumbai.",
  alternates: {
    canonical: "/events/guest-lectures",
  },
  openGraph: {
    title: "Guest Lectures & Colloquiums | IPR Cell GLC Mumbai",
    description:
      "Public discourses and panel debates on intellectual property with industry leaders at Government Law College Mumbai.",
    url: "https://iprcellglcmumbai.in/events/guest-lectures",
  },
};

export default function GuestLecturesPage() {
  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Classical Forum Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/clinic-forum-panorama.jpg"
            alt="Classical Academic Forum"
            fill
            className="object-cover object-center opacity-[0.22] filter invert contrast-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Guest Lectures <br />
              &amp; Colloquiums
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              The IPR Cell regularly convenes industry leaders, senior advocates, media personalities, and international IP counsel to debate contemporary legal challenges and jurisprudence.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#lectures"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Browse Lecture Series</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Propose a Keynote Session</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Lecture Archives (Warm Cream Canvas) ── */}
      <section id="lectures" className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Lady Justice Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[460px] pointer-events-none select-none z-0 opacity-[0.14] mix-blend-multiply">
          <Image
            src="/images/lady-justice-engraving.jpg"
            alt="Lady Justice Antique Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Featured Colloquiums &amp; Keynotes
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Discourses addressing AI-generated content, personality rights, music copyright, and procedural trademark law.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {eventsData.guestLecturesAndWebinars.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                delay={0.1 + idx * 0.08}
                yOffset={24}
                className="bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card hover:border-electric transition-all space-y-6"
              >
                <div className={`grid grid-cols-1 ${item.images && item.images.length > 0 ? "lg:grid-cols-12" : ""} gap-8 items-start`}>
                  <div className={`${item.images && item.images.length > 0 ? "lg:col-span-7" : "max-w-4xl"} space-y-4`}>
                    <div className="flex items-center space-x-2.5">
                      <span className="text-xs font-mono font-bold uppercase text-electric bg-electric/10 px-2.5 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-slate-muted">
                        AY {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-ink leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-electric font-semibold font-sans">
                      <User className="w-4 h-4 shrink-0" />
                      <span>{item.speaker}</span>
                    </div>

                    <p className="text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Event Photo Carousel */}
                  {item.images && item.images.length > 0 && (
                    <div className="lg:col-span-5 w-full">
                      <EventImageCarousel
                        images={item.images}
                        alt={item.title}
                        className="relative h-64 sm:h-72 lg:h-80 w-full rounded-2xl overflow-hidden border border-cream-border shadow-md"
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Propose a Keynote CTA ── */}
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
                Propose a Keynote or Colloquium
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                We welcome distinguished advocates, copyright scholars, and industry leaders to deliver guest addresses for our students and faculty.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Submit Lecture Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
