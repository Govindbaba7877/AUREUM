"use client";

import { useParams, notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Phone,
  Mail,
  Languages,
} from "lucide-react";
import { AGENTS, PROPERTIES } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";
import Gallery from "@/components/ui/Gallery";
import FloorPlan from "@/components/ui/FloorPlan";
import MortgageCalculator from "@/components/ui/MortgageCalculator";
import InquiryForm from "@/components/ui/InquiryForm";
import PropertyMap from "@/components/ui/PropertyMap";
import PropertyCard from "@/components/ui/PropertyCard";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";
import SplitText from "@/components/ui/SplitText";

// 3D room preview loaded client-side only
const RoomScene = dynamic(() => import("@/components/three/RoomScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-ink-900" />,
});

export default function PropertyDetailPage() {
  const params = useParams<{ id: string }>();
  const slug = params?.id;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const agent = AGENTS.find((a) => a.id === property!.agent)!;
  const related = PROPERTIES.filter((p) => p.id !== property!.id).slice(0, 3);

  return (
    <main className="bg-ink-950">
      {/* ===== HERO ===== */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src={property!.hero}
          alt={property!.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-300">
                {property!.status}
              </span>
              <span className="h-px w-12 bg-gold-300/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone-100/60">
                {property!.type} · {property!.year}
              </span>
            </motion.div>

            <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.95] text-bone-50 md:text-8xl">
              <SplitText text={property!.name} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 max-w-2xl font-display text-2xl italic text-gold-200/80 md:text-3xl"
            >
              {property!.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 gap-x-12 gap-y-6 md:grid-cols-4 lg:flex lg:items-end lg:gap-16"
            >
              <Stat label="Location" value={property!.location} />
              <Stat label="Beds" value={`${property!.beds}`} />
              <Stat label="Baths" value={`${property!.baths}`} />
              <Stat label="Interior" value={`${property!.area.toLocaleString()} sqft`} />
              <Stat
                label="Price"
                value={formatCurrency(property!.price)}
                gold
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow>The Residence</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                A walkthrough,{" "}
                <span className="italic text-gold-grad">frame by frame.</span>
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-bone-100/40 md:block">
              {property!.gallery.length} Images
            </span>
          </div>
          <Gallery images={property!.gallery} name={property!.name} />
        </div>
      </section>

      {/* ===== OVERVIEW + AMENITIES ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
              The story of the property.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone-100/70">
              {property!.description}
            </p>

            <div className="hairline mt-12" />

            <div className="mt-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-200/80">
                Amenities
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {property!.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-bone-100/85"
                  >
                    <span className="mt-2 h-px w-6 shrink-0 bg-gold-300/60" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky agent card */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-gold-300/30">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
                    Listing Partner
                  </p>
                  <p className="mt-1 font-display text-xl">{agent.name}</p>
                  <p className="text-sm text-bone-100/60">{agent.title}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-bone-100/70">
                {agent.bio}
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 text-bone-100/80 transition hover:text-gold-200"
                >
                  <Mail size={14} className="text-gold-300" />
                  {agent.email}
                </a>
                <a
                  href={`tel:${agent.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-bone-100/80 transition hover:text-gold-200"
                >
                  <Phone size={14} className="text-gold-300" />
                  {agent.phone}
                </a>
                <div className="flex items-center gap-3 text-bone-100/80">
                  <Languages size={14} className="text-gold-300" />
                  {agent.languages.join(" · ")}
                </div>
              </div>

              <div className="hairline my-8" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-3xl text-gold-grad">
                    {agent.deals}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
                    Deals
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-gold-grad">
                    {agent.volume}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
                    Volume
                  </p>
                </div>
              </div>

              <MagneticButton variant="primary" className="mt-8 w-full">
                Request Private Viewing
              </MagneticButton>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== 3D ROOM PREVIEW ===== */}
      <section className="relative border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow>Spatial Preview</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Step inside —{" "}
                <span className="italic text-gold-grad">in three dimensions.</span>
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-bone-100/40 md:block">
              Drag · Zoom · Rotate
            </span>
          </div>
          <div className="relative h-[70vh] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900">
            <RoomScene />
            <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60">
              <span className="h-1.5 w-1.5 animate-pulse-gold rounded-full bg-gold-300" />
              Live 3D Preview
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLOOR PLAN ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow>Floor Plan</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Designed for{" "}
                <span className="italic text-gold-grad">how you actually live.</span>
              </h2>
            </div>
          </div>
          <FloorPlan />
        </div>
      </section>

      {/* ===== MORTGAGE CALCULATOR ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12">
            <Eyebrow>Financing</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A starting point —{" "}
              <span className="italic text-gold-grad">not a final word.</span>
            </h2>
            <p className="mt-4 max-w-xl text-bone-100/60">
              Our private banking partners structure custom facilities for each
              transaction. Use the calculator as an indicative reference only.
            </p>
          </div>
          <MortgageCalculator price={property!.price} />
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow>Location</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                {property!.city}
                <span className="text-bone-100/30"> · </span>
                <span className="italic text-gold-grad">{property!.country}</span>
              </h2>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <MapPin size={14} className="text-gold-300" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60">
                {property!.coords.lat.toFixed(3)}°N {property!.coords.lng.toFixed(3)}°E
              </span>
            </div>
          </div>
          <PropertyMap city={property!.city} location={property!.location} />
        </div>
      </section>

      {/* ===== INQUIRY ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>Private Inquiry</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
                Begin a quiet conversation about{" "}
                <span className="italic text-gold-grad">{property!.name}.</span>
              </h2>
              <p className="mt-6 max-w-md text-bone-100/60">
                Each inquiry is reviewed by a senior partner within twenty-four
                hours. We respond personally — never with templates.
              </p>
              <div className="hairline mt-12" />
              <div className="mt-12 space-y-4 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
                <p>· Absolute discretion</p>
                <p>· Senior partner review</p>
                <p>· 24h response window</p>
              </div>
            </div>
            <InquiryForm context={property!.name} />
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow>Curated Adjacent</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                You may also{" "}
                <span className="italic text-gold-grad">consider.</span>
              </h2>
            </div>
            <Link
              href="/properties"
              className="group hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60 transition hover:text-gold-200 md:flex"
            >
              All Properties
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:rotate-45"
              />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  label,
  value,
  gold = false,
}: {
  label: string;
  value: string;
  gold?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-display text-2xl md:text-3xl",
          gold ? "text-gold-grad" : "text-bone-50"
        )}
      >
        {value}
      </p>
    </div>
  );
}
