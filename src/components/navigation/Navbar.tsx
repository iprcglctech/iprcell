"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setEventsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/about" },
    {
      name: "Events & Programs",
      href: "/events",
      subItems: [
        { name: "Events Overview", href: "/events", desc: "All academic flagships & initiatives" },
        { name: "Certificate Course", href: "/events/certificate-course", desc: "Practitioner-led weekend certificate program" },
        { name: "Trademark Opposition (TOC)", href: "/events/toc", desc: "Prof. Tehemtan Daruwalla Competition" },
        { name: "Guest Lectures & Webinars", href: "/events/guest-lectures", desc: "AI vs Artist, Media Law & INTA series" },
      ],
    },
    { name: "Journal", href: "/journal" },
    { name: "IPR Clinic", href: "/ipr-clinic" },
    { name: "Join Us", href: "/join" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-navy-800 shadow-institutional py-3"
          : "bg-navy-950 border-b border-navy-900 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Institutional Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded bg-white/10 p-1 border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/images/glc-crest.png"
                alt="Government Law College Crest"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold tracking-wider text-base sm:text-lg leading-tight uppercase">
                IPR CELL
              </span>
              <span className="text-slate-400 text-[10px] sm:text-[11px] font-sans tracking-tight mt-0.5">
                Government Law College, Mumbai • Estd. 1855
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.subItems) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setEventsOpen(true)}
                    onMouseLeave={() => setEventsOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors rounded ${
                        pathname.startsWith("/events")
                          ? "text-electric-light"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                    </button>

                    <div
                      className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ${
                        eventsOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="bg-navy-900 border border-navy-700 rounded-lg shadow-elevated p-2 space-y-1">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block p-2.5 rounded hover:bg-navy-800 transition-colors group/sub"
                          >
                            <div className="text-xs font-semibold text-white group-hover/sub:text-electric-light transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {sub.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors rounded ${
                    isActive
                      ? "text-electric-light font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-navy-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-navy-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            if (link.subItems) {
              return (
                <div key={link.name} className="space-y-1">
                  <div className="px-3 py-1 text-xs uppercase tracking-widest font-bold text-electric-light">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-1 border-l border-navy-800 ml-2">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-xs uppercase tracking-wider font-semibold rounded ${
                  isActive ? "text-electric-light bg-white/5" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-navy-800">
            <Link
              href="/admin"
              className="block text-center text-xs text-slate-400 hover:text-slate-200 py-1"
            >
              CMS Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
