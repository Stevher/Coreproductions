"use client";

import { midCTA, stats } from "@/lib/content";
import { Reveal } from "./Reveal";

export function MidCTA() {
  return (
    <section className="relative px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-850">
            {/* Ambient orange glow inside the panel */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[140px]" />

            {/* Top — headline + CTA */}
            <div className="relative flex flex-col gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-12">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.34em] text-accent">
                  {midCTA.eyebrow}
                </p>
                <h2 className="display-lg text-balance text-bone">{midCTA.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/50">
                  {midCTA.body}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_28px_rgba(245,130,32,0.4)]"
                >
                  {midCTA.ctaPrimary}
                </a>
                <a
                  href={midCTA.ctaAltHref}
                  className="rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone/60 transition-all duration-300 hover:border-white/30 hover:text-bone"
                >
                  {midCTA.ctaAlt}
                </a>
              </div>
            </div>

            {/* Bottom — stats band */}
            <div className="relative grid grid-cols-2 gap-px border-t border-white/[0.08] bg-white/[0.08] md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-ink-850 p-6 md:p-7">
                  <span className="font-display text-3xl text-bone md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-xs text-bone/35">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
