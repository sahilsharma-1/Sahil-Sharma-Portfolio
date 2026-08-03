const CAPABILITIES = [
  { label: "Global Brand Campaigns" },
  { label: "Motion Graphics" },
  { label: "Presentation Design" },
  { label: "Stakeholder Management" },
  { label: "AI Agents" },
  { label: "n8n Automation" },
  { label: "Process Automation" },
  { label: "HeyGen Video" },
  { label: "Google Analytics" },
  { label: "Google Ads" },
  { label: "Lead Generation" },
  { label: "SEO" },
  { label: "Cross-Market Delivery" },
];

export default function CapabilitiesStrip() {
  const loop = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="group relative w-full overflow-hidden border-y border-[var(--line)] bg-[var(--paper)] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--paper)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--paper)] to-transparent" />

      <div className="ed-marquee-track flex w-max gap-3 whitespace-nowrap">
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2 font-sans-body text-sm text-[var(--ink-soft)]"
          >
            <span className="h-1 w-1 rounded-full" style={{ background: "var(--accent)" }} />
            {c.label}
          </div>
        ))}
      </div>
    </section>
  );
}
