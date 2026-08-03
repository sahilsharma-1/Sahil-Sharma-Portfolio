"use client";
import { ArrowUpRight, Globe, BadgeCheck } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const TOOLS = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "InDesign",
  "Lightroom",
  "Character Animator",
  "Audition",
  "Adobe Firefly",
  "Blender",
  "Runway",
  "Sora",
  "n8n",
  "HeyGen",
  "ChatGPT / Claude",
  "Google Analytics",
  "Google Ads",
];

const CERTS = [
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
  },
  {
    name: "Google Cloud Digital Leader — Certification Prep",
    issuer: "Google Cloud",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--bg)] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <span className="ed-eyebrow">About</span>

        <div className="mt-7 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="font-serif-display text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
              Working at the intersection of{" "}
              <span className="italic ed-accent-text">advertising, multimedia, and technology.</span>
            </h2>

            <div className="mt-7 space-y-5 font-sans-body text-base leading-relaxed text-[var(--ink-soft)] lg:text-lg">
              <p>
                I&rsquo;m Sahil. My journey began in video post-production and
                expanded into mobile app development — giving me a blend of
                creative, marketing, and hands-on technical experience I
                still lean on today.
              </p>
              <p>
                At Nestlé, I&rsquo;ve produced a global employer-brand
                podcast, built a recruiter-facing creative system now live
                across Zone AOA, and led an AI/NLP dashboard for talent
                analytics — always sitting at the intersection of brand
                storytelling, generative AI, and the systems that scale it.
              </p>
              <p>
                Today I specialize in multimedia and advertising strategy for
                global brands, and in generative AI, AR/VR and VFX-driven
                storytelling — increasingly through automation built in n8n.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/sahilsharma-86b256216/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 font-sans-body text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--line-soft)]"
              >
                <FaLinkedin size={15} />
                LinkedIn
                <ArrowUpRight size={14} className="text-[var(--ink-dim)]" />
              </a>
              <a
                href="https://itsahil613.wixsite.com/sahilsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 font-sans-body text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--line-soft)]"
              >
                <Globe size={15} />
                Full portfolio
                <ArrowUpRight size={14} className="text-[var(--ink-dim)]" />
              </a>
            </div>
          </div>

          <div className="ed-card ed-spotlight p-7">
            <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--ink-dim)]">
              Tools &amp; platforms
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--line)] px-3.5 py-1.5 font-sans-body text-xs text-[var(--ink-soft)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-[var(--line)] pt-6">
              <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--ink-dim)]">
                Certifications
              </p>
              <div className="mt-3 space-y-3">
                {CERTS.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-2.5">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                    <div>
                      <p className="font-sans-body text-sm leading-snug text-[var(--ink)]">{cert.name}</p>
                      <p className="font-sans-body text-xs text-[var(--ink-dim)]">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t border-[var(--line)] pt-6">
              <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--ink-dim)]">
                Currently open to
              </p>
              <p className="mt-3 font-sans-body text-sm leading-relaxed text-[var(--ink-soft)]">
                Marketing, brand and digital innovation roles — including
                consulting and advisory positions — where global campaign
                experience and automation skills add measurable value.
                Full-time, contract or freelance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
