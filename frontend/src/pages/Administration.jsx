import React from "react";
import PageHero from "../components/PageHero";

const ADMIN = [
  { name: "Chairman, CGKG", role: "Patron-in-Chief", desc: "Provides strategic direction and patronage to the institution." },
  { name: "President, Tatrakshika East", role: "Patron", desc: "Guides welfare initiatives and student well-being." },
  { name: "Vice President, Tatrakshika East", role: "Co-Patron", desc: "Oversees academic and administrative collaborations." },
  { name: "Secretary, CGKG", role: "Operations", desc: "Manages day-to-day school operations and policy adherence." },
  { name: "Principal", role: "Academic Head", desc: "Leads the academic vision, curriculum and faculty development." },
  { name: "School Counsellor", role: "Child Wellness", desc: "Supports emotional and behavioural development of every child." },
];

export default function Administration() {
  return (
    <main>
      <PageHero title="Administration" subtitle="The leadership behind a thriving early-learning community." breadcrumb="Administration" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADMIN.map((a) => (
            <div key={a.name} className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-full bg-orange-50 text-[var(--brand-orange)] flex items-center justify-center font-display font-extrabold">
                {a.name.charAt(0)}
              </div>
              <div className="font-display font-bold text-lg text-[var(--brand-navy)] mt-4">{a.name}</div>
              <div className="text-[12.5px] text-[var(--brand-indigo)] font-semibold mt-1">{a.role}</div>
              <p className="text-[14px] text-slate-600 mt-3 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
