"use client";

import { ArrowUpRight, Mic2, Users, BarChart3 } from "lucide-react";

// Placeholder photography — swap each `img` for a real screenshot/still from
// the campaign the moment you have one. Seeds are just so each card gets a
// different placeholder image; the URLs are free-to-use Lorem Picsum stock
// photography, safe to ship as-is until you have real assets.
const CAMPAIGNS = [
  {
    tag: "Podcast · 2024–2026",
    icon: Mic2,
    title: "NESTLEVEL Digital Podcast",
    subtitle: "Employer brand podcast, Nestlé",
    copy:
      "Held significant production responsibility for Nestlé's NESTLEVEL Digital Podcast — shaping narrative structure for leadership conversations on digital transformation, AI and innovation, and coordinating global stakeholders to distribute thought-leadership content across platforms.",
    stats: [
      { value: "35K+", label: "listens across platforms" },
      { value: "4.2M+", label: "organic impressions in year one" },
    ],
    img: "https://picsum.photos/seed/nestlevel-podcast/900/700",
    imgAlt: "Podcast production placeholder image",
    href: "https://nestlevel.vfairs.com/",
    linkLabel: "nestlevel.vfairs.com",
  },
  {
    tag: "Talent Marketing · Zone AOA",
    icon: Users,
    title: "Recruiter Toolkit",
    subtitle: "A creative system for recruiters across Nestlé, globally",
    copy:
      "A one-stop creative system to redefine how Nestlé attracts, inspires and influences talent. Phase 1 — 'Job Ads That Win Talent' — shipped a Playbook, an Editorial Charter and a library of customizable Canva templates, now live across Zone AOA and used directly by nominated recruiters.",
    quote: "This is more than a toolkit — it's a creative reset for recruitment marketing at Nestlé.",
    img: "https://picsum.photos/seed/recruiter-toolkit/900/700",
    imgAlt: "Recruiter toolkit template system placeholder image",
  },
  {
    tag: "AI · NLP Dashboard",
    icon: BarChart3,
    title: "Talent Attraction Insights",
    subtitle: "AI-generated NLP system for talent data",
    copy:
      "Nestlé's first centralized dashboard for talent attraction — unifying analytics from digital tools and social listening into one view. Currently in pilot phase across MENA, Oceania, the Philippines and MYSG, tracking four pillars end to end.",
    pillars: [
      "Talent Attraction Analytics",
      "Campaign Performance Analytics",
      "Reputation Analytics",
      "Employee Advocacy Analytics",
    ],
    stats: [
      { value: "562", label: "active users onboarded" },
      { value: "620K+", label: "employee advocacy content reach" },
      { value: "$3,478", label: "earned media value tracked" },
    ],
    img: "https://picsum.photos/seed/talent-insights/900/700",
    imgAlt: "Talent attraction analytics dashboard placeholder image",
  },
];

export default function Campaigns() {
  return (
    <section id="campaigns" className="relative overflow-hidden bg-[var(--bg)] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <span className="ed-eyebrow">Campaigns</span>
        <h2 className="font-serif-display mt-5 max-w-2xl text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
          Real programs, shipped{" "}
          <span className="italic ed-accent-text">at Nestlé&rsquo;s global scale.</span>
        </h2>
        <p className="mt-5 max-w-2xl font-sans-body text-base leading-relaxed text-[var(--ink-soft)] lg:text-lg">
          Three initiatives from my time as Multimedia Specialist — a podcast
          production, a recruiter-facing creative system, and an AI-driven
          analytics dashboard.
        </p>

        <div className="mt-16 space-y-8">
          {CAMPAIGNS.map((c, i) => (
            <div
              key={c.title}
              className={`ed-spotlight ed-lift grid gap-0 overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--paper)] lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[260px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.imgAlt} className="absolute inset-0 h-full w-full object-cover" />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg, rgba(20,20,15,0.15), rgba(20,20,15,0.45))" }}
                />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm">
                  <c.icon size={13} style={{ color: "var(--accent)" }} />
                  <span className="font-mono-label text-[11px] font-semibold uppercase tracking-widest text-[var(--ink)]">
                    {c.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="font-serif-display text-2xl italic text-[var(--ink)] sm:text-3xl">{c.title}</p>
                <p className="mt-1 font-sans-body text-sm font-medium text-[var(--ink-dim)]">{c.subtitle}</p>
                <p className="mt-5 font-sans-body text-sm leading-relaxed text-[var(--ink-soft)] lg:text-base">
                  {c.copy}
                </p>

                {c.quote && (
                  <p className="mt-5 border-l-2 pl-4 font-serif-display text-base italic text-[var(--ink)]" style={{ borderColor: "var(--accent)" }}>
                    &ldquo;{c.quote}&rdquo;
                  </p>
                )}

                {c.pillars && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.pillars.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-[var(--line)] px-3.5 py-1.5 font-sans-body text-xs text-[var(--ink-soft)]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                {c.stats && (
                  <div className="mt-7 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-serif-display text-xl italic text-[var(--ink)] sm:text-2xl">{s.value}</p>
                        <p className="mt-1 font-sans-body text-[11px] leading-snug text-[var(--ink-dim)]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 font-sans-body text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--line-soft)]"
                  >
                    {c.linkLabel}
                    <ArrowUpRight size={14} className="text-[var(--ink-dim)]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
