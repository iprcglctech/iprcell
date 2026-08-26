"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Scale, ArrowRight } from "lucide-react";
import eventsData from "@/content/events.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TOCPage() {
  const { trademarkOppositionCompetition: toc } = eventsData;

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
              Trademark Opposition Competition <br />
              Procedural Simulation &amp; Advocacy
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              {toc.overview}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#tracks"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>View Competition Tracks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#statutory"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Procedural Framework</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Institutional Commemoration (Warm Cream Canvas) ── */}
      <section className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Law Treatise Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[460px] pointer-events-none select-none z-0 opacity-[0.14] mix-blend-multiply">
          <Image
            src="/images/law-treatise-engraving.jpg"
            alt="Law Treatise Antique Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal
            delay={0.1}
            yOffset={24}
            className="bg-white border border-cream-border rounded-2xl p-8 sm:p-12 shadow-card"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-60 rounded-xl overflow-hidden border border-cream-border shadow-md">
                  <Image
                    src={toc.commemoration.image}
                    alt={toc.commemoration.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric">
                  INSTITUTIONAL COMMEMORATION
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
                  Honouring the Enduring Legacy of {toc.commemoration.name}
                </h2>
                <p className="text-slate-muted text-sm sm:text-base leading-relaxed font-sans">
                  {toc.commemoration.text}
                </p>
                <div className="p-4 bg-surface-offwhite rounded-xl border border-cream-border text-xs sm:text-sm text-slate-700 font-serif italic">
                  &ldquo;A path less trodden in 1960, but one on which he left a profound mark on Indian Intellectual Property Jurisprudence.&rdquo;
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Two Competition Tracks (Inter & Intra) ── */}
      <section id="tracks" className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Competition Tracks
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Procedural simulations structured for national law universities and institutional scholars.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {toc.tracks.map((track, idx) => (
              <ScrollReveal
                key={track.type}
                delay={0.1 + idx * 0.1}
                yOffset={24}
                className="bg-surface-offwhite border border-cream-border rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-electric transition-all shadow-xs space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-electric bg-electric/10 px-3 py-1 rounded">
                      {track.type} TRACK
                    </span>
                    <Scale className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
                    {track.type} Procedural Format
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-1">
                      <span className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider block text-slate-400">
                        Eligibility:
                      </span>
                      <p className="text-slate-muted leading-relaxed">{track.eligibility}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-semibold text-ink font-mono text-[11px] uppercase tracking-wider block text-slate-400">
                        Procedural Format:
                      </span>
                      <p className="text-slate-muted leading-relaxed">{track.format}</p>
                    </div>

                  </div>

                  {/* Track Gallery */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Competition Proceedings:
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {track.gallery.map((img, i) => (
                        <div key={i} className="relative h-24 rounded-lg overflow-hidden border border-cream-border shadow-xs group">
                          <Image src={img} alt="TOC photo" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Statutory Framework Showcase (Deep Navy) ── */}
      <section id="statutory" className="py-16 lg:py-24 bg-navy-950 text-white border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white">
              Procedural Mandate Under Trade Marks Rules, 2017
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              The Trademark Opposition Competition specifically tests the application of <strong>Section 21 of the Trade Marks Act, 1999</strong> read with <strong>Rules 42 to 50 of the Trade Marks Rules, 2017</strong> — requiring advocates to draft notices of opposition, verify counter-statements, structure statutory affidavits in support of opposition, and present live oral arguments before the Registrar of Trade Marks.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              { rule: "Rule 42", title: "Notice of Opposition", desc: "Grounds under Sections 9, 11 & 18" },
              { rule: "Rule 44", title: "Counter-Statement", desc: "Statutory reply within two months" },
              { rule: "Rules 45–47", title: "Evidence by Affidavit", desc: "Substantiating prior user and goodwill" },
              { rule: "Rule 50", title: "Oral Hearing Procedure", desc: "Arguments before the Registrar" },
            ].map((r, i) => (
              <ScrollReveal
                key={r.rule}
                delay={0.1 + i * 0.08}
                className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-2"
              >
                <div className="text-xs font-mono font-bold text-electric-light uppercase tracking-wider">
                  {r.rule}
                </div>
                <div className="text-base font-serif font-normal text-white">
                  {r.title}
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {r.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
