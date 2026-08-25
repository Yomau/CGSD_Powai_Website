import React from "react";
import PageHero from "../components/PageHero";
import { TEACHING_STAFF } from "../mock";

export default function TeachingStaff() {
  return (
    <main>
      <PageHero title="Teaching Staff" subtitle="Meet the dedicated educators who nurture our little learners every single day." breadcrumb="Teaching Staff" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEACHING_STAFF.map((t) => (
            <div key={t.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4 text-center">
                <div className="font-display font-bold text-[var(--brand-navy)]">{t.name}</div>
                <div className="text-[12.5px] text-[var(--brand-indigo)] font-semibold mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
