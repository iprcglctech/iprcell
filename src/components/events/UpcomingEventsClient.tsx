"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ExternalLink,
  FileText,
  Search,
  Filter,
  Users,
  Mail,
  CheckCircle2,
  Sparkles,
  CalendarDays,
  RotateCcw,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface Speaker {
  name: string;
  designation?: string;
  image?: string;
}

export interface Coordinator {
  name: string;
  contact?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category?: string;
  status?: "Upcoming" | "Registration Open" | "In Progress" | "Completed" | string;
  date?: string;
  time?: string;
  venue?: string;
  image?: string;
  registrationUrl?: string;
  brochureUrl?: string;
  description?: string;
  speakers?: Speaker[];
  coordinators?: Coordinator[];
}

interface UpcomingEventsClientProps {
  initialEvents: EventItem[];
}

export default function UpcomingEventsClient({ initialEvents = [] }: UpcomingEventsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const safeEvents = useMemo(() => {
    return Array.isArray(initialEvents) ? initialEvents.filter((e) => Boolean(e && e.title)) : [];
  }, [initialEvents]);

  // Extract unique categories from events
  const categories = useMemo(() => {
    const cats = new Set<string>();
    safeEvents.forEach((ev) => {
      if (ev.category?.trim()) cats.add(ev.category.trim());
    });
    return ["All", ...Array.from(cats)];
  }, [safeEvents]);

  // Filter events based on criteria
  const filteredEvents = useMemo(() => {
    return safeEvents.filter((ev) => {
      const matchCategory =
        selectedCategory === "All" ||
        (ev.category && ev.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim());

      const matchStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Active & Upcoming"
          ? ev.status?.toLowerCase().trim() !== "completed"
          : ev.status?.toLowerCase().trim() === selectedStatus.toLowerCase().trim());

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        ev.title?.toLowerCase().includes(q) ||
        ev.description?.toLowerCase().includes(q) ||
        ev.venue?.toLowerCase().includes(q) ||
        ev.category?.toLowerCase().includes(q) ||
        ev.speakers?.some(
          (s) =>
            s.name?.toLowerCase().includes(q) ||
            s.designation?.toLowerCase().includes(q)
        );

      return matchCategory && matchStatus && matchSearch;
    });
  }, [safeEvents, selectedCategory, selectedStatus, searchQuery]);

  const getStatusBadge = (status?: string) => {
    if (!status?.trim()) return null;
    const s = status.toLowerCase().trim();

    if (s === "registration open" || s.includes("open") || s.includes("register")) {
      return (
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-electric/10 text-electric border border-electric/30 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-electric" />
          <span>Registration Open</span>
        </span>
      );
    }
    if (s === "upcoming" || s.includes("upcoming") || s.includes("soon")) {
      return (
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-700 border border-amber-500/30">
          <Sparkles className="w-3 h-3" />
          <span>Upcoming</span>
        </span>
      );
    }
    if (s === "in progress" || s.includes("progress") || s.includes("live")) {
      return (
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>In Progress</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-600 border border-slate-200">
        <CheckCircle2 className="w-3 h-3" />
        <span>{status}</span>
      </span>
    );
  };

  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/victorian-courtroom-engraving.jpg"
            alt="Victorian Courtroom Engraving"
            fill
            priority
            className="object-cover object-center opacity-[0.2] filter invert contrast-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <div className="eyebrow-tag inline-block">
              EVENTS &amp; INITIATIVES REGISTRY
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Upcoming &amp; Active Events
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Explore scheduled workshops, masterclasses, national moot simulations, guest colloquiums, and active student registrations hosted by the IPR Cell.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Content Area with Filters ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Edge Case 1: Total Zero Events in System */}
          {safeEvents.length === 0 ? (
            <div className="bg-white border border-cream-border rounded-2xl p-12 sm:p-16 text-center max-w-2xl mx-auto space-y-6 shadow-card">
              <div className="w-16 h-16 rounded-full bg-surface-offwhite border border-cream-border flex items-center justify-center mx-auto text-electric">
                <CalendarDays className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-ink font-normal">
                  Academic Calendar Updating
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans max-w-lg mx-auto">
                  The Intellectual Property Rights Cell is actively finalizing its upcoming schedule of workshops, practitioner masterclasses, and national colloquiums.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/events"
                  className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded shadow-institutional transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Flagship Initiatives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-surface-offwhite hover:bg-white border border-cream-border text-ink text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
                >
                  <span>Contact Coordinators</span>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Controls Bar: Search & Status Tabs */}
              <div className="bg-white border border-cream-border rounded-2xl p-4 sm:p-6 shadow-card space-y-4">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                  {/* Search Bar */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search events by title, theme, or speaker..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-surface-offwhite border border-cream-border rounded-xl text-sm font-sans focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Status Tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-surface-offwhite border border-cream-border rounded-xl overflow-x-auto">
                    {[
                      { label: "All Events", value: "All" },
                      { label: "Active & Upcoming", value: "Active & Upcoming" },
                      { label: "Completed Archives", value: "Completed" },
                    ].map((tab) => (
                      <button
                        key={tab.value}
                        onClick={() => setSelectedStatus(tab.value)}
                        className={`px-3.5 py-1.5 text-xs font-sans font-semibold rounded-lg whitespace-nowrap transition-all ${
                          selectedStatus === tab.value
                            ? "bg-navy-950 text-white shadow-xs"
                            : "text-slate-600 hover:text-ink hover:bg-white/60"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter Pills (Only shown if categories exist) */}
                {categories.length > 2 && (
                  <div className="pt-2 border-t border-cream-border/60 flex items-center gap-2 overflow-x-auto pb-1">
                    <div className="flex items-center text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider pr-2 shrink-0">
                      <Filter className="w-3 h-3 mr-1 text-electric" /> Category:
                    </div>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-sans transition-all whitespace-nowrap ${
                          selectedCategory === cat
                            ? "bg-electric text-white font-medium shadow-xs"
                            : "bg-surface-offwhite text-slate-600 hover:text-ink border border-cream-border/80"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Active Filter Summary Counter */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
                  <span>
                    Showing {filteredEvents.length} of {safeEvents.length} event{safeEvents.length === 1 ? "" : "s"}
                  </span>
                  {(searchQuery || selectedCategory !== "All" || selectedStatus !== "All") && (
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedStatus("All");
                        setSearchQuery("");
                      }}
                      className="inline-flex items-center space-x-1 text-electric hover:underline cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Filters</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Edge Case 2: Filter/Search Zero Matches */}
              {filteredEvents.length === 0 ? (
                <div className="bg-white border border-cream-border rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4 shadow-card">
                  <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif text-ink">No Matching Events</h3>
                    <p className="text-xs sm:text-sm text-slate-muted font-sans leading-relaxed">
                      {searchQuery
                        ? `No events found matching "${searchQuery}". Try refining your keywords or clearing the search filter.`
                        : "No events currently match your selected category or status filter."}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedStatus("All");
                      setSearchQuery("");
                    }}
                    className="inline-flex items-center space-x-1.5 bg-electric hover:bg-electric-dark text-white text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded shadow-institutional transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              ) : (
                /* Events Grid */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredEvents.map((event, idx) => (
                    <EventCard key={event.id || idx} event={event} idx={idx} getStatusBadge={getStatusBadge} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Bottom Section: Inquire / Propose an Event CTA ── */}
      <section className="relative py-16 bg-white border-t border-cream-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Propose an Academic Workshop or Guest Lecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Are you an IP attorney, corporate counsel, or academic scholar interested in collaborating on an upcoming session or certificate course?
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Inquire for Collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventImage({ src, alt }: { src?: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (!src || !src.trim() || hasError) {
    return null;
  }

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-cream-border/60 bg-surface-offwhite">
      <Image
        src={src}
        alt={alt || "Event Image"}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

interface EventCardProps {
  event: EventItem;
  idx: number;
  getStatusBadge: (status?: string) => React.ReactNode;
}

function EventCard({ event, idx, getStatusBadge }: EventCardProps) {
  const hasMeta = Boolean(event.date?.trim() || event.time?.trim() || event.venue?.trim());
  
  // Filter out any speaker objects that have empty names
  const validSpeakers = useMemo(() => {
    return (event.speakers || []).filter((s) => Boolean(s && s.name && s.name.trim().length > 0));
  }, [event.speakers]);
  const hasSpeakers = validSpeakers.length > 0;

  // Filter out any coordinator objects that have empty names
  const validCoordinators = useMemo(() => {
    return (event.coordinators || []).filter((c) => Boolean(c && c.name && c.name.trim().length > 0));
  }, [event.coordinators]);
  const hasCoordinators = validCoordinators.length > 0;

  const hasActions = Boolean(event.registrationUrl?.trim() || event.brochureUrl?.trim());

  return (
    <ScrollReveal
      delay={0.05 + idx * 0.05}
      yOffset={20}
      className="bg-white border border-cream-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-electric transition-all shadow-card group"
    >
      <div className="space-y-6">
        {/* Event Banner Image (Optional with graceful error fallback) */}
        {event.image && (
          <EventImage src={event.image} alt={event.title} />
        )}

        {/* Top Badges (Category & Status) */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {event.category?.trim() ? (
            <span className="text-[11px] font-mono font-bold text-electric uppercase tracking-wider">
              {event.category.trim()}
            </span>
          ) : (
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Initiative
            </span>
          )}
          {getStatusBadge(event.status)}
        </div>

        {/* Event Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink group-hover:text-navy-950 transition-colors leading-snug break-words">
          {event.title}
        </h3>

        {/* Meta Details: Date, Time, Venue (Only if at least one exists) */}
        {hasMeta && (
          <div className="space-y-2 bg-surface-offwhite p-4 rounded-xl border border-cream-border/80 text-xs sm:text-sm text-slate-700 font-sans">
            {event.date?.trim() && (
              <div className="flex items-center space-x-2.5">
                <Calendar className="w-4 h-4 text-electric shrink-0" />
                <span className="font-medium text-ink">{event.date.trim()}</span>
              </div>
            )}
            {event.time?.trim() && (
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{event.time.trim()}</span>
              </div>
            )}
            {event.venue?.trim() && (
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{event.venue.trim()}</span>
              </div>
            )}
          </div>
        )}

        {/* Description (Optional) */}
        {event.description?.trim() && (
          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans break-words whitespace-pre-line">
            {event.description.trim()}
          </p>
        )}

        {/* Speakers Section (Only rendered if there are speakers with names) */}
        {hasSpeakers && (
          <div className="space-y-2 pt-2 border-t border-cream-border/60">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center">
              <Users className="w-3.5 h-3.5 mr-1 text-electric" /> Featured Speakers &amp; Guests
            </div>
            <div className="space-y-1.5">
              {validSpeakers.map((spk, sIdx) => (
                <div key={sIdx} className="text-xs text-ink font-sans flex items-start space-x-2">
                  <span className="text-electric font-bold">•</span>
                  <div>
                    <span className="font-semibold text-ink">{spk.name}</span>
                    {spk.designation?.trim() && (
                      <span className="text-slate-500"> — {spk.designation.trim()}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Bottom Actions (Only rendered if actions or coordinators exist) */}
      {(hasActions || hasCoordinators) && (
        <div className="mt-8 pt-4 border-t border-cream-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {event.registrationUrl?.trim() ? (
              <a
                href={event.registrationUrl.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-4 py-2.5 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Register Now</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : null}

            {event.brochureUrl?.trim() ? (
              <a
                href={event.brochureUrl.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-surface-offwhite hover:bg-white border border-cream-border text-ink text-xs uppercase font-bold tracking-wider px-3.5 py-2.5 rounded transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Brochure</span>
              </a>
            ) : null}
          </div>

          {/* Coordinators Contact (Optional) */}
          {hasCoordinators && (
            <div className="text-[11px] text-slate-500 font-sans flex items-center space-x-1.5 shrink-0">
              <Mail className="w-3 h-3 text-slate-400" />
              <span>
                {validCoordinators[0].name}
                {validCoordinators[0].contact?.trim() ? ` (${validCoordinators[0].contact.trim()})` : ""}
              </span>
            </div>
          )}
        </div>
      )}
    </ScrollReveal>
  );
}

