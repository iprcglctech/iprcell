"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, Clock, Linkedin, ExternalLink, MapPin } from "lucide-react";
import siteData from "@/content/site.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactClient() {
  const { contact } = siteData;

  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Contact Registry Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/contact-registry-engraving.jpg"
            alt="Classical Legal Registry Office"
            fill
            className="object-cover object-center opacity-[0.22] filter invert contrast-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <div className="eyebrow-tag border-white/20 text-electric-light">
              REGISTRY &amp; LIAISON
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Institutional Registry <br />
              &amp; Communications
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Connect with our student secretariat, competition convenors, and editorial board at Asia&apos;s oldest law school. We welcome institutional collaborations, student queries, and academic partnerships.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Official Secretariat</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call GLC Office: {contact.phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Headquarters & Student Secretariat Directory ── */}
      <section id="roster" className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Registry Engraving Watermark on Cream */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] lg:w-[500px] pointer-events-none select-none z-0 opacity-[0.10] mix-blend-multiply">
          <Image
            src="/images/contact-registry-engraving.jpg"
            alt="Classical Legal Registry Office"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Institutional Campus Registry */}
            <ScrollReveal
              delay={0.1}
              yOffset={20}
              className="lg:col-span-5 bg-white border border-cream-border rounded-3xl p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <div>
                  <div className="text-[11px] font-mono font-bold text-electric uppercase tracking-wider mb-1">
                    CAMPUS HEADQUARTERS
                  </div>
                  <h2 className="font-serif font-normal text-2xl sm:text-3xl text-ink">
                    Government Law College
                  </h2>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-700 font-sans pt-1">
                  <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    &lsquo;A&rsquo; Road, Churchgate, Mumbai, Maharashtra, India &mdash; 400020
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-cream-border text-xs sm:text-sm text-slate-700 font-sans">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-electric shrink-0" />
                    <div>
                      <span className="text-slate-muted block text-xs">GLC Official Contact:</span>
                      <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`} className="font-mono text-ink font-semibold hover:text-electric transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-1">
                    <Mail className="w-4 h-4 text-electric shrink-0" />
                    <div>
                      <span className="text-slate-muted block text-xs">Official Cell Secretariat:</span>
                      <a href={`mailto:${contact.email}`} className="font-mono text-electric font-semibold hover:underline">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-1 text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-slate-muted block text-xs">Academic &amp; Office Hours:</span>
                      <span>Monday &ndash; Saturday, 10:00 AM &ndash; 5:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-border">
                <a
                  href={`mailto:${contact.email}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-navy-950 hover:bg-navy-900 text-white font-mono uppercase font-bold tracking-wider text-xs py-3.5 rounded-xl transition-all shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Secretariat Mail</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Right Card: Student Secretariat & Leadership Roster */}
            <ScrollReveal
              delay={0.15}
              yOffset={20}
              className="lg:col-span-7 bg-white border border-cream-border rounded-3xl p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono font-bold text-electric uppercase tracking-wider">
                    STUDENT SECRETARIAT
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">AY 2025&ndash;26</span>
                </div>
                <h2 className="font-serif font-normal text-2xl sm:text-3xl text-ink mt-1">
                  Office Bearers &amp; Points of Contact
                </h2>
                <p className="text-xs sm:text-sm text-slate-muted mt-1.5 font-sans leading-relaxed">
                  For administrative, academic, or bar collaborations, reach out to the student leadership directly via their verified LinkedIn profiles or via the official cell email.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
                {contact.studentOfficeBearers.map((officer) => (
                  <div
                    key={officer.name}
                    className="p-5 bg-surface-offwhite border border-cream-border rounded-2xl flex flex-col justify-between space-y-4 hover:border-electric transition-all shadow-xs group"
                  >
                    <div>
                      <h3 className="font-serif font-normal text-lg text-ink group-hover:text-navy-950 transition-colors">
                        {officer.name}
                      </h3>
                      <div className="text-xs font-medium text-electric mt-0.5">
                        {officer.role}
                      </div>
                      <p className="text-[11px] text-slate-muted font-mono mt-1">
                        GLC Mumbai
                      </p>
                    </div>

                    <div className="pt-3 border-t border-cream-border">
                      {(officer as Record<string, string>).linkedin ? (
                        <a
                          href={(officer as Record<string, string>).linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0A66C2] hover:text-[#004182] transition-colors"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          <span>LinkedIn</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 font-mono">Verified Member</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Social Channels */}
              <div className="pt-4 border-t border-cream-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans bg-cream-100/50 p-4 rounded-xl">
                <span className="text-slate-600 font-medium">Follow Cell Announcements:</span>
                <div className="flex items-center space-x-4">
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-ink hover:text-electric font-semibold transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-ink hover:text-electric font-semibold transition-colors"
                  >
                    <span>Instagram (@iprcell.glc)</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
