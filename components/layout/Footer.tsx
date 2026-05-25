"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { OFFICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950">
      {/* giant brand wordmark */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 select-none text-center">
        <span className="font-display text-[18vw] leading-none tracking-tighter text-bone-50/[0.025]">
          AUREUM
        </span>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-7 w-7">
                <span className="absolute inset-0 rounded-full border border-gold-300/60" />
                <span className="absolute inset-[5px] rounded-full bg-gold-grad" />
              </div>
              <span className="font-display text-xl tracking-[0.3em]">AUREUM</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-100/60">
              A private brokerage representing the world's most exceptional
              residences. Members of the International Trophy Asset Council since 2014.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "X / Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-bone-50/80 transition-all hover:border-gold-300 hover:text-gold-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-eyebrow mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-bone-100/80">
              {[
                ["Properties", "/properties"],
                ["Services", "/services"],
                ["About", "/about"],
                ["Journal", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-gold-200"
                  >
                    {label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6">
            <p className="text-eyebrow mb-5">Bureaux</p>
            <div className="grid gap-8 sm:grid-cols-3">
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <p className="font-display text-2xl">{o.city}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-bone-100/40">
                    {o.country}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-bone-100/70">
                    {o.address}
                  </p>
                  <p className="mt-2 text-xs text-gold-200/80">{o.phone}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-bone-100/40">
                    {o.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mt-20" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-bone-100/40 md:flex-row md:items-center">
          <p>© 2026 Aureum Private Estates · All Rights Reserved</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-bone-50">Privacy</a>
            <a href="#" className="hover:text-bone-50">Terms</a>
            <a href="#" className="hover:text-bone-50">Cookies</a>
            <a href="#" className="hover:text-bone-50">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
