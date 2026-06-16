import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden  shadow-lg">
              <img
                src="/images/raimond-klavins-PQt1tspvxvw-unsplash.jpg"
                alt="Vegith Operations"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 w-44 h-28 rounded-xl flex flex-col items-center justify-center shadow-lg"
              style={{ backgroundColor: "#011027" }}
            >
              <div className="text-3xl font-black text-white">2018</div>
              <div className="text-xs text-white/60 uppercase tracking-widest mt-1">Founded</div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight mb-5">
              India's Integrated<br />Logistics Operations Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Vegith Global Services Limited is an integrated logistics partner offering reliable transportation, seamless coordination, and end-to-end operational support for businesses across India. We combine the agility of a strong vendor-fleet network with the dependability of our owned fleet, operated through MLPL, our dedicated fleet subsidiary.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Founded and led by <strong className="text-[#0a1628]">CA Kailash Sharma</strong>, Vegith stands on a foundation of trust, operational excellence, and long-term partnerships. Our extended group also includes <strong className="text-[#0a1628]">Vegith HR</strong>, a specialised company offering skilled manpower for warehouses, fulfilment centres, and office operations.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Group Companies", value: "3" },
                { label: "Owned Vehicles", value: "300+" },
                { label: "Cities Connected", value: "100+" },
                { label: "Trips Monitored", value: "50,000+" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-primary transition-colors group" >
              Our full story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
