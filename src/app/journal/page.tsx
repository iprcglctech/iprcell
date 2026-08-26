"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Database,
  CheckCircle2,
  FileText,
  Download,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award,
  Search,
  ExternalLink,
} from "lucide-react";
import journalData from "@/content/journal.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function JournalPage() {
  const { volume1, cfp, partners } = journalData;
  const [paperSearch, setPaperSearch] = useState("");

  const filteredPapers = volume1.papers.filter(
    (p) =>
      p.title.toLowerCase().includes(paperSearch.toLowerCase()) ||
      p.author.toLowerCase().includes(paperSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(paperSearch.toLowerCase())
  );

  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Background Heritage Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/legal-heritage-panorama.jpg"
            alt="GLC Legal Heritage Panorama"
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
              IPR Journal
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Annual double-blind peer-reviewed journal dedicated to high-calibre scholarship in intellectual property jurisprudence, competition policy, biotechnology, and emerging technologies.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#cfp"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Call for Papers &amp; Guidelines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#vol1"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Read Volume I</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: About the Journal & Partners ── */}
      <section className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Subtle Lady Justice Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[460px] pointer-events-none select-none z-0 opacity-[0.12] mix-blend-multiply">
          <Image
            src="/images/lady-justice-engraving.jpg"
            alt="Lady Justice Antique Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal leading-snug">
                Fostering Rigorous <br />
                Legal Scholarship
              </h2>

              <div className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
                <p>{journalData.overview}</p>
                <p>
                  Guided by eminent practitioners and senior faculty, the journal encourages doctrinal rigor, empirical research, and policy-oriented critiques addressing intellectual property rights in India and across comparative jurisdictions.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Partners Showcase */}
            <ScrollReveal delay={0.25} yOffset={24} className="lg:col-span-5 bg-white border border-cream-border rounded-2xl p-8 shadow-card space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase font-bold tracking-widest text-electric">
                  ACADEMIC AFFILIATIONS
                </div>
                <h3 className="text-xl font-serif font-normal text-ink">
                  Previous Knowledge &amp; Database Partners
                </h3>
              </div>

              <div className="space-y-4">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-xl bg-surface-offwhite border border-cream-border space-y-1 hover:border-electric transition-colors"
                  >
                    <div className="text-base font-serif font-normal text-ink">
                      {p.name}
                    </div>
                    <div className="text-xs text-slate-muted font-sans leading-relaxed">
                      {p.role}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Submission Guidelines & Categories ── */}
      <section id="cfp" className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              {cfp.title || "Guidelines for Submissions"}
            </h2>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              <strong className="text-ink font-semibold">Eligibility:</strong> {cfp.eligibility}
            </p>
          </ScrollReveal>

          {/* Submission Categories Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cfp.categories.map((cat, idx) => (
              <ScrollReveal
                key={cat.type}
                delay={0.1 + idx * 0.08}
                yOffset={16}
                className="bg-surface-offwhite border border-cream-border p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-electric transition-all hover:shadow-card group"
              >
                <div className="space-y-2">
                  <h3 className="font-serif font-normal text-xl text-ink group-hover:text-navy-950 transition-colors">
                    {cat.type}
                  </h3>
                  <div className="text-xs font-mono text-electric font-semibold uppercase tracking-wider">
                    {cat.wordCount}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans pt-2">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-cream-border text-[11px] font-mono text-slate-400">
                  Required Abstract: {cat.abstract}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Formatting & Submission Protocol */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Formatting */}
            <ScrollReveal delay={0.2} className="bg-surface-offwhite border border-cream-border p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-ink">
                Formatting &amp; Citation Specifications
              </h3>
              <ul className="text-xs sm:text-sm space-y-2.5 text-slate-muted">
                <li>• <strong className="text-ink">Citation Style:</strong> {cfp.formatting.citation}</li>
                <li>• <strong className="text-ink">Typography:</strong> {cfp.formatting.font}</li>
                <li>• <strong className="text-ink">Spacing:</strong> {cfp.formatting.spacing}</li>
                <li>• <strong className="text-ink">Headings:</strong> {cfp.formatting.alignment}</li>
                <li>• <strong className="text-ink">Co-authorship:</strong> {cfp.formatting.authorship}</li>
                <li>• <strong className="text-ink">Originality:</strong> {cfp.formatting.plagiarism}</li>
              </ul>
            </ScrollReveal>

            {/* Review Protocol */}
            <ScrollReveal delay={0.25} className="bg-surface-offwhite border border-cream-border p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-ink">
                Submission &amp; Review Protocol
              </h3>
              <ul className="text-xs sm:text-sm space-y-2.5 text-slate-muted">
                {cfp.submissionProtocol.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── Section 3: Published Archive — Volume I (Dark Navy Institutional) ── */}
      <section id="vol1" className="relative py-16 lg:py-24 bg-navy-950 text-white border-b border-navy-800 overflow-hidden">
        {/* Law Treatise Watermark Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] lg:w-[500px] pointer-events-none select-none z-0 opacity-[0.10] filter invert contrast-125">
          <Image
            src="/images/law-treatise-engraving.jpg"
            alt="Law Treatise Antique Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          {/* Volume Header */}
          <ScrollReveal delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-navy-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono uppercase font-bold tracking-widest text-electric-light">
                PUBLISHED ARCHIVE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-normal">
                {volume1.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Peer-reviewed papers exploring copyright in generative AI, software patents, and cultural heritage indications.
              </p>
            </div>

            <div className="text-xs font-mono bg-navy-900 border border-navy-700 px-3.5 py-2 rounded-lg text-slate-300 self-start md:self-auto">
              License: {volume1.license}
            </div>
          </ScrollReveal>

          {/* Search Papers */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search papers by title, author or topic..."
                value={paperSearch}
                onChange={(e) => setPaperSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-electric transition-colors"
              />
            </div>

            <div className="text-xs font-mono text-slate-400 self-end sm:self-auto">
              Showing {filteredPapers.length} of {volume1.papers.length} articles
            </div>
          </div>

          {/* Published Papers Table */}
          <div className="bg-navy-900/90 border border-navy-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-navy-800 bg-navy-950 font-mono text-slate-400 uppercase tracking-wider">
                    <th className="p-4 font-semibold w-12">#</th>
                    <th className="p-4 font-semibold">Author(s)</th>
                    <th className="p-4 font-semibold">Research Paper Title</th>
                    <th className="p-4 font-semibold">Subject Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800/60">
                  {filteredPapers.map((paper, idx) => (
                    <tr
                      key={paper.title}
                      className="hover:bg-navy-800/40 transition-colors"
                    >
                      <td className="p-4 font-mono text-slate-400">{idx + 1}</td>
                      <td className="p-4 font-semibold text-white font-sans whitespace-nowrap">
                        {paper.author}
                      </td>
                      <td className="p-4 text-slate-200 font-serif text-sm">
                        {paper.title}
                      </td>
                      <td className="p-4 font-mono text-[11px] text-electric-light whitespace-nowrap">
                        {paper.category}
                      </td>
                    </tr>
                  ))}
                  {filteredPapers.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-400">
                        No articles matching &ldquo;{paperSearch}&rdquo;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
