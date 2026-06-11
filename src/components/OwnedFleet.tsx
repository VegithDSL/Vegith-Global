import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function OwnedFleet() {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">MLPL Fleet Division</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight mb-5">
              300+ Owned Vehicles.<br />Guaranteed Capacity.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Through our dedicated asset division MLPL, we operate one of India's most reliable owned fleets — giving you guaranteed vehicle placement when it matters most. No dependency on market availability. No excuses on peak days.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Container Trucks", desc: "Secure, weather-proof transit for high-value FMCG and retail goods across India." },
                { title: "Bulkers", desc: "Specialized heavy vehicles for cement, aggregate, and industrial raw materials." },
                { title: "GPS-Enabled Fleet", desc: "Every asset fitted with enterprise-grade telematics for real-time location, speed, and fuel data." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#0a1628] mb-0.5">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-sm transition-colors"
              style={{ backgroundColor: "#0a1628" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2d4a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0a1628")}
            >
              Enquire About Fleet Capacity <ArrowRight className="w-4 h-4" />
            </a> */}
            
            <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-sm transition-colors"
                  style={{ backgroundColor: "#0a1628" }}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1a2d4a")
                }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0a1628")
                 }>
                    Enquire About Fleet Capacity
                    <ArrowRight className="w-4 h-4" />
              </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="/images/owned-fleet.png"
                alt="MLPL Owned Fleet"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
              {[
                { v: "300+", l: "Owned Vehicles" },
                { v: "500+", l: "Vendor Partners" },
                { v: "100+", l: "Cities" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg p-3 text-center"
                  style={{ backgroundColor: "rgba(10,22,40,0.88)", backdropFilter: "blur(8px)" }}
                >
                  <div className="text-xl font-black text-white">{s.v}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wide mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
