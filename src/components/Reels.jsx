"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Reels — just drop your Vimeo video ID into `id` for each slot below.
// The poster thumbnail is fetched automatically from Vimeo's oEmbed
// endpoint, so you don't need to export/upload a separate thumbnail image.
// Leave `id` empty on a slot you haven't shot/uploaded yet and it'll show
// a placeholder instead of breaking.
const REELS = [
  { id: "", title: "Behind the Scenes", category: "BTS" },
  { id: "", title: "Podcast Clip", category: "NESTLEVEL" },
  { id: "", title: "Quick Tip", category: "Automation" },
  { id: "", title: "Day in the Life", category: "Nestlé" },
  { id: "", title: "Product Demo", category: "AI Tools" },
  { id: "", title: "Studio Setup", category: "Motion" },
  { id: "", title: "Client Shoutout", category: "Testimonial" },
  { id: "", title: "Trend Breakdown", category: "Content" },
];

// Fetches { thumbnail_url } for a given Vimeo ID via Vimeo's public oEmbed
// endpoint — no API key needed. Vimeo's oEmbed responses are served with
// CORS enabled, so this call is safe to make directly from the browser.
function useVimeoThumbnail(id) {
  const [thumb, setThumb] = useState(null);
  const [status, setStatus] = useState(id ? "loading" : "empty");

  useEffect(() => {
    if (!id) {
      setStatus("empty");
      return;
    }

    let cancelled = false;
    setStatus("loading");

    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("oEmbed request failed");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setThumb(data.thumbnail_url_with_play_button || data.thumbnail_url);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { thumb, status };
}

function ReelCard({ reel, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const { thumb, status } = useVimeoThumbnail(reel.id);
  const hasVideo = Boolean(reel.id);

  return (
    <button
      onClick={() => hasVideo && onOpen(reel)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative aspect-[9/16] w-[190px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-[220px]"
    >
      {status === "loading" && <div className="absolute inset-0 animate-pulse bg-zinc-800" />}

      {!hasVideo || status === "error" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 px-4 text-center">
          <p className="font-mono-label text-[10px] uppercase tracking-widest text-white/30">Add Vimeo ID</p>
        </div>
      ) : (
        thumb && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
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
          key={reel.id}
          src={`https://player.vimeo.com/video/${reel.id}?background=1&autoplay=1&loop=1&muted=1`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen"
          title={reel.title}
        />
      )}

      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {reel.category && (
        <span className="absolute left-3 top-3 rounded-full bg-white/15 px-3 py-1 text-[10px] text-white backdrop-blur-md">
          {reel.category}
        </span>
      )}

      {!hovered && hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-xl transition group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </div>
        </div>
      )}

      <p className="absolute bottom-3 left-3 right-3 text-left font-serif-display text-sm italic text-white">
        {reel.title}
      </p>
    </button>
  );
}

export default function Reels() {
  const [activeReel, setActiveReel] = useState(null);
  const scrollerRef = useRef(null);

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
                Reels
              </div>
              <h2 className="font-serif-display text-4xl text-white md:text-5xl">
                Short-form, straight from Vimeo
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => scrollByCards(-1)}
                aria-label="Scroll reels left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollByCards(1)}
                aria-label="Scroll reels right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal, swipeable on touch, scroll-snapped on desktop */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REELS.map((reel, i) => (
            <ReelCard key={reel.title + i} reel={reel} onOpen={setActiveReel} />
          ))}
        </div>
      </section>

      {/* Full player — real controls, real audio, opened on click */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReel(null)}
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
                onClick={() => setActiveReel(null)}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
              >
                <X size={20} />
              </button>

              <iframe
                className="h-full w-full"
                src={`https://player.vimeo.com/video/${activeReel.id}?autoplay=1&title=0&byline=0&portrait=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title={activeReel.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}