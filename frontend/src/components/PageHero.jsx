import React from "react";

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative bg-gradient-to-r from-[#1b1f5b] to-[#3a2bff] text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 right-10 h-32 w-32 rounded-full bg-orange-400/30" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <h1 className="font-display font-extrabold text-3xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/85">{subtitle}</p>}
        {breadcrumb && (
          <nav className="mt-4 text-[13px] text-white/80">
            <span>Home</span> <span className="mx-2">/</span> <span className="text-white font-semibold">{breadcrumb}</span>
          </nav>
        )}
      </div>
    </section>
  );
}
