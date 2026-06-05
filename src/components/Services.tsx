import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Truck, BarChart3, Radio, Package } from "lucide-react";

const services = [
  {
    id: "fleet",
    icon: Truck,
    title: "Fleet Management",
    shortDesc: "Comprehensive hybrid fleet operations with owned and vendor vehicles.",
    desc: "We manage a hybrid network of owned (via MLPL) and vendor vehicles providing maximum availability and guaranteed placement. Our fleet operations include routing, maintenance scheduling, driver management, and utilization analytics — all monitored from a centralized dashboard.",
    highlights: ["Hybrid fleet of 250+ owned vehicles", "Real-time GPS tracking on every asset", "Predictive maintenance scheduling", "Driver compliance & safety monitoring"],
    image: "/images/service-fleet.png",
  },
  {
    id: "distribution",
    icon: BarChart3,
    title: "Distribution Management",
    shortDesc: "Optimized secondary and tertiary distribution networks pan-India.",
    desc: "We design and operate last-mile, secondary, and tertiary distribution networks for enterprise clients. With route optimization engines and load planning tools, we reduce transit time and cost while maintaining delivery SLAs across 100+ cities.",
    highlights: ["Last-mile & secondary distribution", "Dynamic route optimization", "Load planning & consolidation", "SLA-driven delivery commitments"],
    image: "/images/service-distribution.png",
  },
  {
    id: "control-tower",
    icon: Radio,
    title: "Control Tower & Monitoring",
    shortDesc: "24/7 centralized command center with real-time visibility.",
    desc: "Our control tower is the nerve center of every operation we run. Staffed 24/7, we provide proactive monitoring — detecting exceptions before they become delays, rerouting vehicles dynamically, and providing clients a single pane of glass for complete supply chain visibility.",
    highlights: ["24/7 staffed monitoring center", "Real-time delay alerts & exception flags", "Proactive rerouting & resolution", "Client MIS dashboards & reporting"],
    image: "/images/service-tower.png",
  },
  {
    id: "vas",
    icon: Package,
    title: "Value Added Services",
    shortDesc: "Beyond transport — kitting, packaging, and specialised handling.",
    desc: "We integrate seamlessly into your production and retail workflow with value-added capabilities including kitting, labeling, packaging, quality checks, and reverse logistics. Our teams are embedded at client sites and distribution centers for zero-gap operations.",
    highlights: ["Kitting, labeling & packaging", "Quality inspection at origin/destination", "Reverse logistics & returns management", "On-site embedded operations teams"],
    image: "/images/service-distribution.png",
  },
];

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find(s => s.id === active)!;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Our Service Operations</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-primary transition-colors group">
            Enquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Service tabs */}
        <div className="grid md:grid-cols-4 gap-3 mb-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                data-testid={`service-tab-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-3 p-4 rounded-lg border text-left transition-all duration-200 ${
                  active === s.id
                    ? "bg-[#0a1628] border-[#0a1628] text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${active === s.id ? "text-red-400" : "text-gray-400"}`} />
                <span className="text-sm font-semibold leading-tight">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Service detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-gray-100 shadow-sm"
          >
            {/* Image */}
            <div className="relative h-72 lg:h-auto min-h-[320px]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1))" }} />
            </div>

            {/* Content */}
            <div className="bg-white p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-3">{current.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{current.desc}</p>
              <ul className="space-y-2.5">
                {current.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Talk to our team <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
