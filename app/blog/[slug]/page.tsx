"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import SplitText from "@/components/ui/SplitText";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter(
    (p) => p.id !== post!.id && p.category === post!.category
  ).slice(0, 3);

  const others =
    related.length > 0
      ? related
      : BLOG_POSTS.filter((p) => p.id !== post!.id).slice(0, 3);

  const paragraphs = post!.body.split("\n\n");

  return (
    <main className="bg-ink-950">
      {/* ===== COVER ===== */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src={post!.cover}
          alt={post!.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/30" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
          <div className="mx-auto w-full max-w-4xl">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-bone-100/60 transition hover:text-gold-200"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Journal
            </Link>
            <div className="mt-8 inline-flex items-center gap-3">
              <span className="rounded-full bg-gold-300/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.4em] text-gold-200">
                {post!.category}
              </span>
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1] text-bone-50 md:text-7xl">
              <SplitText text={post!.title} />
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60"
            >
              <span className="text-bone-50">{post!.author}</span>
              <span className="text-gold-300/40">·</span>
              <span>{post!.date}</span>
              <span className="text-gold-300/40">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={11} /> {post!.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== EXCERPT / LEAD ===== */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl leading-[1.3] text-bone-100/90 md:text-4xl"
          >
            {post!.excerpt}
          </motion.p>

          <div className="hairline my-16" />

          {/* Body */}
          <div className="space-y-8">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-lg leading-[1.8] text-bone-100/80"
              >
                {i === 0 ? (
                  <>
                    <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.8] text-gold-grad">
                      {para[0]}
                    </span>
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </motion.p>
            ))}
          </div>

          <div className="hairline my-16" />

          {/* Author footer */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/40">
                Written by
              </p>
              <p className="mt-2 font-display text-2xl">{post!.author}</p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60 transition hover:text-gold-200"
            >
              More Essays
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="border-t border-white/[0.04] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12">
            <Eyebrow>Continue Reading</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              You may also{" "}
              <span className="italic text-gold-grad">enjoy.</span>
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {others.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-900">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-ink-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/90 backdrop-blur">
                      {p.category}
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <h3 className="font-display text-2xl leading-[1.1] md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/60">
                        {p.date} · {p.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
