"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

interface Props {
  images: string[];
  name: string;
}

export default function Gallery({ images, name }: Props) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setI((i + 1) % images.length);
  const prev = () => setI((i - 1 + images.length) % images.length);

  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[i]}
              alt={`${name} — view ${i + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />

        {/* counter */}
        <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-ink-950/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] backdrop-blur">
          {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        {/* expand */}
        <button
          onClick={() => setOpen(true)}
          className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink-950/60 text-bone-50 backdrop-blur transition-colors hover:bg-gold-300/20"
          aria-label="Expand"
        >
          <Maximize2 size={15} />
        </button>

        {/* nav */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink-950/60 text-bone-50 backdrop-blur transition-colors hover:bg-gold-300/20"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink-950/60 text-bone-50 backdrop-blur transition-colors hover:bg-gold-300/20"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* thumbnails */}
      <div className="mt-4 grid grid-cols-6 gap-2">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setI(idx)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all ${
              i === idx
                ? "ring-2 ring-gold-300 ring-offset-2 ring-offset-ink-950"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <Image src={src} alt="" fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>

      {/* fullscreen lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-ink-950/95 backdrop-blur-xl p-6"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-white/10 text-bone-50"
            >
              <X size={18} />
            </button>
            <div className="relative h-[80vh] w-full max-w-[1400px]">
              <Image
                src={images[i]}
                alt={name}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-8 flex gap-3" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prev}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-bone-50 backdrop-blur hover:bg-gold-300/20"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={next}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-bone-50 backdrop-blur hover:bg-gold-300/20"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
