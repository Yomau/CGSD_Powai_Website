import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { GALLERY, NEWS_EVENTS } from "../mock";

export function GallerySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow">Our Gallery</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-[var(--brand-navy)] mt-3">
            Kindergarten <span className="text-[var(--brand-indigo)]">Gallery</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.slice(0, 8).map((src, i) => (
            <div key={i} className="gallery-img aspect-[4/3] shadow-md">
              <img src={src} alt="gallery" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"; }} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery" className="btn-outline">View All <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">What&apos;s Happening</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-[var(--brand-navy)] mt-3">
              News &amp; Events <span className="text-[var(--brand-indigo)]">@ CGKG</span>
            </h2>
          </div>
          <Link to="/events" className="btn-outline">View All <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_EVENTS.slice(0, 6).map((n) => (
            <article key={n.id} className="news-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"; }}
                />
                <div className="absolute top-3 left-3 bg-white text-[var(--brand-indigo)] rounded-lg px-3 py-1.5 text-[12px] font-semibold shadow flex items-center gap-1">
                  <Calendar size={13} /> {n.date}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-[var(--brand-navy)] line-clamp-2">{n.title}</h3>
                <p className="mt-2 text-[13.5px] text-slate-600 line-clamp-3">{n.text}</p>
                <Link to="/events" className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--brand-indigo)] hover:text-[var(--brand-orange)]">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
