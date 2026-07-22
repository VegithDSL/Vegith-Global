import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Crown, GraduationCap, Briefcase, Sparkles, Award, ArrowUpRight,
  Quote, Linkedin, Mail, ImagePlus, ArrowRight,
} from "lucide-react";

/*
  ── HOW TO ADD PHOTOS ──
  Drop images into /app/frontend/public/images/ then set the `photo` field, e.g.
  photo: "/images/kailash-sharma.jpg"  — leave "" to keep the clean placeholder.
*/
const LEADERS = [
  {
    name: "Kailash Sharma",
    honorific: "",
    role: "Founder & Managing Director",
    initials: "KS",
    photo: "",
    qualification: "Chartered Accountant · ICAI",
    experience: "25+ Years",
    focus: ["Finance", "Strategy", "Governance"],
    bio: "A B.Com graduate and qualified Chartered Accountant from the Institute of Chartered Accountants of India (ICAI). He carries over 25 years of rich experience across financial management, budgeting, taxation, accounts finalization, internal audit and credit control — with deep expertise in managing financial resources and the in-depth operation of businesses.",
  },
  {
    name: "Ashish Mishra",
    role: "Chief Financial Officer",
    initials: "AM",
    photo: "",
    qualification: "CA · ICAI",
    experience: "10+ Years",
    focus: ["Finance", "Compliance", "Capital Markets"],
    bio: "B.Com from the University of Mumbai and a qualified Chartered Accountant (ICAI). Over 10 years across accounts, finance and capital markets with strong acumen in financial management, regulatory compliance and corporate governance. CFO w.e.f. 10th May 2026.",
  },
  {
    name: "Arvind Mishra",
    role: "Company Secretary",
    initials: "AM",
    photo: "",
    qualification: "ICSI Associate",
    experience: "3+ Years",
    focus: ["Secretarial", "Governance"],
    bio: "An Associate Member of the Institute of Company Secretaries of India (ICSI) with 3+ years in secretarial and corporate matters. He leads corporate governance and secretarial functions. Company Secretary w.e.f. 6th April 2026.",
  },
  {
    name: "Hemlata Sharma",
    role: "Executive Director",
    initials: "HS",
    photo: "",
    qualification: "B.Sc Biology",
    experience: "COO · Chilzo",
    focus: ["Operations", "Social Impact"],
    bio: "A B.Sc in Biology, entrepreneur and co-founder & COO of Chilzo. She has supported many non-profits — rehabilitating Kashmiri refugees, fighting hunger for underprivileged women and aiding leprosy patients. A trained CPR expert, versed in Vastu and Feng Shui.",
  },
];

const values = [
  { title: "Integrity", desc: "Every decision grounded in transparency and honesty." },
  { title: "Excellence", desc: "Relentlessly raising the bar on every operation." },
  { title: "Ownership", desc: "Each leader takes full accountability for outcomes." },
  { title: "Collaboration", desc: "Cross-functional teams driving unified results." },
];

const stats = [
  { value: "40+", label: "Years Combined" },
  { value: "4", label: "Core Leaders" },
  { value: "PAN", label: "India Presence" },
  { value: "100%", label: "In-House Team" },
];

function PortraitSkeleton({ aspect = "aspect-[4/5]", label, initials, photo }) {
  if (photo) {
    return (
      <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl`}>
        <img src={photo} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.75), transparent 55%)" }} />
      </div>
    );
  }
  return (
    <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl`} data-testid="photo-placeholder" style={{ backgroundColor: "#081020" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, rgba(26,78,155,0.55) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-24 h-24 rounded-full flex items-center justify-center font-display text-3xl font-extrabold text-white/90 border-2 border-white/15" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          {initials}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
          <ImagePlus className="w-3.5 h-3.5" /> {label}
        </div>
      </div>
      <div className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", animation: "sheen 1.4s ease" }} />
    </div>
  );
}

function FounderCard({ leader }) {
  return (
    <div
      data-testid="founder-card"
      className="relative overflow-hidden rounded-3xl border p-6 md:p-10"
      style={{
        borderColor: "rgba(227,30,36,0.22)",
        background: "linear-gradient(120deg, rgba(26,78,155,0.30) 0%, rgba(8,17,32,0.96) 55%, rgba(227,30,36,0.14) 100%)",
        boxShadow: "0 40px 100px -40px rgba(227,30,36,0.22), inset 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(closest-side, rgba(227,30,36,0.28), transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-25 pointer-events-none" style={{ background: "radial-gradient(closest-side, rgba(26,78,155,0.55), transparent 70%)" }} />

      <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 items-center">
        <div className="md:col-span-5 lg:col-span-4 group">
          <div className="relative">
            <PortraitSkeleton label="Founder Portrait" initials={leader.initials} photo={leader.photo} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: "rgba(227,30,36,0.5)", background: "linear-gradient(135deg, #0a1628 0%, #1a4e9b 100%)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              <Crown size={14} style={{ color: "#e31e24" }} />
              <span className="text-[10px] uppercase tracking-[0.32em] font-bold" style={{ color: "#e8a0a2" }}>Founder</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8" style={{ backgroundColor: "#e31e24" }} />
            <span className="text-[11px] uppercase tracking-[0.32em] font-bold" style={{ color: "#e8a0a2" }}>Chairman &amp; Founder</span>
          </div>

          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            {leader.name}
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/85 border border-white/10" style={{ background: "linear-gradient(135deg, rgba(26,78,155,0.5) 0%, rgba(8,17,32,0.85) 100%)" }}>
              <GraduationCap size={13} style={{ color: "#e31e24" }} /> {leader.qualification}
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/85 border border-white/10" style={{ background: "linear-gradient(135deg, rgba(26,78,155,0.5) 0%, rgba(8,17,32,0.85) 100%)" }}>
              <Briefcase size={13} style={{ color: "#e31e24" }} /> {leader.experience} Experience
            </span>
          </div>

          <div className="relative mt-6 pl-6">
            <Quote size={18} className="absolute left-0 top-1" style={{ color: "rgba(227,30,36,0.6)" }} />
            <p className="text-white/75 text-[15px] leading-relaxed">{leader.bio}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {leader.focus.map((f) => (
              <span key={f} className="text-[11px] uppercase tracking-widest text-white/60 px-3 py-1 rounded-full border border-white/10">{f}</span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center rounded-full w-10 h-10 text-white/70 border border-white/10 transition-colors hover:text-white" onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e31e24")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
              <Linkedin size={15} />
            </a>
            <a href="#" aria-label="Email" className="inline-flex items-center justify-center rounded-full w-10 h-10 text-white/70 border border-white/10 transition-colors hover:text-white" onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e31e24")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderCard({ leader, index, hovered, onHover, onLeave }) {
  const isActive = hovered === index;
  return (
    <div
      data-testid={`leader-card-${index}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 ${isActive ? "-translate-y-1" : ""}`}
      style={{
        borderColor: isActive ? "rgba(227,30,36,0.5)" : "rgba(255,255,255,0.1)",
        background: "linear-gradient(160deg, rgba(26,78,155,0.18) 0%, rgba(8,17,32,0.96) 100%)",
        boxShadow: isActive ? "0 40px 80px -30px rgba(227,30,36,0.22)" : "0 20px 40px -25px rgba(0,0,0,0.6)",
      }}
    >
      <div className="relative">
        <PortraitSkeleton label={`${leader.name} Photo`} initials={leader.initials} photo={leader.photo} />
        <div className="absolute top-4 right-4 text-[10px] font-mono text-white/40">0{index + 2}</div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2" style={{ color: "#e8a0a2" }}>
            <Sparkles size={11} /> {leader.role}
          </div>
          <h3 className="font-display mt-1 text-white text-xl md:text-2xl font-bold leading-tight">{leader.name}</h3>
        </div>
      </div>

      <div className="p-5 md:p-6 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/75 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">
            <GraduationCap size={11} style={{ color: "#e31e24" }} /> {leader.qualification}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/75 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">
            <Briefcase size={11} style={{ color: "#e31e24" }} /> {leader.experience}
          </span>
        </div>

        <p className="text-white/65 text-[13px] leading-relaxed">{leader.bio}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {leader.focus.map((f) => (
              <span key={f} className="text-[10px] uppercase tracking-widest text-white/50 px-2 py-0.5 rounded-full border border-white/10">{f}</span>
            ))}
          </div>
          <a href="#" aria-label={`View ${leader.name}`} className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors" style={{ borderColor: isActive ? "#e31e24" : "rgba(255,255,255,0.1)", color: isActive ? "#e31e24" : "rgba(255,255,255,0.6)", backgroundColor: isActive ? "rgba(227,30,36,0.1)" : "transparent" }}>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <span className={`pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(60% 40% at 50% 0%, rgba(227,30,36,0.12), transparent 70%)" }} />
    </div>
  );
}

export default function LeadershipPage() {
  const [hovered, setHovered] = useState(null);
  const founder = LEADERS[0];
  const others = LEADERS.slice(1);

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div className="absolute inset-0 opacity-[0.13]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 80% 20%, #e31e24 0%, transparent 40%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(circle at 30% 50%, black, transparent 80%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "#e8a0a2" }}>
            The People Behind The Practice
          </motion.p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-5 tracking-tight leading-[1.05]">
            {["Leadership", "Team"].map((w, i) => (
              <span key={w} className="inline-block overflow-hidden mr-4 align-top">
                <motion.span initial={{ y: "115%" }} animate={{ y: "0%" }} transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="inline-block" style={i === 1 ? { color: "#e31e24" } : {}}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-white/60 text-lg max-w-2xl leading-relaxed">
            A senior bench of Chartered Accountants, finance and operations specialists — each entrusted with a discipline they have practised for years.
          </motion.p>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-5 overflow-hidden border-y" style={{ backgroundColor: "#e31e24", borderColor: "rgba(0,0,0,0.1)" }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center">
              {["Commitment", "Dedication", "Delivery", "Integrity", "Excellence", "Ownership"].map((t) => (
                <span key={t + k} className="font-display text-xl md:text-2xl font-extrabold text-white/95 mx-6 uppercase tracking-tight flex items-center gap-6">
                  {t} <span className="text-white/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main data-testid="leadership-page">
        {/* ── STATS STRIP ── */}
          

        {/* ── FOUNDER ── */}
        <section className="relative pt-10 md:pt-14 pb-16 md:pb-20">
          <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(50% 60% at 90% 20%, rgba(26,78,155,0.25) 0%, transparent 60%)" }} />
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8" style={{ backgroundColor: "#e31e24" }} />
              <span className="text-[11px] uppercase tracking-[0.32em] font-bold" style={{ color: "#e8a0a2" }}>Meet Our Founder</span>
            </div>
            <FounderCard leader={founder} />
          </div>
        </section>

        {/* ── EXECUTIVE LEADERS ── */}
        <section className="relative pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8" style={{ backgroundColor: "#e31e24" }} />
                  <span className="text-[11px] uppercase tracking-[0.32em] font-bold" style={{ color: "#e8a0a2" }}>Executive Leadership</span>
                </div>
                <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-2xl tracking-tight">
                  The team shaping <span style={{ color: "#e31e24" }}>every engagement.</span>
                </h2>
              </div>
              <p className="text-white/60 text-sm md:text-base max-w-md">
                Seasoned leaders across finance, compliance, operations and social impact — each accountable end-to-end.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {others.map((leader, i) => (
                <LeaderCard key={leader.name} leader={leader} index={i} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
              ))}
            </div>

            {/* ── CTA ── */}
            <div className="mt-14 rounded-3xl border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: "linear-gradient(120deg, rgba(26,78,155,0.4) 0%, rgba(8,17,32,0.96) 100%)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a4e9b 100%)", boxShadow: "inset 0 0 0 1px rgba(227,30,36,0.5)" }}>
                  <Award size={20} style={{ color: "#e31e24" }} />
                </div>
                <div>
                  <div className="font-display text-white text-xl md:text-2xl font-bold">Work with senior leadership. Directly.</div>
                  <p className="mt-2 text-white/60 text-sm max-w-xl">Every engagement is anchored by a partner-level owner — no hand-offs, no dilution of accountability.</p>
                </div>
              </div>
              <a href="/contact" data-testid="cta-contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white whitespace-nowrap transition-transform hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #e31e24 0%, #c51a20 100%)", boxShadow: "0 10px 30px rgba(227,30,36,0.4)" }}>
                Request a Meeting <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

    
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
