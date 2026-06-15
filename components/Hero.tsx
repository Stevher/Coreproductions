"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, heroWords } from "@/lib/content";
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
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/3 h-[55vh] w-[55vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[35vh] w-[35vh] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_90%)]" />
      </div>

      {/* ── Text block ─────────────────────────────────── */}
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-7xl">
        {/* Location eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-bone/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.eyebrow}
        </motion.p>

        {/* Main headline */}
        <h1 className="display-xl max-w-5xl text-bone">
          {hero.title.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
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

        {/* Subline — process promise */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-5 text-lg font-medium text-accent/90 md:text-xl"
        >
          {hero.subline}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="mt-8 h-px w-full max-w-2xl bg-gradient-to-r from-accent/40 via-accent/10 to-transparent"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-bone/55"
        >
          {hero.body}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(255,77,46,0.4)]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-semibold text-bone/65 transition-all duration-300 hover:border-white/25 hover:text-bone"
          >
            {hero.ctaSecondary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Two-pillar labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          {["Live Event Production", "Video & Film Production"].map((label) => (
            <span
              key={label}
              className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-bone/30"
            >
              <span className="h-1 w-1 rounded-full bg-accent/50" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Hero stage — production timeline ───────────── */}
      <div className="mx-auto mt-16 w-full max-w-7xl">
        <ProductionTimeline />
      </div>

      {/* Fade the timeline into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* Rolling word ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-0 right-0 z-20 flex select-none items-center overflow-hidden"
      >
        <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap">
          {[...heroWords, ...heroWords, ...heroWords, ...heroWords].map(
            (w, i) => (
              <span
                key={i}
                className="text-[10px] font-medium uppercase tracking-[0.3em] text-bone/10"
              >
                {w}
                <span className="ml-6 text-accent/20">/</span>
              </span>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}
