"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLE_MS = 18000; // 18 s per full loop

type Clip = { start: number; end: number; label: string };
type Track = { id: string; label: string; color: string; clips: Clip[] };

const tracks: Track[] = [
  {
    id: "cam",
    label: "CAM",
    color: "#ff4d2e",
    clips: [
      { start: 0, end: 18, label: "WIDE SHOT" },
      { start: 20, end: 37, label: "CLOSE-UP" },
      { start: 39, end: 53, label: "CRANE" },
      { start: 55, end: 100, label: "MULTI-CAM" },
    ],
  },
  {
    id: "vid",
    label: "VID",
    color: "#a78bfa",
    clips: [
      { start: 0, end: 28, label: "PRE-SHOW LOOP" },
      { start: 30, end: 42, label: "STING" },
      { start: 44, end: 100, label: "PRESENTATION" },
    ],
  },
  {
    id: "av",
    label: "A/V",
    color: "#38bdf8",
    clips: [
      { start: 0, end: 12, label: "INIT" },
      { start: 14, end: 100, label: "LED WALL ACTIVE" },
    ],
  },
  {
    id: "lgt",
    label: "LGT",
    color: "#fbbf24",
    clips: [
      { start: 0, end: 24, label: "HOUSE" },
      { start: 26, end: 37, label: "REVEAL CUE" },
      { start: 39, end: 100, label: "SHOW STATE" },
    ],
  },
  {
    id: "snd",
    label: "SND",
    color: "#34d399",
    clips: [
      { start: 0, end: 22, label: "AMBIENT" },
      { start: 24, end: 33, label: "IMPACT" },
      { start: 35, end: 100, label: "LIVE MIX" },
    ],
  },
];

const RULER_LABELS = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toTimecode(pct: number) {
  const totalFrames = Math.round((pct / 100) * 6 * 60 * 25);
  const f = totalFrames % 25;
  const s = Math.floor(totalFrames / 25) % 60;
  const m = Math.floor(totalFrames / (25 * 60)) % 60;
  const h = Math.floor(totalFrames / (25 * 60 * 60));
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

export function ProductionTimeline() {
  const [progress, setProgress] = useState(0);
  const start = useRef<number | null>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    function tick(now: number) {
      if (!start.current) start.current = now;
      const elapsed = (now - start.current) % CYCLE_MS;
      setProgress((elapsed / CYCLE_MS) * 100);
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const isActive = (clip: Clip) => progress >= clip.start && progress <= clip.end;

  const SIDEBAR_W = 52; // px

  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-6xl px-0"
      style={{
        transform: "perspective(1600px) rotateX(7deg)",
        transformOrigin: "50% 0%",
      }}
    >
      {/* Bottom edge fade — blends into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
        style={{
          height: "55%",
          background: "linear-gradient(to bottom, transparent, #050505)",
        }}
      />

      {/* Glow beneath the panel */}
      <div className="absolute inset-x-12 -bottom-8 -z-10 h-16 rounded-full bg-accent/10 blur-2xl" />

      {/* Panel */}
      <div
        className="overflow-hidden rounded-2xl border border-white/10"
        style={{
          background:
            "linear-gradient(160deg, rgba(22,22,26,0.95) 0%, rgba(10,10,11,0.98) 100%)",
          boxShadow:
            "0 48px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* ── Top bar ────────────────────────────────────── */}
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-2">
          <div className="flex items-center gap-3">
            {/* Window traffic lights */}
            <div className="flex items-center gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span
                  key={c}
                  className="h-2.5 w-2.5 rounded-full opacity-70"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="h-3 w-px bg-white/8" />
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/35">
              Core Productions · Runsheet
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Timecode */}
            <span
              className="font-mono text-[11px] tabular-nums"
              style={{
                color: "#ff4d2e",
                textShadow: "0 0 10px rgba(255,77,46,0.5)",
              }}
            >
              {toTimecode(progress)}
            </span>

            {/* REC indicator */}
            <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{
                  animation: "pulse 1.2s ease-in-out infinite",
                  boxShadow: "0 0 6px rgba(255,77,46,0.8)",
                }}
              />
              REC
            </span>

            {/* Play button — decorative */}
            <div className="flex h-5 w-5 items-center justify-center rounded bg-white/5 border border-white/8">
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M0.5 0.5L5.5 4L0.5 7.5V0.5Z" fill="rgba(255,255,255,0.5)" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Timeline body ───────────────────────────────── */}
        <div className="flex" style={{ userSelect: "none" }}>
          {/* Left sidebar — track labels */}
          <div
            className="shrink-0 border-r border-white/6"
            style={{ width: SIDEBAR_W }}
          >
            {/* Ruler row offset */}
            <div className="h-7 border-b border-white/5" />
            {tracks.map((track) => (
              <div
                key={track.id}
                className="flex h-11 items-center justify-center border-b border-white/5"
              >
                <span
                  className="font-mono text-[9px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: `${track.color}cc` }}
                >
                  {track.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right — ruler + tracks */}
          <div className="relative min-w-0 flex-1 overflow-hidden">
            {/* ── Ruler ─────────────────────────────────────── */}
            <div className="relative flex h-7 items-end overflow-hidden border-b border-white/5 bg-white/[0.015]">
              {/* Major marks */}
              {RULER_LABELS.map((label, i) => (
                <div
                  key={label}
                  className="absolute bottom-0 flex flex-col items-center"
                  style={{
                    left: `${(i / (RULER_LABELS.length - 1)) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <span className="mb-1 font-mono text-[8px] text-white/20">
                    {label}
                  </span>
                  <span
                    className="block w-px"
                    style={{ height: 8, background: "rgba(255,255,255,0.12)" }}
                  />
                </div>
              ))}
              {/* Minor ticks */}
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 block w-px"
                  style={{
                    left: `${(i / 35) * 100}%`,
                    height: 4,
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              ))}
            </div>

            {/* ── Track rows ────────────────────────────────── */}
            {tracks.map((track, ti) => (
              <div
                key={track.id}
                className="relative h-11 overflow-hidden border-b border-white/5"
              >
                {/* Subtle row tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      ti % 2 === 0
                        ? "rgba(255,255,255,0.008)"
                        : "transparent",
                  }}
                />

                {/* Clips */}
                {track.clips.map((clip) => {
                  const active = isActive(clip);
                  const width = clip.end - clip.start;
                  return (
                    <div
                      key={clip.label}
                      className="absolute top-1.5 flex items-center overflow-hidden rounded-sm"
                      style={{
                        left: `${clip.start}%`,
                        width: `${width}%`,
                        height: 28,
                        backgroundColor: active
                          ? `${track.color}28`
                          : `${track.color}10`,
                        borderLeft: `2px solid ${track.color}${active ? "dd" : "55"}`,
                        boxShadow: active
                          ? `0 0 16px ${track.color}35, inset 0 1px 0 ${track.color}30`
                          : "none",
                        transition: "background-color 0.15s, box-shadow 0.15s, border-color 0.15s",
                      }}
                    >
                      <span
                        className="truncate px-2 font-mono text-[8px] font-bold uppercase tracking-widest"
                        style={{
                          color: active
                            ? track.color
                            : `${track.color}55`,
                          transition: "color 0.15s",
                        }}
                      >
                        {clip.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* ── Playhead ──────────────────────────────────── */}
            <div
              className="pointer-events-none absolute inset-y-0 z-10"
              style={{ left: `${progress}%` }}
            >
              {/* Top triangle */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "7px solid #ff4d2e",
                  marginLeft: -5,
                  filter: "drop-shadow(0 0 4px rgba(255,77,46,0.8))",
                }}
              />
              {/* Line */}
              <div
                className="absolute top-0 h-full"
                style={{
                  left: -1,
                  width: 2,
                  background:
                    "linear-gradient(to bottom, #ff4d2e, rgba(255,77,46,0.4))",
                  boxShadow: "0 0 10px rgba(255,77,46,0.55)",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Status bar ──────────────────────────────────── */}
        <div className="flex min-h-[28px] items-center gap-2 overflow-hidden border-t border-white/5 px-4 py-1.5">
          {tracks.map((track) => {
            const active = track.clips.find(isActive);
            if (!active) return null;
            return (
              <motion.span
                key={`${track.id}-${active.label}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider"
                style={{
                  background: `${track.color}15`,
                  border: `1px solid ${track.color}35`,
                  color: `${track.color}cc`,
                }}
              >
                {track.label} / {active.label}
              </motion.span>
            );
          })}
          <span className="ml-auto font-mono text-[9px] text-white/12">
            {progress.toFixed(1)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
