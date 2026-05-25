"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/lib/data";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";

const CATEGORIES = [
  "All",
  "Architecture",
  "Markets",
  "Design",
  "Lifestyle",
  "Insight",
] as const;

export default function BlogPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    if (active === "All") return rest;
    return rest.filter((p) => p.category === active);
  }, [active, rest]);

  return (
    <main className="bg-ink-950">
      <PageHeader
        eyebrow="The Journal"
        title="Field notes from"
        italic="the quiet end of the market."
        subtitle="Essays, interviews and market memos — written by our partners for the few who actually read them."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=85"
      />

      {/* ===== FEATURED ===== */}
      {featured && (
        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1600px]">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-ink-950/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200 backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse-gold rounded-full bg-gold-300" />
                    Featured Essay
                  </div>
                </div>
                <div className="flex flex-col justify-center p-10 md:p-16">
                  <Eyebrow>{featured.category}</Eyebrow>
                  <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
                    {featured.title}
                  </h2>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-bone-100/70">
                    {featured.excerpt}
                  </p>
                  <div className="hairline my-10" />
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-bone-50">{featured.author}</span>
                    <span className="text-bone-100/40">·</span>
                    <span className="text-bone-100/60">{featured.date}</span>
                    <span className="text-bone-100/40">·</span>
                    <span className="flex items-center gap-1.5 text-bone-100/60">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <div className="mt-10 inline-flex items-center gap-3 text-gold-200">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                      Read the Essay
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-500 group-hover:rotate-45 group-hover:text-gold-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ===== CATEGORY FILTERS ===== */}
      <section className="border-t border-white/[0.04] px-6 pt-16 md:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-5 py-2 font-mono text-[10px] uppercase tracking-[0.3em] transition-all",
                active === cat
                  ? "border-gold-300/40 bg-gold-300/10 text-gold-200"
                  : "border-white/[0.06] text-bone-100/50 hover:border-white/15 hover:text-bone-100/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.length === 0 ? (
                <div className="col-span-full py-20 text-center text-bone-100/40">
                  No essays in this category yet.
                </div>
              ) : (
                filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink-900">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-ink-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/90 backdrop-blur">
            {post.category}
          </div>
          <div className="absolute inset-x-5 bottom-5">
            <h3 className="font-display text-2xl leading-[1.1] text-bone-50 md:text-3xl">
              {post.title}
            </h3>
            <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60">
              <span>{post.date}</span>
              <span className="text-gold-300/60">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-bone-100/70 line-clamp-2">{post.excerpt}</p>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-bone-100/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-gold-300"
          />
        </div>
      </Link>
    </motion.div>
  );
}
