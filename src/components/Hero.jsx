"use client";

import {
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Play,
  X,
} from "lucide-react";
function VideoCard({ video, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(video)}
      className="group relative h-[220px] w-[340px] flex-shrink-0 overflow-hidden rounded-3xl"
    >
      <img
        src={video.thumb}
        alt={video.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </div>
      </div>


    </motion.button>
  );
}



export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch("/api/videos");
        const data = await res.json();

        // repeat videos to fill the background
        setVideos([...data, ...data, ...data, ...data]);
      } catch (err) {
        console.error(err);
      }
    }

    loadVideos();
  }, []);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const row1 = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const row2 = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);
  const row3 = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const row4 = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);
const rows = useMemo(() => chunk(videos, 4), [videos]);

function chunk(array, size) {
  const rows = [];

  for (let i = 0; i < array.length; i += size) {
    rows.push(array.slice(i, i + size));
  }

  return rows;
}

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-black"
      >
        {/* Background Videos */}

        <div className="absolute inset-0">

          {/* Top Row */}

          <motion.div
            style={{ x: row1 }}
            className="absolute top-0 left-[34%] flex gap-7 pt-6"

          >
            {rows[0]?.map((video, i) => (
              <VideoCard
                key={video.id + i}
                video={video}
                onClick={setActiveVideo}
              />
            ))}
          </motion.div>

          {/* Second Row */}

          <motion.div
            style={{ x: row2 }}
            className="absolute top-[235px] left-[22%] flex gap-7"

          >
            {rows[1]?.map((video, i) => (
              <VideoCard
                key={video.id + i}
                video={video}
                onClick={setActiveVideo}
              />
            ))}
          </motion.div>

          {/* Third Row */}

          <motion.div
            style={{ x: row3 }}
            className="absolute top-[470px] left-[30%] flex gap-7"
          >
            {rows[2]?.map((video, i) => (
              <VideoCard
                key={video.id + i}
                video={video}
                onClick={setActiveVideo}
              />
            ))}
          </motion.div>

          {/* Fourth Row */}

          <motion.div
            style={{ x: row4 }}
            className="absolute top-[705px] left-[18%] flex gap-7"
          >
            {rows[3]?.map((video, i) => (
              <VideoCard
                key={video.id + i}
                video={video}
                onClick={setActiveVideo}
              />
            ))}
          </motion.div>

        </div>

        {/* Left Gradient */}

<div
  className="absolute left-[-12%] top-1/2 z-10 h-[1200px] w-[1200px] -translate-y-1/2 rounded-full"
  style={{
    background:
      "radial-gradient(circle, rgba(0,0,0,.92) 0%, rgba(0,0,0,.82) 38%, rgba(0,0,0,.45) 68%, transparent 100%)",
    filter: "blur(45px)",
  }}
/>

        {/* Text */}

<div className="relative z-20 mx-auto flex w-full max-w-7xl px-6 sm:px-8 lg:px-12">
  <div className="w-full max-w-xl">
<p className="font-serif italic text-lg text-orange-400 sm:text-xl md:text-2xl">
  Digital Creative
</p>

<h1 className="mt-4 text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">
  Sahil Sharma
</h1>

<p className="mt-6 max-w-md text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
Motion Graphics • AI Automation • Creative Development
</p>
            <div className="mt-10">

  <p className="mb-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
    Worked With
  </p>

<div className="flex flex-wrap items-center gap-5 opacity-80">

  <img
  src="/images/Oplexa.png"
  className="h-6 sm:h-7 md:h-8 lg:h-9 object-contain brightness-0 invert"
/>

<img
  src="/images/mcura.png"
  className="h-6 sm:h-7 md:h-8 lg:h-9 object-contain brightness-0 invert"
/>

<img
  src="/images/createprotocol.png"
  className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain invert"
/>

<img
  src="/images/Nestle.png"
  className="h-8 sm:h-10 md:h-11 lg:h-12 object-contain brightness-0 invert"
/>
</div>

</div>
            <a
              href="https://1drv.ms/f/c/9D204D9914DB706E/IgDDmNCDVd8HSbckbsHIISDxATffYHA9gHGlYeyS1mIsVHo?e=t7kRop"
className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
            >
              View Work
            </a>

          </div>

        </div>
                {/* Bottom Fade */}

        <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-b from-transparent via-black/30 to-black" />

      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-3xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
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