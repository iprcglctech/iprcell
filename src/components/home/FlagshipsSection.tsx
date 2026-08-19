"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, ArrowRight, BookCheck, ShieldAlert, Sparkles, Scale } from "lucide-react";
import eventsData from "@/content/events.json";

export default function FlagshipsSection() {
  const [activeTab, setActiveTab] = useState<"toc" | "course" | "lectures">("toc");

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
              National Flagships & Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
              Rigorous Simulations, Practitioner Masterclasses & Public Discourse.
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-surface-offwhite p-1 rounded-lg border border-surface-border shrink-0">
            <button
              onClick={() => setActiveTab("toc")}
              className={`px-3.5 py-2 rounded text-xs font-semibold transition-all ${
                activeTab === "toc"
                  ? "bg-navy-950 text-white shadow-sm"
                  : "text-slate-muted hover:text-ink"
              }`}
            >
              Trademark Opposition (TOC)
            </button>
            <button
              onClick={() => setActiveTab("course")}
              className={`px-3.5 py-2 rounded text-xs font-semibold transition-all ${
                activeTab === "course"
                  ? "bg-navy-950 text-white shadow-sm"
                  : "text-slate-muted hover:text-ink"
              }`}
            >
              Certificate Courses
            </button>
            <button
              onClick={() => setActiveTab("lectures")}
              className={`px-3.5 py-2 rounded text-xs font-semibold transition-all ${
                activeTab === "lectures"
                  ? "bg-navy-950 text-white shadow-sm"
                  : "text-slate-muted hover:text-ink"
              }`}
            >
              Guest Lectures & Colloquiums
            </button>
          </div>
        </div>

        {/* Tab 1: TOC */}
        {activeTab === "toc" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Main Card: TOC Overview */}
            <div className="lg:col-span-7 bg-surface-offwhite border border-surface-border rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-electric mb-3">
                  <Scale className="w-4 h-4" />
                  <span>INDIA&apos;S FIRST PROCEDURAL SIMULATION</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-3">
                  {eventsData.trademarkOppositionCompetition.title}
                </h3>
                <p className="text-slate-muted text-sm leading-relaxed mb-6">
                  {eventsData.trademarkOppositionCompetition.overview}
                </p>

                {/* Commemoration tribute badge */}
                <div className="bg-white border border-surface-border rounded-lg p-4 mb-6 flex items-start space-x-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={eventsData.trademarkOppositionCompetition.commemoration.image}
                      alt="Prof. Tehemtan N. Daruwalla"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink font-serif">
                      In Commemoration of Prof. Tehemtan N. Daruwalla
                    </div>
                    <div className="text-[11px] text-slate-muted mt-1 leading-snug">
                      GLC Alumnus (1960 Solicitor) & pioneer who taught IP at Mumbai University & GLC from 1979 to 1992.
                    </div>
                  </div>
                </div>

                {/* Tracks split: Inter vs Intra */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-surface-border">
                    <div className="text-xs font-bold text-ink font-mono uppercase text-electric">
                      Inter-TOC (National)
                    </div>
                    <p className="text-xs text-slate-muted mt-1.5 leading-normal">
                      Two-Phase simulation: Written submissions under Rules 42–47 followed by Oral arguments under Rule 50.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-surface-border">
                    <div className="text-xs font-bold text-ink font-mono uppercase text-navy-950">
                      Intra-TOC (GLC Only)
                    </div>
                    <p className="text-xs text-slate-muted mt-1.5 leading-normal">
                      Streamlined oral advocacy strictly under Rule 50 replicating live registrar hearings before the Trade Marks Registry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-surface-border flex items-center justify-between">
                <span className="text-xs text-slate-muted font-mono">
                  Sections 21 & Rules 42–50 Trade Marks Act
                </span>
                <Link
                  href="/events/toc"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-electric hover:text-electric-dark"
                >
                  <span>View Competition Archive & Rulebooks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Side: Photo Showcase */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="relative h-52 sm:h-60 rounded-xl overflow-hidden border border-surface-border">
                <Image
                  src="/images/events/inter-toc-1.jpg"
                  alt="Inter TOC National Competition"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold font-sans">
                  National Oral Rounds at GLC Campus
                </div>
              </div>
              <div className="relative h-52 sm:h-60 rounded-xl overflow-hidden border border-surface-border">
                <Image
                  src="/images/events/intra-toc-1.jpg"
                  alt="Intra TOC Competition"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold font-sans">
                  Intra-TOC Registrar Hearing Simulations
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Certificate Courses */}
        {activeTab === "course" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.certificateCourses.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="bg-surface-offwhite border border-surface-border rounded-xl p-6 flex flex-col justify-between hover:border-electric transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-electric bg-electric/10 px-2 py-0.5 rounded">
                      Edition {course.year}
                    </span>
                    <span className="text-[11px] font-mono text-slate-muted bg-white border border-surface-border px-2 py-0.5 rounded">
                      {course.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-ink mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-light font-mono mb-3">
                    {course.dates} • {course.mode}
                  </p>
                  <p className="text-xs text-slate-muted leading-relaxed line-clamp-3 mb-4">
                    {course.description}
                  </p>

                  {/* Experts List */}
                  {course.featuredExperts && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-200">
                      <div className="text-[10px] font-mono uppercase text-slate-light tracking-wider">
                        Instructed by Partners From:
                      </div>
                      <div className="text-xs text-ink font-serif italic">
                        Khaitan & Co, Mulla & Mulla, Fox Mandal, Cyril Amarchand Mangaldas, Trilegal
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border">
                  <Link
                    href="/events/certificate-course"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-electric hover:text-electric-dark"
                  >
                    <span>Curriculum & Speakers</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Guest Lectures & Colloquiums */}
        {activeTab === "lectures" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.guestLecturesAndWebinars.slice(0, 3).map((lecture) => (
              <div
                key={lecture.id}
                className="bg-surface-offwhite border border-surface-border rounded-xl overflow-hidden flex flex-col justify-between hover:border-electric transition-all"
              >
                <div className="relative h-44 w-full bg-slate-200">
                  <Image
                    src={lecture.images[0]}
                    alt={lecture.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-navy-950/90 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-navy-800">
                    {lecture.category}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-serif font-bold text-ink mb-1.5 leading-snug">
                      {lecture.title}
                    </h3>
                    <p className="text-xs text-electric font-medium mb-2 font-sans">
                      {lecture.speaker}
                    </p>
                    <p className="text-xs text-slate-muted leading-relaxed line-clamp-3">
                      {lecture.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-surface-border">
                    <Link
                      href="/events/guest-lectures"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-electric hover:text-electric-dark"
                    >
                      <span>Read Event Summary</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
