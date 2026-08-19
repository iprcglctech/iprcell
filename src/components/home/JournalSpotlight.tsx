import React from "react";
import Link from "next/link";
import { BookOpen, CheckCircle, ArrowRight, Download, FileText, Database } from "lucide-react";
import journalData from "@/content/journal.json";

export default function JournalSpotlight() {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Journal Academic Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric-soft bg-electric/20 border border-electric/40 px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Institutional Journal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal tracking-tight">
              Advancing High-Calibre Doctrinal & Empirical IP Scholarship.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {journalData.overview}
            </p>

            {/* Academic Database Partners */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                Academic & Knowledge Partners
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {journalData.partners.map((p) => (
                  <div
                    key={p.name}
                    className="p-3 bg-navy-900 border border-navy-800 rounded flex items-center space-x-3"
                  >
                    <Database className="w-4 h-4 text-electric-soft shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white font-sans">{p.name}</div>
                      <div className="text-[10px] text-slate-400">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CFP & Vol 1 CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/journal"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded shadow-sm transition-all"
              >
                <span>Call For Papers Guidelines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/journal#vol1"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-800 border border-navy-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-3 rounded transition-all"
              >
                <FileText className="w-4 h-4 text-electric-soft" />
                <span>Volume I Table of Contents</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Volume I Paper Highlights */}
          <div className="lg:col-span-6">
            <div className="bg-navy-900 border border-navy-800 rounded-xl p-6 sm:p-8 shadow-elevated">
              <div className="flex items-center justify-between pb-4 border-b border-navy-800 mb-4">
                <div>
                  <h3 className="text-base font-serif font-bold text-white">
                    {journalData.volume1.title}
                  </h3>
                  <p className="text-[11px] text-electric-soft font-mono">
                    Double-Blind Peer Reviewed • CC BY 4.0
                  </p>
                </div>
                <span className="text-[10px] bg-electric/20 text-electric-soft px-2 py-1 rounded font-mono border border-electric/40">
                  Vol. I Archive
                </span>
              </div>

              {/* Sample Papers List */}
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {journalData.volume1.papers.slice(0, 6).map((paper, idx) => (
                  <div
                    key={paper.title}
                    className="p-3 rounded bg-navy-950/70 border border-navy-800/80 hover:border-electric/50 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white font-serif">
                      {paper.title}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                      <span>Author: {paper.author}</span>
                      <span className="text-electric-soft text-[10px] font-mono">
                        {paper.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
                <span>10 Selected Research Papers</span>
                <Link
                  href="/journal"
                  className="text-electric-soft hover:text-white font-semibold font-mono text-[11px]"
                >
                  View Complete Volume I Index &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
