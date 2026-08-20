"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Root Error Boundary:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF7F2] text-[#0F172A] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <div className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded">
            System Notice
          </div>

          <h2 className="text-2xl font-serif font-bold text-[#0F172A]">
            Application Encountered an Error
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A critical rendering failure occurred. Please attempt to reset the session.
          </p>

          <div className="pt-2">
            <button
              onClick={() => reset()}
              className="bg-[#2A54A7] hover:bg-[#1E3F80] text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded transition-all shadow-sm"
            >
              Reload Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
