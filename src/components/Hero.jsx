"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const BADGES = ["Nestlé Global — 2+ yrs", "NESTLEVEL Podcast — 4.2M+ impressions", "Dubai · Dublin · Gurugram"];

// Decorative background rows — real thumbnails from your work whenever you
// have them (drop files into /public/images/... and swap `thumb` below).
// Picsum seeds just give each card a distinct placeholder photo for now.
const ROW_1 = [
  { title: "NESTLEVEL Podcast", tag: "Nestlé", thumb: "https://picsum.photos/seed/hero-podcast/480/300" },
  { title: "Recruiter Toolkit", tag: "Nestlé", thumb: "https://picsum.photos/seed/hero-toolkit/480/300" },
  { title: "3D Foodverse", tag: "Create Protocol", thumb: "https://picsum.photos/seed/hero-foodverse/480/300" },
  { title: "Motion Reel", tag: "Motion", thumb: "https://picsum.photos/seed/hero-motion1/480/300" },
  { title: "Talent Insights", tag: "AI Dashboard", thumb: "https://picsum.photos/seed/hero-insights/480/300" },
  { title: "Smart City Sim", tag: "Dubai", thumb: "https://picsum.photos/seed/hero-smartcity/480/300" },
];
const ROW_2 = [
  { title: "Script → Video → Post", tag: "n8n Automation", thumb: "https://picsum.photos/seed/hero-automation/480/300" },
  { title: "Brand Campaign", tag: "Nestlé", thumb: "https://picsum.photos/seed/hero-brand/480/300" },
  { title: "Flutter App Build", tag: "Oplexa", thumb: "https://picsum.photos/seed/hero-oplexa/480/300" },
  { title: "Healthtech UX", tag: "mCURA", thumb: "https://picsum.photos/seed/hero-mcura/480/300" },
  { title: "Presentation Design", tag: "Motion", thumb: "https://picsum.photos/seed/hero-motion2/480/300" },
  { title: "ICCI Dubai Experience", tag: "Create Protocol", thumb: "https://picsum.photos/seed/hero-icci/480/300" },
];
const ROW_3 = [
  { title: "Editorial Charter", tag: "Recruiter Toolkit", thumb: "https://picsum.photos/seed/hero-charter/480/300" },
  { title: "Season 2 Launch", tag: "Podcast", thumb: "https://picsum.photos/seed/hero-season2/480/300" },
  { title: "AI Agents", tag: "Automation", thumb: "https://picsum.photos/seed/hero-agents/480/300" },
  { title: "Employer Brand Index", tag: "Analytics", thumb: "https://picsum.photos/seed/hero-ebi/480/300" },
  { title: "Web3.0 Content", tag: "Dubai Tech Events", thumb: "https://picsum.photos/seed/hero-web3/480/300" },
  { title: "Global Campaign", tag: "Nestlé", thumb: "https://picsum.photos/seed/hero-global/480/300" },
];

function Row({ items, reverse = false, size = "md" }) {
  const loop = [...items, ...items];
  const cardSize = size === "lg" ? "h-[150px] w-[220px] sm:h-[190px] sm:w-[280px]" : "h-[120px] w-[180px] sm:h-[150px] sm:w-[230px]";

  return (
    <div className={`flex w-max gap-4 ${reverse ? "ed-marquee-track-reverse" : "ed-marquee-track"}`}>
      {loop.map((item, i) => (
        <div
          key={item.title + i}
          className={`relative flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 ${cardSize}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.thumb} alt={item.title} className="h-full w-full object-cover" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55))" }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="font-mono-label text-[9px] uppercase tracking-widest text-white/60">{item.tag}</p>
            <p className="font-serif-display text-xs italic text-white/90 sm:text-sm">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-black pt-24">
      {/* Background — scrolling rows of work, always in motion */}
      <div aria-hidden className="absolute inset-0 flex flex-col justify-center gap-4 opacity-90">
        <Row items={ROW_1} size="lg" />
        <Row items={ROW_2} reverse size="md" />
        <Row items={ROW_3} size="md" />
      </div>

      {/* Darken + grain for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 32%, rgba(0,0,0,0.35) 62%, rgba(0,0,0,0.55) 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 20%, transparent 78%, rgba(0,0,0,0.7) 100%)" }}
      />
      <div aria-hidden className="ed-grain absolute inset-0" style={{ mixBlendMode: "overlay", opacity: 0.06 }} />

      {/* Soft dark blur "halo" that sits behind the text so it stays
          readable no matter what's scrolling behind it */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-black/70 blur-[110px]"
      />

      {/* Foreground content — left-aligned over the blur halo */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-11 w-11 overflow-hidden rounded-full border-2" style={{ borderColor: "var(--accent-soft)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.dicebear.com/9.x/initials/svg?seed=Sahil%20Sharma&backgroundColor=14140f&textColor=f1efe9&fontWeight=600"
                alt="Sahil Sharma"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-mono-label text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Sahil Sharma — Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Global brand storytelling,{" "}
            <span className="italic" style={{ color: "var(--accent-soft)" }}>digital innovation,</span> and the
            automation that scales it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-lg font-sans-body text-lg leading-relaxed text-white/70"
          >
            Two years producing global campaigns for Nestlé — including a
            podcast with 4.2M+ impressions and a talent-analytics dashboard —
            plus AI-driven automation that removes manual work end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans-body text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-sans-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3 font-sans-body text-xs text-white/60"
          >
            {BADGES.map((b) => (
              <span key={b} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/50 transition hover:text-white"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
