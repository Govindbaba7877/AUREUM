"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PropertyCard from "@/components/ui/PropertyCard";
import Eyebrow from "@/components/ui/Eyebrow";
import { PROPERTIES, Property } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const TYPES: Property["type"][] = ["Penthouse", "Villa", "Apartment", "Estate", "Townhouse"];
const STATUSES: Property["status"][] = ["For Sale", "For Rent", "Off Market"];

export default function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<Property["type"] | "All">("All");
  const [status, setStatus] = useState<Property["status"] | "All">("All");
  const [maxPrice, setMaxPrice] = useState<number>(100_000_000);
  const [bedsMin, setBedsMin] = useState<number>(0);
  const [openFilters, setOpenFilters] = useState(false);

  const results = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (query) {
        const q = query.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.location.toLowerCase().includes(q) &&
          !p.city.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      if (type !== "All" && p.type !== type) return false;
      if (status !== "All" && p.status !== status) return false;
      if (p.price > maxPrice) return false;
      if (p.beds < bedsMin) return false;
      return true;
    });
  }, [query, type, status, maxPrice, bedsMin]);

  return (
    <>
      <PageHeader
        eyebrow={`The Collection · ${PROPERTIES.length} Estates`}
        title="One hundred"
        italic="and eighteen homes."
        subtitle="The complete Aureum representation list — refined by city, type, and guide price. Off-market inventory available by introduction."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=85"
      />

      {/* Search bar strip */}
      <section className="sticky top-20 z-40 border-y border-white/[0.06] bg-ink-950/80 px-6 py-5 backdrop-blur-xl md:px-12">
        <div className="mx-auto flex max-w-[1600px] items-center gap-4">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-ink-900/80 px-5 py-3">
            <Search size={16} className="text-gold-300/70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, city, or location…"
              className="flex-1 bg-transparent text-sm text-bone-50 placeholder:text-bone-100/30 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")}>
                <X size={14} className="text-bone-100/40 hover:text-bone-50" />
              </button>
            )}
          </div>
          <button
            onClick={() => setOpenFilters(!openFilters)}
            className="flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/[0.04] px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-gold-100 transition-all hover:bg-gold-300/10"
          >
            <SlidersHorizontal size={14} />
            <span className="hidden md:inline">Filters</span>
            <span className="font-mono text-[10px] tabular-nums text-gold-200">
              {results.length}
            </span>
          </button>
        </div>

        {/* Filter drawer */}
        <motion.div
          initial={false}
          animate={{ height: openFilters ? "auto" : 0, opacity: openFilters ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="mx-auto max-w-[1600px] overflow-hidden"
        >
          <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <Filter label="Type">
              <div className="flex flex-wrap gap-2">
                {(["All", ...TYPES] as const).map((t) => (
                  <Pill key={t} active={type === t} onClick={() => setType(t)}>
                    {t}
                  </Pill>
                ))}
              </div>
            </Filter>
            <Filter label="Status">
              <div className="flex flex-wrap gap-2">
                {(["All", ...STATUSES] as const).map((s) => (
                  <Pill key={s} active={status === s} onClick={() => setStatus(s)}>
                    {s}
                  </Pill>
                ))}
              </div>
            </Filter>
            <Filter label={`Max Price · ${formatCurrency(maxPrice)}`}>
              <input
                type="range"
                min={5_000_000}
                max={100_000_000}
                step={500_000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="aureum-range w-full"
              />
            </Filter>
            <Filter label={`Min Bedrooms · ${bedsMin}+`}>
              <div className="flex gap-2">
                {[0, 3, 4, 5, 6, 7].map((b) => (
                  <Pill key={b} active={bedsMin === b} onClick={() => setBedsMin(b)}>
                    {b === 0 ? "Any" : `${b}+`}
                  </Pill>
                ))}
              </div>
            </Filter>
          </div>
        </motion.div>
      </section>

      {/* Results */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-end justify-between">
            <Eyebrow>{results.length} Results</Eyebrow>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
              Sorted by curation
            </p>
          </div>

          {results.length === 0 ? (
            <div className="rounded-3xl border border-white/[0.06] bg-ink-900 py-32 text-center">
              <p className="font-display text-3xl text-bone-50/80">
                No estates match these parameters.
              </p>
              <p className="mt-3 text-sm text-bone-100/55">
                Try widening your filters, or speak with a partner directly.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        .aureum-range {
          -webkit-appearance: none;
          height: 2px;
          background: linear-gradient(
            90deg,
            #d4af37 0%,
            #d4af37 var(--p, 30%),
            rgba(255, 255, 255, 0.1) var(--p, 30%),
            rgba(255, 255, 255, 0.1) 100%
          );
          border-radius: 999px;
        }
        .aureum-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #d4af37;
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.18);
          cursor: pointer;
        }
        .aureum-range::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #d4af37;
          border: none;
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.18);
        }
      `}</style>
    </>
  );
}

function Filter({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] transition-all ${
        active
          ? "border-gold-300 bg-gold-300/15 text-gold-100"
          : "border-white/10 text-bone-100/70 hover:border-gold-300/40 hover:text-bone-50"
      }`}
    >
      {children}
    </button>
  );
}
