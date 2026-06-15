"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, heroWords } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 lg:px-10"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/3 h-[55vh] w-[55vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[35vh] w-[35vh] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_90%)]" />
      </div>

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

        {/* Main headline — two lines for visual rhythm */}
        <h1 className="display-xl max-w-5xl text-bone">
          {hero.title.split(". ").map((line, i, arr) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
                {i < arr.length - 1 ? "." : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Horizontal rule with the brand promise */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="mt-8 h-px w-full max-w-2xl bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/60 md:text-xl"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,77,46,0.4)]"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-semibold text-bone/70 transition-all duration-300 hover:border-white/25 hover:text-bone"
          >
            {hero.ctaSecondary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Two-pillar indicator beneath CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          {["Live Event Production", "Video & Film Production"].map((label) => (
            <span
              key={label}
              className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-bone/35"
            >
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scrolling service ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-0 right-0 flex select-none items-center overflow-hidden"
      >
        <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap">
          {[...heroWords, ...heroWords, ...heroWords, ...heroWords].map(
            (w, i) => (
              <span
                key={i}
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-bone/12"
              >
                {w}
                <span className="ml-6 text-accent/30">/</span>
              </span>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}
