"use client";

import { process } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/[0.06] bg-ink-900/30 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[45vh] w-[30vw] -translate-y-1/2 rounded-full bg-accent/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
                <span className="h-px w-10 bg-accent/30" />
                {process.eyebrow}
              </p>
              <h2 className="display-lg text-balance text-bone">
                <RevealText text={process.title} />
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-bone/50">
                {process.body}
              </p>
            </Reveal>
          </div>

          {/* Right — steps */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[38px] top-0 hidden h-full w-px bg-white/[0.06] lg:block" />

            <div className="space-y-3">
              {process.steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="group relative flex gap-7 rounded-2xl border border-white/[0.07] bg-ink-950/60 p-6 transition-all duration-500 hover:border-accent/25 hover:bg-ink-900/60 hover:shadow-[0_0_40px_rgba(245,130,32,0.07)] md:p-7">
                    {/* Step number — serif italic, large */}
                    <span className="num-serif mt-0.5 shrink-0 text-3xl leading-none text-accent/40 transition-colors duration-300 group-hover:text-accent">
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
