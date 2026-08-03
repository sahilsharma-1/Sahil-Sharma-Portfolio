"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "What kind of roles are you looking for?",
    a: "Marketing, brand and digital innovation roles — including consulting and advisory positions — where I can bring global campaign experience and process automation skills. Full-time, contract or freelance.",
  },
  {
    q: "What do you actually build with AI automation?",
    a: "n8n workflows and AI agents — for example a pipeline that writes a script with AI, generates a talking-avatar video with HeyGen, and publishes it to social media with no manual steps in between.",
  },
  {
    q: "What's your background?",
    a: "Motion graphics and presentation design, with production and campaign experience including a global podcast, recruiter toolkit and AI analytics dashboard for Nestlé — increasingly focused on the systems and automation behind the work, not just the creative.",
  },
  {
    q: "Do you work with remote or distributed teams?",
    a: "Yes — two years working with Nestlé's MySG and global teams was fully remote, cross-market collaboration.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-[var(--line)]">
      <button onClick={onClick} className="flex w-full items-center justify-between py-6 text-left">
        <span className="font-sans-body text-base font-medium text-[var(--ink)] md:text-lg">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-sm"
          style={{
            borderColor: isOpen ? "var(--accent)" : "var(--line)",
            color: isOpen ? "var(--accent)" : "var(--ink-soft)",
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-sans-body text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[var(--bg)] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl">
        <span className="ed-eyebrow">FAQs</span>
        <h2 className="font-serif-display mt-5 mb-10 text-3xl text-[var(--ink)] md:text-5xl">
          Frequently asked <span className="italic ed-accent-text">questions</span>
        </h2>

        {FAQS.map((item, i) => (
          <FAQItem key={item.q} item={item} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}
