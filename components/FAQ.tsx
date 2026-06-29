"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.04}>
      <div className={index === 0 ? "" : "border-t border-white/[0.07]"}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-8 py-6 text-left"
          aria-expanded={open}
        >
          <span className="text-base font-medium leading-snug text-bone/80 transition-colors duration-300 group-hover:text-bone md:text-[17px]">
            {q}
          </span>
          <span
            className={`mt-1 shrink-0 text-bone/35 transition-transform duration-300 ${
              open ? "rotate-180 text-accent" : ""
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 5L7 10L12 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-base leading-relaxed text-bone/50">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative border-t border-white/[0.06] bg-ink-900/50 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[40vh] w-[35vw] rounded-full bg-accent/5 blur-[200px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
                <span className="h-px w-10 bg-accent/30" />
                {faq.eyebrow}
              </p>
              <h2 className="display-lg text-balance text-bone">
                <RevealText text={faq.title} />
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xs text-base leading-relaxed text-bone/40">
                Can&apos;t find the answer you need? Contact us directly and we
                will respond within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-accent transition-colors duration-300 hover:text-accent-light"
              >
                Ask us directly
                <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* Right — accordion */}
          <div className="rounded-2xl border border-white/[0.07] bg-ink-950/40 px-6 lg:px-8">
            {faq.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
