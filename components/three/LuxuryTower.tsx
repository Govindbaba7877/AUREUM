"use client";

import Image from "next/image";

export default function TowerScene({ className }: { className?: string }) {
  return (
    <div className={`relative h-full w-full ${className ?? ""}`}>
      <Image
        src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?w=2400&q=85"
        alt="Luxury tower"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/40 via-transparent to-transparent" />
    </div>
  );
}
