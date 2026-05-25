interface Props {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 40 }: Props) {
  const list = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-8">
      <div className="marquee" style={{ animationDuration: `${speed}s` }}>
        {list.map((s, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-display text-[6vw] leading-none text-bone-50/80 md:text-[4vw]"
          >
            {s}
            <span className="h-2 w-2 rotate-45 bg-gold-300" />
          </span>
        ))}
      </div>
    </div>
  );
}
