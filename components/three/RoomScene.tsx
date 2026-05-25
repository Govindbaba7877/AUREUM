"use client";

import Image from "next/image";

export default function RoomScene({ className }: { className?: string }) {
  return (
    <div className={`relative h-full w-full ${className ?? ""}`}>
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=85"
        alt="Luxury interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
    </div>
  );
}
