import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { CONTACT } from "../mock";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const key = "cgkg_messages";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    prev.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(prev));
    toast({ title: "Message Sent", description: `Thank you ${form.name || ""}, we'll get back to you shortly.` });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out and our team will respond promptly." breadcrumb="Contact" />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[var(--brand-navy)] mt-3">We're here to help</h2>
            <p className="mt-3 text-slate-600">Visit us at our campus or send a message. Our admissions team responds within 24 hours.</p>

            <ul className="mt-8 space-y-5">
              <Info icon={<MapPin size={20} />} title="Address" value={CONTACT.address} />
              <Info icon={<Phone size={20} />} title="Phone" value={<a href={`tel:${CONTACT.phone}`} className="hover:text-[var(--brand-indigo)]">{CONTACT.phone}</a>} />
              <Info icon={<Mail size={20} />} title="Email" value={<a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--brand-indigo)]">{CONTACT.email}</a>} />
            </ul>

            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-100">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Royapuram%20Chennai&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-7 h-fit">
            <div className="font-display font-bold text-xl text-[var(--brand-navy)] mb-5">Send us a Message</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" value={form.name} onChange={onChange} required />
              <Field label="Phone" name="phone" value={form.phone} onChange={onChange} type="tel" />
            </div>
            <div className="mt-4">
              <Field label="Email" name="email" value={form.email} onChange={onChange} type="email" />
            </div>
            <div className="mt-4">
              <label className="text-[13px] font-semibold text-[var(--brand-navy)]">Message</label>
              <textarea name="message" rows={5} value={form.message} onChange={onChange} className="w-full mt-1.5 rounded-lg border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-[var(--brand-indigo)] focus:ring-2 focus:ring-indigo-100" />
            </div>
            <button className="btn-primary mt-5 w-full justify-center" type="submit">Send Message <Send size={16} /></button>
          </form>
        </div>
      </section>
      <Toaster />
    </main>
  );
}

function Info({ icon, title, value }) {
  return (
    <li className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-xl bg-indigo-50 text-[var(--brand-indigo)] flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="font-display font-bold text-[var(--brand-navy)]">{title}</div>
        <div className="text-slate-600 text-[14px] mt-0.5">{value}</div>
      </div>
    </li>
  );
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="text-[13px] font-semibold text-[var(--brand-navy)]">{label}</label>
      <input {...rest} className="w-full mt-1.5 rounded-lg border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-[var(--brand-indigo)] focus:ring-2 focus:ring-indigo-100" />
    </div>
  );
}
