import { motion } from "framer-motion";
import { Truck, Package, Radio, Handshake } from "lucide-react";

const capabilities = [
  {
    icon: Truck,
    number: "01",
    title: "Integrated Logistics",
    desc: "End-to-end coordination across vendor fleets and our owned fleet (via MLPL), ensuring reliable dispatch, monitored trips, and on-time deliveries across India.",
    stat: "24/7",
    statLabel: "Operations",
  },
  {
    icon: Package,
    number: "02",
    title: "Warehouse Support",
    desc: "Seamless inbound–outbound coordination, loading/unloading oversight, and operational assistance to support efficient warehouse movement for our clients.",
    stat: "99%",
    statLabel: "Accuracy",
  },
  {
    icon: Radio,
    number: "03",
    title: "Real-Time Monitoring",
    desc: "Centralised trip tracking, GPS-based updates, exception handling, and proactive communication — ensuring every movement stays transparent, safe, and controlled.",
    stat: "<5 min",
    statLabel: "Alert Latency",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Client Operations Support",
    desc: "Documentation, POD management, billing coordination, on-ground execution, and smooth communication between dispatch teams, drivers, and customers.",
    stat: "100%",
    statLabel: "Compliance",
  },
];

export function CoreCapabilities() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Our Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Core Capabilities</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-md">
            Systematic approaches to complex logistical challenges, driven by technology and disciplined execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-xl border border-gray-100 p-7 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-black text-gray-200 tracking-widest">{cap.number}</span>
                </div>

                <h3 className="text-base font-bold text-[#0a1628] mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{cap.desc}</p>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-primary">{cap.stat}</span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{cap.statLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
