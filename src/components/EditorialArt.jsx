"use client";

/**
 * A self-contained "art panel" built from pure CSS + typography — no image
 * files required. Used anywhere this portfolio would normally show a real
 * photo or project screenshot that doesn't exist yet (work cards, nav
 * thumbnails). Swap any of these for a real still/screenshot the moment
 * you have one: replace <EditorialArt .../> with a plain <img>.
 *
 * `letter`   — one big oversized serif character, cropped at an edge
 * `tone`     — "dark" | "light" — background treatment
 * `label`    — small caps category label bottom-left
 */
export default function EditorialArt({ letter = "S", tone = "dark", label, className = "" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative flex h-full w-full items-end overflow-hidden ${className}`}
      style={{
        background: dark
          ? "linear-gradient(150deg, #14140f 0%, #262620 60%, #1c1c17 100%)"
          : "linear-gradient(150deg, #f1efe9 0%, #e8e4da 100%)",
      }}
    >
      <span
        aria-hidden
        className="font-serif-display pointer-events-none absolute -right-4 -top-10 select-none italic"
        style={{
          fontSize: "min(60vw, 220px)",
          lineHeight: 1,
          color: dark ? "rgba(255,255,255,0.08)" : "rgba(20,20,15,0.08)",
        }}
      >
        {letter}
      </span>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: dark
            ? "radial-gradient(120% 90% at 15% 110%, rgba(156,107,31,0.35), transparent 60%)"
            : "radial-gradient(120% 90% at 15% 110%, rgba(156,107,31,0.16), transparent 60%)",
        }}
      />

      {label && (
        <span
          className="relative z-10 m-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-sans-body text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm"
          style={{
            color: dark ? "#f1efe9" : "#14140f",
            background: dark ? "rgba(255,255,255,0.1)" : "rgba(20,20,15,0.06)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-soft)" }} />
          {label}
        </span>
      )}
    </div>
  );
}
