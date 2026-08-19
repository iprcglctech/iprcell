"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, User } from "lucide-react";
import siteData from "@/content/site.json";

export default function ContactPage() {
  const { contact } = siteData;
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Institutional Registry & Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            Contact the IPR Cell
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            Reach out to our student office bearers, secretariat, or visit the historic Government Law College campus at Churchgate, Mumbai.
          </p>
        </div>

        {/* Contact Info & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Registry */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Address Card */}
            <div className="bg-white border border-surface-border rounded-xl p-6 shadow-subtle space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-electric">
                <Building2 className="w-4 h-4" />
                <span>Campus Location</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-ink">
                  Government Law College, Mumbai
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted mt-1 leading-relaxed">
                  &lsquo;A&rsquo; Road, Churchgate, Mumbai, Maharashtra, India — 400020
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-xs text-slate-muted">
                <Phone className="w-3.5 h-3.5 text-electric shrink-0" />
                <span>GLC Office: 022-22041707</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-muted">
                <Mail className="w-3.5 h-3.5 text-electric shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-electric hover:underline">
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Student Office Bearers Contact */}
            <div className="bg-white border border-surface-border rounded-xl p-6 shadow-subtle space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-slate-light">
                <User className="w-4 h-4 text-electric" />
                <span>Student Office Bearers</span>
              </div>

              <div className="space-y-3">
                {contact.studentOfficeBearers.map((officer) => (
                  <div
                    key={officer.name}
                    className="p-3 bg-surface-offwhite border border-surface-border rounded-lg flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-ink">{officer.name}</div>
                      <div className="text-[11px] text-electric">{officer.role}</div>
                    </div>
                    <a
                      href={`tel:${officer.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-mono text-slate-muted hover:text-ink font-medium"
                    >
                      {officer.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-navy-950 text-white rounded-xl p-6 border border-navy-800 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-electric-soft">
                Digital Presence
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-soft transition-colors"
                >
                  LinkedIn: IPR Cell GLC Mumbai &rarr;
                </a>
                <a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-soft transition-colors"
                >
                  Instagram: @iprcell.glc &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle">
            <h2 className="text-2xl font-serif font-bold text-ink mb-1">
              Send an Institutional Inquiry
            </h2>
            <p className="text-xs text-slate-muted mb-6">
              Inquire regarding the Trademark Opposition Competition, Certificate Courses, or Journal submissions.
            </p>

            {formSent ? (
              <div className="p-8 bg-electric/10 border border-electric/30 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-electric mx-auto" />
                <h3 className="text-lg font-serif font-bold text-ink">Inquiry Submitted</h3>
                <p className="text-xs text-slate-muted max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message has been logged with the secretariat. A representative will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs font-semibold text-electric underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-ink mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adv. Rohit Verma"
                      className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-ink mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rohit@example.com"
                      className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-ink mb-1">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-ink mb-1">Subject Area</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite"
                    >
                      <option>Trademark Opposition Competition (TOC)</option>
                      <option>Certificate Course Inquiry</option>
                      <option>IPR Journal & CFP Query</option>
                      <option>IPR Clinic Advisory Request</option>
                      <option>General Institutional Communication</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-ink mb-1">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your query or institutional collaboration request..."
                    className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white font-semibold px-6 py-3 rounded shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Official Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
