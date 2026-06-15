"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCategories, type Service, type ServiceCategory } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative border-t border-white/8 transition-colors duration-500 hover:bg-white/[0.025]"
    >
      <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 px-1 py-6 text-left"
      >
        <span className="mt-1 font-mono text-xs text-accent/50">
          {service.number}
        </span>

        <div className="flex-1">
          <h4 className="text-lg font-semibold tracking-tight text-bone transition-transform duration-500 group-hover:translate-x-1.5 md:text-xl">
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
                <p className="pt-3 text-sm leading-relaxed text-bone/55">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-bone/45"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span
          className={`mt-0.5 text-xl text-accent/60 transition-all duration-300 ${
            open ? "rotate-45 text-accent" : ""
          }`}
        >
          +
        </span>
      </button>
    </div>
  );
}

function CategoryBlock({
  category,
  align,
  delay,
}: {
  category: ServiceCategory;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col">
      {/* Category header */}
      <div
        className={`mb-8 border-t-2 pt-8 ${
          align === "left" ? "border-accent" : "border-bone/20"
        }`}
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-xs text-accent/60">
            {category.index}
          </span>
          <span className="h-px flex-1 bg-white/8" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-bone md:text-3xl">
          {category.title}
        </h3>
        <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-bone/40">
          {category.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-bone/55">
          {category.description}
        </p>
      </div>

      {/* Service rows */}
      <div className="border-b border-white/8">
        {category.services.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28 lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[60vh] w-[40vw] rounded-full bg-accent/8 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-accent">
                <span className="h-px w-10 bg-accent/60" />
                What we do
              </p>
            </Reveal>
            <h2 className="display-lg max-w-2xl text-balance text-bone">
              <RevealText text="Two disciplines. Eight capabilities." />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-bone/50 lg:text-right">
              Hover or tap any service to see the full scope. All eight
              capabilities are delivered by the same team to the same standard.
            </p>
          </Reveal>
        </div>

        {/* Two-pillar grid */}
        <div className="grid gap-0 lg:grid-cols-2 lg:gap-16">
          {serviceCategories.map((cat, i) => (
            <CategoryBlock
              key={cat.id}
              category={cat}
              align={i === 0 ? "left" : "right"}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Divider between pillars on mobile */}
        <div className="mt-12 h-px bg-white/5 lg:hidden" />
      </div>
    </section>
  );
}
