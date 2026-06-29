"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/90 backdrop-blur-2xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Brand logo */}
        <a href="#top" className="flex items-center" aria-label="Core Productions — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-original.svg"
            alt="Core Productions"
            className="h-12 w-auto transition-opacity duration-300 hover:opacity-80 md:h-14"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {nav.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? "text-bone" : "text-bone/55 hover:text-bone"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="rounded-full border border-accent/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition-all duration-300 hover:bg-accent hover:text-ink-950"
          >
            Start a project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-px w-full bg-bone transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-bone transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-bone transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                    activeSection === item.href.slice(1) ? "text-accent" : "text-bone/70"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full border border-accent/50 px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
