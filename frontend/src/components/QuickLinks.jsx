import React from "react";
import { Link } from "react-router-dom";
import { FileText, Users, Info, Image as ImageIcon, UserCog, Puzzle } from "lucide-react";
import { QUICK_LINKS } from "../mock";

const ICONS = { FileText, Users, Info, Image: ImageIcon, UserCog, Puzzle };

export default function QuickLinks() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-[0_18px_50px_rgba(27,31,91,0.12)] p-6 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {QUICK_LINKS.map((q) => {
            const Icon = ICONS[q.icon];
            return (
              <Link key={q.title} to={q.to} className="quick-card text-center p-5">
                <div className="quick-icon">
                  <Icon size={28} />
                </div>
                <div className="font-semibold text-[14px] text-[var(--brand-navy)]">{q.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
