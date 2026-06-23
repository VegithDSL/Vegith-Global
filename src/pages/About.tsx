import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Target, Eye, Users, Building2, Briefcase } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";


const groupCompanyCards = [
  { abbr: "VGS", name: "Vegith Global Services", color: "#0a1628", href: "/about/group" },
  { abbr: "MLPL", name: "Fleet Subsidiary", color: "#1a4e9b", href: "/about/group" },
  { abbr: "VHR", name: "Vegith HR", color: "#e31e24", href: "/about/group" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* Page Hero */}
      <section  className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 80% 20%, #e31e24 0%, transparent 40%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p id="abt" className="text-l font-semibold text-red-400 uppercase tracking-widest mb-3">About Vegith</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Company Overview</h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              An integrated logistics group built on trust, disciplined execution, and long-term partnerships with India's leading enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">Home</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Company Overview</span>
        </div>
      </div> */}

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight mb-6">
                Built on Trust.<br />Driven by Performance.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Vegith Global Services Limited is an integrated logistics partner committed to reliable transportation, disciplined operations, and seamless coordination for businesses across India. We combine the flexibility of a strong vendor-fleet network with the dependability of an owned fleet operated through MLPL, our dedicated fleet subsidiary.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Founded by <strong className="text-[#0a1628]">CA Kailash Sharma</strong> in 2018, Vegith is built on a foundation of trust, professionalism, and long-standing industry relationships. His leadership has shaped a team that understands logistics at a deep operational level — from driver management and route planning to compliance, documentation, and customer coordination.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Together, Vegith Global, MLPL, and Vegith HR form a reliable ecosystem designed to support the evolving needs of modern enterprises.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[{ v: "2018", l: "Founded" }, { v: "300+", l: "Owned Vehicles" }, { v: "100+", l: "Cities Connected" }, { v: "3", l: "Group Companies" }].map((s) => (
                  <div key={s.l} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xl font-black text-primary">{s.v}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src="/images/ChatGPT Image Jun 16, 2026, 10_45_42 AM.png" alt="Vegith Operations" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl border border-gray-100 p-10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To lead India with innovative smart fleet management technology and become the nation's most trusted integrated facility and manpower services partner.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-xl border border-gray-100 p-10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To create seamless, technology-driven logistics that inspire trust, elevate operational excellence, and deliver true customer delight — while building an ecosystem rooted in respect, integrity, and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">How We Work</p>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-5">Disciplined Execution. Transparent Processes.</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Vegith Global Services Limited operates with a clear focus on disciplined execution and transparent processes. As an integrated organisation strengthened by our fleet subsidiary MLPL, we bring together vendor-fleet flexibility and owned-fleet reliability under one coordinated system.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We function through structured SOPs, centralised monitoring, and a trained operations team that ensures every dispatch, route, and delivery is managed with precision.
              </p>
              <ul className="space-y-3">
                {["Structured SOPs for every operation", "Centralised monitoring via control tower", "Trained operations team at every level", "Long-term partnership mindset with clients"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src="/images/VG WEBSITE PHOTO.jpeg" alt="VGS Operations" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Further — links to the other 2 pages */}
      <section className="py-16" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Explore More</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628]">Learn More About Vegith</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Leadership card */}
            <motion.a
              href="/about/leadership"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex items-start gap-5 p-7 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-[#0a1628]">Leadership Team</h3>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-gray-500">Meet the experienced leaders driving Vegith's vision and operational excellence.</p>
              </div>
            </motion.a>

            {/* Group card */}
            <motion.a
              href="/about/group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex items-start gap-5 p-7 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a4e9b] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-[#0a1628]">The Vegith Group</h3>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-gray-500">Explore VGS, MLPL fleet division, and Vegith HR — three entities, one ecosystem.</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to partner with Vegith?</h2>
          <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
            Speak with our team to explore how we can support your supply chain with reliability and precision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a1628] bg-white rounded-sm hover:bg-gray-100 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/services" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-sm hover:bg-white/10 transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton/>
    </div>
  );
}
