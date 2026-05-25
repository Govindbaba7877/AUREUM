"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor
 * ------
 * Two-layer cinematic cursor: a precise gold dot and a lagging ring
 * that grows on interactive elements. Disabled on touch devices.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // disable on touch / coarse pointer
    const mql = window.matchMedia("(pointer: fine)");
    if (!mql.matches) return;
    setEnabled(true);

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [role=button], input, textarea, select, .magnet, [data-cursor=hover]"
      );
      ring.classList.toggle("cursor-grow", !!interactive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    const raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-gold-200"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-9 w-9 rounded-full border border-gold-300/60 transition-[width,height,border-color,opacity] duration-300 ease-out"
        style={{ mixBlendMode: "difference" }}
      />
      <style jsx global>{`
        @media (pointer: fine) {
          html,
          body,
          a,
          button {
            cursor: none !important;
          }
        }
        .cursor-grow {
          width: 64px !important;
          height: 64px !important;
          border-color: rgba(212, 175, 55, 0.9) !important;
          margin-left: -14px;
          margin-top: -14px;
        }
      `}</style>
    </>
  );
}
