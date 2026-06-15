"use client";

import { assurance } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

const icons: Record<string, React.ReactNode> = {
  "OHS Act Compliance": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2L3 6v6c0 4.418 3.582 7.418 8 8 4.418-.582 8-3.582 8-8V6L11 2z" />
      <path d="M7.5 11l2.5 2.5 4.5-4.5" />
    </svg>
  ),
  "Structural & Rigging Certification": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h16" />
      <path d="M11 3v16" />
      <path d="M6 8h10" />
      <path d="M6 13h10" />
      <path d="M7 19h8" />
    </svg>
  ),
  "Power & Electrical": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4.5 13.5H11L9 20l8.5-11.5H12L13 2z" />
    </svg>
  ),
  "Fire Safety Coordination": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 4-4 5-4 9a4 4 0 008 0c0-4-4-5-4-9z" />
      <path d="M10 15a2 2 0 004 0" />
    </svg>
  ),
  "Public Liability Insurance": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="16" height="14" rx="1" />
      <path d="M3 9h16" />
      <path d="M7 13h8" />
      <path d="M7 16h5" />
      <path d="M7 2v3M15 2v3" />
    </svg>
  ),
  "Professional Crew Standards": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 19v-1a6 6 0 016-6h1" />
      <path d="M16 11l1.5 1.5L21 9" />
    </svg>
  ),
};

export function Assurance() {
  return (
    <section className="relative border-y border-white/[0.06] bg-ink-900/50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[50vh] w-[40vw] rounded-full bg-accent/5 blur-[200px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-end">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
                <span className="h-px w-10 bg-accent/30" />
                {assurance.eyebrow}
              </p>
            </Reveal>
            <h2 className="display-lg text-balance text-bone">
              <RevealText text={assurance.title} />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-bone/50 lg:pb-1">
              {assurance.body}
            </p>
          </Reveal>
        </div>

        {/* Standards grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {assurance.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col bg-ink-950 p-7 transition-all duration-300 hover:bg-ink-900/80 lg:p-8">
                <div className="mb-5 text-accent/60 transition-colors duration-300 group-hover:text-accent">
                  {icons[item.title]}
                </div>
                <h3 className="mb-3 text-base font-semibold text-bone">{item.title}</h3>
                <p className="text-sm leading-relaxed text-bone/45">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note — pill */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex justify-center">
            <p className="rounded-full border border-accent/40 bg-accent/[0.07] px-6 py-2.5 text-center text-[11px] uppercase tracking-[0.22em] text-accent">
              Documentation available on request · Provided as standard to venue operators &amp; principal contractors
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
