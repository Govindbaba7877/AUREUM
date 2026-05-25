"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import Counter from "@/components/ui/Counter";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-ink-900 px-6 py-28 md:px-12 md:py-36">
      {/* atmospheric gold beam */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <Eyebrow>By the Numbers</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1] md:text-6xl">
              A decade of quiet, deliberate work.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-bone-100/55 md:block">
            We move on average eleven days from introduction to close. Below,
            the firm in numbers as of January 2026.
          </p>
        </div>

        <div className="grid divide-x divide-white/[0.06] border-y border-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 1 }}
              className="flex flex-col p-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
                / {(i + 1).toString().padStart(2, "0")}
              </p>
              <p className="mt-8 font-display text-7xl leading-none md:text-8xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={Number.isInteger(s.value) ? 0 : 1}
                />
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-bone-100/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
