"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AGENTS, OFFICES } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import InquiryForm from "@/components/ui/InquiryForm";
import PropertyMap from "@/components/ui/PropertyMap";

export default function ContactPage() {
  return (
    <main className="bg-ink-950">
      <PageHeader
        eyebrow="Get in Touch"
        title="Begin a"
        italic="quiet conversation."
        subtitle="No call centres, no inbound queues. Every inquiry is reviewed by a partner within twenty-four hours."
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2400&q=85"
      />

      {/* ===== FORM + OFFICES ===== */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[1.3fr_1fr]">
          {/* LEFT: form */}
          <div>
            <Eyebrow>Private Inquiry</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
              Tell us what you are{" "}
              <span className="italic text-gold-grad">looking for.</span>
            </h2>
            <p className="mt-6 max-w-md text-bone-100/60">
              The more we know — taste, geography, timing — the better the
              first conversation will be. Every detail is held in confidence.
            </p>
            <div className="mt-12">
              <InquiryForm context="General Inquiry" />
            </div>
          </div>

          {/* RIGHT: offices */}
          <aside className="space-y-6">
            <Eyebrow>Offices</Eyebrow>
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass group rounded-3xl p-8 transition-all hover:border-gold-300/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-3xl text-bone-50">
                      {office.city}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/70">
                      {office.country}
                    </p>
                  </div>
                  <span className="h-2 w-2 animate-pulse-gold rounded-full bg-gold-300" />
                </div>
                <div className="hairline my-6" />
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3 text-bone-100/80">
                    <MapPin size={14} className="mt-1 shrink-0 text-gold-300" />
                    {office.address}
                  </li>
                  <li>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="flex items-start gap-3 text-bone-100/80 transition hover:text-gold-200"
                    >
                      <Phone size={14} className="mt-1 shrink-0 text-gold-300" />
                      {office.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-bone-100/60">
                    <Clock size={14} className="mt-1 shrink-0 text-gold-300" />
                    {office.hours}
                  </li>
                </ul>
              </motion.div>
            ))}

            {/* Social */}
            <div className="glass rounded-3xl p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
                Follow Quietly
              </p>
              <div className="mt-5 flex items-center gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] transition-all hover:border-gold-300/40 hover:bg-gold-300/5"
                  >
                    <Icon
                      size={16}
                      className="text-bone-100/60 transition-colors group-hover:text-gold-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== DIRECT LINES — agents ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow>Direct Lines</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
                Speak to a{" "}
                <span className="italic text-gold-grad">partner directly.</span>
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-bone-100/40 md:block">
              Senior · Discreet · Personal
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {AGENTS.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900 transition-all hover:border-gold-300/20"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    sizes="33vw"
                    className="object-cover grayscale transition-all duration-[1.4s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-6 bottom-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-200/80">
                      {agent.title}
                    </p>
                    <p className="mt-2 font-display text-2xl">{agent.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-3 text-sm text-bone-100/80 transition hover:text-gold-200"
                  >
                    <Mail size={14} className="text-gold-300" />
                    {agent.email}
                  </a>
                  <a
                    href={`tel:${agent.phone.replace(/\s/g, "")}`}
                    className="mt-3 flex items-center gap-3 text-sm text-bone-100/80 transition hover:text-gold-200"
                  >
                    <Phone size={14} className="text-gold-300" />
                    {agent.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12">
            <Eyebrow>Headquarters</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Find us in{" "}
              <span className="italic text-gold-grad">Downtown Dubai.</span>
            </h2>
          </div>
          <PropertyMap city="Dubai" location="Burj District 17, Downtown, Dubai" />
        </div>
      </section>
    </main>
  );
}
