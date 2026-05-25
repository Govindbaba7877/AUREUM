"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "@/components/ui/SplitText";
import Eyebrow from "@/components/ui/Eyebrow";

interface Props {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
}

export default function PageHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  image,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-[70vh] min-h-[520px] items-end overflow-hidden bg-ink-950"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover opacity-60" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-12 md:pb-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-display text-7xl leading-[0.92] tracking-tight md:text-8xl lg:text-[140px]">
          <SplitText text={title} by="word" />
          {italic && (
            <>
              <br />
              <span className="italic text-gold-grad">
                <SplitText text={italic} by="word" delay={0.2} />
              </span>
            </>
          )}
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-xl text-base text-bone-100/65 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
