"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("App Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-offwhite px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded">
          Application Notice
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-ink font-bold">
          Something went wrong
        </h1>

        <p className="text-sm text-slate-muted font-sans leading-relaxed">
          An unexpected issue occurred while rendering this view. You can reload the page or return to the main portal.
        </p>

        <div className="pt-4 flex items-center justify-center space-x-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center space-x-2 bg-electric hover:bg-electric-dark text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded transition-all shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-white border border-surface-border text-ink hover:text-electric text-xs uppercase font-bold tracking-wider px-4 py-3 rounded transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
