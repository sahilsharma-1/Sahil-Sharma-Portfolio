"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Clapperboard, FileSliders, Bot, Sparkles } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import EditorialArt from "./EditorialArt";

const WORK = [
  { name: "Motion Design", tagline: "Film, motion graphics & video editing", icon: Clapperboard, href: "#work", letter: "M" },
  { name: "Presentation Design", tagline: "Decks that actually get read", icon: FileSliders, href: "#work", letter: "P" },
  { name: "AI & Automation", tagline: "n8n workflows, AI agents, auto-posting", icon: Bot, href: "#automation", letter: "A" },
  { name: "Nestlé Campaigns", tagline: "Podcast, recruiter toolkit & AI dashboard", icon: Sparkles, href: "#campaigns", letter: "N" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const EASE = [0.21, 0.47, 0.32, 0.98];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = scrolled || megaOpen;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: progressX, background: "linear-gradient(90deg,var(--accent),var(--accent-soft))" }}
      />

      <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          onMouseLeave={() => setMegaOpen(false)}
          className={`w-full max-w-none border-b transition-all duration-500 ${
            active ? "border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(20,20,15,0.04)]" : "border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
            <Link href="#home" className="font-serif-display text-xl italic tracking-tight text-[var(--ink)]">
              Sahil Sharma
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              <button
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-4 py-2 font-sans-body text-sm text-[var(--ink-soft)] transition-all duration-300 hover:bg-[var(--line-soft)] hover:text-[var(--ink)]"
              >
                Work
                <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 font-sans-body text-sm text-[var(--ink-soft)] transition-all duration-300 hover:bg-[var(--line-soft)] hover:text-[var(--ink)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="https://www.linkedin.com/in/sahilsharma-86b256216/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] transition hover:bg-[var(--line-soft)] hover:text-[var(--ink)]"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-sans-body text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: "var(--ink)" }}
              >
                Get in touch
                <ArrowUpRight size={15} />
              </a>
            </div>

            <button className="text-[var(--ink)] lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`hidden overflow-hidden transition-[grid-template-rows] duration-300 lg:grid ${
              megaOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            style={{ display: "grid" }}
          >
            <div className="min-h-0 border-t border-[var(--line)]">
              <div className="mx-auto grid max-w-6xl grid-cols-[190px_1fr] gap-6 px-10 py-7">
                <div className="flex flex-col gap-1 font-sans-body">
                  <p className="mb-2 font-mono-label text-xs uppercase tracking-widest text-[var(--ink-dim)]">
                    What I do
                  </p>
                  <a href="#work" className="rounded-xl px-4 py-3 text-sm font-semibold text-white" style={{ background: "var(--ink)" }}>
                    See all work ↗
                  </a>
                  <a href="#experience" className="rounded-xl px-4 py-3 text-sm text-[var(--ink-soft)] hover:bg-[var(--line-soft)]">
                    Experience ↘
                  </a>
                  <a href="#contact" className="rounded-xl px-4 py-3 text-sm text-[var(--ink-soft)] hover:bg-[var(--line-soft)]">
                    Contact ↘
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {WORK.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="ed-lift group relative flex aspect-[4/5] flex-col overflow-hidden rounded-2xl border border-[var(--line)]"
                    >
                      <EditorialArt letter={item.letter} tone="dark" className="absolute inset-0" />
                      <div className="relative z-10 flex flex-1 flex-col justify-between p-3.5">
                        <div className="flex items-start justify-between">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
                            <item.icon size={13} className="text-white" />
                          </div>
                          <ArrowUpRight size={14} className="text-white/50 transition duration-300 group-hover:rotate-45 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-serif-display text-sm italic text-white">{item.name}</p>
                          <p className="mt-0.5 font-sans-body text-[11px] leading-snug text-white/60">{item.tagline}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="w-full border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-xl lg:hidden"
            >
              <div className="max-h-[80vh] overflow-y-auto px-6 py-6 font-sans-body">
                <p className="mb-3 font-mono-label text-xs uppercase tracking-widest text-[var(--ink-dim)]">Work</p>
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {WORK.map((item) => (
                    <a key={item.name} href={item.href} className="rounded-xl border border-[var(--line)] p-3">
                      <p className="text-sm font-semibold text-[var(--ink)]">{item.name}</p>
                      <p className="mt-0.5 text-xs text-[var(--ink-dim)]">{item.tagline}</p>
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-1 border-t border-[var(--line)] pt-4">
                  {NAV_LINKS.map((link) => (
                    <a key={link.label} href={link.href} className="py-2 text-sm text-[var(--ink-soft)]">
                      {link.label}
                    </a>
                  ))}
                  <a href="https://www.linkedin.com/in/sahilsharma-86b256216/" target="_blank" rel="noopener noreferrer" className="py-2 text-sm text-[var(--ink-soft)]">
                    LinkedIn
                  </a>
                </div>
                <a
                  href="#contact"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold text-white"
                  style={{ background: "var(--ink)" }}
                >
                  Get in touch
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
