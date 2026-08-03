"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  const displayRef = useRef(null);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) displayRef.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[var(--bg)] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="ed-eyebrow mx-auto">Highlights</span>
        <h2 className="font-serif-display mt-5 text-3xl text-[var(--ink)] md:text-5xl">
          A quick <span className="italic ed-accent-text">snapshot</span>
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center">
          <div className="font-serif-display text-4xl italic text-[var(--ink)] md:text-5xl">
            <Counter value={2} suffix="+" />
          </div>
          <p className="mt-2 font-sans-body text-sm text-[var(--ink-dim)]">Years at Nestlé Global</p>
        </div>
        <div className="text-center">
          <div className="font-serif-display text-4xl italic text-[var(--ink)] md:text-5xl">4.2M+</div>
          <p className="mt-2 font-sans-body text-sm text-[var(--ink-dim)]">Podcast impressions in year one</p>
        </div>
        <div className="text-center">
          <div className="font-serif-display text-4xl italic text-[var(--ink)] md:text-5xl">620K+</div>
          <p className="mt-2 font-sans-body text-sm text-[var(--ink-dim)]">Employee advocacy content reach</p>
        </div>
        <div className="text-center">
          <div className="font-serif-display text-4xl italic text-[var(--ink)] md:text-5xl">4</div>
          <p className="mt-2 font-sans-body text-sm text-[var(--ink-dim)]">Countries worked across: India, UAE, US, remote-global</p>
        </div>
      </div>
    </section>
  );
}
