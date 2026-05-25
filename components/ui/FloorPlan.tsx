"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ROOMS = [
  { id: "great", label: "Great Room", x: 60, y: 60, w: 240, h: 140, area: 1840 },
  { id: "kitchen", label: "Kitchen", x: 60, y: 210, w: 140, h: 90, area: 720 },
  { id: "dining", label: "Dining", x: 210, y: 210, w: 90, h: 90, area: 480 },
  { id: "master", label: "Master Suite", x: 320, y: 60, w: 180, h: 140, area: 1420 },
  { id: "bed1", label: "Bedroom 02", x: 320, y: 210, w: 90, h: 90, area: 540 },
  { id: "bed2", label: "Bedroom 03", x: 420, y: 210, w: 80, h: 90, area: 480 },
  { id: "spa", label: "Spa & Hammam", x: 60, y: 310, w: 110, h: 80, area: 620 },
  { id: "cinema", label: "Private Cinema", x: 180, y: 310, w: 120, h: 80, area: 720 },
  { id: "cellar", label: "Wine Cellar", x: 310, y: 310, w: 90, h: 80, area: 380 },
  { id: "gym", label: "Gym", x: 410, y: 310, w: 90, h: 80, area: 420 },
];

export default function FloorPlan() {
  const [active, setActive] = useState<string | null>("great");

  return (
    <div className="rounded-3xl border border-white/[0.06] bg-ink-900 p-6 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <svg
            viewBox="0 0 560 460"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* outer wall */}
            <rect
              x="50"
              y="50"
              width="460"
              height="360"
              fill="none"
              stroke="rgba(212,175,55,0.4)"
              strokeWidth="2"
              rx="2"
            />

            {ROOMS.map((r, i) => (
              <motion.g
                key={r.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setActive(r.id)}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={r.x}
                  y={r.y}
                  width={r.w}
                  height={r.h}
                  fill={active === r.id ? "rgba(212,175,55,0.18)" : "rgba(255,255,255,0.02)"}
                  stroke={active === r.id ? "#D4AF37" : "rgba(255,255,255,0.08)"}
                  strokeWidth="1"
                  style={{ transition: "all 0.4s" }}
                />
                <text
                  x={r.x + r.w / 2}
                  y={r.y + r.h / 2}
                  textAnchor="middle"
                  fontSize="9"
                  fill={active === r.id ? "#E6CB73" : "rgba(250,248,242,0.55)"}
                  fontFamily="var(--font-mono)"
                  style={{
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    transition: "fill 0.4s",
                  }}
                >
                  {r.label}
                </text>
              </motion.g>
            ))}

            {/* compass */}
            <g transform="translate(510, 410)">
              <circle r="14" fill="none" stroke="rgba(212,175,55,0.4)" />
              <text textAnchor="middle" y="-18" fontSize="8" fill="#D4AF37" fontFamily="monospace">
                N
              </text>
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#D4AF37" strokeWidth="0.5" />
            </g>
          </svg>

          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-bone-100/40">
            <span>Level 02 · Principal Floor</span>
            <span>Scale 1:200</span>
          </div>
        </div>

        <div className="w-full md:w-64">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
            Floor Plan
          </p>
          <h4 className="mt-3 font-display text-2xl">Principal Level</h4>
          <p className="mt-3 text-sm text-bone-100/55 leading-relaxed">
            Hover any room to highlight. Drawings prepared by the
            architect's studio, scaled to 1:200.
          </p>

          <div className="mt-6 space-y-2">
            {ROOMS.map((r) => (
              <button
                key={r.id}
                onMouseEnter={() => setActive(r.id)}
                className={`flex w-full items-center justify-between border-b border-white/[0.05] py-2 text-left text-xs transition-colors ${
                  active === r.id ? "text-gold-100" : "text-bone-100/60 hover:text-bone-50"
                }`}
              >
                <span>{r.label}</span>
                <span className="font-mono tabular-nums text-[10px] text-bone-100/40">
                  {r.area} sqft
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
