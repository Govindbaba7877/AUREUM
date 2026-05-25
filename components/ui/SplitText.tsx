"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
  by?: "char" | "word";
  delay?: number;
  stagger?: number;
}

/**
 * SplitText — letter or word reveal, used for hero typography.
 * Splits on whitespace to keep wrapping working naturally.
 */
export default function SplitText({
  text,
  className,
  by = "word",
  delay = 0,
  stagger = 0.06,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, wi) => {
        const units = by === "char" ? Array.from(word) : [word];
        return (
          <span
            key={wi}
            className="inline-block overflow-hidden whitespace-nowrap align-baseline"
            style={{ paddingBottom: "0.12em" }}
          >
            {units.map((u, ui) => (
              <motion.span
                key={ui}
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 1.1,
                  delay: delay + (wi * (by === "char" ? word.length : 1) + ui) * stagger,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
              >
                {u}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
}
