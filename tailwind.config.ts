import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aureum palette — charcoal & champagne gold
        ink: {
          950: "#070708",
          900: "#0A0A0C",
          800: "#101015",
          700: "#16161C",
          600: "#1E1E26",
          500: "#2A2A35",
        },
        bone: {
          50: "#FAF8F2",
          100: "#F2EDE2",
          200: "#E4DCC7",
        },
        gold: {
          50: "#FBF4DC",
          100: "#F2E3A8",
          200: "#E6CB73",
          300: "#D4AF37", // primary gold
          400: "#B8902A",
          500: "#9A751E",
        },
        copper: "#C69963",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        wider2: "0.4em",
      },
      backgroundImage: {
        "gold-grad":
          "linear-gradient(135deg, #FBF4DC 0%, #D4AF37 40%, #9A751E 100%)",
        "ink-grad":
          "radial-gradient(ellipse at top, rgba(212,175,55,0.08) 0%, rgba(7,7,8,1) 60%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.83 0 0 0 0 0.69 0 0 0 0 0.22 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-gold": "pulseGold 2.4s ease-in-out infinite",
        "scroll-line": "scrollLine 2.2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 60px -10px rgba(212,175,55,0.45)",
        "luxe": "0 30px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,175,55,0.08) inset",
      },
    },
  },
  plugins: [],
};

export default config;
