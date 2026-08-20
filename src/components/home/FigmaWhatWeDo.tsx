import React from "react";
import Link from "next/link";

export default function FigmaWhatWeDo() {
  const cards = [
    {
      number: "01",
      title: "Educate",
      theme: "cream",
      description: "Structured learning pathways led by practitioners and academics at the frontier of IP law.",
      links: [
        { label: "CERTIFICATE COURSES", href: "/events/certificate-course" },
        { label: "GUEST LECTURES & WEBINARS", href: "/events/guest-lectures" },
      ],
    },
    {
      number: "02",
      title: "Practice",
      theme: "white",
      description: "Simulated proceedings that build real drafting, research, and oral advocacy skills.",
      links: [
        { label: "TRADEMARK OPPOSITION COMPETITION", href: "/events/toc" },
        { label: "INTER-TOC / INTRA-TOC", href: "/events/toc" },
      ],
    },
    {
      number: "03",
      title: "Research",
      theme: "cream",
      description: "Peer-reviewed publication and scholarship that contributes to the IP discourse.",
      links: [
        { label: "IPR JOURNAL", href: "/journal" },
        { label: "GUIDELINES FOR SUBMISSIONS", href: "/journal#cfp" },
        { label: "ACADEMIC RESEARCH", href: "/journal" },
      ],
    },
    {
      number: "04",
      title: "Serve",
      theme: "white",
      description: "Applying IP knowledge where it matters most — to help those who need it.",
      links: [
        { label: "IPR CLINIC", href: "/ipr-clinic" },
        { label: "PRO BONO INITIATIVES", href: "/ipr-clinic" },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-[0.2em] text-electric-light font-sans">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight">
            Four ways we advance intellectual property
          </h2>
        </div>

        {/* 4 Light Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-300/80 overflow-hidden rounded-xl shadow-elevated">
          {cards.map((card) => {
            const isWhite = card.theme === "white";

            const bgClass = isWhite ? "bg-white text-ink" : "bg-cream-200 text-ink";
            const numClass = "text-slate-400";
            const linkClass = "text-slate-700 hover:text-electric font-semibold";
            const borderClass = isWhite ? "border-slate-200" : "border-cream-border";

            return (
              <div
                key={card.number}
                className={`${bgClass} p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r last:border-r-0 border-stone-300/70 min-h-[380px] transition-all`}
              >
                <div>
                  <div className={`text-xs font-mono mb-6 ${numClass}`}>
                    {card.number}
                  </div>
                  <h3 className="text-2xl font-serif font-normal mb-4 text-ink">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    {card.description}
                  </p>
                </div>

                <div className={`mt-8 pt-6 border-t ${borderClass} space-y-2`}>
                  {card.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block text-[11px] uppercase tracking-wider transition-colors ${linkClass}`}
                    >
                      • {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
