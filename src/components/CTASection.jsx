"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#14140f] px-6 py-32 md:px-16">
      <div aria-hidden className="ed-grain absolute inset-0" style={{ mixBlendMode: "overlay", opacity: 0.05 }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 60% at 50% 20%, rgba(156,107,31,0.18), transparent 70%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 font-mono-label text-xs uppercase tracking-[0.25em] text-white/50">
          Let&rsquo;s talk
        </p>
        <h2 className="font-serif-display text-3xl text-white md:text-5xl">
          Open to marketing, digital innovation{" "}
          <span className="italic" style={{ color: "var(--accent-soft)" }}>and consulting roles.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans-body text-white/60">
          Reach out directly — I usually reply within a day.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:itsahil613@gmail.com"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans-body font-semibold text-[#14140f] transition hover:scale-105"
            style={{ background: "linear-gradient(90deg,var(--accent-soft),#e6c27a)" }}
          >
            <Mail size={17} />
            itsahil613@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sahilsharma-86b256216/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-sans-body font-semibold text-white transition hover:bg-white/10"
          >
            Message on LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
