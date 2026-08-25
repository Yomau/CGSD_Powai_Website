import React from "react";
import PageHero from "../components/PageHero";
import { USER_IMAGES, STATS } from "../mock";
import { GraduationCap, Trophy, Users, Sparkles } from "lucide-react";

export default function About() {
  const statIcons = [Users, Trophy, GraduationCap, Sparkles];
  return (
    <main>
      <PageHero title="About Kindergarten" subtitle="A nurturing community shaping young minds with care, creativity and excellence." breadcrumb="About Us" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={USER_IMAGES.flagHoist1} alt="about" className="rounded-2xl h-72 w-full object-cover shadow-lg" />
            <img src={USER_IMAGES.republicGroup} alt="about" className="rounded-2xl h-72 w-full object-cover shadow-lg mt-10" />
          </div>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[var(--brand-navy)] mt-3">An Institution Built on Excellence</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Coast Guard Kindergarten, Royapuram is an early-learning institution committed to providing a safe, joyful and stimulating
              environment for children to flourish. We believe in learning through play, structured activities and individual attention
              from our experienced faculty.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our air-conditioned smart classrooms, well-curated curriculum and warm-hearted teachers make every day a delightful learning
              experience. Holistic development — social, emotional, intellectual and physical — is at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="h-12 w-12 mx-auto rounded-xl bg-indigo-50 text-[var(--brand-indigo)] flex items-center justify-center mb-3">
                  <Icon size={22} />
                </div>
                <div className="font-display font-extrabold text-3xl text-[var(--brand-navy)]">{s.value}</div>
                <div className="text-[13px] text-slate-500 mt-1">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
