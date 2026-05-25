"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ServicesTeaser() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Practice</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1] md:text-6xl lg:text-[72px]">
              Six disciplines.<br />
              <span className="italic text-gold-grad">One client.</span>
            </h2>
            <p className="mt-8 max-w-md text-bone-100/60 leading-relaxed">
              Aureum is structured as a senior partnership. Each engagement is
              led personally — never delegated — and supported by a
              cross-disciplinary team built around the client.
            </p>
            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-2 border-b border-gold-300/40 pb-1 text-xs uppercase tracking-[0.3em] text-gold-100 transition-all hover:gap-3 hover:border-gold-300"
            >
              All Services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {SERVICES.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06, duration: 0.9 }}
                >
                  <Link
                    href="/services"
                    className="group grid grid-cols-12 items-center gap-6 py-7 transition-colors hover:bg-white/[0.015]"
                  >
                    <span className="col-span-2 font-mono text-xs text-gold-200/70 md:col-span-1">
                      {s.number}
                    </span>
                    <h3 className="col-span-8 font-display text-2xl leading-tight transition-all group-hover:translate-x-2 md:col-span-5 md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="hidden text-sm text-bone-100/55 md:col-span-5 md:block">
                      {s.summary}
                    </p>
                    <span className="col-span-2 flex justify-end md:col-span-1">
                      <ArrowUpRight
                        size={18}
                        className="text-bone-100/40 transition-all group-hover:rotate-45 group-hover:text-gold-200"
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
