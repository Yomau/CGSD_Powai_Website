import React from "react";
import PageHero from "../components/PageHero";
import { VMV } from "../mock";
import { Eye, Target, Lightbulb } from "lucide-react";

const ICONS = { Eye, Target, Lightbulb };

export default function MissionVision() {
  return (
    <main>
      <PageHero title="Mission, Vision & Values" subtitle="The guiding principles that shape our community and culture." breadcrumb="Mission & Vision" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {VMV.map((v) => {
            const Icon = ICONS[v.icon];
            return (
              <div key={v.title} className={`${v.bg} rounded-2xl p-8`}>
                <div className="h-16 w-16 rounded-full bg-[var(--brand-indigo)]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[var(--brand-indigo)]" size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-[var(--brand-navy)]">{v.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
