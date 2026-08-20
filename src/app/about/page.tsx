"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Award, ShieldCheck, Scale, ArrowRight, BookOpen, Landmark, Sparkles, CheckCircle2 } from "lucide-react";
import siteData from "@/content/site.json";
import teamData from "@/content/team.json";
import MemberCard from "@/components/ui/MemberCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="bg-cream-100 text-ink min-h-screen">
      {/* ── Page Hero: Deep Institutional Navy Header ── */}
      <section className="relative bg-navy-950 text-white pt-28 pb-16 lg:pb-24 border-b border-navy-800 overflow-hidden">
        {/* Background Heritage Engraving Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src="/images/legal-heritage-panorama.jpg"
            alt="GLC Legal Heritage Panorama"
            fill
            className="object-cover object-center opacity-[0.14] filter invert contrast-125 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              About Government Law College <br />
              <span className="italic text-slate-300">&amp; The IPR Cell</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal pt-2">
              Discover the 170-year legacy of Asia&apos;s oldest law school, the founding mandate of its Intellectual Property Rights Cell, and its faculty &amp; executive governance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: GLC Heritage (Estd. 1855) ── */}
      <section className="relative py-16 lg:py-24 border-b border-cream-border overflow-hidden bg-cream-100">
        {/* Subtle Law Treatise Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[480px] pointer-events-none select-none z-0 opacity-[0.10] mix-blend-multiply">
          <Image
            src="/images/law-treatise-engraving.jpg"
            alt="Law Treatise Antique Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative */}
            <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6">
              <div className="eyebrow-tag">
                ESTABLISHED 1855 • CHURCHGATE, MUMBAI
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal leading-snug">
                Asia&apos;s Oldest Institution <br />
                <span className="italic text-slate-800">for Legal Education</span>
              </h2>

              <div className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
                <p>
                  {siteData.aboutGlc.description}
                </p>
                <p>
                  Its distinguished alumni include <strong>Dr. B.R. Ambedkar</strong> (Chief Architect of the Indian Constitution), <strong>Justice M.C. Chagla</strong>, <strong>Nani Palkhivala</strong>, <strong>Ram Jethmalani</strong>, and <strong>Fali S. Nariman</strong>, reflecting the institution&apos;s enduring influence across the Supreme Court, the Bar, and public governance.
                </p>
                <p>
                  Today, GLC continues to combine its rich heritage with forward-looking legal scholarship, equipping students with practical acumen to navigate emerging technological frontiers.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Facade Image & Location Pill */}
            <ScrollReveal delay={0.25} yOffset={24} className="lg:col-span-5 space-y-4">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-cream-border shadow-elevated group">
                <Image
                  src="/images/glc-heritage-facade.jpg"
                  alt="Government Law College Mumbai Heritage Facade"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic">
                  Historic Heritage Campus, &lsquo;A&rsquo; Road, Churchgate, Mumbai
                </div>
              </div>

              <div className="p-4 bg-white border border-cream-border rounded-xl text-xs text-slate-muted font-sans shadow-sm flex items-start space-x-3">
                <Building2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-ink">Campus Location:</span> &lsquo;A&rsquo; Road, Churchgate, Mumbai — 400020. Adjacent to the Bombay High Court and University of Mumbai.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Distinguished Alumni Roster ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <div className="eyebrow-tag">
              HALL OF FAME
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Distinguished Alumni of GLC
            </h2>
            <p className="text-slate-muted text-xs sm:text-sm">
              Shaping Indian jurisprudence, constitutional democracy, and international law for over a century.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteData.aboutGlc.distinguishedAlumni.map((alumnus, idx) => (
              <ScrollReveal
                key={alumnus.name}
                delay={0.1 + idx * 0.05}
                yOffset={16}
                className="p-6 rounded-xl bg-surface-offwhite border border-cream-border hover:border-electric transition-all hover:shadow-card hover:-translate-y-0.5 group"
              >
                <div className="font-serif font-normal text-lg text-ink group-hover:text-navy-950 transition-colors">
                  {alumnus.name}
                </div>
                <div className="text-xs text-electric font-medium font-sans mt-1.5 leading-relaxed">
                  {alumnus.role}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Genesis & Mandate of the IPR Cell ── */}
      <section className="relative py-16 lg:py-24 bg-navy-950 text-white border-b border-navy-800 overflow-hidden">
        {/* Pro Bono Shield Engraving Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] lg:w-[520px] pointer-events-none select-none z-0 opacity-[0.12] filter invert contrast-125">
          <Image
            src="/images/pro-bono-shield-engraving.jpg"
            alt="Pro Bono Protection Shield Engraving"
            width={900}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal delay={0.1} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-normal leading-snug">
                The Genesis &amp; Mission <br />
                <span className="italic text-slate-300">of the IPR Cell</span>
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                <p>
                  {siteData.aboutIprc.mission}
                </p>
                <p>
                  Recognising this exponential surge in significance, the institution aims to ingrain foundational awareness of IPR at the very outset of students’ legal journeys. By championing a holistic approach, the Cell provides students with rigorous academic scholarship paired with real-world practical mastery.
                </p>
                <p>
                  Through moot court disputes, peer-reviewed journals, certified courses, expert practitioner colloquiums, and grassroots pro bono assistance, we bridge theoretical law with industry practice.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Leadership Addresses ── */}
      <section className="py-16 lg:py-24 bg-cream-100 border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal delay={0.1} className="max-w-2xl space-y-2">
            <div className="eyebrow-tag">
              INSTITUTIONAL VOICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Messages from Leadership
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Principal Message */}
            <ScrollReveal delay={0.15} yOffset={20} className="bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 border-b border-cream-border pb-5">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-electric shadow-sm">
                    <Image
                      src={siteData.messages.principal.image}
                      alt={siteData.messages.principal.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-normal text-ink">
                      {siteData.messages.principal.name}
                    </h3>
                    <p className="text-xs text-electric font-medium">
                      {siteData.messages.principal.designation}
                    </p>
                    <p className="text-[11px] text-slate-muted font-mono mt-0.5">
                      Government Law College, Mumbai
                    </p>
                  </div>
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-serif pl-4 border-l-2 border-electric">
                  &ldquo;{siteData.messages.principal.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-cream-border text-right text-xs text-slate-muted font-mono uppercase tracking-wider">
                — Principal&apos;s Desk
              </div>
            </ScrollReveal>

            {/* Founder Message */}
            <ScrollReveal delay={0.25} yOffset={20} className="bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 border-b border-cream-border pb-5">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-electric shadow-sm">
                    <Image
                      src={siteData.messages.founder.image}
                      alt={siteData.messages.founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-normal text-ink">
                      {siteData.messages.founder.name}
                    </h3>
                    <p className="text-xs text-electric font-medium">
                      {siteData.messages.founder.designation}
                    </p>
                    <p className="text-[11px] text-slate-muted font-mono mt-0.5">
                      Inaugurated AY 2023–24
                    </p>
                  </div>
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-serif pl-4 border-l-2 border-electric">
                  &ldquo;{siteData.messages.founder.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-cream-border text-right text-xs text-slate-muted font-mono uppercase tracking-wider">
                — Founding Address
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 5: Faculty In-Charge & Core Committee ── */}
      <section id="committee" className="py-16 lg:py-24 bg-white border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal delay={0.1} className="border-b border-cream-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="eyebrow-tag mb-1">GOVERNANCE &amp; TEAM</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
                Faculty In-Charge &amp; Core Committee
              </h2>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-electric hover:text-electric-dark transition-colors"
            >
              <span>View Full Roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>

          {/* Professors In-Charge */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-normal text-ink">
              Professors In-Charge
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.professorsInCharge.map((prof) => (
                <MemberCard
                  key={prof.name}
                  name={prof.name}
                  designation={prof.designation}
                  department={prof.department}
                  specialization={prof.specialization}
                  keyInitiatives={prof.keyInitiatives}
                  bio={prof.bio}
                  image={prof.image}
                  tier="faculty"
                />
              ))}
            </div>
          </div>

          {/* Senior Core */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-serif font-normal text-ink">
              Senior Core Executive Committee
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.seniorCore.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  position={member.position}
                  department={member.department}
                  academicYear={member.academicYear}
                  specialization={member.specialization}
                  keyInitiatives={member.keyInitiatives}
                  bio={member.bio}
                  image={member.image}
                  tier="senior"
                />
              ))}
            </div>
          </div>

          {/* Junior Core */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-serif font-normal text-ink">
              Departmental Heads &amp; Junior Core
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {teamData.juniorCore.map((member) => (
                <MemberCard
                  key={member.name + member.position}
                  name={member.name}
                  position={member.position}
                  department={member.department}
                  academicYear={member.academicYear}
                  specialization={member.specialization}
                  keyInitiatives={member.keyInitiatives}
                  bio={member.bio}
                  image={member.image}
                  tier="junior"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Join Induction Banner ── */}
      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            delay={0.1}
            yOffset={24}
            className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            {/* Background Panorama Watermark */}
            <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
              <Image
                src="/images/legal-heritage-panorama.jpg"
                alt="Neoclassical Legal Heritage Engraving"
                fill
                className="object-cover object-center opacity-[0.10] filter invert contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950" />
            </div>

            <div className="space-y-2 relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Join the Intellectual Property Rights Cell
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Participate in annual inductions and contribute to India&apos;s leading student-run IP initiatives at Government Law College, Mumbai.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/join"
                className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs sm:text-sm uppercase font-bold tracking-wider px-6 py-4 rounded shadow-institutional transition-all hover:-translate-y-0.5"
              >
                <span>Apply for Induction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
