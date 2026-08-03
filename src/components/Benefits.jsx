"use client";
import { motion } from "framer-motion";

const BRINGS = [
  {
    title: "Global brand & content delivery",
    copy: "Two years of global campaign and content work for Nestlé — comfortable shipping work that has to land across markets, not just one.",
  },
  {
    title: "Digital innovation",
    copy: "An AI/NLP talent-analytics dashboard built for Nestlé, plus AI agents and automation built end to end, including a hands-off content pipeline.",
  },
  {
    title: "Data-driven marketing",
    copy: "Comfortable in Google Analytics and Google Ads, and building lead-generation and SEO into a campaign, not bolting it on after.",
  },
  {
    title: "Cross-functional, cross-market collaboration",
    copy: "Two years working with Nestlé's MySG and global teams — the kind of distributed stakeholder coordination consulting work runs on.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[var(--paper)] px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="ed-eyebrow">What I bring</span>
          <h2 className="font-serif-display mt-5 text-3xl text-[var(--ink)] md:text-5xl">
            Brand craft and{" "}
            <span className="italic ed-accent-text">the systems</span> behind it
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[var(--line)]">
          {BRINGS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 py-6"
            >
              <span className="font-mono-label text-sm text-[var(--ink-dim)]">0{i + 1}</span>
              <div>
                <h3 className="font-serif-display text-lg italic text-[var(--ink)]">{b.title}</h3>
                <p className="mt-1 font-sans-body text-sm leading-relaxed text-[var(--ink-soft)]">{b.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
