import { motion } from "framer-motion";

import MahindraLogistics from "../../public/company_logo/mahindra_logistics.png";
import Bludart from "../../public/company_logo/blue_dart.png";
import Reliance from "../../public/company_logo/reliance.png";
import Delhivery from "../../public/company_logo/delhivery.png";
import JSW from "../../public/company_logo/jsw.png";

const clients = [
  MahindraLogistics,
  Bludart,
  Reliance,
  Delhivery,
  JSW,
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">
          Trusted by India's leading enterprises
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration:9,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[220px] px-10"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="h-16 w-auto object-contain  transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}