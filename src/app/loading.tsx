import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-surface-offwhite">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-2 border-slate-300 border-t-electric rounded-full animate-spin" />
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
          Loading Registry...
        </span>
      </div>
    </div>
  );
}
