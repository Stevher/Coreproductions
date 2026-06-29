"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLE_MS = 18000;

type Clip = { start: number; end: number; label: string };
type Track = { id: string; label: string; color: string; clips: Clip[] };

// Brand orange + muted silver/steel palette — restrained, corporate
const tracks: Track[] = [
  {
    id: "cam",
    label: "CAM",
    color: "#f58220", // brand orange — primary accent
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
    color: "#9BA8B8", // cool silver
    clips: [
      { start: 0, end: 28, label: "PRE-SHOW LOOP" },
      { start: 30, end: 42, label: "STING" },
      { start: 44, end: 100, label: "PRESENTATION" },
    ],
  },
  {
    id: "av",
    label: "A/V",
    color: "#8B9EA8", // steel
    clips: [
      { start: 0, end: 12, label: "INIT" },
      { start: 14, end: 100, label: "LED WALL ACTIVE" },
    ],
  },
  {
    id: "lgt",
    label: "LGT",
    color: "#B8A88C", // warm sand
    clips: [
      { start: 0, end: 24, label: "HOUSE" },
      { start: 26, end: 37, label: "REVEAL CUE" },
      { start: 39, end: 100, label: "SHOW STATE" },
    ],
  },
  {
    id: "snd",
    label: "SND",
    color: "#8B9888", // muted sage
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
  const lastUpdate = useRef(0);

  useEffect(() => {
    function tick(now: number) {
      if (!start.current) start.current = now;
      if (now - lastUpdate.current > 66) {
        lastUpdate.current = now;
        const elapsed = (now - start.current) % CYCLE_MS;
        setProgress((elapsed / CYCLE_MS) * 100);
      }
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const isActive = (clip: Clip) => progress >= clip.start && progress <= clip.end;

  const SIDEBAR_W = 52;

  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-7xl"
      style={{
        transform: "perspective(1800px) rotateX(6deg)",
        transformOrigin: "50% 0%",
      }}
    >
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
        style={{
          height: "60%",
          background: "linear-gradient(to bottom, transparent, #060608)",
        }}
      />

      {/* Subtle glow under the panel */}
      <div className="absolute inset-x-20 -bottom-6 -z-10 h-12 rounded-full bg-accent/8 blur-2xl" />

      {/* Panel */}
      <div
        className="overflow-hidden border border-white/[0.08]"
        style={{
          background: "linear-gradient(160deg, rgba(18,18,22,0.97) 0%, rgba(6,6,8,0.99) 100%)",
          boxShadow: "0 48px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset",
        }}
      >
        {/* ── Top bar ────────────────────────────────────── */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {["#3a3a3a", "#4a4a4a", "#3a3a3a"].map((c, i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="h-3 w-px bg-white/[0.06]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/25">
              Core Productions · Runsheet
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="font-mono text-[11px] tabular-nums"
              style={{ color: "#f58220", textShadow: "0 0 12px rgba(245,130,32,0.4)" }}
            >
              {toTimecode(progress)}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-accent/70">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{ boxShadow: "0 0 6px rgba(245,130,32,0.7)" }}
              />
              REC
            </span>
          </div>
        </div>

        {/* ── Timeline body ───────────────────────────────── */}
        <div className="flex" style={{ userSelect: "none" }}>
          {/* Sidebar */}
          <div className="shrink-0 border-r border-white/[0.05]" style={{ width: SIDEBAR_W }}>
            <div className="h-7 border-b border-white/[0.04]" />
            {tracks.map((track) => (
              <div
                key={track.id}
                className="flex h-11 items-center justify-center border-b border-white/[0.04]"
              >
                <span
                  className="font-mono text-[9px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: `${track.color}aa` }}
                >
                  {track.label}
                </span>
              </div>
            ))}
          </div>

          {/* Ruler + tracks */}
          <div className="relative min-w-0 flex-1 overflow-hidden">
            {/* Ruler */}
            <div className="relative flex h-7 items-end overflow-hidden border-b border-white/[0.04] bg-white/[0.01]">
              {RULER_LABELS.map((label, i) => (
                <div
                  key={label}
                  className="absolute bottom-0 flex flex-col items-center"
                  style={{ left: `${(i / (RULER_LABELS.length - 1)) * 100}%`, transform: "translateX(-50%)" }}
                >
                  <span className="mb-1 font-mono text-[8px] text-white/18">{label}</span>
                  <span className="block w-px" style={{ height: 7, background: "rgba(255,255,255,0.08)" }} />
                </div>
              ))}
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 block w-px"
                  style={{ left: `${(i / 35) * 100}%`, height: 4, background: "rgba(255,255,255,0.04)" }}
                />
              ))}
            </div>

            {/* Track rows */}
            {tracks.map((track, ti) => (
              <div
                key={track.id}
                className="relative h-11 overflow-hidden border-b border-white/[0.04]"
                style={{ background: ti % 2 === 0 ? "rgba(255,255,255,0.006)" : "transparent" }}
              >
                {track.clips.map((clip) => {
                  const active = isActive(clip);
                  return (
                    <div
                      key={clip.label}
                      className="absolute top-2 flex items-center overflow-hidden"
                      style={{
                        left: `${clip.start}%`,
                        width: `${clip.end - clip.start}%`,
                        height: 28,
                        backgroundColor: active ? `${track.color}22` : `${track.color}0c`,
                        borderLeft: `2px solid ${track.color}${active ? "bb" : "44"}`,
                        boxShadow: active ? `0 0 14px ${track.color}28, inset 0 1px 0 ${track.color}25` : "none",
                        transition: "background-color 0.2s, box-shadow 0.2s, border-color 0.2s",
                      }}
                    >
                      <span
                        className="truncate px-2 font-mono text-[8px] font-bold uppercase tracking-widest"
                        style={{
                          color: active ? `${track.color}ee` : `${track.color}55`,
                          transition: "color 0.2s",
                        }}
                      >
                        {clip.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Playhead */}
            <div
              className="pointer-events-none absolute inset-y-0 z-10"
              style={{ left: `${progress}%` }}
            >
              <div
                style={{
                  width: 0, height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "7px solid #f58220",
                  marginLeft: -5,
                  filter: "drop-shadow(0 0 4px rgba(245,130,32,0.7))",
                }}
              />
              <div
                className="absolute top-0 h-full"
                style={{
                  left: -1, width: 2,
                  background: "linear-gradient(to bottom, #f58220, rgba(245,130,32,0.3))",
                  boxShadow: "0 0 10px rgba(245,130,32,0.4)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex min-h-[26px] items-center gap-2 overflow-hidden border-t border-white/[0.05] px-4 py-1.5">
          {tracks.map((track) => {
            const active = track.clips.find(isActive);
            if (!active) return null;
            return (
              <span
                key={`${track.id}-${active.label}`}
                className="rounded-sm px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider"
                style={{
                  background: `${track.color}12`,
                  border: `1px solid ${track.color}28`,
                  color: `${track.color}aa`,
                }}
              >
                {track.label} / {active.label}
              </span>
            );
          })}
          <span className="ml-auto font-mono text-[8px] text-white/10">
            {progress.toFixed(1)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
