"use client";

import { midCTA, stats } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function MidCTA() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-ink-850 px-6 py-20 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[240px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Stats grid */}
        <Reveal>
          <div className="mb-20 grid grid-cols-2 gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-ink-850 p-6 transition-colors duration-300 hover:bg-ink-900/60 md:p-8"
              >
                <span className="font-display text-4xl text-accent md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-bone/45">
                  {stat.label}
                </span>
                <span className="mt-1 text-xs text-bone/30">{stat.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA — centred */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.38em] text-accent">
              {midCTA.eyebrow}
            </p>
          </Reveal>
          <h2 className="display-lg text-balance text-bone">
            <RevealText text={midCTA.title} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone/50">
              {midCTA.body}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_28px_rgba(245,130,32,0.4)]"
              >
                {midCTA.ctaPrimary}
              </a>
              <a
                href={midCTA.ctaAltHref}
                className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-bone/55 transition-all duration-300 hover:border-white/30 hover:text-bone"
              >
                {midCTA.ctaAlt}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
