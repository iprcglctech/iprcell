"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-navy-900">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal tracking-tight text-white leading-[1.12]">
              No Recreation Of <span className="italic text-electric-light">Creation.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              The Intellectual Property Rights Cell at Asia&apos;s oldest law institution brings together rigorous doctrinal research, India&apos;s premier procedural Trademark Opposition Competition, and masterclasses led by leading IP practitioners.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase tracking-wider font-bold px-6 py-3.5 rounded shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Our Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Institutional Footprint Stats */}
            <div className="pt-8 border-t border-navy-900 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-serif text-white">1855</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">GLC Established</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-electric-light">2023</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">Cell Inception</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-white">1st in India</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">Procedural TOC Moot</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-electric-light">Peer-Reviewed</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">Manupatra Partner</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Heritage Image Frame */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900 border border-navy-700 rounded-lg p-2.5 shadow-elevated">
              <div className="relative h-64 sm:h-80 w-full rounded overflow-hidden">
                <Image
                  src="/images/glc-campus-main.png"
                  alt="Government Law College Mumbai Campus"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-navy-950/90 backdrop-blur-sm p-3 rounded border border-navy-800">
                  <div className="text-xs font-serif font-bold text-white">
                    Government Law College, Mumbai
                  </div>
                  <div className="text-[11px] text-slate-400">
                    &lsquo;A&rsquo; Road, Churchgate • Estd. 1855
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
