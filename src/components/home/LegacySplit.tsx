"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowUpRight, GraduationCap, Building2, UserCheck } from "lucide-react";
import siteData from "@/content/site.json";

export default function LegacySplit() {
  const [activeTab, setActiveTab] = useState<"principal" | "founder">("principal");

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional Genesis & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
            Rooted in 170 Years of Legal Legacy, Focused on the Frontiers of IP Law.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: About GLC Heritage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-surface-border bg-surface-offwhite h-64 sm:h-72">
              <Image
                src="/images/glc-heritage-facade.jpg"
                alt="Government Law College Mumbai Heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase bg-electric px-2 py-0.5 rounded font-semibold">
                  Estd. 1855
                </span>
                <h3 className="text-lg font-serif mt-1.5 font-normal">
                  Asia&apos;s Oldest Institution for Legal Education
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed">
              <p>
                Established in 1855, <strong>Government Law College (GLC), Mumbai</strong> is a landmark institution in legal education. With a legacy built on academic excellence, practical legal training, and a commitment to shaping future legal professionals, GLC has played a defining role in India&apos;s constitutional and commercial jurisprudence.
              </p>
              <p>
                Its distinguished alumni include <strong>Dr. B.R. Ambedkar</strong>, <strong>Justice M.C. Chagla</strong>, <strong>Nani Palkhivala</strong>, <strong>Ram Jethmalani</strong>, and <strong>Fali S. Nariman</strong>, reflecting the institution&apos;s enduring influence across the Bar, Judiciary, academia, and public life.
              </p>
            </div>

            {/* Alumni Badges */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-light font-medium mb-3">
                Distinguished Alumni Footprint
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {siteData.aboutGlc.distinguishedAlumni.slice(0, 4).map((alumnus) => (
                  <div
                    key={alumnus.name}
                    className="p-2.5 rounded bg-surface-offwhite border border-surface-border text-xs"
                  >
                    <div className="font-semibold text-ink">{alumnus.name}</div>
                    <div className="text-slate-light text-[11px] mt-0.5">{alumnus.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Messages from Leadership */}
          <div className="lg:col-span-6">
            <div className="bg-surface-offwhite border border-surface-border rounded-xl p-6 sm:p-8 relative">
              {/* Tab Selector */}
              <div className="flex items-center space-x-2 border-b border-surface-border pb-4 mb-6">
                <button
                  onClick={() => setActiveTab("principal")}
                  className={`px-3.5 py-2 rounded text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "principal"
                      ? "bg-navy-950 text-white shadow-sm"
                      : "text-slate-muted hover:text-ink hover:bg-slate-200/60"
                  }`}
                >
                  Principal&apos;s Address
                </button>
                <button
                  onClick={() => setActiveTab("founder")}
                  className={`px-3.5 py-2 rounded text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "founder"
                      ? "bg-navy-950 text-white shadow-sm"
                      : "text-slate-muted hover:text-ink hover:bg-slate-200/60"
                  }`}
                >
                  Founder&apos;s Perspective (2023)
                </button>
              </div>

              {/* Dynamic Tab Content */}
              {activeTab === "principal" ? (
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-navy-950/20 bg-white">
                      <Image
                        src={siteData.messages.principal.image}
                        alt={siteData.messages.principal.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-ink">
                        {siteData.messages.principal.name}
                      </h4>
                      <p className="text-xs text-electric font-medium font-sans">
                        {siteData.messages.principal.designation}
                      </p>
                      <p className="text-[11px] text-slate-light font-mono mt-0.5">
                        Government Law College, Mumbai
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-serif relative pl-6 border-l-2 border-electric">
                    &ldquo;{siteData.messages.principal.quote}&rdquo;
                  </blockquote>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-electric/30 bg-white">
                      <Image
                        src={siteData.messages.founder.image}
                        alt={siteData.messages.founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-ink">
                        {siteData.messages.founder.name}
                      </h4>
                      <p className="text-xs text-electric font-medium font-sans">
                        {siteData.messages.founder.designation}
                      </p>
                      <p className="text-[11px] text-slate-light font-mono mt-0.5">
                        Inaugurated AY 2023–24
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-serif relative pl-6 border-l-2 border-electric">
                    &ldquo;{siteData.messages.founder.quote}&rdquo;
                  </blockquote>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-surface-border flex items-center justify-between text-xs">
                <span className="text-slate-light">Learn more about our governance</span>
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-1 font-semibold text-electric hover:text-electric-dark"
                >
                  <span>Full Institutional Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
