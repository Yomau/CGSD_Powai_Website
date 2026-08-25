import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDER_IMAGES } from "../mock";

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % SLIDER_IMAGES.length), []);
  const prev = () => setIdx((i) => (i - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: "min(78vh, 720px)" }}>
      {SLIDER_IMAGES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? "auto" : "none" }}
        >
          <img src={s.src} alt={s.caption} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
              <div className="max-w-2xl text-white">
                <span className="eyebrow !bg-white/15 !text-white backdrop-blur-sm">Education for Excellence</span>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mt-4">
                  {s.caption}
                </h1>
                <p className="mt-4 text-base md:text-lg text-slate-100/90 max-w-xl">{s.sub}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="/admission" className="btn-primary">Apply for Admission</a>
                  <a href="/about/about-us" className="btn-outline !text-white !border-white hover:!text-[var(--brand-navy)] hover:!bg-white">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 text-white items-center justify-center backdrop-blur transition"
        aria-label="prev"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 text-white items-center justify-center backdrop-blur transition"
        aria-label="next"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDER_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2.5 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
