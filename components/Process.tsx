"use client";

import { process } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/5 bg-ink-900/40 px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-accent">
                <span className="h-px w-10 bg-accent/60" />
                {process.eyebrow}
              </p>
            </Reveal>
            <h2 className="display-lg text-balance text-bone">
              <RevealText text={process.title} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/60">
                {process.body}
              </p>
            </Reveal>
          </div>

          <div className="space-y-px">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="group relative flex gap-6 rounded-2xl border border-white/5 bg-ink-950/60 p-7 transition-all duration-500 hover:border-accent/30 hover:bg-ink-850 md:p-9">
                  <span className="font-mono text-sm text-accent/60">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-bone transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-bone/55">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
