"use client";

import { about } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            <span className="h-px w-10 bg-accent/60" />
            {about.eyebrow}
          </p>
        </Reveal>

        <h2 className="display-lg max-w-4xl text-balance text-bone">
          <RevealText text={about.title} />
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-bone/65">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5">
            {about.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="bg-ink-900/80 p-6 transition-colors duration-300 hover:bg-ink-800"
              >
                <div className="text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-bone/50">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
