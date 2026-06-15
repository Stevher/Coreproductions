"use client";

import { nav, site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 px-6 pt-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-10 pb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <a href="#top" className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-bone">
                  Core<span className="text-accent">Productions</span>
                </span>
              </a>
              <p className="mt-4 max-w-sm text-bone/50">
                {site.tagline} Audio visual, lighting, sound and video
                production — {site.contact.location}.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-bone/60 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Oversized wordmark */}
        <div className="select-none border-t border-white/8 pt-10">
          <h2 className="text-balance text-center text-[clamp(2.5rem,13vw,12rem)] font-extrabold leading-none tracking-tightest text-bone/[0.06]">
            CORE PRODUCTIONS
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-bone/40 md:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
            {site.bbbee}
          </p>
        </div>
      </div>
    </footer>
  );
}
