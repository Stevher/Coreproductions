"use client";

import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 text-xs text-bone/30 md:flex-row">
        <p>© {year} {site.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href="/privacy" className="transition-colors hover:text-bone/55">Privacy Policy</a>
          <a href="/terms" className="transition-colors hover:text-bone/55">Terms of Service</a>
          <p className="rounded-full border border-accent/40 bg-accent/[0.07] px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-accent">
            {site.bbbee}
          </p>
        </div>
      </div>
    </footer>
  );
}
