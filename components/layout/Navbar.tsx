"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className={cn(
          "fixed top-0 z-[60] w-full transition-all duration-500",
          scrolled
            ? "bg-ink-950/70 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative h-7 w-7">
              <span className="absolute inset-0 rounded-full border border-gold-300/60" />
              <span className="absolute inset-[5px] rounded-full bg-gold-grad" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-[0.3em] text-bone-50">
                AUREUM
              </span>
              <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.4em] text-gold-200/70">
                Private Estates
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-bone-100/80 transition-colors hover:text-bone-50"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-300 transition-all duration-500 group-hover:w-6" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/[0.04] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold-100 transition-all hover:border-gold-300 hover:bg-gold-300/10 md:inline-flex"
            >
              <span className="h-1 w-1 rounded-full bg-gold-300 animate-pulse-gold" />
              Private Enquiry
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 text-bone-50"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-display text-xl tracking-[0.3em]">AUREUM</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-8">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-5 font-display text-4xl text-bone-50"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
