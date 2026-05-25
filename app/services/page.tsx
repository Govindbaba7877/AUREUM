"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const PROCESS = [
  { n: "01", title: "Introduction", desc: "A confidential first conversation." },
  { n: "02", title: "Brief", desc: "We codify your ambitions, constraints, taste." },
  { n: "03", title: "Curation", desc: "A shortlist — often off-market — built for you." },
  { n: "04", title: "Acquisition", desc: "We negotiate, underwrite, and close." },
  { n: "05", title: "Stewardship", desc: "The relationship continues beyond signature." },
];

export default function ServicesPage() {
  return (
    <main className="bg-ink-950">
      <PageHeader
        eyebrow="Services"
        title="Six disciplines."
        italic="One standard."
        subtitle="Aureum is not a brokerage with adjacent businesses. It is a single practice with six interlocking disciplines — each led by a senior partner, each held to the same standard of discretion."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85"
      />

      {/* ===== SERVICE SECTIONS — alternating ===== */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px] space-y-32 md:space-y-48">
          {SERVICES.map((service, idx) => {
            const flip = idx % 2 === 1;
            return (
              <Reveal key={service.id}>
                <div
                  className={cn(
                    "grid gap-12 md:grid-cols-12 md:items-start",
                    flip ? "md:[direction:rtl]" : ""
                  )}
                >
                  {/* number block */}
                  <div className="md:col-span-4 md:[direction:ltr]">
                    <p className="font-display text-[10rem] leading-none text-gold-grad opacity-30 md:text-[14rem]">
                      {service.number}
                    </p>
                  </div>

                  {/* content block */}
                  <div className="md:col-span-8 md:[direction:ltr]">
                    <Eyebrow>Service · {service.number}</Eyebrow>
                    <h2 className="mt-4 font-display text-5xl leading-[1] md:text-6xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 max-w-2xl font-display text-2xl italic text-gold-200/80">
                      {service.summary}
                    </p>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-100/70">
                      {service.detail}
                    </p>

                    <div className="hairline mt-10" />

                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-bone-100/85"
                        >
                          <span className="h-px w-6 shrink-0 bg-gold-300/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===== PROCESS STRIP ===== */}
      <section className="relative border-t border-white/[0.04] bg-ink-900 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Method</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              From introduction to{" "}
              <span className="italic text-gold-grad">stewardship.</span>
            </h2>
            <p className="mt-6 text-bone-100/60">
              Every engagement follows the same five-step rhythm — refined over
              a decade of trophy transactions.
            </p>
          </div>

          <div className="relative grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] md:grid-cols-5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative bg-ink-900 p-8 transition-colors hover:bg-ink-800/60"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-300/80">
                  {step.n}
                </p>
                <p className="mt-4 font-display text-2xl">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-bone-100/60">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-white/[0.04] px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow align="center">Engage</Eyebrow>
          <h2 className="mt-8 font-display text-5xl leading-[1] md:text-7xl">
            Begin with a{" "}
            <span className="italic text-gold-grad">single conversation.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-bone-100/60">
            Every engagement begins privately. Tell us what you are looking for
            — or what you are hoping to leave behind. We will respond personally.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact" variant="primary">
              Make an Inquiry
            </MagneticButton>
            <MagneticButton href="/properties" variant="outline">
              View Properties
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
