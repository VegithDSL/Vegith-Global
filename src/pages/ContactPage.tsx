import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const offices = [
  {
    city: "Mumbai (Head Office)",
    address: `Guru Hargovindji Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093`,
    phone: "+91 99999 00001",
    email: "info@vegithglobal.com",
    mapUrl:"",
    mapsLink:"https://maps.app.goo.gl/SqWtsut4h4nDPnoD7",
  },

  {
    city: "Kolkata",
    address: `Sector 62, Noida, Uttar Pradesh – 201309 India`,
    phone: "+91 99999 00002",
    email: "Kolkata@vegithglobal.com",
    mapUrl:"https://www.google.com/maps/embed?pb=YOUR_DELHI_EMBED_URL",
    mapsLink:"https://maps.google.com/?q=Sector+62+Noida",
  },

  {
    city: "Bhiwandi",
    address: `Your Pune Address`,
    phone: "+91 99999 00003",
    email: "Bhewandi@vegithglobal.com",
    mapUrl:"https://www.google.com/maps/embed?pb=YOUR_PUNE_EMBED_URL",
    mapsLink:"https://maps.google.com/?q=Pune",
  },

  {
    city: "Bangalore",
    address: `Your Bangalore Address`,
    phone: "+91 99999 00004",
    email: "bangalore@vegithglobal.com",
    mapUrl:"",
    mapsLink:"https://maps.google.com/?q=Bangalore",
  },
];

export default function ContactPage() {
const [submitted, setSubmitted] = useState(false);
const [activeOffice, setActiveOffice] = useState(0);
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  office: "",
  message: "",
});

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:3001/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Failed to send enquiry");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send enquiry");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, #1a4e9b 0%, transparent 60%), radial-gradient(circle at 30% 80%, #e31e24 0%, transparent 40%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">Reach Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Whether you need a logistics solution, fleet capacity, or want to explore a long-term partnership — our team is ready to engage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600">Home</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Contact Us</span>
        </div>
      </div> */}

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Get in Touch</p>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Let's Talk Operations.</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Whether you need fleet capacity, a control tower solution, or an end-to-end logistics partner — we are ready to help.
                </p>
              </div>

              {/* Quick contact */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email Us", value: "info@vegithglobal.com" },
                  { icon: Phone, label: "Call Us", value: "+91 99999 00001" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat, 9:00 AM – 7:00 PM IST" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0a1628] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                      <div className="text-sm text-gray-700">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office selector */}
              <div>
                <p className="text-xs font-bold text-[#0a1628] uppercase tracking-widest mb-3">Our Offices</p>
                <div className="flex gap-2 mb-5">
                  {offices.map((o, i) => (
                    <button
                      key={o.city}
                      onClick={() => setActiveOffice(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        activeOffice === i
                          ? "bg-[#0a1628] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {o.city}
                    </button>
                  ))}
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#0a1628] mb-1">{offices[activeOffice].city}</div>
                    <div className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">
                      {offices[activeOffice].address}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-24 text-center rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1628] mb-2">Thank You!</h4>
                  <p className="text-sm text-gray-500 max-w-sm">Your enquiry has been received. Our team will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form
  className="space-y-4"
  onSubmit={handleSubmit}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                      <input
  type="text"
  required
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
  placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Company</label>
                      <input
  type="text"
  value={formData.company}
  onChange={(e) =>
    setFormData({ ...formData, company: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
  placeholder="Your company"
/>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email *</label>
                      <input
  type="email"
  required
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
  placeholder="you@company.com"
/>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</label>
                      <input
  type="tel"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white placeholder:text-gray-300"
  placeholder="+91 00000 00000"
/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Service of Interest</label>
                   <select
  value={formData.service}
  onChange={(e) =>
    setFormData({ ...formData, service: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white"
>
                      <option>Fleet Management</option>
                      <option>Distribution Management</option>
                      <option>Control Tower & Monitoring</option>
                      <option>Value-Added Services</option>
                      <option>End-to-End Partnership</option>
                      <option>Manpower Solutions (Vegith HR)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Office</label>
                   <select
  value={formData.office}
  onChange={(e) =>
    setFormData({ ...formData, office: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white"
>
                      <option value="">Select preferred office</option>
                      {offices.map((o) => <option key={o.city}>{o.city}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Message *</label>
                    <textarea
  rows={5}
  required
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all resize-none bg-white placeholder:text-gray-300"
  placeholder="Tell us about your operations, volumes, routes, and how we can support your business..."
/>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#0a1628" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2d4a")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0a1628")}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Enquiry"} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Our Presence</p>
              <h2 className="text-2xl font-bold text-[#0a1628]">Pan-India Operations</h2>
            </div>
            <div className="flex gap-2">
              {offices.map((o, i) => (
                <button
                  key={o.city}
                  onClick={() => setActiveOffice(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeOffice === i ? "bg-[#0a1628] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {o.city}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "450px" }}>
            <iframe
              title={`Map – ${offices[activeOffice].city}`}
              src={offices[activeOffice].mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 flex-1">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="text-xs text-gray-600 whitespace-pre-line leading-relaxed">{offices[activeOffice].address}</div>
            </div>
                  <a
                   href={offices[activeOffice].mapsLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-lg transition-colors whitespace-nowrap"
                   style={{ backgroundColor: "#0a1628" }}
                 >
                   Open in Maps
                   <ArrowRight className="w-4 h-4" />
                 </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
