"use client";

import { serviceCategories, type Service, type ServiceCategory } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col border-b border-r border-white/[0.07] bg-ink-950 p-6 transition-all duration-300 hover:bg-ink-900/60 lg:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="num-serif text-2xl leading-none text-accent/40 transition-colors duration-300 group-hover:text-accent">
          {service.number}
        </span>
      </div>
      <h4 className="mb-3 text-base font-semibold tracking-tight text-bone">
        {service.title}
      </h4>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-bone/45">
        {service.summary}
      </p>
      <ul className="space-y-2 border-t border-white/[0.06] pt-5">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-xs text-bone/35">
            <span className="mt-1.5 h-px w-3 shrink-0 bg-accent/40" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryBlock({ category, index }: { category: ServiceCategory; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div>
        {/* Category header */}
        <div className={`mb-8 border-t-2 pt-6 ${index === 0 ? "border-accent" : "border-accent/40"}`}>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="num-serif text-3xl text-accent">{category.index}</span>
            <div>
              <h3 className="display-lg text-bone">{category.title}</h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-bone/30">
                {category.subtitle}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone/50">
            {category.description}
          </p>
        </div>

        {/* Service card grid — 3 columns on desktop, 2 on tablet */}
        <div className="grid border-l border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/[0.06] bg-ink-900/50 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[60vh] w-[35vw] rounded-full bg-accent/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <Reveal>
            <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
              <span className="h-px w-10 bg-accent/30" />
              What we do
            </p>
          </Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-lg max-w-2xl text-balance text-bone">
              <RevealText text="Two disciplines. Eleven capabilities." />
            </h2>
            <Reveal delay={0.2}>
              <p className="max-w-xs text-sm leading-relaxed text-bone/40 lg:text-right lg:pb-1">
                Every capability is delivered by the same team and managed
                under a single brief — no vendor coordination, no gaps.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Category blocks */}
        <div className="space-y-20">
          {serviceCategories.map((cat, i) => (
            <CategoryBlock key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
