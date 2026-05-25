"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BedDouble, Bath, Maximize2 } from "lucide-react";
import { Property } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

interface Props {
  property: Property;
  index?: number;
  layout?: "default" | "wide";
}

export default function PropertyCard({ property, index = 0, layout = "default" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: index * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      className="hover-lift group relative overflow-hidden rounded-[20px] border border-white/[0.05] bg-ink-900"
    >
      <Link href={`/properties/${property.slug}`} className="block">
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            layout === "wide" ? "aspect-[16/10]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={property.hero}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

          {/* status pill */}
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1.5 backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-gold-300 animate-pulse-gold" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-50">
              {property.status}
            </span>
          </div>

          {/* type chip */}
          <div className="absolute right-5 top-5 rounded-full border border-gold-300/30 bg-gold-300/[0.06] px-3 py-1.5 backdrop-blur">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-100">
              {property.type}
            </span>
          </div>

          {/* hover arrow */}
          <div className="absolute right-5 top-1/2 grid h-12 w-12 -translate-y-1/2 translate-x-16 place-items-center rounded-full bg-gold-grad text-ink-950 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </div>
        </div>

        {/* Meta */}
        <div className="space-y-5 p-7">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
              {property.city} · {property.country}
            </p>
            <h3 className="mt-2 font-display text-3xl leading-tight text-bone-50">
              {property.name}
            </h3>
            <p className="mt-1 text-sm text-bone-100/55">{property.location}</p>
          </div>

          <div className="hairline" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 text-xs text-bone-100/60">
              <span className="flex items-center gap-1.5">
                <BedDouble size={14} className="text-gold-300/80" /> {property.beds}
              </span>
              <span className="flex items-center gap-1.5">
                <Bath size={14} className="text-gold-300/80" /> {property.baths}
              </span>
              <span className="flex items-center gap-1.5">
                <Maximize2 size={13} className="text-gold-300/80" />{" "}
                {property.area.toLocaleString()} sqft
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between pt-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-100/40">
                Guide Price
              </p>
              <p className="mt-1 font-display text-2xl text-gold-grad">
                {formatCurrency(property.price)}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-100/40">
              {property.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
