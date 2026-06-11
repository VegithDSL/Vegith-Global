import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});
const handleSubmit = async (e: any) => {
  e.preventDefault();

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
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send enquiry");
  }
};
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top CTA band — allcargo-style */}
        <div
          className="rounded-xl p-10 md:p-14 mb-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "#0a1628" }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to optimise your supply chain?</h2>
            <p className="text-white/60 text-sm max-w-lg">
              Speak with our enterprise logistics team to explore how Vegith Global can serve your operations.
            </p>
          </div>
          <a
            href="mailto:info@vegithglobal.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a1628] bg-white rounded-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Email Us Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Get in Touch</p>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-5">TEST CONTACT FORM 123.</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Whether you need fleet capacity, a control tower solution, or an end-to-end logistics partner, we are ready to help.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Corporate HQ", detail: "Mumbai, Maharashtra, India\nPan-India Operations" },
                { icon: Mail, title: "Email", detail: "info@vegithglobal.com" },
                { icon: Phone, title: "Phone", detail: "Available on request" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#0a1628" }}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.title}</div>
                    <div className="text-sm text-gray-700 whitespace-pre-line">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#0a1628] mb-2">Message Sent!</h4>
                <p className="text-sm text-gray-500">Our team will get back to you within 24 hours.</p>
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
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    data-testid="input-name"
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
                       setFormData({
                         ...formData,
                         company: e.target.value,
                       })
                     }
                     data-testid="input-company"
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
                         setFormData({
                           ...formData,
                           email: e.target.value,
                         })
                       }
                       data-testid="input-email"
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
                         setFormData({
                           ...formData,
                           phone: e.target.value,
                         })
                       }
                       data-testid="input-phone"
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
                     setFormData({
                       ...formData,
                       service: e.target.value,
                     })
                   }
                   data-testid="select-service"
                   className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all bg-white"
                 >
                   <option value="">Select a service</option>
                   <option>Fleet Management</option>
                   <option>Distribution Management</option>
                   <option>Control Tower & Monitoring</option>
                   <option>Value Added Services</option>
                   <option>End-to-End Partnership</option>
                 </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    data-testid="textarea-message"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a1628] focus:ring-1 focus:ring-[#0a1628]/20 transition-all resize-none bg-white placeholder:text-gray-300"
                    placeholder="Tell us about your operations and requirements..."
                  />
                </div>
                <button
                  type="submit"
                  data-testid="btn-submit"
                  className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: "#0a1628" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2d4a")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0a1628")}
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
