"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const SHORTS = [
  "https://youtube.com/shorts/5vV5RcTTyDU",
  "https://youtube.com/shorts/qQuqxikwp6s",
  "https://youtube.com/shorts/KPqkmKwCju8",
  "https://youtube.com/shorts/zESM6OBCOTU",
  "https://youtube.com/shorts/kkFpHUpqSWc",
  "https://youtube.com/shorts/aaPOUV8Vjw4",
  "https://youtube.com/shorts/3fbjAk4_iHk",
  "https://youtube.com/shorts/HkNF3tRG7v0",
  "https://youtube.com/shorts/vBK5k76EYT4",
];

// Accepts a full youtube.com/shorts/, youtu.be/, watch?v= link, or a bare
// 11-character video ID, and returns just the ID.
function getYouTubeId(input) {
  if (!input) return "";
  const trimmed = input.trim();

  if (/^[\w-]{10,12}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.hostname.includes("youtu.be")) return url.pathname.split("/")[1] || "";
    if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    if (url.pathname.startsWith("/embed/")) return url.pathname.split("/embed/")[1]?.split("/")[0] || "";
    const v = url.searchParams.get("v");
    if (v) return v;
  } catch {
    // not a parseable URL — fall through and return as-is
  }
  return trimmed;
}

function normalizeShort(entry) {
  const url = typeof entry === "string" ? entry : entry.url;
  const category = typeof entry === "string" ? undefined : entry.category;
  return { id: getYouTubeId(url), category };
}

// Fetches { title, thumbnail_url } for a given video ID via YouTube's
// public oEmbed endpoint — no API key needed, CORS-enabled, safe to call
// straight from the browser.
function useYouTubeOEmbed(id) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(id ? "loading" : "empty");

  useEffect(() => {
    if (!id) {
      setStatus("empty");
      return;
    }

    let cancelled = false;
    setStatus("loading");

    fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`)
      .then((res) => {
        if (!res.ok) throw new Error("oEmbed request failed");
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        setData(json);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { data, status };
}

function ShortCard({ short, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const { data, status } = useYouTubeOEmbed(short.id);
  const hasVideo = Boolean(short.id);

  return (
    <button
      onClick={() => hasVideo && onOpen(short)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative aspect-[9/16] w-[190px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-[220px]"
    >
      {status === "loading" && <div className="absolute inset-0 animate-pulse bg-zinc-800" />}

      {!hasVideo || status === "error" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 px-4 text-center">
          <p className="font-mono-label text-[10px] uppercase tracking-widest text-white/30">
            {hasVideo ? "Couldn't load this Short" : "Add a YouTube Shorts link"}
          </p>
        </div>
      ) : (
        data?.thumbnail_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.thumbnail_url}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        )
      )}

      {/* Muted, controls-free preview loop — only mounted while hovered
          so we're not running a dozen background iframes at once. */}
      {hovered && hasVideo && (
        <iframe
          key={short.id}
          src={`https://www.youtube.com/embed/${short.id}?autoplay=1&mute=1&loop=1&playlist=${short.id}&controls=0&modestbranding=1&rel=0&playsinline=1`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media"
          title={data?.title || "YouTube Short preview"}
        />
      )}

      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {short.category && (
        <span className="absolute left-3 top-3 rounded-full bg-white/15 px-3 py-1 text-[10px] text-white backdrop-blur-md">
          {short.category}
        </span>
      )}

      {!hovered && hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-xl transition group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </div>
        </div>
      )}

      {data?.title && (
        <p className="absolute bottom-3 left-3 right-3 line-clamp-2 text-left font-serif-display text-sm italic text-white">
          {data.title}
        </p>
      )}
    </button>
  );
}

export default function Shorts() {
  const [activeShort, setActiveShort] = useState(null);
  const scrollerRef = useRef(null);

  const shorts = SHORTS.map(normalizeShort);

  const scrollByCards = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Shorts
              </div>
              <h2 className="font-serif-display text-4xl text-white md:text-5xl">
                Some of Creations
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => scrollByCards(-1)}
                aria-label="Scroll shorts left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollByCards(1)}
                aria-label="Scroll shorts right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal, swipeable on touch, scroll-snapped on desktop.
            Add more entries to SHORTS above and they show up here — the
            row just keeps growing, no layout changes needed. */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shorts.map((short, i) => (
            <ShortCard key={short.id + i} short={short} onOpen={setActiveShort} />
          ))}
        </div>
      </section>

      {/* Full player — real controls, real audio, opened on click */}
      <AnimatePresence>
        {activeShort && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveShort(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[9/16] h-[85vh] max-h-[800px] overflow-hidden rounded-3xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveShort(null)}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
              >
                <X size={20} />
              </button>

              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeShort.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="YouTube Short"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}