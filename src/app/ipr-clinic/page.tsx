import React from "react";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, HelpCircle, FileText, ArrowRight, Lightbulb } from "lucide-react";
import clinicData from "@/content/clinic.json";

export default function IprClinicPage() {
  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Clinical Legal Education & Pro Bono Advisory
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            {clinicData.title}
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            {clinicData.tagline} • Providing accessible intellectual property guidance, preliminary audits, and literacy workshops for student innovators, artists, and creators.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-electric">
            <Lightbulb className="w-4 h-4" />
            <span>CLINIC MANDATE & PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-ink">
            Demystifying Intellectual Property for Creators & Grassroots Founders
          </h2>
          <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
            {clinicData.vision}
          </p>
        </div>

        {/* 4 Mandate Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinicData.mandate.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white border border-surface-border p-6 rounded-xl shadow-subtle hover:border-electric transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-electric bg-electric/10 px-2.5 py-1 rounded">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif font-bold text-ink mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Clinical Workflow
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Disclaimer Box */}
        <div className="bg-surface-offwhite border border-slate-300 rounded-xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-slate-600">
            <ShieldCheck className="w-4 h-4 text-electric" />
            <span>Institutional Legal Notice & Academic Disclaimer</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
            {clinicData.disclaimer}
          </p>
        </div>

        {/* Contact CTA */}
        <div className="p-8 bg-navy-950 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-navy-800">
          <div>
            <h3 className="text-xl font-serif font-bold">Request an IPR Clinic Guidance Session</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Reach out to our student clinic coordinators for intellectual property literacy inquiries.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs font-semibold px-5 py-3 rounded transition-all shrink-0"
          >
            <span>Contact IPR Clinic Head</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
