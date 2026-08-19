import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import siteData from "@/content/site.json";

export default function InstitutionalFooter() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-900">
          {/* Col 1: Institutional Authority */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-white/10 rounded p-1.5 border border-white/20 flex items-center justify-center">
                <Image
                  src="/images/glc-crest.png"
                  alt="GLC Crest"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold tracking-wide text-base">
                  GLC MUMBAI IPR CELL
                </h3>
                <p className="text-slate-400 text-xs">
                  Government Law College, Mumbai
                </p>
                <p className="text-electric-light text-[10px] font-mono uppercase tracking-widest mt-0.5">
                  Asia&apos;s Oldest Law College • Estd. 1855
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md pt-2">
              Established to foster advanced legal scholarship, practical trademark simulations, and pro bono innovation advisory under the aegis of Government Law College, Mumbai.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-wider bg-navy-900 border border-navy-800 text-slate-300 px-2.5 py-1 rounded">
                Manupatra Partner
              </span>
              <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-wider bg-navy-900 border border-navy-800 text-slate-300 px-2.5 py-1 rounded">
                CaseMine Partner
              </span>
              <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-wider bg-navy-900 border border-navy-800 text-slate-300 px-2.5 py-1 rounded">
                Double-Blind Peer Review
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & Academics */}
          <div className="space-y-3">
            <h4 className="text-electric-light text-xs font-mono uppercase tracking-[0.18em] font-bold">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Institutional Legacy &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/events/certificate-course" className="hover:text-white transition-colors">
                  Executive Certificate Courses
                </Link>
              </li>
              <li>
                <Link href="/events/toc" className="hover:text-white transition-colors">
                  Trademark Opposition (TOC)
                </Link>
              </li>
              <li>
                <Link href="/events/guest-lectures" className="hover:text-white transition-colors">
                  Colloquiums &amp; Guest Lectures
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  GLC IPR Journal &amp; CFP
                </Link>
              </li>
              <li>
                <Link href="/ipr-clinic" className="hover:text-white transition-colors">
                  Pro Bono IPR Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Governance & Membership */}
          <div className="space-y-3">
            <h4 className="text-electric-light text-xs font-mono uppercase tracking-[0.18em] font-bold">
              Cell Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Faculty &amp; Core Committee
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-white transition-colors">
                  Membership Pathways
                </Link>
              </li>
              <li>
                <Link href="/join#eligibility" className="hover:text-white transition-colors">
                  Eligibility &amp; Selection Criteria
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors text-slate-400">
                  CMS Administration Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Office Contact */}
          <div className="space-y-3">
            <h4 className="text-electric-light text-xs font-mono uppercase tracking-[0.18em] font-bold">
              Official Registry
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span>
                  Government Law College, &lsquo;A&rsquo; Road, Churchgate, Mumbai, Maharashtra 400020
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-electric shrink-0" />
                <span>GLC Office: 022-22041707</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-electric shrink-0" />
                <a href="mailto:iprcell.glc@gmail.com" className="hover:text-white transition-colors">
                  iprcell.glc@gmail.com
                </a>
              </div>
              <div className="pt-2 text-[11px] border-t border-navy-900 text-slate-400">
                <span className="font-semibold text-slate-300">Office Bearers:</span>
                <div>President: +91 99224 49615</div>
                <div>Vice-President: +91 84509 67696</div>
                <div>Secretary: +91 95884 15510</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Intellectual Property Rights Cell, Government Law College Mumbai.</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-300">About GLC</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            <a
              href="https://www.linkedin.com/company/ipr-cell-glc-mumbai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric-light"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/iprcell.glc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric-light"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
