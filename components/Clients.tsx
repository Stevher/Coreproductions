"use client";

import { clients } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Clients() {
  return (
    <section className="border-b border-white/[0.06] bg-ink-900 px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.32em] text-bone/25">
              {clients.label}
            </p>
            <div className="hidden h-px flex-1 bg-white/[0.05] md:block" />
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {clients.names.map((name) => (
                <span
                  key={name}
                  className="text-[13px] font-medium uppercase tracking-[0.22em] text-bone/40 transition-colors duration-300 hover:text-bone/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
