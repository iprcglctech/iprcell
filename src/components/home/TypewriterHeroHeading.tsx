"use client";

import React, { useState, useEffect } from "react";

export default function TypewriterHeroHeading() {
  const [phase, setPhase] = useState<
    "typing1" | "pause1" | "deleting1" | "pause2" | "typing2" | "hold2" | "deleting2" | "pauseReset"
  >("typing1");
  const [text, setText] = useState("");

  const phrase1 = "No Recreation Of Creation.";
  const phrase2 = "Welcome to the IPR Cell, Government Law College, Mumbai";

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === "typing1") {
      if (text.length < phrase1.length) {
        timer = setTimeout(() => {
          setText(phrase1.slice(0, text.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setPhase("pause1");
        }, 2000);
      }
    } else if (phase === "pause1") {
      timer = setTimeout(() => {
        setPhase("deleting1");
      }, 300);
    } else if (phase === "deleting1") {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 30);
      } else {
        timer = setTimeout(() => {
          setPhase("pause2");
        }, 400);
      }
    } else if (phase === "pause2") {
      timer = setTimeout(() => {
        setPhase("typing2");
      }, 250);
    } else if (phase === "typing2") {
      if (text.length < phrase2.length) {
        timer = setTimeout(() => {
          setText(phrase2.slice(0, text.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setPhase("hold2");
        }, 8000); // Display the official welcome for 8s
      }
    } else if (phase === "hold2") {
      timer = setTimeout(() => {
        setPhase("deleting2");
      }, 200);
    } else if (phase === "deleting2") {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 25);
      } else {
        timer = setTimeout(() => {
          setPhase("pauseReset");
        }, 400);
      }
    } else if (phase === "pauseReset") {
      timer = setTimeout(() => {
        setPhase("typing1");
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [text, phase]);

  // Helper to render formatted rich text while typing
  const renderFormattedText = () => {
    // When typing or pausing phrase 1 ("No Recreation Of Creation.")
    if (phase === "typing1" || phase === "pause1" || phase === "deleting1") {
      const targetPrefix = "No Recreation Of ";
      if (text.length <= targetPrefix.length) {
        return <span>{text}</span>;
      }
      const part1 = targetPrefix;
      const part2 = text.slice(targetPrefix.length);
      return (
        <>
          <span>{part1}</span>
          <span className="italic text-electric-light">{part2}</span>
        </>
      );
    }

    if (phase === "pause2" || phase === "pauseReset") {
      return <span>&nbsp;</span>;
    }

    // When typing, holding, or deleting phrase 2
    const p1 = "Welcome to the ";
    const p2 = "IPR Cell, ";
    const p3 = "Government Law College, Mumbai";

    if (text.length <= p1.length) {
      return <span>{text}</span>;
    } else if (text.length <= p1.length + p2.length) {
      const t1 = p1;
      const t2 = text.slice(p1.length);
      return (
        <>
          <span className="text-slate-200">{t1}</span>
          <span className="font-semibold text-white">{t2}</span>
        </>
      );
    } else {
      const t1 = p1;
      const t2 = p2;
      const t3 = text.slice(p1.length + p2.length);
      return (
        <>
          <span className="text-slate-200">{t1}</span>
          <span className="font-semibold text-white">{t2}</span>
          <br className="hidden sm:inline" />
          <span className="italic text-electric-light font-normal drop-shadow-sm">{t3}</span>
        </>
      );
    }
  };

  return (
    <div className="min-h-[110px] sm:min-h-[140px] lg:min-h-[160px] flex items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal tracking-tight text-white leading-[1.14]">
        {renderFormattedText()}
        <span className="inline-block w-[3px] h-[0.85em] bg-electric ml-1 align-baseline animate-pulse" />
      </h1>
    </div>
  );
}
