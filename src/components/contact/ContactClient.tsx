"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Send, CheckCircle2, Clock, Linkedin, ArrowRight } from "lucide-react";
import siteData from "@/content/site.json";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactClient() {
  const { contact } = siteData;
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "General Secretariat Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

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
            className="object-cover object-center opacity-[0.14] filter invert contrast-125 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Institutional Registry <br />
              &amp; Communications
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Connect with our student secretariat, competition convenors, and editorial board at Asia&apos;s oldest law school. We welcome institutional collaborations, student queries, and academic partnerships.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#inquiry"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Send Institutional Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#roster"
                className="inline-flex items-center space-x-2 bg-navy-900 hover:bg-navy-850 border border-navy-700 text-slate-200 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
              >
                <span>Office Bearers</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Contact Registry & Interactive Form Grid (Warm Cream Canvas) ── */}
      <section id="inquiry" className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Registry Engraving Watermark on Cream */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] lg:w-[500px] pointer-events-none select-none z-0 opacity-[0.12] mix-blend-multiply">
          <Image
            src="/images/contact-registry-engraving.jpg"
            alt="Classical Legal Registry Office"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Campus Registry & Officer Directory */}
            <div className="lg:col-span-5 space-y-6">
              {/* Campus Location Card */}
              <ScrollReveal
                delay={0.1}
                yOffset={20}
                className="bg-white border border-cream-border rounded-2xl p-8 shadow-card space-y-4"
              >
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                  INSTITUTIONAL CAMPUS
                </div>

                <h3 className="font-serif font-normal text-2xl text-ink">
                  Government Law College
                </h3>

                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans">
                  &lsquo;A&rsquo; Road, Churchgate, Mumbai, Maharashtra, India — 400020
                </p>

                <div className="space-y-2 pt-2 border-t border-cream-border text-xs text-slate-700 font-sans">
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-electric shrink-0" />
                    <span>GLC Office: 022-22041707</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-electric shrink-0" />
                    <a href={`mailto:${contact.email}`} className="text-electric hover:underline font-mono">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2.5 text-slate-500 pt-1">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Academic Hours: 10:00 AM – 5:00 PM IST</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Student Office Bearers Contact */}
              <ScrollReveal
                id="roster"
                delay={0.2}
                yOffset={20}
                className="bg-white border border-cream-border rounded-2xl p-8 shadow-card space-y-5"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider">
                    STUDENT SECRETARIAT
                  </div>
                  <h3 className="font-serif font-normal text-xl text-ink mt-1">
                    Direct Point of Contact
                  </h3>
                </div>

                <div className="space-y-3 font-sans">
                  {contact.studentOfficeBearers.map((officer) => (
                    <div
                      key={officer.name}
                      className="p-4 bg-surface-offwhite border border-cream-border rounded-xl flex items-center justify-between shadow-xs hover:border-electric transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-ink text-sm flex items-center gap-1.5">
                          <span>{officer.name}</span>
                          {(officer as Record<string, string>).linkedin && (
                            <a
                              href={(officer as Record<string, string>).linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0A66C2] hover:text-[#004182] transition-transform hover:scale-110"
                              title="View LinkedIn Profile"
                            >
                              <Linkedin className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                        <div className="text-xs text-slate-muted mt-0.5">{officer.role}</div>
                      </div>
                      <a
                        href={`tel:${officer.phone.replace(/[^0-9+]/g, "")}`}
                        className="font-mono text-xs text-electric hover:text-electric-dark font-medium bg-white px-3 py-1.5 rounded-lg border border-cream-border shadow-xs"
                      >
                        {officer.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Digital Channels */}
              <ScrollReveal
                delay={0.3}
                className="bg-navy-950 text-white rounded-2xl p-6 border border-navy-800 space-y-3 shadow-md"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-electric-light">
                  Official Channels
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1.5"
                  >
                    <span>LinkedIn: IPR Cell GLC Mumbai</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1.5"
                  >
                    <span>Instagram: @iprcell.glc</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Institutional Inquiry Form */}
            <ScrollReveal
              delay={0.15}
              yOffset={24}
              className="lg:col-span-7 bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
                  Institutional Dispatch &amp; Inquiries
                </h2>
                <p className="text-xs sm:text-sm text-slate-muted mt-1.5 font-sans leading-relaxed">
                  Submit communications regarding the Trademark Opposition Competition, Executive Certificate Courses, Journal Submissions, or IPR Clinic assistance.
                </p>
              </div>

              {formSent ? (
                <div className="p-8 bg-electric/10 border border-electric/30 rounded-2xl text-center space-y-4 font-sans">
                  <CheckCircle2 className="w-12 h-12 text-electric mx-auto" />
                  <h3 className="text-xl font-serif font-normal text-ink">
                    Communication Logged
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-ink">{formData.name}</strong>. Your message has been routed to the <strong className="text-ink">{formData.department}</strong> desk. A student representative will respond shortly.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs font-mono font-bold text-electric uppercase tracking-wider underline pt-2 block mx-auto"
                  >
                    Send another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-ink mb-1.5 text-xs">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Adv. Siddharth Mehta"
                        className="w-full p-3 rounded-xl border border-cream-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-ink mb-1.5 text-xs">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="siddharth@example.com"
                        className="w-full p-3 rounded-xl border border-cream-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-ink mb-1.5 text-xs">Contact Number</label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full p-3 rounded-xl border border-cream-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-ink mb-1.5 text-xs">Department / Desk</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full p-3 rounded-xl border border-cream-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink shadow-xs"
                      >
                        <option>General Secretariat Inquiry</option>
                        <option>Trademark Opposition Competition (TOC)</option>
                        <option>Executive Certificate Course Cohorts</option>
                        <option>Journal of IPR Editorial Submissions</option>
                        <option>IPR Clinic Pro Bono Assistance</option>
                        <option>Guest Lecture &amp; Colloquium Proposals</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-ink mb-1.5 text-xs">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding TOC 2026 Inter-Collegiate Registration"
                      className="w-full p-3 rounded-xl border border-cream-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-ink mb-1.5 text-xs">
                      Communication Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please elaborate on your inquiry or institutional request..."
                      className="w-full p-3 rounded-xl border border-cream-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400 shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-electric hover:bg-electric-dark text-white font-mono uppercase font-bold tracking-wider text-xs py-4 rounded-xl shadow-institutional transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Communication</span>
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
