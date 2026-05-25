"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "@/components/ui/Eyebrow";

/**
 * Manifesto
 * ---------
 * Big editorial paragraph where each word fades from dim to bone-white
 * as the section scrolls through the viewport. GSAP ScrollTrigger.
 */
const COPY =
  "We do not list. We curate. Every residence we represent has been walked, vetted, and lived in by a partner of the firm. We answer only to our clients — and to the architecture we have the privilege to introduce.";

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current.querySelectorAll<HTMLSpanElement>(".m-word");

    const tween = gsap.fromTo(
      words,
      { opacity: 0.18 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-32 md:px-12 md:py-48"
    >
      <div className="mx-auto max-w-[1400px]">
        <Eyebrow>Manifesto</Eyebrow>

        <p
          ref={textRef}
          className="mt-10 max-w-5xl font-display text-[7vw] leading-[1.05] tracking-[-0.01em] text-bone-50/60 md:text-[5vw] lg:text-[64px]"
        >
          {COPY.split(" ").map((w, i) => (
            <span key={i} className="m-word inline-block pr-[0.18em]">
              {w}
            </span>
          ))}
        </p>

        <div className="mt-16 flex items-center gap-8">
          <span className="hairline w-24" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold-200/80">
            Est. 2014 · Geneva · Dubai · Monaco
          </span>
        </div>
      </div>
    </section>
  );
}
