import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const roles = [
  { title: "Fleet Operations Manager", location: "Mumbai", type: "Full-time", dept: "Operations" },
  { title: "Control Tower Analyst", location: "Delhi / Remote", type: "Full-time", dept: "Technology" },
  { title: "Business Development Executive", location: "Pan-India", type: "Full-time", dept: "Sales" },
];

export function Careers() {
  return (
    <section id="careers" className="py-20" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Work With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight mb-5">
              Join the Future of<br />Logistics Operations.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We are a young, ambitious team reshaping how logistics operations run in India. If you thrive in high-pressure, data-driven environments, we have a seat for you in our command center.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              We invest in people who take ownership, move fast, and care about excellence. Culture is built on commitment, and our best teams are those that hold each other accountable.
            </p>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/careers.png"
                alt="Vegith Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <div className="text-white font-bold text-base">Build India's Logistics Future</div>
                <div className="text-white/60 text-xs mt-1">Join a team that moves the nation.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold text-[#0a1628] mb-4">Open Positions</p>
            <div className="space-y-3">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm hover:border-gray-200 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-[#0a1628] group-hover:text-primary transition-colors mb-2">
                        {role.title}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <MapPin className="w-3 h-3" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Clock className="w-3 h-3" /> {role.type}
                        </span>
                        <span className="text-xs font-medium text-primary bg-primary/8 px-2 py-0.5 rounded-sm">
                          {role.dept}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl border border-gray-100 bg-white">
              <p className="text-sm font-semibold text-[#0a1628] mb-1">Don't see your role?</p>
              <p className="text-xs text-gray-500 mb-4">We are always looking for exceptional people. Send us your profile.</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
