"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Building2, Award } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
import Eyebrow from "@/components/ui/Eyebrow";

// 3D loaded client-only — keeps initial bundle lean and avoids SSR issues
const TowerScene = dynamic(() => import("@/components/three/TowerScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-ink-grad">
      {/* 3D backdrop */}
      <div className="absolute inset-0">
        <TowerScene className="h-full w-full" />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,7,8,0.85)_100%)]" />

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-300/20 to-transparent" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-10 pt-32 md:px-12 md:pt-40">
        {/* Top eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-between"
        >
          <Eyebrow>2026 · Private Collection</Eyebrow>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/50 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300 animate-pulse-gold" />
            42 Markets · Live
          </div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <h1 className="font-display text-[14vw] leading-[0.9] tracking-[-0.02em] md:text-[9vw] lg:text-[150px]">
            <SplitText text="Estates of" by="word" stagger={0.08} delay={0.6} />
            <br />
            <span className="text-gold-grad italic">
              <SplitText text="quiet legend" by="word" stagger={0.08} delay={1.0} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-bone-100/70 md:text-base"
          >
            Aureum represents the world's most exceptional residences —
            off-market, by introduction only. From the Palm to Cap Ferrat,
            from Aspen to Tribeca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/properties" variant="primary">
              View Collection
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Private Enquiry
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom row — floating glass info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2.0 }}
          className="grid gap-3 md:flex md:items-end md:justify-between md:gap-6"
        >
          <div className="hidden md:flex md:flex-col md:gap-3">
            <div className="scroll-line" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
              Scroll to discover
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                Icon: MapPin,
                label: "Featured",
                value: "Celestia Penthouse",
                meta: "Palm Jumeirah · Dubai",
              },
              {
                Icon: Building2,
                label: "Active Listings",
                value: "118 Estates",
                meta: "Across 42 markets",
              },
              {
                Icon: Award,
                label: "Volume · 2025",
                value: "$3.8 Billion",
                meta: "Closed transactions",
              },
            ].map(({ Icon, label, value, meta }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.1 + i * 0.12 }}
                className="glass animate-float-slow rounded-2xl p-5"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className="flex items-center gap-2 text-gold-200">
                  <Icon size={13} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
                    {label}
                  </span>
                </div>
                <p className="mt-3 font-display text-2xl">{value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-bone-100/40">
                  {meta}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:hidden"
      >
        <ArrowDown size={16} className="animate-bounce text-gold-200" />
      </motion.div>
    </section>
  );
}
