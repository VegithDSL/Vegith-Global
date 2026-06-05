import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, Clock, Briefcase, Upload, CheckCircle2 } from "lucide-react";

const openRoles = [
  {
    title: "Fleet Operations Manager",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    dept: "Operations",
    desc: "Manage day-to-day fleet dispatch operations, driver coordination, and route compliance. Work closely with the control tower team to ensure on-time delivery across all lanes.",
    requirements: ["3–6 years in logistics/fleet operations", "Strong communication & coordination skills", "Familiarity with GPS tracking tools", "SOPs and compliance experience"],
  },
  {
    title: "Control Tower Analyst",
    location: "Delhi / Remote",
    type: "Full-time",
    dept: "Technology & Monitoring",
    desc: "Monitor live fleet movements, handle exceptions in real-time, coordinate with drivers and clients, and ensure every trip is closed with complete documentation.",
    requirements: ["1–3 years in logistics monitoring or SCM", "Proficient with tracking dashboards", "Strong problem-solving under pressure", "Good written and verbal communication"],
  },
  {
    title: "Business Development Executive",
    location: "Pan-India",
    type: "Full-time",
    dept: "Sales & Growth",
    desc: "Identify new enterprise clients in FMCG, manufacturing, and e-commerce. Build long-term partnerships aligned to Vegith's service capabilities and delivery commitments.",
    requirements: ["3–5 years in logistics sales or B2B BD", "Existing client network in relevant sectors", "Strong presentation and negotiation skills", "Self-driven with a performance mindset"],
  },
  {
    title: "Route Planning Analyst",
    location: "Mumbai / Pune",
    type: "Full-time",
    dept: "Distribution",
    desc: "Design and optimize delivery routes for enterprise distribution clients. Use data to reduce travel time, improve TAT adherence, and cut operational costs.",
    requirements: ["2–4 years in route planning or logistics analytics", "Proficient in Excel, mapping tools", "Understanding of secondary distribution networks", "Detail-oriented with analytical skills"],
  },
];

const deptColors: Record<string, string> = {
  "Operations": "#1a4e9b",
  "Technology & Monitoring": "#e31e24",
  "Sales & Growth": "#0a1628",
  "Distribution": "#1a4e9b",
};

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 80% 80%, #e31e24 0%, transparent 40%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Work With Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Vegith Global</h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Build the future of integrated logistics in India. We are growing fast and looking for driven people who take ownership, move quickly, and care about excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">Home</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Careers</span>
        </div>
      </div> */}

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Ownership Culture", desc: "We give people real responsibility from day one. No bureaucracy, no waiting — just impact.", icon: "🎯" },
              { title: "Fast Growth", desc: "Vegith is growing quickly across India. Your career grows with the company.", icon: "📈" },
              { title: "Operations at Scale", desc: "Work on complex, real-world logistics challenges across India's biggest enterprise clients.", icon: "🚚" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-100 p-7"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-[#0a1628] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Open Positions</p>
            <h2 className="text-3xl font-bold text-[#0a1628]">Current Openings</h2>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  selectedRole === role.title ? "border-[#0a1628] shadow-md" : "border-gray-100 hover:border-gray-200 hover:shadow-sm"
                }`}
              >
                <div
                  className="flex items-start justify-between gap-4 p-6 cursor-pointer"
                  onClick={() => setSelectedRole(selectedRole === role.title ? null : role.title)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-base font-bold text-[#0a1628]">{role.title}</h3>
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-sm text-white"
                        style={{ backgroundColor: deptColors[role.dept] || "#0a1628" }}
                      >
                        {role.dept}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {role.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {role.type}</span>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 shrink-0 transition-transform ${selectedRole === role.title ? "rotate-45 border-[#0a1628] text-[#0a1628]" : ""}`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                {selectedRole === role.title && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{role.desc}</p>
                    <div className="mb-5">
                      <p className="text-xs font-bold text-[#0a1628] uppercase tracking-widest mb-3">Requirements</p>
                      <ul className="space-y-2">
                        {role.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        const el = document.getElementById("apply-form");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-sm transition-colors"
                      style={{ backgroundColor: "#0a1628" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2d4a")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0a1628")}
                    >
                      Apply for this role <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Apply Now</p>
            <h2 className="text-3xl font-bold text-[#0a1628]">Drop Your Application</h2>
            <p className="text-sm text-gray-500 mt-2">Fill in your details below and attach your resume. Our team will be in touch within 3 business days.</p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center py-16 text-center rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-green-500" />
              </div>
              <h4 className="text-lg font-bold text-[#0a1628] mb-2">Application Submitted!</h4>
              <p className="text-sm text-gray-500 max-w-sm">Thank you for your interest in Vegith Global. We'll review your profile and get back to you within 3 business days.</p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Years of Experience</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white">
                    <option value="">Select range</option>
                    <option>0–1 years (Fresher)</option>
                    <option>1–3 years</option>
                    <option>3–6 years</option>
                    <option>6–10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Position Applying For *</label>
                <select
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white"
                >
                  <option value="">Select a position</option>
                  {openRoles.map((r) => (
                    <option key={r.title}>{r.title}</option>
                  ))}
                  <option>Open Application</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Cover Note</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all resize-none bg-white placeholder:text-gray-300"
                  placeholder="Tell us about yourself, your experience, and why you want to work at Vegith..."
                />
              </div>

              {/* Resume upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Resume / CV *</label>
                <div
                  className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-gray-300 hover:bg-gray-50 transition-all"
                  onClick={() => fileRef.current?.click()}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {fileName ? (
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-[#0a1628]">{fileName}</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to upload your resume</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, or DOCX — Max 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "#0a1628" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2d4a")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0a1628")}
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
