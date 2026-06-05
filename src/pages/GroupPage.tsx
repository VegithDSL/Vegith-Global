import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Truck, Users, Globe } from "lucide-react";
import { useEffect } from "react";

const groupCompanies = [
  {
    id: "vgs",
    name: "Vegith Global Services Limited",
    abbr: "VGS",
    tagline: "The Integrated Logistics Parent",
    desc: "Vegith Global Services Limited is the parent entity of the group, offering end-to-end integrated logistics solutions for enterprises across India. From fleet coordination and distribution management to real-time control tower monitoring and value-added services, VGS acts as the single coordinated partner for complex supply chains.",
    color: "#0a1628",
    accent: "#1a4e9b",
    icon: Globe,
    stats: [
      { v: "2018", l: "Founded" },
      { v: "100+", l: "Cities Served" },
      { v: "50,000+", l: "Annual Trips" },
      { v: "24/7", l: "Control Tower" },
    ],
    capabilities: [
      "Fleet Management (FTL, PTL, Reverse Logistics)",
      "Distribution & Route Management",
      "Control Tower & Real-Time Monitoring",
      "Value-Added Logistics Services",
      "Vendor Fleet Coordination",
      "Compliance & Documentation Management",
    ],
  },
  {
    id: "mlpl",
    name: "MLPL — Fleet Subsidiary",
    abbr: "MLPL",
    tagline: "Owned Fleet Reliability",
    desc: "MLPL is Vegith's dedicated owned-fleet subsidiary, operating 250+ vehicles across India. MLPL provides the reliability and predictability of an owned fleet, seamlessly integrated into every VGS operation. With owned trucks, trained drivers, and GPS-monitored routes, MLPL is the backbone of Vegith's commitment to on-time delivery.",
    // color: "#1a4e9b",
    // accent: "#0a1628",
     color: "#e31e24",
    accent: "#c51a20",
    icon: Truck,
    stats: [
      { v: "250+", l: "Owned Vehicles" },
      { v: "Pan-India", l: "Coverage" },
      { v: "GPS", l: "Monitored Fleet" },
      { v: "100%", l: "Owned & Operated" },
    ],
    capabilities: [
      "Full Truckload (FTL) Operations",
      "Cross-Country Long-Haul Routes",
      "Hybrid Fleet Integration with Vendors",
      "GPS-Enabled Real-Time Tracking",
      "Driver Management & Training",
      "Vehicle Maintenance & Compliance",
    ],
  },
  {
    id: "vp",
    name: "Vegith Pinnacle",
    abbr: "VP",
    tagline: "Workforce Solutions",
    desc: "Vegith Pinnacle is a specialised workforce solutions company offering skilled and semi-skilled manpower for warehouses, fulfilment centres, and office operations across India. From warehouse staff and loading crews to administrative personnel, Vegith Pinnacle ensures every operation is staffed with trained, verified, and reliable human capital.",
    // color: "#e31e24",
    // accent: "#c51a20",
    color: "#0a1628",
    accent: "#1a4e9b",
    icon: Users,
    stats: [
      { v: "Multi-City", l: "Deployment" },
      { v: "Verified", l: "Workforce" },
      { v: "Warehouse", l: "Specialists" },
      { v: "Flexible", l: "Engagement" },
    ],
    capabilities: [
      "Warehouse & Fulfilment Centre Staffing",
      "Loading, Unloading & Material Handling",
      "Office & Administrative Support",
      "Skilled & Semi-Skilled Deployment",
      "Background-Verified Workforce",
      "Flexible Short & Long-Term Contracts",
    ],
  },
];

export default function GroupPage() {
 
        useEffect(() => {
        const hash = window.location.hash.replace("#", "");
      
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash);
      
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 200);
        } 
      }, []);
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 80% 20%, #e31e24 0%, transparent 40%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Our Ecosystem</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Vegith Group</h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              TPinnacleee focused entities. One integrated ecosystem — built to deliver logistics excellence, fleet reliability, and workforce solutions across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">Home</a>
          <span>/</span>
          <a href="/about" className="hover:text-gray-600">About Us</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">The Vegith Group</span>
        </div>
      </div> */}

      {/* Overview strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <p className="text-sm text-gray-500 max-w-2xl">
              The Vegith Group comprises three complementary entities — <strong className="text-[#0a1628]">VGS</strong> (integrated logistics), <strong className="text-[#e31e24]">MLPL</strong> (owned fleet), and <strong className="text-[#0a1628]">Vegith Pinnacle</strong> (workforce solutions) — operating as a unified platform for enterprise supply chains.
            </p>
            <div className="flex items-center gap-4">
              {[
                { abbr: "VGS", color: "#0a1628" },
                { abbr: "MLPL", color: "#e31e24" },
                { abbr: "VHR", color: "#0a1628" },
              ].map((c) => (
                <div key={c.abbr} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-sm font-bold text-[#0a1628]">{c.abbr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company detail sections */}
      {groupCompanies.map((co, i) => {
        const Icon = co.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            id={co.id}
            key={co.abbr}
            className="py-20"
            style={{ backgroundColor: isEven ? "#ffffff" : "#f5f7fa" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Abbr badge */}
                  <div className="inline-flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ backgroundColor: co.color }}>
                      {co.abbr.slice(0, 3)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: co.color }}>{co.tagline}</p>
                      <h2 className="text-xl md:text-2xl font-bold text-[#0a1628]">{co.name}</h2>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8">{co.desc}</p>

                  {/* Capabilities */}
                  <div className="mb-8">
                    <p className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-3">Key Capabilities</p>
                    <ul className="space-y-2.5">
                      {co.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: co.color }} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-sm transition-colors"
                    style={{ backgroundColor: co.color }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    Enquire About {co.abbr} <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>

                {/* Stats card side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                    {/* Card header */}
                    <div className="p-8 relative overflow-hidden" style={{ backgroundColor: co.color }}>
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{ background: `radial-gradient(circle at 80% 20%, ${co.accent}, transparent 60%)` }}
                      />
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-black text-2xl">{co.abbr}</p>
                          <p className="text-white/60 text-xs uppercase tracking-widest">{co.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 bg-white">
                      {co.stats.map((stat) => (
                        <div key={stat.l} className="p-6 text-center">
                          <div className="text-xl font-black text-[#0a1628] mb-1">{stat.v}</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{stat.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Group synergy section */}
      <section className="py-16" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Working Together</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">One Ecosystem. Total Coverage.</h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto">
              VGS coordinates the logistics strategy. MLPL provides owned-fleet reliability. Vegith Pinnacle staffs the entire operation. Together, the three entities give enterprise clients a single, accountable partner for every supply chain need.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="/services" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a1628] bg-white rounded-sm hover:bg-gray-100 transition-colors">
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-sm hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}