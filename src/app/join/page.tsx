"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserPlus, CheckCircle2, Award, ArrowRight, ShieldCheck, Send } from "lucide-react";
import joinData from "@/content/join.json";

export default function JoinPage() {
  const { whyJoin, hierarchy, selectionProcess } = joinData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yearOfStudy: "Year V-I (5-Year BLS/LLB)",
    statement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Student Induction & Membership
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            {whyJoin.headline}
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            {whyJoin.tagline}
          </p>
        </div>

        {/* Intro Manifesto */}
        <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink">
            A Platform for Curious Minds in Law
          </h2>
          <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
            {whyJoin.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {whyJoin.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-4 rounded-lg bg-surface-offwhite border border-surface-border"
              >
                <div className="flex items-center space-x-2 text-xs font-bold text-ink mb-1">
                  <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                  <span>{benefit.title}</span>
                </div>
                <p className="text-xs text-slate-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Tier Leadership Pathway */}
        <div className="space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-light">
            Structured 3-Tier Membership & Leadership Pathway
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hierarchy.map((tier, idx) => (
              <div
                key={tier.tier}
                className="bg-white border border-surface-border rounded-xl p-6 flex flex-col justify-between hover:border-electric transition-all shadow-subtle"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-electric bg-electric/10 px-2.5 py-0.5 rounded">
                      Tier 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-muted bg-surface-offwhite border border-surface-border px-2 py-0.5 rounded">
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-ink mb-3">
                    {tier.tier}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-semibold text-ink block font-mono text-[11px] uppercase text-slate-400 mb-0.5">
                        Eligibility:
                      </span>
                      <p className="text-slate-muted">{tier.eligibility}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-ink block font-mono text-[11px] uppercase text-slate-400 mb-0.5">
                        Core Responsibilities:
                      </span>
                      <p className="text-slate-muted leading-relaxed">{tier.responsibilities}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Selection Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          <div className="lg:col-span-6 bg-white border border-surface-border rounded-xl p-6 sm:p-8 space-y-5 shadow-subtle">
            <div>
              <h3 className="text-xl font-serif font-bold text-ink">
                Eligibility & Applicant Attributes
              </h3>
              <p className="text-xs text-slate-muted mt-1">
                Criteria and qualifications required for cell induction.
              </p>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-muted">
              <li className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span><strong className="text-ink font-semibold">Enrolled Students:</strong> Open to students in their V-I (5-Year) and III-I (3-Year) batches at Government Law College, Mumbai.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span><strong className="text-ink font-semibold">Interest in Intellectual Property:</strong> A keen intellectual curiosity regarding trademark litigation, patents, entertainment law, and AI jurisprudence.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span><strong className="text-ink font-semibold">Work Ethic:</strong> High dedication to team collaboration, academic rigor, and professional institutional standards.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-surface-border">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-light mb-3">
                3-Step Selection Process
              </div>
              <div className="space-y-2 text-xs">
                {selectionProcess.map((step) => (
                  <div key={step.step} className="p-2.5 rounded bg-surface-offwhite border border-surface-border flex items-start space-x-3">
                    <span className="font-mono text-electric font-bold">{step.step}</span>
                    <div>
                      <div className="font-semibold text-ink">{step.name}</div>
                      <div className="text-slate-muted text-[11px] mt-0.5">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Membership Interest Form */}
          <div className="lg:col-span-6 bg-white border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-ink">
                Expression of Interest Form
              </h3>
              <p className="text-xs text-slate-muted mt-1">
                Submit your preliminary details for the upcoming induction cycle.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-electric/10 border border-electric/30 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-electric mx-auto" />
                <h4 className="text-base font-serif font-bold text-ink">Application Received</h4>
                <p className="text-xs text-slate-muted">
                  Thank you, <strong className="text-ink">{formData.name}</strong>. Your expression of interest has been registered. The secretariat will notify you regarding the interview schedule.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-semibold text-electric underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div>
                  <label className="block font-medium text-ink mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Advait Sharma"
                    className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-ink mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@glcmumbai.com"
                      className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-ink mb-1.5">Mobile Contact</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-ink mb-1.5">Current Year of Study at GLC</label>
                  <select
                    value={formData.yearOfStudy}
                    onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                    className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink"
                  >
                    <option>Year V-I (5-Year BLS/LLB)</option>
                    <option>Year III-I (3-Year LLB)</option>
                    <option>Year V-II / V-III / V-IV / V-V</option>
                    <option>Year III-II / III-III</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-ink mb-1.5">
                    Why do you wish to join the IPR Cell? (Brief Statement)
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Describe your interest in intellectual property law, research, or cell administration..."
                    className="w-full p-2.5 rounded border border-surface-border focus:border-electric focus:outline-none bg-surface-offwhite font-sans text-xs text-ink placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-electric hover:bg-electric-dark text-white font-semibold py-3 rounded shadow-sm transition-all font-sans"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Membership Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
