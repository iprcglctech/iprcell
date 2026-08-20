import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-offwhite px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-electric bg-electric/10 px-3 py-1 rounded">
          404 · Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif text-ink font-bold">
          Record Not Found
        </h1>

        <p className="text-sm text-slate-muted font-sans leading-relaxed">
          The institutional page or document you are looking for does not exist or has been relocated within the registry.
        </p>

        <div className="pt-4 flex items-center justify-center space-x-3">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-navy-950 hover:bg-navy-900 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Overview</span>
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center space-x-2 bg-white border border-surface-border text-ink hover:text-electric text-xs uppercase font-bold tracking-wider px-4 py-3 rounded transition-all"
          >
            <span>Explore Events</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
