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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-20 pt-32 lg:px-10"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_95%)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-accent"
        >
          <span className="h-px w-10 bg-accent/60" />
          {hero.eyebrow}
        </motion.p>

        <h1 className="display-xl max-w-5xl text-balance text-bone">
          {hero.title.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/65 md:text-xl"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">{hero.ctaPrimary}</span>
          </a>
          <a
            href="#services"
            className="group flex items-center gap-2 px-4 py-4 text-sm font-semibold text-bone/80 transition-colors hover:text-bone"
          >
            {hero.ctaSecondary}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Rolling word ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-0 right-0 flex select-none items-center gap-6 overflow-hidden"
      >
        <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap">
          {[...heroWords, ...heroWords, ...heroWords, ...heroWords].map(
            (w, i) => (
              <span
                key={i}
                className="text-sm font-medium uppercase tracking-[0.3em] text-bone/15"
              >
                {w}
                <span className="ml-6 text-accent/40">/</span>
              </span>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}
