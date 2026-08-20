import React from "react";
import Link from "next/link";
import { BookOpen, Database, CheckCircle2, FileText, Download, ShieldCheck, ArrowRight } from "lucide-react";
import journalData from "@/content/journal.json";

export default function JournalPage() {
  const { volume1, cfp, partners } = journalData;

  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            Academic Publications & Research
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            {journalData.title}
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            {journalData.subtitle} • Double-blind peer-reviewed annual journal published under the aegis of Government Law College, Mumbai.
          </p>
        </div>

        {/* Overview & Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white border border-surface-border rounded-xl p-6 sm:p-8 space-y-4 shadow-subtle">
            <h2 className="text-2xl font-serif font-bold text-ink">
              About the IPR Journal
            </h2>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              {journalData.overview}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="bg-surface-offwhite border border-surface-border px-3 py-1.5 rounded text-ink">
                ✓ Double-Blind Peer Review
              </span>
              <span className="bg-surface-offwhite border border-surface-border px-3 py-1.5 rounded text-ink">
                ✓ Plagiarism Threshold &lt; 10%
              </span>
              <span className="bg-surface-offwhite border border-surface-border px-3 py-1.5 rounded text-ink">
                ✓ CC BY 4.0 Open Access License
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-navy-950 text-white rounded-xl p-6 sm:p-8 space-y-4 border border-navy-800 shadow-elevated">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-electric-soft">
              Knowledge & Database Partners
            </div>
            <div className="space-y-3">
              {partners.map((p) => (
                <div key={p.name} className="p-3 bg-navy-900 border border-navy-800 rounded">
                  <div className="text-sm font-bold text-white font-sans">{p.name}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">{p.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guidelines for Submissions */}
        <div id="cfp" className="bg-white border border-surface-border rounded-xl p-6 sm:p-10 shadow-institutional space-y-8">
          <div className="border-b border-surface-border pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-electric text-white px-3 py-1 rounded">
              {cfp.edition}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mt-3">
              {cfp.title || "Guidelines for Submissions"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-muted mt-2">
              <span className="font-semibold text-ink">Eligibility:</span> {cfp.eligibility}
            </p>
          </div>

          {/* Submission Categories */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-light mb-4">
              Accepted Submission Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cfp.categories.map((cat) => (
                <div
                  key={cat.type}
                  className="bg-surface-offwhite border border-surface-border p-5 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-serif font-bold text-base text-ink mb-1">
                      {cat.type}
                    </h4>
                    <div className="text-xs font-mono text-electric mb-2 font-semibold">
                      {cat.wordCount}
                    </div>
                    <p className="text-xs text-slate-muted leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-400">
                    Abstract: {cat.abstract}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formatting & Submission Guidelines Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <div className="bg-surface-offwhite border border-surface-border p-5 rounded-lg space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-ink">
                Formatting & Citation Specifications
              </h4>
              <ul className="text-xs space-y-2 text-slate-muted">
                <li>• <strong className="text-ink">Citation Style:</strong> {cfp.formatting.citation}</li>
                <li>• <strong className="text-ink">Typography:</strong> {cfp.formatting.font}</li>
                <li>• <strong className="text-ink">Spacing:</strong> {cfp.formatting.spacing}</li>
                <li>• <strong className="text-ink">Headings:</strong> {cfp.formatting.alignment}</li>
                <li>• <strong className="text-ink">Co-authorship:</strong> {cfp.formatting.authorship}</li>
                <li>• <strong className="text-ink">Originality:</strong> {cfp.formatting.plagiarism}</li>
              </ul>
            </div>

            <div className="bg-surface-offwhite border border-surface-border p-5 rounded-lg space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-ink">
                Submission & Review Protocol
              </h4>
              <ul className="text-xs space-y-2 text-slate-muted">
                {cfp.submissionProtocol.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Submission Action CTA */}
          <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-muted">
              Submit anonymized manuscripts (.docx) with separate cover letter to <strong className="text-ink">iprcell.glc@gmail.com</strong>
            </div>
            <a
              href="mailto:iprcell.glc@gmail.com?subject=GLC%20IPR%20Journal%20Submission"
              className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs font-semibold px-5 py-3 rounded transition-all shrink-0"
            >
              <span>Submit Manuscript via Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Volume I Archive & Accredited Authors */}
        <div id="vol1" className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-surface-border pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-electric font-semibold uppercase">
                Published Archive
              </span>
              <h2 className="text-2xl font-serif font-bold text-ink mt-1">
                {volume1.title}
              </h2>
            </div>
            <span className="text-xs font-mono bg-surface-offwhite border border-surface-border px-3 py-1 rounded text-slate-muted self-start sm:self-auto">
              License: CC BY 4.0
            </span>
          </div>

          {/* Published Papers Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-surface-border bg-surface-offwhite font-mono text-slate-light uppercase">
                  <th className="p-3 font-semibold">#</th>
                  <th className="p-3 font-semibold">Author(s)</th>
                  <th className="p-3 font-semibold">Research Paper Title</th>
                  <th className="p-3 font-semibold">Subject Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {volume1.papers.map((paper, idx) => (
                  <tr key={paper.title} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-mono text-slate-400">{idx + 1}</td>
                    <td className="p-3 font-semibold text-ink font-sans">{paper.author}</td>
                    <td className="p-3 text-slate-700 font-serif text-sm">{paper.title}</td>
                    <td className="p-3 font-mono text-[11px] text-electric">{paper.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
