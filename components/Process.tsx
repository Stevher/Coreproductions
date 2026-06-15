"use client";

import { process } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/[0.06] bg-ink-900/30 px-6 py-32 lg:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent/80">
                <span className="h-px w-10 bg-accent/50" />
                {process.eyebrow}
              </p>
            </Reveal>
            <h2 className="display-lg text-balance text-bone">
              <RevealText text={process.title} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-bone/50">
                {process.body}
              </p>
            </Reveal>
          </div>

          {/* Right — steps */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[34px] top-0 hidden h-full w-px bg-white/[0.06] lg:block" />

            <div className="space-y-3">
              {process.steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="group relative flex gap-8 border border-white/[0.07] bg-ink-950/60 p-8 transition-all duration-500 hover:border-accent/25 hover:bg-ink-900/60">
                    {/* Step number — serif italic, large */}
                    <span className="num-serif mt-0.5 shrink-0 text-3xl leading-none text-accent/40 transition-colors duration-300 group-hover:text-accent/70">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-bone">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-bone/50">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
