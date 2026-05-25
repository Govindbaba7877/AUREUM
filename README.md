# AUREUM — Ultra-Premium Luxury Real Estate

> _Estates of quiet legend._

An Awwwards-tier, cinematic luxury real estate website built with **Next.js 15**, **React Three Fiber**, **GSAP + ScrollTrigger**, **Framer Motion**, and **Lenis** smooth scrolling. Designed to feel like a Dubai luxury brand: dark, gilded, and unhurried.

---

## ✦ Features

- **Cinematic 3D hero** — procedural luxury tower (R3F + Three.js) with bronze, gold, glass-curtain materials, atmospheric beams, and mouse-reactive camera rig
- **Interactive 3D room preview** on every property detail page — OrbitControls, real-time lighting
- **Lenis smooth scroll** integrated with GSAP ScrollTrigger
- **Custom dual-layer cursor** with magnetic interaction zones
- **GSAP scroll storytelling** — word-by-word manifesto reveal
- **Framer Motion** page-level transitions and stagger reveals
- **Magnetic buttons** that pull toward the cursor
- **Animated counters**, marquees, parallax hero headers
- **Interactive SVG world map** with animated arc connections from Dubai
- **Custom floor plan SVG** with hover highlights
- **Mortgage calculator** with live recalculation
- **Image lightbox gallery** with framer transitions
- **Featured blog system** with category filtering
- **3 fully working office cards** + agent contact directory
- **100% responsive** — mobile/tablet/desktop optimised

---

## ✦ Pages

1. **Home** — `/`
2. **About** — `/about`
3. **Properties** — `/properties`
4. **Property Detail** — `/properties/[slug]` (9 properties)
5. **Services** — `/services`
6. **Journal (Blog)** — `/blog`
7. **Blog Post** — `/blog/[slug]` (6 posts)
8. **Contact** — `/contact`

---

## ✦ Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 + GSAP 3.12 + ScrollTrigger |
| Smooth scroll | @studio-freight/lenis |
| 3D | React Three Fiber + drei + three.js 0.170 |
| Icons | Lucide React |
| Fonts | Cormorant Garamond (display), Inter (sans), JetBrains Mono (mono) |

---

## ✦ Getting Started

### 1. Install dependencies

```bash
npm install
```

> ⚠️ This project uses **React 19 RC** (required by Next.js 15). You may see peer-dependency warnings during install — these are safe to ignore. If npm refuses, use:
>
> ```bash
> npm install --legacy-peer-deps
> ```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## ✦ Project Structure

```
aureum/
├── app/
│   ├── layout.tsx            # Root layout — fonts, smooth scroll, navbar, footer, cursor
│   ├── page.tsx              # Home
│   ├── globals.css           # Global styles — glass, hairlines, marquee, grain
│   ├── about/page.tsx
│   ├── properties/
│   │   ├── page.tsx          # Listing with filters
│   │   └── [id]/page.tsx     # Property detail (slug routed)
│   ├── services/page.tsx
│   ├── blog/
│   │   ├── page.tsx          # Journal listing
│   │   └── [slug]/page.tsx   # Single post
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Loader.tsx        # Once-per-session intro
│   │   ├── Navbar.tsx        # Scroll-reactive blur nav
│   │   ├── Footer.tsx        # Wordmark watermark
│   │   ├── SmoothScroll.tsx  # Lenis + GSAP ticker bridge
│   │   └── Cursor.tsx        # Dual-layer custom cursor
│   ├── sections/             # Home page sections
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── FeaturedProperties.tsx
│   │   ├── Stats.tsx
│   │   ├── ServicesTeaser.tsx
│   │   ├── Testimonials.tsx
│   │   ├── MapSection.tsx
│   │   └── CTA.tsx
│   ├── three/
│   │   ├── TowerScene.tsx    # R3F Canvas wrapper + lighting
│   │   ├── LuxuryTower.tsx   # Procedural 3D tower
│   │   ├── GoldParticles.tsx # Drifting dust motes
│   │   └── RoomScene.tsx     # Interior 3D preview
│   └── ui/                   # Reusable primitives
│       ├── MagneticButton.tsx
│       ├── Eyebrow.tsx
│       ├── PageHeader.tsx
│       ├── PropertyCard.tsx
│       ├── Gallery.tsx
│       ├── FloorPlan.tsx
│       ├── MortgageCalculator.tsx
│       ├── InquiryForm.tsx
│       ├── PropertyMap.tsx
│       ├── Counter.tsx
│       ├── Reveal.tsx
│       ├── SplitText.tsx
│       └── Marquee.tsx
│
├── lib/
│   ├── data.ts               # All dummy content
│   └── utils.ts              # cn(), formatCurrency()
│
├── public/
│   └── favicon.svg           # Gold ring favicon
│
├── tailwind.config.ts        # Custom palette (ink, bone, gold), animations
├── next.config.mjs           # Unsplash domains whitelisted
└── package.json
```

---

## ✦ Design System

### Palette

| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#070708` | Page background |
| `ink-900` | `#0A0A0C` | Cards |
| `gold-300` | `#D4AF37` | Primary accent (champagne gold) |
| `gold-200` | `#E6CB73` | Hover state |
| `bone-50` | `#FAF8F2` | Body text |

### Typography

- **Display** — Cormorant Garamond, italic variants used liberally
- **Sans** — Inter, body copy
- **Mono** — JetBrains Mono, eyebrows and labels with `tracking-[0.4em]`

### Signature utilities

- `.text-gold-grad` — multi-stop champagne gold gradient text
- `.glass` / `.glass-gold` — backdrop-blur panels
- `.hairline` — gold horizontal divider
- `.grain` — film texture overlay (fixed, mix-blend-mode: overlay)
- `.shimmer` — diagonal sheen sweep
- `.hover-lift` — 6px lift on hover with soft shadow
- `.scroll-line` — animated vertical scroll indicator

---

## ✦ Notes

- **Imagery** — all hero/gallery photos load from Unsplash. Replace with your own assets for production.
- **3D scenes** are dynamically imported (`ssr: false`) to keep the initial bundle lean.
- **Lenis + ScrollTrigger** integration is done in `components/layout/SmoothScroll.tsx` via `gsap.ticker` — the standard recommended bridge.
- The custom cursor only shows on devices with `pointer: fine` — touch devices keep the native cursor.
- The intro loader runs once per session (gated by `sessionStorage`).

---

## ✦ Credits

- Photos · [Unsplash](https://unsplash.com)
- 3D · [Three.js](https://threejs.org) · [drei](https://github.com/pmndrs/drei)
- Smooth scroll · [Lenis](https://lenis.studiofreight.com) by Studio Freight
- Animation · [GSAP](https://gsap.com) · [Framer Motion](https://framer.com/motion)

---

**Aureum** · _Estates of quiet legend._
