import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FigmaJournalPlatform() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100 border-b border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Journal Book Cover Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-[440px] sm:h-[480px] rounded-md overflow-hidden shadow-elevated border border-slate-700 bg-navy-950 flex flex-col justify-between p-6 text-white group">
              {/* Background Texture Overlay */}
              <div className="absolute inset-0 bg-navy-950/90 z-0" />
              <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 z-0" />

              {/* Book Spine / Cover Header */}
              <div className="relative z-10 space-y-2 border-b border-white/10 pb-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-electric-light">
                  THE
                </div>
                <h3 className="text-3xl font-serif font-normal tracking-tight text-white">
                  IPR<br />Journal
                </h3>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  GLC MUMBAI
                </div>
              </div>

              {/* Middle Academic Crest Graphic */}
              <div className="relative z-10 my-auto flex justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                <Image
                  src="/images/glc-crest.png"
                  alt="GLC Crest"
                  width={80}
                  height={80}
                  className="object-contain filter invert"
                />
              </div>

              {/* Book Cover Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 space-y-1">
                <div className="text-xs font-serif italic text-slate-300">
                  Volume II
                </div>
                <div className="text-[10px] font-mono text-electric-light">
                  2026–27
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 pt-1">
                  PEER REVIEWED • ANNUAL PUBLICATION
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Platform for Thought Leadership Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="eyebrow-tag">
                IPR JOURNAL
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal leading-[1.12]">
                A platform for<br />
                <span className="italic text-slate-800">thought leadership</span>
              </h2>
              <p className="text-slate-muted text-xs sm:text-sm leading-relaxed max-w-xl font-sans pt-2">
                The IPR Journal is an annual, peer-reviewed publication that encourages rigorous research and analysis on contemporary issues in intellectual property law and beyond.
              </p>
            </div>

            {/* 2x2 Feature Grid with Thin Hairlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-cream-border">
              <div className="space-y-1">
                <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                  PEER REVIEWED
                </div>
                <div className="text-xs text-slate-muted leading-relaxed">
                  Double-blind review process ensuring academic rigour
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                  ANNUAL PUBLICATION
                </div>
                <div className="text-xs text-slate-muted leading-relaxed">
                  Bringing out the best in IP scholarship each year
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                  MULTIPLE CATEGORIES
                </div>
                <div className="text-xs text-slate-muted leading-relaxed">
                  Articles, essays, case comments and more
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs uppercase font-bold tracking-wider text-ink font-sans">
                  CONTRIBUTE &amp; COLLABORATE
                </div>
                <div className="text-xs text-slate-muted leading-relaxed">
                  Join a community of thoughtful legal minds
                </div>
              </div>
            </div>

            {/* Interactive Links with Horizontal Dividers and Right Arrows */}
            <div className="border-t border-cream-border divide-y divide-cream-border">
              <Link
                href="/journal"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm text-ink hover:text-electric transition-colors group"
              >
                <span className="font-sans font-medium">Current Volume</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-electric group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/journal#cfp"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm text-ink hover:text-electric transition-colors group"
              >
                <span className="font-sans font-medium">Call for Papers</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-electric group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/journal#cfp"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm text-ink hover:text-electric transition-colors group"
              >
                <span className="font-sans font-medium">Submission Guidelines</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-electric group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/journal#vol1"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm text-ink hover:text-electric transition-colors group"
              >
                <span className="font-sans font-medium">Archives</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-electric group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
