import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { LOGO, CONTACT } from "../mock";

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)] text-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={LOGO} alt="CGKG" className="h-14 w-14 object-contain bg-white rounded-full p-1" />
            <div>
              <div className="font-display font-extrabold text-white text-[15px] leading-tight">COAST GUARD</div>
              <div className="font-display font-extrabold text-white text-[15px] leading-tight">KINDERGARTEN</div>
              <div className="font-display font-semibold text-[10px] tracking-[0.3em] text-slate-300 mt-1">ROYAPURAM</div>
            </div>
          </div>
          <p className="text-[14px] text-slate-300 leading-relaxed">
            A nurturing early-learning environment by the Coast Guard, dedicated to shaping confident, curious and kind young learners.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[var(--brand-indigo)] flex items-center justify-center transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[14px]">
            {[
              ["About Us", "/about/about-us"],
              ["Mission & Vision", "/about/mission-and-vision"],
              ["Teaching Staff", "/about/teaching-staff"],
              ["Admission", "/admission"],
              ["Facilities", "/facilities"],
              ["Gallery", "/gallery"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white text-slate-300 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-4">Information</h4>
          <ul className="space-y-2 text-[14px]">
            {[
              ["News & Events", "/events"],
              ["Administration", "/about/administration"],
              ["Photo Gallery", "/gallery"],
              ["Contact Us", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white text-slate-300 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-[14px] text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-[var(--brand-orange)]" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--brand-orange)]" />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-white">{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--brand-orange)]" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[13px] text-slate-400">
          <p>© {new Date().getFullYear()} Coast Guard Kindergarten, Royapuram. All Rights Reserved.</p>
          <p>Education for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
