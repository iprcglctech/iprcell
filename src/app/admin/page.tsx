"use client";

import React, { useState, useEffect } from "react";
import { Save, RefreshCw, CheckCircle2, AlertCircle, Database, FileEdit, Users, Award, BookOpen, Settings } from "lucide-react";

type CollectionType = "site" | "team" | "events" | "journal" | "join" | "clinic";

export default function AdminPortalPage() {
  const [activeCollection, setActiveCollection] = useState<CollectionType>("events");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchCollection = async (collectionKey: CollectionType) => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/content?file=${collectionKey}`);
      if (!res.ok) throw new Error("Failed to load collection");
      const data = await res.json();
      setContent(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to load content." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollection(activeCollection);
  }, [activeCollection]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const parsed = JSON.parse(content);
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: activeCollection, content: parsed }),
      });

      if (!res.ok) throw new Error("Failed to save changes.");
      const result = await res.json();
      setMessage({ type: "success", text: `Successfully updated ${activeCollection}.json in production repository.` });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Invalid JSON syntax. Please verify." });
    } finally {
      setSaving(false);
    }
  };

  const collections: { key: CollectionType; label: string; icon: any }[] = [
    { key: "events", label: "Events & Flagships", icon: Award },
    { key: "team", label: "Team & Faculty", icon: Users },
    { key: "journal", label: "Journal & CFP", icon: BookOpen },
    { key: "site", label: "Site & Legacy Info", icon: Settings },
    { key: "join", label: "Join & Recruitment", icon: FileEdit },
    { key: "clinic", label: "IPR Clinic", icon: Database },
  ];

  return (
    <div className="bg-surface-offwhite py-12 sm:py-16 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Portal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-electric mb-1">
              <Database className="w-3.5 h-3.5" />
              <span>GLC Institutional CMS Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-ink font-bold">
              Content Management & Registry System
            </h1>
            <p className="text-xs text-slate-muted mt-1">
              Non-technical management for events, core members, journal editions, and institutional announcements.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => fetchCollection(activeCollection)}
              disabled={loading}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-white border border-surface-border text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Reload</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving || loading}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded bg-electric hover:bg-electric-dark text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saving ? "Saving Changes..." : "Save to Production"}</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        {message && (
          <div
            className={`p-4 rounded-lg flex items-center space-x-3 text-xs ${
              message.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* Collections Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {collections.map((col) => {
            const Icon = col.icon;
            const isActive = activeCollection === col.key;
            return (
              <button
                key={col.key}
                onClick={() => setActiveCollection(col.key)}
                className={`p-3 rounded-lg border text-left flex items-center space-x-2.5 transition-all text-xs font-semibold ${
                  isActive
                    ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                    : "bg-white text-slate-muted border-surface-border hover:border-electric hover:text-ink"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{col.label}</span>
              </button>
            );
          })}
        </div>

        {/* Editor Area */}
        <div className="bg-white border border-surface-border rounded-xl shadow-subtle p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <span className="text-xs font-mono font-semibold text-ink uppercase">
              Editing: <span className="text-electric">src/content/{activeCollection}.json</span>
            </span>
            <span className="text-[11px] font-mono text-slate-light">
              Structured JSON Store • Live Next.js Integration
            </span>
          </div>

          {loading ? (
            <div className="py-20 text-center text-xs text-slate-400 font-mono">
              Loading collection data...
            </div>
          ) : (
            <div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={22}
                className="w-full font-mono text-xs p-4 rounded-lg bg-surface-offwhite border border-surface-border text-ink focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric leading-relaxed"
                spellCheck={false}
              />
            </div>
          )}

          <div className="pt-2 flex items-center justify-between text-xs text-slate-light">
            <span>Any modifications made here reflect directly across the live website.</span>
            <button
              onClick={handleSave}
              className="font-semibold text-electric hover:underline"
            >
              Save Now &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
