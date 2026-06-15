"use client";

import { about } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[50vh] w-[40vw] -translate-y-1/2 rounded-full bg-accent/8 blur-[160px]" />

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

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          {/* Copy */}
          <div className="space-y-7">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-bone/60">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Credentials grid */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5">
              {about.credentials.map((c, i) => (
                <div
                  key={c.label}
                  className="group flex flex-col justify-between bg-ink-900/80 p-6 transition-colors duration-300 hover:bg-ink-800"
                >
                  <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-bone/35">
                    {c.label}
                  </span>
                  <div>
                    <div className="text-2xl font-bold text-bone md:text-3xl">
                      {c.value}
                    </div>
                    <div className="mt-1 text-sm text-bone/45">{c.sub}</div>
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
