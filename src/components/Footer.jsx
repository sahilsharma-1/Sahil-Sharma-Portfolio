"use client";
import Link from "next/link";
import { Globe, Phone, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const COLUMNS = [
  {
    title: "Work",
    links: [
      { label: "Motion Design", href: "#work" },
      { label: "Presentation Design", href: "#work" },
      { label: "AI & Automation", href: "#automation" },
      { label: "Nestlé Campaigns", href: "#campaigns" },
    ],
  },
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Selected Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#14140f] px-6 pt-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.3fr_repeat(2,1fr)]">
          <div>
            <Link href="#home" className="font-serif-display text-2xl italic tracking-tight text-white">
              Sahil Sharma
            </Link>
            <p className="mt-4 max-w-xs font-sans-body text-sm leading-relaxed text-white/50">
              Brand storytelling, digital innovation &amp; automation — open
              to marketing, digital and consulting roles.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sahil-sharma-86b256216/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://1drv.ms/f/c/9D204D9914DB706E/IgBgo9Xa7FDcRLCePzdpDX1rAfGzqTyrOcC_63hQdRj_c1g?e=BicBpG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio website"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono-label text-xs uppercase tracking-widest text-white/40">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-sans-body text-sm text-white/60 transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-7 sm:flex-row sm:justify-between">
          <p className="font-sans-body text-xs text-white/40">
            © {new Date().getFullYear()} Sahil Sharma. All rights reserved.
          </p>
          <p className="font-sans-body text-xs text-white/30">
            Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
