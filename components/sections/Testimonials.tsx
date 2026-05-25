"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const next = () => setI((i + 1) % TESTIMONIALS.length);
  const prev = () => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-48">
      {/* atmospheric gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between">
          <Eyebrow>Voices</Eyebrow>
          <span className="font-mono text-xs tabular-nums text-bone-100/40">
            {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mt-12 min-h-[340px]">
          <Quote
            size={80}
            className="absolute -left-2 -top-6 text-gold-300/15"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative"
            >
              <p className="max-w-5xl font-display text-3xl leading-tight text-balance md:text-5xl lg:text-6xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="font-display text-2xl text-gold-grad">{t.name}</p>
                <span className="hidden h-1 w-1 rounded-full bg-gold-300 md:block" />
                <p className="text-sm text-bone-100/60">{t.role}</p>
                <span className="hidden h-1 w-1 rounded-full bg-gold-300 md:block" />
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-200/80">
                  {t.property}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-px transition-all duration-700 ${
                  idx === i ? "w-12 bg-gold-300" : "w-6 bg-white/15"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-bone-50/80 transition-all hover:border-gold-300/50 hover:text-gold-200"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-bone-50/80 transition-all hover:border-gold-300/50 hover:text-gold-200"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
