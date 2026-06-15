"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCategories, type Service, type ServiceCategory } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`shrink-0 transition-transform duration-400 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 5L7 10L12 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceRow({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative border-t border-white/[0.07] transition-colors duration-500 hover:bg-white/[0.02]"
    >
      {/* Top accent line on hover */}
      <span className="absolute left-0 top-0 h-px w-0 bg-accent/60 transition-all duration-500 group-hover:w-full" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-5 py-5 text-left"
      >
        {/* Serif italic number */}
        <span className="num-serif mt-0.5 w-6 shrink-0 text-sm text-accent">
          {service.number}
        </span>

        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold tracking-tight text-bone transition-transform duration-500 group-hover:translate-x-1 md:text-lg">
            {service.title}
          </h4>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="pt-3 text-sm leading-relaxed text-bone/50">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-bone/40"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className={`mt-1 text-bone/30 transition-colors duration-300 ${open ? "text-accent" : ""}`}>
          <Chevron open={open} />
        </span>
      </button>
    </div>
  );
}

function CategoryBlock({
  category,
  delay,
  primary,
}: {
  category: ServiceCategory;
  delay: number;
  primary: boolean;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col">
      {/* Category header */}
      <div className={`mb-6 border-t-2 pt-6 ${primary ? "border-accent" : "border-accent/40"}`}>
        <div className="mb-4 flex items-center gap-3">
          <span className="num-serif text-lg text-accent">{category.index}</span>
          <span className="h-px flex-1 bg-white/[0.07]" />
        </div>
        <h3 className="display-lg text-bone">{category.title}</h3>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bone/35">
          {category.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-bone/50">
          {category.description}
        </p>
      </div>

      {/* Service rows */}
      <div className="border-b border-white/[0.07]">
        {category.services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative border-t border-white/[0.06] bg-ink-900/50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[60vh] w-[35vw] rounded-full bg-accent/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
                <span className="h-px w-10 bg-accent/30" />
                What we do
              </p>
            </Reveal>
            <h2 className="display-lg max-w-2xl text-balance text-bone">
              <RevealText text="Two disciplines. Eight capabilities." />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-bone/40 lg:text-right">
              Hover or tap any service to see the full scope. All eight
              capabilities are delivered by the same team, to the same standard.
            </p>
          </Reveal>
        </div>

        {/* Two-pillar grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {serviceCategories.map((cat, i) => (
            <CategoryBlock
              key={cat.id}
              category={cat}
              primary={i === 0}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
