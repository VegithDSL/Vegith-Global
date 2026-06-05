import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Vegith has consistently supported our plant-to-warehouse and inter-plant movements with disciplined execution. Their control-tower monitoring and structured communication make coordination smoother, especially during high-volume periods. The integration of MLPL's owned fleet has strengthened their reliability on key routes.",
    author: "Head – Logistics Planning",
    company: "JSW Steel",
    initial: "J",
    color: "#1a4e9b",
  },
  {
    quote: "For a network as large as ours, predictability and operational clarity are critical. Vegith delivers on both. Their tracking visibility, documentation accuracy, and response time during exceptions are far superior to traditional transporters. We appreciate their professionalism and consistency across our lanes.",
    author: "Regional Supply Chain Manager",
    company: "Reliance Industries",
    initial: "R",
    color: "#0a1628",
  },
  {
    quote: "Vegith integrates well into our fast-paced operations. Their ability to provide both vendor fleet and owned fleet capacity gives us flexibility during peaks and new lane rollouts. Their team is responsive, process-oriented, and aligned with our turnaround expectations.",
    author: "Senior Operations Lead",
    company: "Delhivery",
    initial: "D",
    color: "#e31e24",
  },
  {
    quote: "What sets Vegith apart is their attention to detail — from driver readiness and compliance to load handling and delivery discipline. Their communication is crisp, and their performance on time-bound movements has been consistently strong.",
    author: "Zonal Operations Manager",
    company: "Blue Dart",
    initial: "B",
    color: "#1a4e9b",
  },
  {
    quote: "Vegith has proven to be a dependable logistics partner. With MLPL's owned fleet and a well-managed vendor network, they provide stable capacity along with streamlined coordination. Their structured processes and real-time tracking have helped us maintain service levels across multiple routes.",
    author: "Assistant Manager – SCM",
    company: "Mahindra Logistics",
    initial: "M",
    color: "#0a1628",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Client Voices</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-10 h-1 rounded-full bg-primary mb-6" />
              <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-8">"{item.quote}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0a1628]">{item.author}</div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wide mt-0.5">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional 2 testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-10 h-1 rounded-full bg-primary mb-6" />
              <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-8">"{item.quote}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0a1628]">{item.author}</div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wide mt-0.5">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
