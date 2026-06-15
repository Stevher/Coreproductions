"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/lib/content";
import { ProductionTimeline } from "./ProductionTimeline";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden px-6 pb-0 pt-32 lg:px-10"
    >
      {/* Subtle ambient glow — pulled back vs before */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-2/5 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#060608_95%)]" />
      </div>

      {/* ── Text block ─────────────────────────────────── */}
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-7xl">

        {/* Location eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.4em] text-bone/35"
        >
          <span className="h-px w-12 bg-accent-tint/60" />
          {hero.eyebrow}
        </motion.p>

        {/* Main headline — DM Serif Display via display-xl class */}
        <h1 className="display-xl max-w-4xl text-bone">
          {hero.title.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom leading-[1.05]">
              <motion.span
                className="inline-block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subline — process promise, brand orange */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-base font-medium uppercase tracking-[0.22em] text-accent"
        >
          {hero.subline}
        </motion.p>

        {/* Thin rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="mt-6 h-px w-full max-w-xl bg-gradient-to-r from-accent/30 via-bone/10 to-transparent"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-bone/50"
        >
          {hero.body}
        </motion.p>

        {/* CTAs — squared, corporate */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_28px_rgba(245,130,32,0.4)]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-bone/55 transition-all duration-300 hover:border-white/30 hover:text-bone"
          >
            {hero.ctaSecondary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Two-pillar labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-white/[0.06] pt-6"
        >
          {[
            { label: "Live Event Production", num: "01" },
            { label: "Video & Film Production", num: "02" },
          ].map(({ label, num }) => (
            <span
              key={label}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-bone/30"
            >
              <span className="num-serif text-sm text-accent-tint">{num}</span>
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Hero stage — production timeline ───────────── */}
      <div className="mx-auto mt-12 w-full max-w-7xl">
        <ProductionTimeline />
      </div>

      {/* Gradient fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}
