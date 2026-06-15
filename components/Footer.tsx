"use client";

import { nav, site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-10 pb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <a href="#top" className="inline-flex items-center" aria-label="Core Productions — home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-original.svg"
                  alt="Core Productions"
                  className="h-20 w-auto"
                />
              </a>
              <p className="mt-5 max-w-sm text-bone/40 text-sm leading-relaxed">
                {site.tagline} Audio visual, lighting, sound and video
                production. {site.contact.coverageShort}. Cape Town office
                &amp; warehouse · Johannesburg warehouse.
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

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 text-xs text-bone/30 md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a href="/privacy" className="transition-colors hover:text-bone/55">Privacy Policy</a>
            <a href="/terms" className="transition-colors hover:text-bone/55">Terms of Service</a>
            <p className="rounded-full border border-accent/40 bg-accent/[0.07] px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-accent">
              {site.bbbee}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
