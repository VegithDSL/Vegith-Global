import { motion } from "framer-motion";

const industries = [
  { name: "FMCG", desc: "High-frequency, time-critical supply chains with temperature and traceability requirements." },
  { name: "Manufacturing", desc: "Inbound raw material movement and outbound finished goods to distribution networks." },
  { name: "Cement", desc: "Bulk transport with specialized heavy vehicles and dedicated loading infrastructure." },
  { name: "Automotive", desc: "Just-in-time component delivery and finished vehicle distribution across dealer networks." },
  { name: "Retail Distribution", desc: "Warehouse to storefront with precise routing and delivery confirmation." },
  { name: "E-commerce", desc: "High-volume, time-sensitive sorting, line-haul, and last-mile execution." },
  { name: "Industrial Goods", desc: "Over-dimensional and hazardous cargo handling with regulatory compliance." },
];

export function Industries() {
  return (
    <section id="industries" className="py-20" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Sectors We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Industries We Empower</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-1 rounded-full bg-primary mb-4 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-base font-bold text-[#0a1628] mb-2">{ind.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
