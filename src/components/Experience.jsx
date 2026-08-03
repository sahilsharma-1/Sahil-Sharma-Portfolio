"use client";

import { Briefcase, Code2, PenTool, Blocks } from "lucide-react";

const ROLES = [
  {
    org: "Nestlé",
    title: "Procurement Operations (S2P)",
    location: "Gurugram, India",
    period: "Apr 2026 — Present",
    icon: Briefcase,
    points: [
      "Moved into Source-to-Pay procurement operations, bringing the same process-automation mindset from the multimedia side into a global operations function",
      "Applying n8n and AI-agent workflows to streamline procurement operations reporting",
    ],
  },
  {
    org: "Nestlé",
    title: "Multimedia Specialist",
    location: "Gurugram, India",
    period: "Aug 2024 — Apr 2026 · 1 yr 9 mo",
    icon: Briefcase,
    points: [
      "Owned brand and social media campaigns end to end in a global FMCG environment — strategy, execution, optimization, and reporting",
      "Produced Nestlé's NESTLEVEL Digital Podcast (Season 2) — 35,000+ listens and 4.2M+ organic impressions across YouTube, Spotify and Apple Podcasts within a year",
      "Built the Recruiter Toolkit — a Playbook, Editorial Charter and Canva template library — live across Zone AOA and adopted by recruiters globally",
      "Led Talent Attraction Insights, Nestlé's first centralized AI/NLP dashboard unifying social listening and campaign data, piloted across MENA, Oceania, Philippines and MYSG",
      "Presented campaign strategy and performance reporting directly to global stakeholders, balancing creative judgment with brand governance",
    ],
  },
  {
    org: "Oplexa",
    title: "Software Engineer",
    location: "Dublin, California, US",
    period: "May 2024 — Jul 2024 · 3 mo",
    icon: Code2,
    points: [
      "Built a full-stack Flutter application with AWS, MongoDB and SMS auth via AWS Amplify",
      "Owned front-end to back-end integration and collaborated with UI/UX and backend teams in Agile sprints",
    ],
  },
  {
    org: "mCURA Healthtech",
    title: "Animation Specialist",
    location: "Gurugram, India",
    period: "Nov 2022 — Apr 2024 · 1 yr 6 mo",
    icon: PenTool,
    points: [
      "Used emerging AI tools and generative models to accelerate the design process across healthtech products",
      "Uncovered data patterns to introduce personalization into the user experience",
    ],
  },
  {
    org: "Create Protocol",
    title: "Motion & Animation",
    location: "Dubai, UAE",
    period: "Mar 2022 — Aug 2022 · 6 mo",
    icon: Blocks,
    points: [
      "Designed immersive 3D environments — including a 3D 'Foodverse' and Smart City simulations — using Blender, Unity and Lumion",
      "Developed advertisements and brand experiences for ICCI Dubai",
      "Optimized Web3.0 content and experiences for Dubai tech events",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[var(--paper)] py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <span className="ed-eyebrow">Experience</span>
        <h2 className="font-serif-display mt-5 text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
          Where I&rsquo;ve worked
        </h2>

        <div className="mt-14 space-y-5">
          {ROLES.map((role) => (
            <div
              key={role.org + role.title}
              className="ed-spotlight ed-lift group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-7 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)]">
                    <role.icon size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="font-serif-display text-lg italic text-[var(--ink)]">{role.title}</p>
                    <p className="font-sans-body text-sm text-[var(--ink-dim)]">
                      {role.org} · {role.location}
                    </p>
                  </div>
                </div>
                <span className="font-mono-label text-xs uppercase tracking-widest text-[var(--ink-dim)] sm:pt-3 sm:text-right">
                  {role.period}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-6 font-sans-body text-sm leading-relaxed text-[var(--ink-soft)]">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
