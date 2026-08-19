import React from "react";
import { BookOpen, Scale, Award, HeartHandshake } from "lucide-react";
import siteData from "@/content/site.json";

export default function PillarsGrid() {
  const icons = [BookOpen, Scale, Award, HeartHandshake];

  return (
    <section className="py-20 bg-surface-offwhite border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Strategic Objectives
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
            How the IPR Cell Bridges Classroom Theory & Real-World Intellectual Property.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.aboutIprc.keyPillars.map((pillar, idx) => {
            const Icon = icons[idx] || BookOpen;
            return (
              <div
                key={pillar.number}
                className="bg-white border border-surface-border p-6 rounded-lg shadow-subtle hover:border-electric/60 hover:shadow-institutional transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-electric bg-electric/10 px-2.5 py-1 rounded">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-electric transition-colors" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-ink mb-2.5 group-hover:text-electric transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[11px] font-mono text-slate-400 group-hover:text-electric transition-colors">
                  Institutional Wing &rarr;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
