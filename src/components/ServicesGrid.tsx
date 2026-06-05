// import { motion } from "framer-motion";
// import { ArrowRight, Truck, BarChart3, Radio, Package } from "lucide-react";

// const services = [
//   {
//     id: "fleet",
//     icon: Truck,
//     title: "Fleet Management",
//     desc: "FTL, Reverse Logistics, Hybrid Fleet (Owned + Vendor), Cross-Country Transport, Milk Run Management.",
//     href: "/services#fleet",
//     color: "#1a4e9b",
//   },
//   {
//     id: "distribution",
//     icon: BarChart3,
//     title: "Distribution Management",
//     desc: "Route Planning, Route Optimization, Time-Window Deliveries, Last-Mile Fulfillment (B2B), Secondary Distribution.",
//     href: "/services#distribution",
//     color: "#0a1628",
//   },
//   {
//     id: "control-tower",
//     icon: Radio,
//     title: "Control Tower & Monitoring",
//     desc: "Real-Time GPS Tracking, Exception Handling, Delay Alerts, Driver Communication, POD & Documentation Tracking.",
//     href: "/services#control-tower",
//     color: "#1a4e9b",
//   },
//   {
//     id: "vas",
//     icon: Package,
//     title: "Value-Added Services",
//     desc: "Emergency Response, Vendor Verification, Safety & Compliance Protocols, Regular Performance Reviews, Data Confidentiality.",
//     href: "/services#vas",
//     color: "#0a1628",
//   },
// ];

// export function ServicesGrid() {
//   const handleNav = (href: string) => {
//     window.location.href = href;
//   };

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
//           <div>
//             <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">What We Offer</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Our Service Operations</h2>
//           </div>
//           <a
//             href="/services"
//             onClick={(e) => { e.preventDefault(); handleNav("/services"); }}
//             className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-primary transition-colors group"
//           >
//             All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <motion.div
//                 key={s.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                 onClick={() => handleNav(s.href)}
//                 className="group cursor-pointer bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col"
//               >
//                 <div
//                   className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: s.color }}
//                 >
//                   <Icon className="w-5 h-5 text-white" />
//                 </div>
//                 <h3 className="text-base font-bold text-[#0a1628] mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
//                 <p className="text-xs text-gray-500 leading-relaxed flex-1">{s.desc}</p>
//                 <div className="flex items-center gap-1.5 mt-5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
//                   Learn more <ArrowRight className="w-3 h-3" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, Truck, BarChart3, Radio, Package } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "fleet",
    icon: Truck,
    title: "Fleet Management",
    desc: "FTL, Reverse Logistics, Hybrid Fleet (Owned + Vendor), Cross-Country Transport, Milk Run Management.",
    href: "/services#fleet",
    color: "#1a4e9b",
  },
  {
    id: "distribution",
    icon: BarChart3,
    title: "Distribution Management",
    desc: "Route Planning, Route Optimization, Time-Window Deliveries, Last-Mile Fulfillment (B2B), Secondary Distribution.",
    href: "/services#distribution",
    color: "#0a1628",
  },
  {
    id: "control-tower",
    icon: Radio,
    title: "Control Tower & Monitoring",
    desc: "Real-Time GPS Tracking, Exception Handling, Delay Alerts, Driver Communication, POD & Documentation Tracking.",
    href: "/services#control-tower",
    color: "#1a4e9b",
  },
  {
    id: "vas",
    icon: Package,
    title: "Value-Added Services",
    desc: "Emergency Response, Vendor Verification, Safety & Compliance Protocols, Regular Performance Reviews, Data Confidentiality.",
    href: "/services#vas",
    color: "#0a1628",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
              Our Service Operations
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-primary transition-colors group"
          >
            All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: service.color,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-base font-bold text-[#0a1628] mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed flex-1">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-1.5 mt-5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}