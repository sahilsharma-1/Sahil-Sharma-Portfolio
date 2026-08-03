"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Play,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Healthcare",
  "Technology",
  "Corporate",
  "Finance",
  "Explainer",
];

const VIDEOS = [
  {
    id: "1171502059",
    title: "Healthcare Commercial",
    category: "Healthcare",
    thumb: "/images/madfilm/madfilmshowcase1.jpg",
  },
  {
    id: "1171502080",
    title: "Medical Product",
    category: "Healthcare",
    thumb: "/images/madfilm/madfilmshowcase4.jpg",
  },
  {
    id: "1171502135",
    title: "AI Explainer",
    category: "Technology",
    thumb: "/images/madfilm/madfilmshowcase3.jpg",
  },
  {
    id: "1171501863",
    title: "Brand Film",
    category: "Corporate",
    thumb: "/images/madfilm/madfilmshowcase4.jpg",
  },
  {
    id: "1171501845",
    title: "Finance Ad",
    category: "Finance",
    thumb: "/images/madfilm/madfilmshowcase1.jpg",
  },
  {
    id: "1171501911",
    title: "Hospital Story",
    category: "Healthcare",
    thumb: "/images/madfilm/madfilmshowcase3.jpg",
  },
  {
    id: "1171501941",
    title: "Motion Graphics",
    category: "Technology",
    thumb: "/images/madfilm/madfilmshowcase4.jpg",
  },
  {
    id: "1171502032",
    title: "Corporate Reel",
    category: "Corporate",
    thumb: "/images/madfilm/madfilmshowcase1.jpg",
  },
  {
    id: "1210987406",
    title: "Product Launch",
    category: "Technology",
    thumb: "/images/madfilm/madfilmshowcase3.jpg",
  },
  {
    id: "1171502059",
    title: "Healthcare Commercial 2",
    category: "Healthcare",
    thumb: "/images/madfilm/madfilmshowcase4.jpg",
  },
  {
    id: "1171502080",
    title: "Medical Product 2",
    category: "Healthcare",
    thumb: "/images/madfilm/madfilmshowcase1.jpg",
  },
  {
    id: "1171502135",
    title: "AI Explainer 2",
    category: "Technology",
    thumb: "/images/madfilm/madfilmshowcase3.jpg",
  },
  {
    id: "1171501863",
    title: "Brand Film 2",
    category: "Corporate",
    thumb: "/images/madfilm/madfilmshowcase4.jpg",
  },
  {
    id: "1171501845",
    title: "Finance Ad 2",
    category: "Finance",
    thumb: "/images/madfilm/madfilmshowcase1.jpg",
  },
  {
    id: "1171501911",
    title: "Hospital Story 2",
    category: "Healthcare",
    thumb: "/images/madfilm/madfilmshowcase3.jpg",
  },
  {
    id: "1171501941",
    title: "Motion Graphics 2",
    category: "Technology",
    thumb: "/images/madfilm/madfilmshowcase4.jpg",
  },
];

function chunk(array, size) {
  const rows = [];

  for (let i = 0; i < array.length; i += size) {
    rows.push(array.slice(i, i + size));
  }

  return rows;
}

// True 16:9 (YouTube) ratio, fixed width so nothing stretches or crops
// oddly — aspect-video handles the height automatically.
function VideoCard({ video, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(video)}
      className="group relative aspect-video w-[240px] flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-900 sm:w-[280px]"
    >
      <Image
        src={video.thumb}
        alt={video.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

      <div className="absolute top-3 left-3">
        <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1.5 text-[11px] text-white">
          {video.category}
        </span>
      </div>

      <motion.div
        whileHover={{ scale: 1.08 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-2xl">
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">{video.title}</h3>
          <ArrowUpRight className="h-4 w-4 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.button>
  );
}

export default function Videosall() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const row2X = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const row3X = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const row4X = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return VIDEOS;
    return VIDEOS.filter((video) => video.category === activeCategory);
  }, [activeCategory]);

  const rows = chunk(filtered, 4);
  const rowX = [row1X, row2X, row3X, row4X];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-black py-32"
      >
        {/* Video rows sit as the full-bleed background, edge to edge */}
        <div className="space-y-6 pt-4">
          {rows.map(
            (row, i) =>
              row && (
                <motion.div key={i} style={{ x: rowX[i % rowX.length] }} className="flex gap-6 px-8">
                  {row.map((video) => (
                    <VideoCard key={video.title} video={video} onClick={setActiveVideo} />
                  ))}
                </motion.div>
              )
          )}
        </div>

        {/* Heading + filters, overlaid top-left with a scrim so the
            videos stay full-bleed behind the text instead of pushing
            it into its own centered block. */}
        <div className="pointer-events-none absolute inset-0 flex items-start">
          <div
            className="pointer-events-auto max-w-xl px-6 py-10 sm:px-10"
            style={{
              background:
                "linear-gradient(100deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 55%, rgba(0,0,0,0.3) 85%, transparent 100%)",
            }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Featured Work
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Creative Storytelling
            </h2>

            <p className="mt-5 max-w-md text-base text-zinc-400">
              We create premium films, motion graphics, commercials and
              digital experiences that help brands stand out.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm transition
                  ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
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
              className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-3xl bg-black"
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
