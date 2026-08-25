import React from "react";
import PageHero from "../components/PageHero";
import { NEWS_EVENTS } from "../mock";
import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <main>
      <PageHero title="News & Events" subtitle="Catch up on the latest celebrations, activities and milestones at CGKG." breadcrumb="Events" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_EVENTS.map((n) => (
            <article key={n.id} id={n.id} className="news-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"; }} />
                <div className="absolute top-3 left-3 bg-white text-[var(--brand-indigo)] rounded-lg px-3 py-1.5 text-[12px] font-semibold shadow flex items-center gap-1">
                  <Calendar size={13} /> {n.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-[var(--brand-navy)]">{n.title}</h3>
                <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">{n.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
