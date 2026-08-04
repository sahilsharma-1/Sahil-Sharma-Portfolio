"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowUpRight } from "lucide-react";
import EditorialArt from "./EditorialArt";


const CATEGORIES = ["All", "Motion", "Nestlé", "Web3 & Brand", "Automation"];


function VideoCard({ video, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(video)}
      className="group relative h-[260px] w-[320px] flex-shrink-0 overflow-hidden rounded-3xl border border-[var(--line)] md:h-[280px] md:w-[360px]"
    >
 <img
  src={video.thumb}
  alt={video.title}
  className="absolute inset-0 h-full w-full object-cover"
/>

      <motion.div
        whileHover={{ scale: 1.08 }}
        className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-2xl">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif-display text-lg italic text-white">{video.title}</h3>
          <ArrowUpRight className="h-5 w-5 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.button>
  );
}

export default function OurCases() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

const [videos, setVideos] = useState([]);

useEffect(() => {
fetch("/api/videos")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
    setVideos(data);
  })
  .catch(console.error);
}, []);

const filtered = useMemo(() => {
  return activeCategory === "All"
    ? videos
    : videos.filter((v) => v.category === activeCategory);
}, [videos, activeCategory]);

  return (
    <>
      <section id="work" className="relative overflow-hidden bg-[var(--bg)] py-28 lg:py-32">
        <div className="mx-auto mb-14 max-w-6xl px-6 text-center">
          <span className="ed-eyebrow">Selected work</span>
          <h2 className="font-serif-display mt-5 text-4xl tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
            Motion, campaigns{" "}
            <span className="italic ed-accent-text">&amp; automation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans-body text-lg text-[var(--ink-soft)]">
            A mix of motion design, brand campaign work, a Web3.0 platform
            build, and the AI automation projects I build on the side.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 font-sans-body text-sm transition ${
                  activeCategory === category
                    ? "text-white"
                    : "border border-[var(--line)] text-[var(--ink-soft)] hover:bg-[var(--line-soft)]"
                }`}
                style={activeCategory === category ? { background: "var(--ink)" } : undefined}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          {filtered.map((video, i) => (
            <VideoCard key={video.title + i} video={video} onClick={setActiveVideo} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
              >
                <X size={22} />
              </button>
              <iframe
                className="h-full w-full"
                src={`https://player.vimeo.com/video/${activeVideo.id}?autoplay=1&title=0&byline=0&portrait=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
