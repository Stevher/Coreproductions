"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, type Service } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.04}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="group relative border-t border-white/8 transition-colors duration-500 hover:bg-white/[0.02]"
      >
        {/* Accent wipe on hover */}
        <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start gap-5 px-1 py-8 text-left md:items-center md:gap-8 md:py-10"
        >
          <span className="font-mono text-sm text-accent/70 md:text-base">
            {service.number}
          </span>

          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-2xl font-bold tracking-tight text-bone transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                {service.title}
              </h3>
              <span className="rounded-full border border-white/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/40">
                {service.tag}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pt-4 text-base leading-relaxed text-bone/60">
                    {service.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-bone/50"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span
            className={`mt-2 text-2xl text-accent transition-transform duration-500 md:mt-0 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28 lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[50vh] w-[50vh] rounded-full bg-accent/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-accent">
                <span className="h-px w-10 bg-accent/60" />
                What we do
              </p>
            </Reveal>
            <h2 className="display-lg max-w-3xl text-balance text-bone">
              <RevealText text="Everything your moment needs, under one roof." />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-bone/50">
              Hover or tap any service to see what's included. Live production
              and full video — one team, one standard.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-b border-white/8">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
