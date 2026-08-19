import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Scale, BookCheck, ShieldAlert, ArrowRight, Award, FileText, CheckCircle2 } from "lucide-react";
import eventsData from "@/content/events.json";

export default function TOCPage() {
  const { trademarkOppositionCompetition: toc } = eventsData;

  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            <Link href="/events" className="hover:underline">Events</Link>
            <span>/</span>
            <span>Trademark Opposition Competition</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            {toc.title}
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            {toc.overview}
          </p>
        </div>

        {/* Tribute Section: Prof. Tehemtan N. Daruwalla */}
        <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-10 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-56 rounded-lg overflow-hidden border-2 border-navy-950/20 shadow-md">
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
                Institutional Commemoration
              </div>
              <h2 className="text-2xl font-serif font-bold text-ink">
                Honouring the Enduring Legacy of {toc.commemoration.name}
              </h2>
              <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
                {toc.commemoration.text}
              </p>
              <div className="p-3 bg-surface-offwhite rounded border border-surface-border text-xs text-slate-700 font-mono">
                &ldquo;A path less trodden in 1960, but one on which he left a profound mark on Indian Intellectual Property Jurisprudence.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Two Competition Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toc.tracks.map((track) => (
            <div
              key={track.type}
              className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-electric transition-all shadow-subtle"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-electric bg-electric/10 px-3 py-1 rounded">
                    {track.type}
                  </span>
                  <Scale className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-ink">
                  {track.type} Track Details
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-ink font-mono text-xs uppercase block text-slate-400 mb-1">
                      Eligibility:
                    </span>
                    <p className="text-slate-muted">{track.eligibility}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-ink font-mono text-xs uppercase block text-slate-400 mb-1">
                      Procedural Format:
                    </span>
                    <p className="text-slate-muted leading-relaxed">{track.format}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-ink font-mono text-xs uppercase block text-slate-400 mb-1">
                      Core Advocacy Skills Evaluated:
                    </span>
                    <p className="text-slate-muted">{track.skillsTested}</p>
                  </div>
                </div>

                {/* Track Gallery */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">
                    Competition Glimpses:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {track.gallery.map((img, idx) => (
                      <div key={idx} className="relative h-20 rounded overflow-hidden border border-slate-200">
                        <Image src={img} alt="TOC Competition photo" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Framework Reference Box */}
        <div className="bg-navy-950 text-white rounded-xl p-6 sm:p-8 border border-navy-800 space-y-4">
          <h3 className="text-xl font-serif font-bold">
            Procedural Mandate Under Trade Marks Rules, 2017
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            The Trademark Opposition Competition specifically tests the application of <strong>Section 21 of the Trade Marks Act, 1999</strong> and <strong>Rules 42 to 50 of the Trade Marks Rules, 2017</strong> — requiring student advocates to draft notices of opposition, verify counter-statements, structure statutory affidavits in support of opposition, and present live oral advocacy before the Registrar of Trade Marks.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <span className="text-xs font-mono bg-navy-900 border border-navy-700 px-2.5 py-1 rounded text-electric-soft">
              Rule 42: Notice of Opposition
            </span>
            <span className="text-xs font-mono bg-navy-900 border border-navy-700 px-2.5 py-1 rounded text-electric-soft">
              Rule 44: Counter-Statement
            </span>
            <span className="text-xs font-mono bg-navy-900 border border-navy-700 px-2.5 py-1 rounded text-electric-soft">
              Rule 45–47: Evidence by Affidavit
            </span>
            <span className="text-xs font-mono bg-navy-900 border border-navy-700 px-2.5 py-1 rounded text-electric-soft">
              Rule 50: Oral Hearing Procedure
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
