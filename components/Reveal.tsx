"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);
  return mobile;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Scroll-triggered fade (+ rise on desktop). Respects prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const useY = !reduce && !mobile;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...(useY ? { y } : {}) }}
      whileInView={{ opacity: 1, ...(useY ? { y: 0 } : {}) }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

/**
 * Word-by-word staggered reveal for headlines.
 * Uses opacity-only on mobile to avoid layout jank from translateY.
 */
export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, ...(mobile ? {} : { y: "0.2em" }) }}
            whileInView={{ opacity: 1, ...(mobile ? {} : { y: 0 }) }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
