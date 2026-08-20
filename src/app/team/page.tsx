"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Award,
  Search,
  ArrowRight,
  Building2,
  Scale,
  Sparkles,
} from "lucide-react";
import teamData from "@/content/team.json";
import siteData from "@/content/site.json";
import MemberDepthCarousel, {
  CoreMemberItem,
} from "@/components/ui/MemberDepthCarousel";
import MemberCard from "@/components/ui/MemberCard";

interface UnifiedMember {
  name: string;
  position?: string;
  designation?: string;
  department?: string;
  bio?: string;
  specialization?: string;
  academicYear?: string;
  email?: string;
  keyInitiatives?: string;
  image: string;
  category: string;
  tier: "faculty" | "senior" | "junior";
}

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Normalize all members with unified format
  const allMembers: UnifiedMember[] = useMemo(() => {
    const faculty: UnifiedMember[] = teamData.professorsInCharge.map((p) => ({
      name: p.name,
      designation: p.designation,
      position: p.designation,
      department: p.department,
      bio: p.bio,
      specialization: p.specialization,
      academicYear: p.academicYear,
      email: p.email,
      keyInitiatives: p.keyInitiatives,
      image: p.image,
      category: "faculty",
      tier: "faculty" as const,
    }));

    const senior: UnifiedMember[] = teamData.seniorCore.map((s) => ({
      name: s.name,
      position: s.position,
      department: s.department || "Executive Committee",
      bio: s.bio,
      specialization: s.specialization,
      academicYear: s.academicYear,
      email: s.email,
      keyInitiatives: s.keyInitiatives,
      image: s.image,
      category: "senior",
      tier: "senior" as const,
    }));

    const junior: UnifiedMember[] = teamData.juniorCore.map((j) => {
      let cat = "junior";
      const deptLower = (j.department || "").toLowerCase();
      if (deptLower.includes("research")) cat = "research";
      else if (deptLower.includes("creative")) cat = "creatives";
      else if (deptLower.includes("clinic")) cat = "clinic";
      else if (deptLower.includes("public relations") || deptLower.includes("outreach")) cat = "pr";
      else if (deptLower.includes("finance")) cat = "finance";
      else if (deptLower.includes("logistics")) cat = "logistics";

      return {
        name: j.name,
        position: j.position,
        department: j.department,
        bio: j.bio,
        specialization: j.specialization,
        academicYear: j.academicYear,
        email: j.email,
        keyInitiatives: j.keyInitiatives,
        image: j.image,
        category: cat,
        tier: "junior" as const,
      };
    });

    return [...faculty, ...senior, ...junior];
  }, []);

  // Filter categories definition
  const categories = [
    { id: "all", label: "All Members", count: allMembers.length },
    { id: "faculty", label: "Professors In-Charge", count: teamData.professorsInCharge.length },
    { id: "senior", label: "Senior Core", count: teamData.seniorCore.length },
    { id: "research", label: "Research & Journal", count: allMembers.filter((m) => m.category === "research").length },
    { id: "creatives", label: "Creatives & Editorial", count: allMembers.filter((m) => m.category === "creatives").length },
    { id: "clinic", label: "IPR Clinic Pro Bono", count: allMembers.filter((m) => m.category === "clinic").length },
    { id: "pr", label: "Outreach & PR", count: allMembers.filter((m) => m.category === "pr").length },
    { id: "finance", label: "Finance", count: allMembers.filter((m) => m.category === "finance").length },
    { id: "logistics", label: "Logistics", count: allMembers.filter((m) => m.category === "logistics").length },
  ];

  // Filtered members based on active tab and search query
  const filteredMembers = useMemo(() => {
    return allMembers.filter((member) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "junior" ? member.tier === "junior" : member.category === selectedCategory);

      const matchesSearch =
        searchQuery === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.position && member.position.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (member.department && member.department.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [allMembers, selectedCategory, searchQuery]);

  // Executive members for the 3D Depth Gallery
  const executiveCarouselItems: CoreMemberItem[] = useMemo(() => {
    return teamData.seniorCore.map((member) => ({
      name: member.name,
      position: member.position,
      image: member.image,
      bio: member.bio,
      specialization: member.specialization,
      academicYear: member.academicYear,
      email: member.email,
      keyInitiatives: member.keyInitiatives,
      department: member.department || "Senior Core Executive",
    }));
  }, []);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Header & Institutional Banner */}
        <div className="border-b border-[#E7E0D2] pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-3">
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#B89B5E] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#B89B5E] inline-block" />
                <span>Governance &amp; Committee Roster</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-normal tracking-tight">
                Our People: Faculty &amp; Core Leadership
              </h1>
              <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
                The Intellectual Property Rights Cell at Government Law College, Mumbai is steered by esteemed faculty oversight and a dedicated student executive committee across research, moot advocacy, and grassroots legal literacy.
              </p>
            </div>

            {/* Quiet Institutional Metrics */}
            <div className="flex items-center space-x-4 shrink-0">
              <div className="p-4 rounded-xl bg-white border border-[#E7E0D2] shadow-subtle text-center min-w-[105px]">
                <div className="text-2xl font-serif text-navy-950 font-normal">17</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">Core Board</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E7E0D2] shadow-subtle text-center min-w-[105px]">
                <div className="text-2xl font-serif text-[#B89B5E] font-normal">6</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">Wings</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E7E0D2] shadow-subtle text-center min-w-[105px]">
                <div className="text-2xl font-serif text-navy-950 font-normal">1855</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">Estd.</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Feature Spotlight: 3D Depth Exhibition for Senior Core Committee */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E7E0D2] pb-4">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#B89B5E] flex items-center space-x-2">
                <span>01 / Executive Leadership Gallery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-navy-950 mt-1">
                Senior Core Board in 3D Perspective
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Hover to tilt • Use navigation arrows to explore
            </p>
          </div>

          {/* 3D Depth Exhibition Gallery */}
          <div className="bg-white rounded-2xl border border-[#E7E0D2] p-4 sm:p-8 shadow-subtle">
            <MemberDepthCarousel
              members={executiveCarouselItems}
              autoPlay={true}
              intervalMs={4800}
            />
          </div>
        </section>

        {/* 3. Interactive Filter Tabs & Search Directory */}
        <section className="space-y-8 pt-4">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                  02 / Departmental Directory
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-navy-950 mt-1">
                  Full Committee Roster by Department
                </h2>
              </div>

              {/* Real-time Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, role, or wing..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#E7E0D2] text-xs sm:text-sm text-navy-950 placeholder-slate-400 focus:outline-none focus:border-navy-950 transition-all shadow-subtle"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs with animated pill */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider whitespace-nowrap transition-colors shrink-0 ${
                      isActive ? "text-white" : "text-slate-600 hover:text-navy-950 bg-white border border-[#E7E0D2]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-navy-950 rounded-lg shadow-sm z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center space-x-1.5">
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Members Matrix (Grid of Dignified Editorial Cards) */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible"
          >
            <AnimatePresence>
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.name + (member.position || "")}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <MemberCard
                    name={member.name}
                    position={member.position}
                    designation={member.designation}
                    department={member.department}
                    bio={member.bio}
                    specialization={member.specialization}
                    academicYear={member.academicYear}
                    email={member.email}
                    keyInitiatives={member.keyInitiatives}
                    image={member.image}
                    tier={member.tier}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredMembers.length === 0 && (
            <div className="p-12 text-center bg-white rounded-xl border border-[#E7E0D2] space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-lg font-serif font-normal text-navy-950">No roster members found</h3>
              <p className="text-xs text-slate-500 font-sans">
                No committee member matches &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-2 text-xs font-mono font-semibold text-navy-950 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </section>

        {/* 4. Founding Inception Monograph (Regal Oxford Navy & Brass) */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-10 border border-navy-900 shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-3 flex justify-center">
              <div className="relative w-40 h-48 sm:w-44 sm:h-52 rounded-xl overflow-hidden border border-white/20 shadow-xl bg-navy-900">
                <Image
                  src={siteData.messages.founder.image}
                  alt={siteData.messages.founder.name}
                  fill
                  className="object-cover object-top filter grayscale contrast-[1.05]"
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-3.5">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#CEB681] bg-white/10 border border-white/15 px-3 py-1 rounded">
                <span>Founding Inception (Academic Year 2023–2024)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                {siteData.messages.founder.name}
              </h3>

              <p className="text-xs font-mono text-[#CEB681]">
                {siteData.messages.founder.designation}
              </p>

              <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-serif pt-1 border-l-2 border-[#B89B5E] pl-4">
                &ldquo;{siteData.messages.founder.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* 5. Join Inductions Callout */}
        <div className="p-8 sm:p-10 bg-white border border-[#E7E0D2] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-subtle">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-navy-950">
              Apply for Annual Committee Inductions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Student recruitment for research, editorial, logistics, and clinic wings opens at the commencement of each academic term.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex items-center space-x-2 bg-navy-950 hover:bg-navy-900 text-white text-xs font-mono font-semibold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all shadow-subtle shrink-0"
          >
            <span>Induction Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
