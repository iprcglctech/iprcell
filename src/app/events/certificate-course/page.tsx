import React from "react";
import Link from "next/link";
import { Award, Calendar, CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";
import eventsData from "@/content/events.json";

export default function CertificateCoursePage() {
  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            <Link href="/events" className="hover:underline">Events</Link>
            <span>/</span>
            <span>Certificate Course</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            GLC Executive Certificate Course Series
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            A comprehensive, practitioner-led academic initiative bridging intellectual property doctrines with practical industry scenarios, held on weekends with partners from India&apos;s premier law firms.
          </p>
        </div>

        {/* Course Editions Timeline */}
        <div className="space-y-12">
          {eventsData.certificateCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle hover:border-electric transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-surface-border pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-electric bg-electric/10 px-2.5 py-1 rounded">
                    Edition {course.year}
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-ink mt-2">
                    {course.title}
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block text-xs font-mono px-3 py-1 bg-surface-offwhite border border-surface-border rounded text-slate-muted">
                    Status: {course.status}
                  </span>
                  <div className="text-xs text-slate-light font-mono mt-1">
                    {course.dates}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-light mb-2">
                    Curriculum & Course Overview
                  </h3>
                  <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {course.featuredExperts && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-light mb-3">
                      Featured Faculty & Industry Experts
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {course.featuredExperts.map((expert) => (
                        <div
                          key={expert.name}
                          className="p-3 rounded-lg bg-surface-offwhite border border-surface-border flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-navy-950 text-white flex items-center justify-center text-xs font-serif font-bold shrink-0">
                            {expert.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-ink font-sans">
                              {expert.name}
                            </div>
                            <div className="text-[11px] text-slate-light line-clamp-1">
                              {expert.role}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 2027 In Development Banner */}
        <div className="p-8 bg-navy-950 text-white rounded-xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase text-electric-soft bg-electric/20 px-2 py-0.5 rounded">
              Upcoming 2027 Edition
            </span>
            <h3 className="text-xl font-serif font-bold mt-2">
              Interested in Enrolling in the Next Certificate Cohort?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Curriculum notifications and registration links will be published via official cell announcements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs font-semibold px-5 py-3 rounded transition-all shrink-0"
          >
            <span>Inquire for Updates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
