"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

/**
 * MapSection
 * ----------
 * A stylised dot-matrix map of the world (custom SVG) with animated
 * pins marking Aureum's nine principal markets. Hovering a pin reveals
 * a glass info card.
 */
const MARKETS = [
  { city: "Dubai", x: 62, y: 48, count: 38, primary: true },
  { city: "Monaco", x: 52, y: 38, count: 14 },
  { city: "New York", x: 27, y: 36, count: 21 },
  { city: "London", x: 49, y: 32, count: 18 },
  { city: "Mykonos", x: 57, y: 42, count: 7 },
  { city: "Aspen", x: 19, y: 38, count: 9 },
  { city: "Hong Kong", x: 82, y: 47, count: 12 },
  { city: "São Paulo", x: 34, y: 65, count: 6 },
  { city: "Cape Town", x: 56, y: 72, count: 4 },
];

export default function MapSection() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Global Footprint</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1] md:text-6xl lg:text-[80px]">
              Forty-two markets.
              <br />
              <span className="italic text-gold-grad">One private team.</span>
            </h2>
          </div>
          <div className="text-sm text-bone-100/55 md:max-w-xs">
            Below: our nine principal trophy markets. Hover a marker to view
            active inventory.
          </div>
        </div>

        <div className="relative mt-16 aspect-[2/1] w-full overflow-hidden rounded-3xl border border-white/[0.05] bg-ink-900">
          {/* Dot grid map */}
          <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full">
            {/* dot grid backdrop */}
            {Array.from({ length: 50 }).map((_, y) =>
              Array.from({ length: 100 }).map((_, x) => {
                // Simple continental mask — radial-ish blobs
                const onLand =
                  // North America
                  (x > 12 && x < 30 && y > 12 && y < 32) ||
                  // South America
                  (x > 28 && x < 38 && y > 30 && y < 45) ||
                  // Europe
                  (x > 45 && x < 56 && y > 12 && y < 26) ||
                  // Africa
                  (x > 48 && x < 60 && y > 26 && y < 45) ||
                  // Asia
                  (x > 55 && x < 88 && y > 12 && y < 32) ||
                  // Australia
                  (x > 80 && x < 92 && y > 32 && y < 40);
                if (!onLand) return null;
                if ((x + y) % 2 !== 0) return null;
                return (
                  <circle
                    key={`${x}-${y}`}
                    cx={x}
                    cy={y * 0.5}
                    r={0.18}
                    fill="rgba(255,255,255,0.18)"
                  />
                );
              })
            )}

            {/* Connection arcs from Dubai (primary hub) */}
            {MARKETS.filter((m) => !m.primary).map((m, i) => {
              const dubai = MARKETS[0];
              const dx = (m.x - dubai.x) * 0.5;
              const dy = (m.y - dubai.y) * 0.5;
              const cx = (m.x + dubai.x) / 2;
              const cy = (m.y + dubai.y) / 2 - 8;
              return (
                <motion.path
                  key={m.city}
                  d={`M ${dubai.x} ${dubai.y * 0.5} Q ${cx} ${cy * 0.5} ${m.x} ${m.y * 0.5}`}
                  stroke="url(#arc)"
                  strokeWidth="0.15"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.1 }}
                />
              );
            })}
            <defs>
              <linearGradient id="arc">
                <stop offset="0" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pin markers (HTML for hover interactivity) */}
          {MARKETS.map((m, i) => (
            <div
              key={m.city}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-gold-300/40" />
                <span
                  className={`relative grid place-items-center rounded-full ${
                    m.primary ? "h-3.5 w-3.5 bg-gold-grad" : "h-2.5 w-2.5 bg-gold-300"
                  } shadow-gold-glow ring-2 ring-ink-950`}
                />
                {/* Hover card */}
                {hover === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass absolute -left-2 top-5 w-44 rounded-xl p-3 backdrop-blur-xl"
                  >
                    <p className="font-display text-lg leading-none">{m.city}</p>
                    <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-gold-200">
                      {m.count} Active Listings
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Legend strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-bone-100/50">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-grad" /> Primary Hub
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-300" /> Active Market
          </div>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-gold-300 to-transparent" />
            Concierge Network
          </div>
        </div>
      </div>
    </section>
  );
}
