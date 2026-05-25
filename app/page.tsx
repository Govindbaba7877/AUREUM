import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Marquee from "@/components/ui/Marquee";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import Stats from "@/components/sections/Stats";
import ServicesTeaser from "@/components/sections/ServicesTeaser";
import Testimonials from "@/components/sections/Testimonials";
import MapSection from "@/components/sections/MapSection";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Dubai · Palm Jumeirah",
          "Côte d'Azur · Cap Ferrat",
          "New York · Tribeca",
          "Monaco · Monte-Carlo",
          "Aspen · Red Mountain",
          "Mykonos · Agios Lazaros",
        ]}
      />
      <Manifesto />
      <FeaturedProperties />
      <Stats />
      <ServicesTeaser />
      <Testimonials />
      <MapSection />
      <CTA />
    </>
  );
}
