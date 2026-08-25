import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";

export default function Admission() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    childName: "", parent: "", phone: "", email: "", classFor: "Nursery", message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const key = "cgkg_admissions";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
    toast({ title: "Admission Enquiry Submitted", description: `Thank you ${form.parent || "parent"}, our team will reach you soon.` });
    setForm({ childName: "", parent: "", phone: "", email: "", classFor: "Nursery", message: "" });
  };

  const steps = [
    "Fill the online enquiry form below",
    "Our admissions team will call you within 48 hours",
    "Visit the campus & meet our Principal",
    "Submit documents (Birth certificate, ID proof, 4 photos)",
    "Confirmation & joining instructions",
  ];

  return (
    <main>
      <PageHero title="Admissions Open" subtitle="Begin your child's joyful learning journey at CGKG Royapuram, Chennai." breadcrumb="Admission" />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Admission Process</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[var(--brand-navy)] mt-3">A simple 5-step process</h2>
            <ul className="mt-7 space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[var(--brand-indigo)] shrink-0 mt-0.5" size={22} />
                  <span className="text-slate-700"><span className="font-semibold text-[var(--brand-navy)]">Step {i + 1}.</span> {s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <div className="font-display font-bold text-[var(--brand-navy)]">Classes Offered</div>
              <p className="text-[14px] text-slate-600 mt-1">Play Group • Nursery • LKG • UKG</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-7">
            <div className="font-display font-bold text-xl text-[var(--brand-navy)] mb-5">Admission Enquiry</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Child's Name" name="childName" value={form.childName} onChange={onChange} required />
              <Field label="Parent's Name" name="parent" value={form.parent} onChange={onChange} required />
              <Field label="Phone" name="phone" value={form.phone} onChange={onChange} required type="tel" />
              <Field label="Email" name="email" value={form.email} onChange={onChange} type="email" />
              <div>
                <label className="text-[13px] font-semibold text-[var(--brand-navy)]">Class</label>
                <select name="classFor" value={form.classFor} onChange={onChange} className="w-full mt-1.5 rounded-lg border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-[var(--brand-indigo)] focus:ring-2 focus:ring-indigo-100">
                  {["Play Group", "Nursery", "LKG", "UKG"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-[13px] font-semibold text-[var(--brand-navy)]">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} rows={3} className="w-full mt-1.5 rounded-lg border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-[var(--brand-indigo)] focus:ring-2 focus:ring-indigo-100" />
            </div>
            <button type="submit" className="btn-primary mt-5 w-full justify-center">Submit Enquiry</button>
          </form>
        </div>
      </section>
      <Toaster />
    </main>
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
