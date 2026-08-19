import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, User, ArrowRight } from "lucide-react";
import eventsData from "@/content/events.json";

export default function GuestLecturesPage() {
  return (
    <div className="bg-surface-offwhite py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric mb-2">
            <Link href="/events" className="hover:underline">Events</Link>
            <span>/</span>
            <span>Guest Lectures & Colloquiums</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink font-normal tracking-tight">
            Guest Lectures, Colloquiums & Webinars
          </h1>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            The IPR Cell regularly convenes industry leaders, senior advocates, media personalities, and international anti-counterfeiting experts to debate contemporary legal challenges.
          </p>
        </div>

        {/* Lectures List */}
        <div className="space-y-12">
          {eventsData.guestLecturesAndWebinars.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle hover:border-electric transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold uppercase text-electric bg-electric/10 px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-muted">
                      {item.year}
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-ink">
                    {item.title}
                  </h2>

                  <div className="flex items-center space-x-2 text-xs text-electric font-semibold">
                    <User className="w-3.5 h-3.5" />
                    <span>{item.speaker}</span>
                  </div>

                  <p className="text-slate-muted text-sm sm:text-base leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>

                {/* Event Photo Grid */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  {item.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-lg overflow-hidden border border-surface-border ${
                        idx === 0 ? "col-span-2 h-44" : "h-28"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
