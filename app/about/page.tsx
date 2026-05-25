"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { AGENTS } from "@/lib/data";

const VALUES = [
  {
    no: "01",
    title: "Discretion",
    body:
      "Every conversation, every threshold, every transaction — handled with the privacy our clients expect of their wealth, not of their property advisor.",
  },
  {
    no: "02",
    title: "Curation",
    body:
      "We represent fewer estates than any of our peers. The inventory is small because the standard is not.",
  },
  {
    no: "03",
    title: "Authorship",
    body:
      "We own the relationship from origination to close, and beyond — through concierge, design, and stewardship.",
  },
  {
    no: "04",
    title: "Patience",
    body:
      "We have walked away from more deals than we have closed. The right house is worth waiting for; the wrong one is worth refusing.",
  },
];

const TIMELINE = [
  { year: "2014", text: "Founded in Geneva by three partners from Sotheby's, JLL and Christie's." },
  { year: "2016", text: "First Dubai office opens on Sheikh Zayed Road." },
  { year: "2019", text: "Concierge division launched to support post-acquisition stewardship." },
  { year: "2021", text: "First $1B trading year. Monaco bureau opens." },
  { year: "2024", text: "Architectural Curation practice formalised; Tribeca office opens." },
  { year: "2026", text: "$3.8B in closings. Forty-two active markets." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Practice"
        title="Quiet authority,"
        italic="practised globally."
        subtitle="A senior partnership representing the world's most exceptional residences from offices in Geneva, Dubai, Monaco, and New York."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85"
      />

      {/* Story */}
      <section className="relative px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Origin</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1] md:text-6xl">
              We began with one estate, and a quiet conviction.
            </h2>
          </div>
          <div className="space-y-6 text-bone-100/75 leading-relaxed md:col-span-7">
            <Reveal>
              <p>
                In 2014, three partners — a Geneva structurer, a Dubai broker,
                and a Parisian curator — observed that the top of the property
                market had outgrown the business that served it. The world's
                most discerning clients were being offered listings, when what
                they needed was authorship.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Aureum was founded the following year, in a townhouse off Rue
                du Rhône, with a single mandate: to represent fewer estates,
                and to represent them properly. Twelve years on, we operate
                across forty-two markets — but the mandate has not changed.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-display text-2xl text-gold-grad italic">
                We are not a listing service. We are a private practice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-y border-white/[0.06] bg-ink-900 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>Principles</Eyebrow>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">
            Four immovable beliefs.
          </h2>
          <div className="mt-16 grid gap-px bg-white/[0.04] sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9 }}
                className="bg-ink-900 p-10 md:p-14"
              >
                <p className="font-mono text-xs text-gold-200/80">{v.no}</p>
                <h3 className="mt-6 font-display text-3xl text-bone-50">{v.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-100/65">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>Trajectory</Eyebrow>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">A short history.</h2>

          <ol className="relative mt-20 border-l border-white/[0.08] pl-10 md:pl-16">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                className="relative grid grid-cols-1 gap-3 pb-16 md:grid-cols-[120px_1fr] md:gap-12 md:pb-20"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold-grad shadow-gold-glow" />
                <p className="font-mono text-sm tracking-[0.2em] text-gold-200">
                  {t.year}
                </p>
                <p className="max-w-2xl font-display text-2xl leading-snug text-bone-50/90 md:text-3xl">
                  {t.text}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="relative border-t border-white/[0.06] px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>Partnership</Eyebrow>
              <h2 className="mt-6 font-display text-5xl md:text-6xl">The Partners.</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-bone-100/55 md:block">
              Each engagement is led personally by a partner. Below, the senior practice.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {AGENTS.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-800">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                </div>
                <h3 className="mt-6 font-display text-3xl text-bone-50">{a.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200">
                  {a.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-bone-100/60">{a.bio}</p>

                <div className="mt-6 flex items-center gap-6 border-t border-white/[0.06] pt-6 text-xs text-bone-100/60">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-100/40">
                      Closed
                    </p>
                    <p className="mt-1 font-display text-xl text-gold-grad">{a.deals}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-100/40">
                      Volume
                    </p>
                    <p className="mt-1 font-display text-xl text-gold-grad">{a.volume}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-100/40">
                      Languages
                    </p>
                    <p className="mt-1 text-xs">{a.languages.join(" · ")}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
