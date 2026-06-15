"use client";

import { about } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[50vh] w-[35vw] -translate-y-1/2 rounded-full bg-accent/6 blur-[200px]" />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
            <span className="h-px w-10 bg-accent/30" />
            {about.eyebrow}
          </p>
          <h2 className="display-lg max-w-3xl text-balance text-bone">
            <RevealText text={about.title} />
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          {/* Copy */}
          <div className="space-y-8">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-bone/55">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Credentials */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.07]">
              {about.credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col justify-between p-7 transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <span className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-bone/30">
                    {c.label}
                  </span>
                  <div>
                    <div className="font-display text-3xl text-accent">{c.value}</div>
                    <div className="mt-1.5 text-sm text-bone/40">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
