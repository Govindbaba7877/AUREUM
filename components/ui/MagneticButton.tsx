"use client";

import { forwardRef, MouseEvent, ReactNode, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface Props {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  strength?: number;
  type?: "button" | "submit" | "reset";
}

const MagneticButton = forwardRef<HTMLDivElement, Props>(function MagneticButton(
  { href, onClick, children, variant = "primary", className, icon, strength = 0.35, type = "button" },
  ref
) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    if (wrapperRef.current) wrapperRef.current.style.transform = "translate(0,0)";
  };

  const base =
    "magnet group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[11px] font-medium uppercase tracking-[0.3em] transition-colors duration-500";
  const variants: Record<Variant, string> = {
    primary:
      "bg-gold-grad text-ink-950 shadow-gold-glow hover:shadow-[0_0_80px_-10px_rgba(212,175,55,0.7)]",
    ghost:
      "text-bone-50 hover:text-gold-100 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06]",
    outline:
      "text-gold-100 border border-gold-300/40 hover:border-gold-300 hover:bg-gold-300/10",
  };

  const content = (
    <div
      ref={(el) => {
        wrapperRef.current = el;
        if (typeof ref === "function") ref(el!);
        else if (ref && el) (ref as React.MutableRefObject<HTMLDivElement>).current = el;
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-500 group-hover:rotate-45">
        {icon ?? <ArrowUpRight size={14} strokeWidth={2} />}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
});

export default MagneticButton;
