import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "CA Kailash Sharma",
    role: "Founder & Managing Director",
    desc: "A Chartered Accountant by training, Kailash founded Vegith in 2018 with a vision to build India's most trusted integrated logistics partner. With deep industry relationships and a sharp operational mindset, he leads the group's strategy, partnerships, and long-term growth.",
    initial: "K",
    color: "#0a1628",
    accent: "#1a4e9b",
    highlight: "Founded Vegith in 2018",
  },
  {
    name: "Operations Leadership",
    role: "Head of Operations",
    desc: "Overseeing daily fleet dispatch, control tower performance, and vendor coordination across all active routes. Responsible for SOP compliance, driver management, and delivery excellence across the pan-India network.",
    initial: "O",
    color: "#1a4e9b",
    accent: "#0a1628",
    highlight: "Pan-India fleet operations",
  },
  {
    name: "Technology & Analytics",
    role: "Head of Technology",
    desc: "Driving Vegith's GPS-enabled fleet monitoring platform, real-time dashboards, and data-driven operations. Ensures every vehicle movement is tracked, documented, and analyzed for continuous improvement.",
    initial: "T",
    color: "#e31e24",
    accent: "#c51a20",
    highlight: "GPS & analytics platforms",
  },
  {
    name: "Business Development",
    role: "Head of Growth",
    desc: "Expanding Vegith's enterprise client base across FMCG, manufacturing, e-commerce, and industrial sectors. Builds long-term partnerships rooted in operational trust and sustained performance.",
    initial: "B",
    color: "#1a4e9b",
    accent: "#0a1628",
    highlight: "Enterprise client expansion",
  },
  {
    name: "Finance & Compliance",
    role: "Head of Finance",
    desc: "Overseeing financial planning, accounts, statutory compliance, and audit readiness across all group entities. Ensures robust financial governance aligned with Vegith's growth objectives.",
    initial: "F",
    color: "#0a4a3a",
    accent: "#065f46",
    highlight: "Group financial governance",
  },
];

const values = [
  { title: "Integrity", desc: "Every decision grounded in transparency and honesty." },
  { title: "Excellence", desc: "Relentlessly raising the bar on every operation." },
  { title: "Ownership", desc: "Each leader takes full accountability for outcomes." },
  { title: "Collaboration", desc: "Cross-functional teams driving unified results." },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 80% 20%, #e31e24 0%, transparent 40%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Our People</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership Team</h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Experienced leaders driving operational excellence, technology adoption, and sustainable growth across India's logistics landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">Home</a>
          <span>/</span>
          <a href="/about" className="hover:text-gray-600">About Us</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Leadership Team</span>
        </div>
      </div> */}

      {/* Team Photo Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl relative"
          >
            <img
              src="/images/leadership-team.png"
              alt="Vegith Global Services Leadership Team"
              className="w-full h-72 md:h-[420px] object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.2) 45%, transparent 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-8 py-8">
              <p className="text-white font-bold text-xl md:text-2xl">Vegith Global Services — Leadership Team</p>
              <p className="text-white/60 text-sm mt-1">Committed. Dedicated. Delivering excellence across India.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-14" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628]">Leadership Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a1628] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-sm">{v.title[0]}</span>
                </div>
                <h3 className="font-bold text-[#0a1628] text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Leadership Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Meet The Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">The People Behind Vegith</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              A team with deep expertise in logistics, technology, and enterprise operations — working together to deliver on every commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top color band */}
                <div className="relative h-36 flex items-center justify-center overflow-hidden" style={{ backgroundColor: member.color }}>
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: `radial-gradient(circle at 70% 30%, ${member.accent}, transparent 65%)` }}
                  />
                  <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white text-3xl font-black shadow-inner">
                    {member.initial}
                  </div>
                  {/* Highlight badge */}
                  <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white/80 text-[10px] font-semibold whitespace-nowrap"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
                  >
                    {member.highlight}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0a1628] mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.desc}</p>
                </div>

                {/* Animated bottom border */}
                <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: member.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Work with our leadership team</h2>
          <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
            Our leaders are available to discuss enterprise partnerships, strategic logistics solutions, and long-term collaboration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a1628] bg-white rounded-sm hover:bg-gray-100 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/about" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-sm hover:bg-white/10 transition-colors">
              Company Overview
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}