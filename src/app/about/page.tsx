import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Award, ShieldCheck, Scale, ArrowRight, UserCheck, Users } from "lucide-react";
import siteData from "@/content/site.json";
import teamData from "@/content/team.json";
import MemberCard from "@/components/ui/MemberCard";

export default function AboutPage() {
  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Institutional Legacy &amp; Profile
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            About Government Law College &amp; The IPR Cell
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            Discover the 170-year institutional legacy of Government Law College, Mumbai, the founding mandate of its Intellectual Property Rights Cell, and its faculty &amp; executive governance.
          </p>
        </div>

        {/* Section 1: About GLC Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-navy-950 bg-slate-200 px-3 py-1 rounded">
              <Building2 className="w-3.5 h-3.5" />
              <span>ESTABLISHED 1855 • CHURCHGATE, MUMBAI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-ink font-bold">
              Asia&apos;s Oldest Institution for Legal Education
            </h2>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              {siteData.aboutGlc.description}
            </p>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              Its distinguished alumni include <strong>Dr. B.R. Ambedkar</strong>, <strong>Justice M.C. Chagla</strong>, <strong>Nani Palkhivala</strong>, <strong>Ram Jethmalani</strong>, and <strong>Fali S. Nariman</strong>, reflecting the institution&apos;s enduring influence across the Bar, Judiciary, academia, and public life.
            </p>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              Today, GLC continues to combine its rich heritage with a forward-looking approach, equipping students with the knowledge, skills, and practical exposure needed to navigate an evolving legal world.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden border border-surface-border shadow-institutional">
              <Image
                src="/images/glc-heritage-facade.jpg"
                alt="Government Law College Mumbai Heritage"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white border border-surface-border rounded-lg text-xs text-slate-muted font-sans">
              <span className="font-semibold text-ink">Campus Location:</span> &lsquo;A&rsquo; Road, Churchgate, Mumbai — 400020. Adjacent to the Bombay High Court and Mumbai University.
            </div>
          </div>
        </div>

        {/* Notable Alumni Roster */}
        <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-serif font-bold text-ink mb-6">
            Distinguished Alumni of Government Law College
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.aboutGlc.distinguishedAlumni.map((alumnus) => (
              <div
                key={alumnus.name}
                className="p-4 rounded-lg bg-surface-offwhite border border-surface-border hover:border-electric transition-colors"
              >
                <div className="font-serif font-bold text-base text-ink">{alumnus.name}</div>
                <div className="text-xs text-electric font-medium font-sans mt-1">{alumnus.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Genesis & Mandate of IPR Cell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-electric bg-electric/10 px-3 py-1 rounded">
              <Scale className="w-3.5 h-3.5" />
              <span>INAUGURATED AY 2023–2024</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-ink font-bold">
              The Genesis &amp; Mission of the IPR Cell
            </h2>
            <div className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed">
              <p>
                {siteData.aboutIprc.mission}
              </p>
              <p>
                Recognising this surge in significance, the institution aims to ingrain foundational awareness of IPR at the very outset of students’ college journeys. By championing a holistic approach, the committee seeks to provide students with a well-rounded education encompassing both theoretical understanding and practical application in the realm of intellectual property.
              </p>
              <p>
                The committee uses various competitions, research papers, certificate courses, lectures by experts, and pro bono work as a means to achieve this goal.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 text-white p-6 sm:p-8 rounded-xl border border-navy-800 space-y-4 shadow-elevated">
            <h3 className="text-lg font-serif font-bold text-white">
              Institutional Framework
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span>Supervised under Faculty In-Charge from the Faculty of Law, GLC Mumbai.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span>Executive leadership governed by Senior Core &amp; Departmental Junior Core.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span>Direct collaborations with top IP law firms, practitioners &amp; publishing bodies.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Messages from Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {/* Principal Message */}
          <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 border-b border-surface-border pb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={siteData.messages.principal.image}
                    alt={siteData.messages.principal.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-ink">
                    {siteData.messages.principal.name}
                  </h3>
                  <p className="text-xs text-electric font-medium">
                    {siteData.messages.principal.designation}
                  </p>
                  <p className="text-[11px] text-slate-light font-mono">
                    Government Law College, Mumbai
                  </p>
                </div>
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed italic font-serif pl-4 border-l-2 border-electric pt-2">
                &ldquo;{siteData.messages.principal.quote}&rdquo;
              </blockquote>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-right text-xs text-slate-muted font-mono">
              — Principal&apos;s Desk
            </div>
          </div>

          {/* Founder Message */}
          <div className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 border-b border-surface-border pb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={siteData.messages.founder.image}
                    alt={siteData.messages.founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-ink">
                    {siteData.messages.founder.name}
                  </h3>
                  <p className="text-xs text-electric font-medium">
                    {siteData.messages.founder.designation}
                  </p>
                  <p className="text-[11px] text-slate-light font-mono">
                    Inaugurated AY 2023–24
                  </p>
                </div>
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed italic font-serif pl-4 border-l-2 border-electric pt-2">
                &ldquo;{siteData.messages.founder.quote}&rdquo;
              </blockquote>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-right text-xs text-slate-muted font-mono">
              — Founding Address
            </div>
          </div>
        </div>

        {/* Section 4: Faculty & Core Committee */}
        <div id="committee" className="space-y-8 pt-6">
          <div className="border-b border-surface-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="eyebrow-tag mb-1">GOVERNANCE &amp; TEAM</div>
              <h2 className="text-2xl sm:text-3xl font-serif text-ink font-bold">
                Faculty In-Charge &amp; Core Committee
              </h2>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-electric hover:text-electric-dark"
            >
              <span>View Interactive 3D Roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Professors In-Charge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-visible">
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

          {/* Senior Core */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-serif font-bold text-ink">
              Senior Core Executive Committee
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
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
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-serif font-bold text-ink">
              Departmental Heads &amp; Junior Core
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-visible">
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

        {/* CTA */}
        <div className="p-8 bg-navy-950 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold">Join the Intellectual Property Rights Cell</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Participate in annual inductions and contribute to India&apos;s leading student-run IP initiatives.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded transition-all shrink-0"
          >
            <span>Apply for Induction</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
