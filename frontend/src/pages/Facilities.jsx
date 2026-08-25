import React from "react";
import PageHero from "../components/PageHero";
import { FACILITIES } from "../mock";
import { Monitor, BookOpen, Gamepad2, Palette, HeartPulse, Bus, Utensils, ShieldCheck } from "lucide-react";

const ICONS = { Monitor, BookOpen, Gamepad2, Palette, HeartPulse, Bus, Utensils, ShieldCheck };

export default function Facilities() {
  return (
    <main>
      <PageHero title="Our Facilities" subtitle="World-class facilities designed for safety, learning and joy." breadcrumb="Facilities" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <div key={f.title} className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <div className="h-14 w-14 rounded-xl bg-indigo-50 text-[var(--brand-indigo)] flex items-center justify-center group-hover:bg-[var(--brand-indigo)] group-hover:text-white transition">
                  <Icon size={26} />
                </div>
                <div className="mt-4 font-display font-bold text-[var(--brand-navy)] text-lg">{f.title}</div>
                <p className="text-[14px] text-slate-600 mt-2 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
