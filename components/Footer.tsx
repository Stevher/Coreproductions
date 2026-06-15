"use client";

import { nav, site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 pt-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-10 pb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <a href="#top" className="inline-flex items-center" aria-label="Core Productions — home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-full.svg"
                  alt="Core Productions"
                  className="h-20 w-auto"
                />
              </a>
              <p className="mt-5 max-w-sm text-bone/40 text-sm leading-relaxed">
                {site.tagline} Audio visual, lighting, sound and video
                production. {site.contact.coverageShort} — offices in
                Cape Town &amp; Johannesburg.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-bone/40 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>

        {/* Oversized serif wordmark */}
        <div className="select-none border-t border-white/[0.06] pt-10">
          <h2
            className="text-center text-[clamp(2.2rem,11vw,10rem)] font-display font-normal leading-none tracking-tightest text-bone/[0.04]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Core Productions
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-10 text-xs text-bone/30 md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-bone/55">Privacy Policy</a>
            <a href="/terms" className="transition-colors hover:text-bone/55">Terms of Service</a>
            <p className="border border-white/[0.08] px-4 py-1.5 text-[10px] uppercase tracking-[0.22em]">
              {site.bbbee}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
