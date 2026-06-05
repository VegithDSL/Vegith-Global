import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Truck, BarChart3, Radio, Package, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "fleet",
    slug: "fleet-management",
    icon: Truck,
    title: "Fleet Management",
    tagline: "Delivering Reliability Through a Hybrid Fleet Model",
    intro: "Vegith combines MLPL's reliable owned fleet with an extensive vendor-fleet network to offer predictable capacity, strong compliance, and route discipline. Whether you need long-haul FTL movements, multi-point pickups, or specialized routes, our fleet ecosystem ensures consistent performance.",
    color: "#1a4e9b",
    image: "/images/service-fleet.png",
    subServices: [
      { title: "Full Truck Load (FTL)", desc: "Pan-India FTL coverage with predictable TAT and well-coordinated dispatch." },
      { title: "Hybrid Fleet (Owned + Vendor)", desc: "Owned fleet ensures reliability; vendors provide scalability during peaks. Operational flexibility + control." },
      { title: "Cross-Country Transportation", desc: "Long-distance routes with real-time visibility and driver SOP compliance." },
      { title: "Milk Run Management", desc: "Cost-efficient multi-vendor pickups and deliveries for manufacturing & distribution." },
      { title: "Last-Mile Delivery (B2B)", desc: "Time-window aligned deliveries to warehouses, distributors, and retail points." },
      { title: "Reverse Logistics", desc: "Systematic pickup coordination, return-load optimization, and documentation control." },
    ],
    whyUs: [
      "Predictable TAT and better route discipline",
      "Trained drivers following standardized SOPs",
      "Control-tower support for every dispatch",
      "Verified vendor onboarding for quality assurance",
      "End-to-end documentation and safety compliance",
    ],
  },
  {
    id: "distribution",
    slug: "distribution-management",
    icon: BarChart3,
    title: "Distribution Management",
    tagline: "Optimized Movements for High-Volume Enterprise Networks",
    intro: "Vegith supports structured distribution networks with disciplined routing, time-window delivery, and optimized planning. Our distribution services are tailored for FMCG, food processing, manufacturing clusters, e-commerce, and high-frequency delivery networks.",
    color: "#0a1628",
    image: "/images/service-distribution.png",
    subServices: [
      { title: "Route Planning", desc: "Efficient route design based on traffic, delivery sequence, and TAT targets." },
      { title: "Route Optimization", desc: "AI-enabled or operations-driven optimization to reduce mileage, delays, and cost." },
      { title: "Time-Window Deliveries", desc: "Guaranteed adherence to customer-defined delivery slots." },
      { title: "Secondary Distribution", desc: "Cluster-based intra-city or intercity distribution for widespread networks." },
      { title: "Last-Mile Fulfillment", desc: "Reliable delivery from hubs to final distribution points or retailers." },
    ],
    whyUs: [
      "Transparent coordination and communication",
      "Live tracking & proactive updates",
      "Minimal delays due to route discipline",
      "Proven support for high-frequency networks",
    ],
  },
  {
    id: "control-tower",
    slug: "control-tower",
    icon: Radio,
    title: "Control Tower & Monitoring",
    tagline: "Visibility, Transparency & Real-Time Control",
    intro: "Our control tower functions as the nerve center of our logistics operations. Every vehicle — owned or vendor — is monitored from placement to final delivery, ensuring clarity, safety, and timely responses.",
    color: "#e31e24",
    image: "/images/service-tower.png",
    subServices: [
      { title: "Real-Time GPS Tracking", desc: "Live location & movement updates for every trip across the network." },
      { title: "Exception Handling", desc: "Immediate attention to delays, diversions, breakdowns, or route deviations." },
      { title: "Delay Alerts & Communication", desc: "Proactive updates to clients and internal teams before issues escalate." },
      { title: "Driver Coordination", desc: "Direct communication for route guidance, safety checks, and reporting." },
      { title: "Dashcam Recording & Detection", desc: "Onboard camera support for safety monitoring and incident documentation." },
      { title: "POD & Documentation Tracking", desc: "On-time POD closure and digital documentation visibility." },
    ],
    whyUs: [
      "Stronger on-time delivery performance",
      "Greater transparency for clients",
      "Faster response during unplanned events",
      "Better route compliance and safety monitoring",
    ],
  },
  {
    id: "vas",
    slug: "value-added-services",
    icon: Package,
    title: "Value-Added Services",
    tagline: "Enhancing Logistics Through Process & Technology",
    intro: "Vegith strengthens logistics performance with operational enhancements that improve accountability, safety, and customer experience.",
    color: "#1a4e9b",
    image: "/images/service-distribution.png",
    subServices: [
      { title: "Tech-Enabled Platform", desc: "Digital tools for monitoring, communication, and documentation." },
      { title: "Emergency Response Management", desc: "Dedicated team for urgent route activations, breakdown assistance & fast rerouting." },
      { title: "Vendor Selection & Verification", desc: "Robust onboarding ensuring only compliant, verified vendors operate with us." },
      { title: "Regular Review Mechanism", desc: "Periodic performance reviews with clients & vendor partners." },
      { title: "Safety Measures", desc: "Driver SOPs, safety briefings, and load-handling protocols." },
      { title: "Data Confidentiality & Compliance", desc: "Secure processes ensuring confidentiality of business data." },
    ],
    whyUs: [
      "Stronger compliance framework",
      "Safer, more reliable movements",
      "Better cost control",
      "Faster coordination and response",
      "Higher service quality standards",
    ],
  },
];

export default function ServicesPage() {
  const params = useParams<{ slug?: string }>();

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
          style={{
            backgroundImage: "radial-gradient(circle at 80% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 20% 80%, #e31e24 0%, transparent 40%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
              Vegith Global Services Limited provides integrated logistics solutions through a hybrid fleet ecosystem — powered by MLPL's owned vehicles and an extensive, verified vendor fleet. Our operations are process-driven, compliance-focused, and built to deliver reliability, visibility, and disciplined coordination across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">Home</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Services</span>
        </div>
      </div> */}

      {/* Services overview quick-nav */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center overflow-x-auto gap-0 py-0">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="flex items-center gap-2 px-4 py-4 text-sm font-medium text-gray-500 hover:text-[#0a1628] border-b-2 border-transparent hover:border-[#0a1628] transition-all whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {s.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {services.map((service, si) => {
        const Icon = service.icon;
        const isEven = si % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 scroll-mt-32"
            style={{ backgroundColor: isEven ? "#ffffff" : "#f5f7fa" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              {/* Section header */}
              <div className="flex items-start gap-5 mb-12">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: service.color }}>
                    Service 0{si + 1}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-2">{service.title}</h2>
                  <p className="text-base font-medium text-gray-500 italic">{service.tagline}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-5 gap-12">
                {/* Image */}
                <div className="lg:col-span-2">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-md">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.intro}</p>

                  <h3 className="text-sm font-bold text-[#0a1628] uppercase tracking-widest mb-4">Our Offerings</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.subServices.map((sub) => (
                      <div key={sub.title} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: service.color }} />
                          <div>
                            <div className="text-sm font-semibold text-[#0a1628] mb-0.5">{sub.title}</div>
                            <div className="text-xs text-gray-500 leading-relaxed">{sub.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-[#0a1628] uppercase tracking-widest mb-4">Why Choose This Service</h3>
                    <ul className="space-y-2.5">
                      {service.whyUs.map((w) => (
                        <li key={w} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
            Our team is ready to build a tailored logistics solution for your business. Let's talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a1628] bg-white rounded-sm hover:bg-gray-100 transition-colors"
          >
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
