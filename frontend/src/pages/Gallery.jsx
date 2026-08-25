import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { GALLERY } from "../mock";
import { X } from "lucide-react";

export default function Gallery() {
  const [active, setActive] = useState(null);
  return (
    <main>
      <PageHero title="Photo Gallery" subtitle="Moments of joy, learning and celebration from our campus." breadcrumb="Gallery" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((src, i) => (
            <button key={i} onClick={() => setActive(src)} className="gallery-img aspect-square shadow-md">
              <img src={src} alt="gallery" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"; }} />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-white" onClick={() => setActive(null)}><X size={28} /></button>
          <img src={active} alt="preview" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
