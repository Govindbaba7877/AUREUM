"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Eyebrow from "@/components/ui/Eyebrow";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] min-h-[600px] overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%]">
        <Image
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=2400&q=85"
          alt="Aureum atmosphere"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/60 to-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(7,7,8,0.85)_80%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <Eyebrow align="center">Introduction</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 font-display text-6xl leading-[0.95] tracking-tight md:text-7xl lg:text-[100px]"
          >
            Begin a quiet
            <br />
            <span className="italic text-gold-grad">conversation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mx-auto mt-8 max-w-md text-base text-bone-100/65 leading-relaxed"
          >
            Every Aureum engagement begins with an introduction — by referral,
            by reputation, or by request. We respond within twenty-four hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <MagneticButton href="/contact" variant="primary">
              Request Introduction
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
