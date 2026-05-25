"use client";

import { PROPERTIES } from "@/lib/data";
import PropertyCard from "@/components/ui/PropertyCard";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>The Collection</Eyebrow>
            <Reveal>
              <h2 className="mt-6 font-display text-6xl leading-[0.95] md:text-7xl lg:text-[88px]">
                Residences <span className="italic text-gold-grad">curated</span>
                <br />
                for the very few.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-bone-100/60">
                Four featured estates from a private inventory of 118 active
                representations. Full catalogue available by introduction.
              </p>
            </Reveal>
          </div>
          <MagneticButton href="/properties" variant="outline">
            All Estates
          </MagneticButton>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
