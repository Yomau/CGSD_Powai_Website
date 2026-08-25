import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Target, Lightbulb, GraduationCap, Trophy, Users, Sparkles } from "lucide-react";
import { STATS, VMV, PRINCIPAL, USER_IMAGES } from "../mock";

const ICONS = { Eye, Target, Lightbulb };

export function AboutSection() {
  const statIcons = [Users, Trophy, GraduationCap, Sparkles];
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={USER_IMAGES.flagHoist1} alt="about" className="rounded-2xl object-cover h-72 w-full shadow-lg" />
            <img src={USER_IMAGES.republicGroup2} alt="about" className="rounded-2xl object-cover h-72 w-full shadow-lg mt-10" />
          </div>
          <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-orange-100 -z-10" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-indigo-100 -z-10" />
        </div>

        <div>
          <span className="eyebrow">Welcome to</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-[var(--brand-navy)] mt-3 leading-tight">
            Coast Guard <span className="text-[var(--brand-indigo)]">Kindergarten</span> Chennai
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed text-[15px]">
            The Coast Guard Kindergarten in Royapuram is an educational institution dedicated to providing
            a joyful, stimulating and safe early-learning experience. With air-conditioned smart classrooms,
            experienced teachers and a vibrant campus, we lay the foundation for confident, curious and kind
            young learners.
          </p>
          <Link to="/about/about-us" className="btn-primary mt-7">
            Read More <ArrowRight size={16} />
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
            {STATS.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <div key={s.label} className="text-center">
                  <div className="h-12 w-12 mx-auto rounded-xl bg-indigo-50 text-[var(--brand-indigo)] flex items-center justify-center mb-2">
                    <Icon size={22} />
                  </div>
                  <div className="font-display font-extrabold text-2xl text-[var(--brand-navy)]">{s.value}</div>
                  <div className="text-[12px] text-slate-500 font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VMVSection() {
  return (
    <section className="py-16 px-4 bg-slate-50/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {VMV.map((v) => {
          const Icon = ICONS[v.icon];
          return (
            <div key={v.title} className={`${v.bg} rounded-2xl p-8 text-center transition hover:-translate-y-1 hover:shadow-xl`}>
              <div className="h-16 w-16 mx-auto rounded-full bg-[var(--brand-indigo)]/10 flex items-center justify-center mb-4">
                <Icon className="text-[var(--brand-indigo)]" size={28} />
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--brand-navy)]">{v.title}</h3>
              <p className="text-slate-600 mt-3 text-[14px] leading-relaxed">{v.short}</p>
              <Link to="/about/mission-and-vision" className="inline-block mt-5 font-semibold text-[var(--brand-indigo)] hover:text-[var(--brand-orange)] text-[13px] tracking-wider">
                READ MORE
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function PrincipalSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-indigo-50 aspect-[4/5] max-w-md">
            <img
              src={PRINCIPAL.image}
              alt={PRINCIPAL.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://i.pravatar.cc/600?img=49"; }}
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-[var(--brand-indigo)] text-white px-5 py-3 rounded-xl shadow-lg">
            <div className="font-display font-bold text-sm">CGKG Royapuram</div>
            <div className="text-[11px] opacity-90">Since Inception</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">A Word From</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-[var(--brand-navy)] mt-3">
            Principal&apos;s <span className="text-[var(--brand-indigo)]">Message</span>
          </h2>
          <div className="mt-5 text-[15px] text-slate-600 leading-relaxed border-l-4 border-[var(--brand-orange)] pl-5 italic">
            &ldquo;Dear Parents and Guardians, {PRINCIPAL.message}&rdquo;
          </div>
          <div className="mt-6">
            <div className="font-display font-bold text-lg text-[var(--brand-navy)]">{PRINCIPAL.name}</div>
            <div className="text-[13px] text-slate-500">{PRINCIPAL.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
