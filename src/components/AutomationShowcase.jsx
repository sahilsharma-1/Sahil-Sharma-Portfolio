"use client";

import { PenLine, Video, Workflow, Send, ArrowRight } from "lucide-react";

const STEPS = [
  {
    label: "Script",
    title: "AI writes the script",
    desc: "An AI model generates the video script from a prompt or content brief.",
    icon: PenLine,
  },
  {
    label: "Generate",
    title: "HeyGen creates the video",
    desc: "The script is sent to HeyGen, which generates a full talking-avatar video.",
    icon: Video,
  },
  {
    label: "Orchestrate",
    title: "n8n runs the workflow",
    desc: "An n8n automation chains every step together with no manual handoffs.",
    icon: Workflow,
  },
  {
    label: "Publish",
    title: "Auto-posted to social",
    desc: "The finished video is posted directly to social media — start to finish, hands-off.",
    icon: Send,
  },
];

export default function AutomationShowcase() {
  return (
    <section id="automation" className="relative overflow-hidden bg-[var(--paper)] py-28 lg:py-36">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="ed-eyebrow mx-auto">Featured build</span>
          <h2 className="font-serif-display mt-5 text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
            A process I designed to remove{" "}
            <span className="italic ed-accent-text">manual work entirely.</span>
          </h2>
          <p className="mt-5 font-sans-body text-base leading-relaxed text-[var(--ink-soft)] lg:text-lg">
            One of my own automation builds: a script is written by AI,
            turned into a talking-avatar video with HeyGen, and published to
            social media — chained together end to end in n8n with zero
            manual steps in between.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="ed-spotlight ed-lift h-full rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)]">
                  <step.icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <p className="mt-5 font-mono-label text-[11px] uppercase tracking-widest text-[var(--ink-dim)]">
                  Step {i + 1} · {step.label}
                </p>
                <p className="mt-2 font-serif-display text-base italic text-[var(--ink)]">{step.title}</p>
                <p className="mt-2 font-sans-body text-sm leading-relaxed text-[var(--ink-soft)]">{step.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <ArrowRight size={16} className="text-[var(--ink-dim)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-sans-body text-xs text-[var(--ink-dim)]">
          Add a demo video or output sample here once you have one to embed.
        </p>
      </div>
    </section>
  );
}
