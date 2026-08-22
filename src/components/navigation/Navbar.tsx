"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [eventsOpen, setEventsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled styling state
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, pop up on scroll up
      if (currentScrollY <= 15) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // Scrolling down -> hide navbar (unless mobile drawer or dropdown is open)
        if (!isOpen && !eventsOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> pop navbar back in
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen, eventsOpen]);

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
      className={`sticky top-0 z-50 transition-transform duration-300 ease-in-out bg-navy-950 py-3.5 ${
        isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Institutional Brand */}
          <Link href="/" className="flex items-center space-x-3 group pointer-events-auto">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/images/ipr-cell-emblem.png"
                alt="Intellectual Property Rights Cell Emblem"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-semibold tracking-tight text-base sm:text-lg leading-tight">
                IPR Cell
              </span>
              <span className="text-slate-400 text-[11px] sm:text-xs font-sans tracking-normal mt-0.5">
                Government Law College, Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 pointer-events-auto">
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
                      className={`flex items-center space-x-1.5 px-3.5 py-2 text-sm font-sans font-medium transition-colors rounded-lg ${
                        pathname.startsWith("/events")
                          ? "text-electric-light bg-white/5 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                    </button>

                    <div
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 z-50 ${
                        eventsOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="bg-navy-950 border border-navy-800 rounded-xl shadow-lg p-2 space-y-0.5">
                        {link.subItems.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-3 py-2 rounded-lg transition-colors group/sub ${
                                isSubActive
                                  ? "bg-white/5 text-electric-light"
                                  : "hover:bg-white/5 text-slate-200"
                              }`}
                            >
                              <div className={`text-sm font-sans font-medium transition-colors ${
                                isSubActive
                                  ? "text-electric-light font-semibold"
                                  : "text-slate-200 group-hover/sub:text-white"
                              }`}>
                                {sub.name}
                              </div>
                              <div className="text-xs text-slate-400 font-sans mt-0.5 leading-normal">
                                {sub.desc}
                              </div>
                            </Link>
                          );
                        })}
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
                  className={`px-3.5 py-2 text-sm font-sans font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-electric-light bg-white/5 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center pointer-events-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-t border-navy-800 px-4 pt-3 pb-6 space-y-2 pointer-events-auto">
          {navLinks.map((link) => {
            if (link.subItems) {
              return (
                <div key={link.name} className="space-y-1">
                  <div className="px-3 py-1.5 text-xs font-semibold text-electric-light font-sans">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-1 border-l border-navy-800 ml-2">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white rounded hover:bg-white/5 transition-colors font-sans"
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
                className={`block px-3 py-2 text-sm font-sans font-medium rounded-lg transition-colors ${
                  isActive ? "text-electric-light bg-white/5 font-semibold" : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-navy-800">
            <Link
              href="/admin"
              className="block text-center text-xs text-slate-400 hover:text-slate-200 py-1 font-sans"
            >
              CMS Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
