import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, BookOpen, Scale, ArrowRight, Sparkles, ShieldAlert, Users } from "lucide-react";
import eventsData from "@/content/events.json";

export default function EventsOverviewPage() {
  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Academic Flagships & Initiatives
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            Events, Competitions & Colloquiums
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            The IPR Cell convenes India&apos;s leading trademark practitioners, academics, and jurists to host simulations, practitioner-led certificate courses, and national panel discourses.
          </p>
        </div>

        {/* 3 Major Academic Flagships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Certificate Course */}
          <div className="bg-white border border-surface-border rounded-xl p-6 flex flex-col justify-between hover:border-electric transition-all shadow-subtle group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center text-electric mb-4">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-light">
                Practitioner Masterclass
              </span>
              <h2 className="text-xl font-serif font-bold text-ink mt-1 mb-3 group-hover:text-electric transition-colors">
                Executive Certificate Courses
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-4">
                Structured weekend certificate programs covering Patent & Copyright doctrines, Media & Entertainment Law, and Cybersecurity instructed by Partners from Khaitan & Co, Mulla & Mulla, Trilegal, and Cyril Amarchand Mangaldas.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 bg-surface-offwhite p-3 rounded border border-surface-border">
                <div className="font-semibold text-ink font-mono text-[11px]">Recent Editions:</div>
                <div>• 2026: Cyber Security in Media & Ent.</div>
                <div>• 2025: Copyright & Media Law</div>
                <div>• 2024: TechDat AI & Technologies</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border">
              <Link
                href="/events/certificate-course"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-electric hover:text-electric-dark"
              >
                <span>View Full Course Editions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Trademark Opposition Competition */}
          <div className="bg-white border border-surface-border rounded-xl p-6 flex flex-col justify-between hover:border-electric transition-all shadow-subtle group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-navy-950 text-electric-soft flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-light">
                National Simulation Moot
              </span>
              <h2 className="text-xl font-serif font-bold text-ink mt-1 mb-3 group-hover:text-electric transition-colors">
                Prof. Tehemtan Daruwalla TOC
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-4">
                India&apos;s first-of-its-kind Trademark Opposition Competition simulating Section 21 proceedings and Rules 42–50 of the Trade Marks Rules, 2017 with Inter (National) and Intra (Institutional) oral advocacy rounds.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 bg-surface-offwhite p-3 rounded border border-surface-border">
                <div className="font-semibold text-ink font-mono text-[11px]">Format:</div>
                <div>• Written Submissions (Rules 42–47)</div>
                <div>• Oral Hearings before Registrar (Rule 50)</div>
                <div>• Offline Final Rounds at GLC Mumbai</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border">
              <Link
                href="/events/toc"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-electric hover:text-electric-dark"
              >
                <span>TOC Overview & Archives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Guest Lectures & Colloquiums */}
          <div className="bg-white border border-surface-border rounded-xl p-6 flex flex-col justify-between hover:border-electric transition-all shadow-subtle group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center text-electric mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-light">
                Public Discourse & Panels
              </span>
              <h2 className="text-xl font-serif font-bold text-ink mt-1 mb-3 group-hover:text-electric transition-colors">
                Guest Lectures & Colloquiums
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-4">
                Dynamic intellectual exchanges addressing pressing industry debates, including World IP Day colloquiums on AI-generated content, personality rights, and anti-counterfeiting campaigns.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 bg-surface-offwhite p-3 rounded border border-surface-border">
                <div className="font-semibold text-ink font-mono text-[11px]">Key Highlights:</div>
                <div>• Javed Akhtar on Copyright & Lyrics</div>
                <div>• AI vs Artist World IP Day Panel</div>
                <div>• In Conversation with Priyanka Khimani</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border">
              <Link
                href="/events/guest-lectures"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-electric hover:text-electric-dark"
              >
                <span>Explore Lecture Series</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-ink">
                Flagship Photo Archives
              </h3>
              <p className="text-xs text-slate-muted mt-1">
                Visual documentation of national rounds, guest lectures, and campus colloquiums.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-44 rounded-lg overflow-hidden border border-slate-200 group">
              <Image
                src="/images/events/ai-artist-1.jpg"
                alt="AI vs Artist Colloquium"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-950/40" />
              <div className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-medium">
                AI vs Artist Colloquium
              </div>
            </div>

            <div className="relative h-44 rounded-lg overflow-hidden border border-slate-200 group">
              <Image
                src="/images/events/javed-akhtar-1.jpg"
                alt="Javed Akhtar Panel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-950/40" />
              <div className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-medium">
                Javed Akhtar Keynote
              </div>
            </div>

            <div className="relative h-44 rounded-lg overflow-hidden border border-slate-200 group">
              <Image
                src="/images/events/priyanka-khimani-1.jpg"
                alt="Priyanka Khimani Session"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-950/40" />
              <div className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-medium">
                Priyanka Khimani Session
              </div>
            </div>

            <div className="relative h-44 rounded-lg overflow-hidden border border-slate-200 group">
              <Image
                src="/images/events/inter-toc-2.jpg"
                alt="Inter TOC National Finals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-navy-950/40" />
              <div className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-medium">
                Inter-TOC Oral Arguments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
