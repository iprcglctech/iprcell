import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Award, ShieldCheck, Scale, ArrowRight, BookOpen, Landmark, Sparkles, CheckCircle2 } from "lucide-react";
import siteData from "@/content/site.json";
import teamData from "@/content/team.json";
import MemberCard from "@/components/ui/MemberCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About the Cell & GLC Mumbai Legacy",
  description:
    "Discover the 170-year legacy of Government Law College, Mumbai (Estd. 1855), Asia's oldest law institution, and the founding mandate of its Intellectual Property Rights (IPR) Cell.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the IPR Cell | Government Law College, Mumbai",
    description:
      "The 170-year legacy of GLC Mumbai and the founding mandate of its Intellectual Property Rights Cell.",
    url: "https://iprcellglcmumbai.in/about",
  },
};

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
            className="object-cover object-center opacity-[0.22] filter invert contrast-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/40 to-navy-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              About Government Law College <br />
              &amp; The IPR Cell
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
                for Legal Education
              </h2>

              <div className="space-y-4 text-slate-muted text-sm sm:text-base leading-relaxed font-sans font-normal">
                <p>
                  Established in 1855, Government Law College (GLC), Mumbai is a landmark institution in legal education and is recognised as Asia’s oldest law college. With a legacy built on academic excellence, practical legal training, and a commitment to shaping future legal professionals, GLC, Mumbai has played a defining role in India’s legal landscape.
                </p>
                <p>
                  Its distinguished alumni include Bal Gangadhar Tilak, Nani Palkhivala, Soli Sorabjee, and Fali S. Nariman, reflecting the institution’s enduring influence across the Bar, Judiciary, academia, and public life.
                </p>
                <p>
                  Today, GLC, Mumbai continues to combine its rich heritage with a forward-looking approach, equipping students with the knowledge, skills, and practical exposure needed to navigate an evolving legal world.
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

      {/* ── Section 2: Genesis & Mandate of the IPR Cell ── */}
      <section className="relative py-16 lg:py-24 bg-navy-950 text-white border-b border-navy-800 overflow-hidden">
        {/* Pro Bono Shield Engraving Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] lg:w-[520px] pointer-events-none select-none z-0 opacity-[0.18] filter invert contrast-110">
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
                of the IPR Cell
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

      {/* ── Section 4: Principal's Address (Grand Standalone Showcase) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-cream-border relative overflow-hidden">
        {/* Subtle Background Flourish */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream-100 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} className="max-w-3xl mb-10 space-y-2">
            <div className="eyebrow-tag">
              INSTITUTIONAL LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink font-normal">
              Message from the Principal
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15} yOffset={24} className="bg-cream-100/60 border border-cream-border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Half: Squarish Frame with Centered Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border-2 border-[#B89B5E]/40 shadow-elevated group bg-navy-950">
                  <Image
                    src={siteData.messages.principal.image}
                    alt={siteData.messages.principal.name}
                    fill
                    priority
                    className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Half: Grand Editorial Address */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-ink leading-tight">
                    {siteData.messages.principal.name}
                  </h3>
                  <p className="text-sm sm:text-base text-electric font-medium font-sans mt-1">
                    {siteData.messages.principal.designation}
                  </p>
                  <p className="text-xs text-slate-muted font-mono mt-0.5">
                    Government Law College, Mumbai (Estd. 1855)
                  </p>
                </div>

                <div className="relative">
                  <span className="text-6xl sm:text-7xl font-serif text-[#B89B5E]/30 absolute -top-8 -left-3 select-none pointer-events-none">
                    &ldquo;
                  </span>
                  <blockquote className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-serif italic relative z-10 pl-6 border-l-2 border-[#B89B5E]/60 space-y-4">
                    <p>
                      {siteData.messages.principal.quote}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 4B: Founder's Perspective (Circular Portrait) ── */}
      <section className="py-16 lg:py-24 bg-cream-100 border-b border-cream-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1} className="max-w-3xl mb-10 space-y-2">
            <div className="eyebrow-tag">
              CELL ORIGIN &amp; VISION
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-ink font-normal">
              Founding Perspective
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15} yOffset={20} className="bg-white border border-cream-border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Circular Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shrink-0 border-4 border-[#B89B5E]/40 shadow-elevated bg-navy-950 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={siteData.messages.founder.image}
                      alt={siteData.messages.founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-normal text-ink">
                    {siteData.messages.founder.name}
                  </h3>
                  <p className="text-xs text-electric font-medium font-sans">
                    {siteData.messages.founder.designation}
                  </p>
                  <p className="text-[11px] text-slate-muted font-mono mt-0.5">
                    Inaugurated AY 2023–24
                  </p>
                </div>
              </div>

              {/* Right Column: Founder Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-electric font-bold">
                    WHY THE CELL WAS ESTABLISHED
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
                    Bridging Classroom Theory with Industry IP Practice
                  </h3>
                </div>

                <div className="relative">
                  <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-serif pl-5 border-l-2 border-electric space-y-3">
                    <p>
                      &ldquo;{siteData.messages.founder.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-cream-border flex items-center justify-between text-xs text-slate-muted font-mono">
                  <span>Founding Executive Address (2023)</span>
                  <span className="text-electric uppercase tracking-wider font-semibold">Founding Vision</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {teamData.professorsInCharge.map((prof) => (
                <MemberCard
                  key={prof.name}
                  name={prof.name}
                  designation={prof.designation}
                  department={prof.department}
                  keyInitiatives={prof.keyInitiatives}
                  bio={prof.bio}
                  image={prof.image}
                  tier="faculty"
                  qualification={prof.qualification}
                  subject={prof.subject}
                  compactOnMobile
                />
              ))}
            </div>
          </div>

          {/* Founders */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-serif font-normal text-ink">
              Founders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {((teamData as { founders?: Array<{ name: string; position: string; department?: string; academicYear?: string; bio?: string; image: string }> }).founders || []).map((founder) => (
                <MemberCard
                  key={founder.name}
                  name={founder.name}
                  position={founder.position}
                  department={founder.department}
                  academicYear={founder.academicYear}
                  bio={founder.bio}
                  image={founder.image}
                  tier="founder"
                  compactOnMobile
                />
              ))}
            </div>
          </div>

          {/* Senior Core */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-serif font-normal text-ink">
              Senior Core
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {teamData.seniorCore.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  position={member.position}
                  department={member.department}
                  academicYear={member.academicYear}
                  keyInitiatives={member.keyInitiatives}
                  bio={member.bio}
                  image={member.image}
                  tier="senior"
                  linkedin={member.linkedin}
                  compactOnMobile
                />
              ))}
            </div>
          </div>

          {/* Junior Core */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-serif font-normal text-ink">
              Departmental Heads &amp; Junior Core
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
              {teamData.juniorCore.map((member) => (
                <MemberCard
                  key={member.name + member.position}
                  name={member.name}
                  position={member.position}
                  department={member.department}
                  academicYear={member.academicYear}
                  keyInitiatives={member.keyInitiatives}
                  bio={member.bio}
                  image={member.image}
                  tier="junior"
                  linkedin={member.linkedin}
                  compactOnMobile
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
