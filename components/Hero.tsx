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
      className="relative overflow-hidden bg-accent px-6 pb-0 pt-32 lg:px-10"
    >
      {/* Gradient: orange fades to dark over the timeline zone */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[62%] bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent" />

      {/* ── Text block ─────────────────────────────────── */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Location eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.4em] text-ink-950/50"
        >
          <span className="h-px w-12 bg-ink-950/25" />
          {hero.eyebrow}
        </motion.p>

        {/* Main headline — DM Serif Display */}
        <h1 className="display-xl max-w-4xl text-ink-950">
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

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-base font-medium uppercase tracking-[0.22em] text-ink-950/70"
        >
          {hero.subline}
        </motion.p>

        {/* Thin rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="mt-6 h-px w-full max-w-xl bg-gradient-to-r from-ink-950/25 via-ink-950/10 to-transparent"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-ink-950/65"
        >
          {hero.body}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-ink-950 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition-all duration-300 hover:bg-ink-800 hover:shadow-[0_8px_32px_rgba(6,6,8,0.5)]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="group flex items-center gap-3 rounded-full border border-ink-950/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950/65 transition-all duration-300 hover:border-ink-950/50 hover:text-ink-950"
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
          className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-ink-950/[0.12] pt-6"
        >
          {[
            { label: "Live Event Production", num: "01" },
            { label: "Video & Film Production", num: "02" },
          ].map(({ label, num }) => (
            <span
              key={label}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-950/40"
            >
              <span className="num-serif text-sm text-ink-950/70">{num}</span>
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Hero stage — production timeline ───────────── */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-7xl">
        <ProductionTimeline />
      </div>
    </section>
  );
}
