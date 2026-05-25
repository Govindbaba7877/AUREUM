"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Cinematic loader shown once per session. Number counts to 100 over ~1.8s,
 * then the slab splits open vertically to reveal the page.
 */
export default function Loader() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("aureum-loaded") === "1") {
      setShow(false);
      return;
    }
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          sessionStorage.setItem("aureum-loaded", "1");
          setShow(false);
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[300] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-ink-950"
            exit={{ x: "-100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-ink-950"
            exit={{ x: "100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="relative h-10 w-10">
              <span className="absolute inset-0 animate-spin rounded-full border border-gold-300/40 border-t-gold-300" />
              <span className="absolute inset-2 rounded-full bg-gold-grad opacity-80" />
            </div>
            <p className="font-display text-3xl tracking-[0.5em]">AUREUM</p>
            <div className="flex items-baseline gap-2 font-mono text-xs text-bone-100/60">
              <span className="tabular-nums text-gold-200">{pct.toString().padStart(3, "0")}</span>
              <span className="uppercase tracking-[0.3em]">Loading Estates</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
