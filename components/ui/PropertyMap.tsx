"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Props {
  city: string;
  location: string;
}

/**
 * Minimal stylised dot-matrix locality map. Decorative — not a real
 * tile-based provider, but reads as a luxury cartographic plate.
 */
export default function PropertyMap({ city, location }: Props) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900">
      <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full">
        {/* roads */}
        <path
          d="M 0 60 Q 50 50 100 55 T 200 50"
          stroke="rgba(212,175,55,0.35)"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M 0 30 L 200 35"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.3"
          fill="none"
        />
        <path
          d="M 60 0 L 70 100"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.3"
        />
        <path
          d="M 140 0 L 130 100"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.3"
        />

        {/* district blocks */}
        {Array.from({ length: 60 }).map((_, i) => {
          const x = 10 + (i % 10) * 18 + Math.random() * 2;
          const y = 10 + Math.floor(i / 10) * 14 + Math.random() * 2;
          const w = 4 + Math.random() * 6;
          const h = 3 + Math.random() * 4;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={w}
              height={h}
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.15"
            />
          );
        })}

        {/* water shape */}
        <path
          d="M 0 80 Q 30 75 60 82 T 120 88 T 200 84 L 200 100 L 0 100 Z"
          fill="rgba(212,175,55,0.04)"
          stroke="rgba(212,175,55,0.2)"
          strokeWidth="0.3"
        />
      </svg>

      {/* pin */}
      <motion.div
        initial={{ scale: 0, y: -20, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-gold-300/30" />
        <div className="relative grid h-12 w-12 place-items-center rounded-full bg-gold-grad text-ink-950 shadow-gold-glow">
          <MapPin size={20} strokeWidth={2.2} fill="currentColor" />
        </div>
      </motion.div>

      {/* info card */}
      <div className="glass absolute bottom-5 left-5 rounded-xl px-5 py-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-200">
          Location
        </p>
        <p className="mt-1 font-display text-2xl leading-tight">{city}</p>
        <p className="text-xs text-bone-100/60">{location}</p>
      </div>

      {/* scale */}
      <div className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[0.3em] text-gold-200/60">
        Indicative · Not To Scale
      </div>
    </div>
  );
}
