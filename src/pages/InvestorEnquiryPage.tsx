import { motion } from "framer-motion";
import { Building2, MapPin, Globe, Phone, Mail, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer"; 
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function InvestorEnquiryPage() {
  return (
     <>
    <Navbar />

    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pb-24"
    >
      <div className="bg-[#0a1628] pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#e31e24] text-sm font-bold tracking-widest uppercase mb-4"
          >
            Investor Relations / Enquiry
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Investor Enquiry
          </motion.h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-[#e31e24]" />
            </div>
            <h2 className="text-xl font-bold text-[#0a1628] mb-2">
              Registrar & Share Transfer Agent
            </h2>
            <p className="text-[#e31e24] font-semibold mb-6">
              MUFG Intime India Private Limited<br/>
              <span className="text-xs text-gray-500 font-medium">(Formerly Link Intime India Private Limited)</span>
            </p>
            
            <div className="space-y-5 flex-1">
              <div className="flex gap-3 text-gray-600">
                <MapPin className="w-5 h-5 shrink-0 text-gray-400 mt-0.5" />
                <span className="text-sm">
                  C-101, Embassy 247,<br/>
                  L.B.S. Marg, Vikhroli (West),<br/>
                  Mumbai – 400083
                </span>
              </div>
              <div className="flex gap-3 text-gray-600">
                <Globe className="w-5 h-5 shrink-0 text-gray-400" />
                <a href="http://www.in.mpms.mufg.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#e31e24] transition">
                  www.in.mpms.mufg.com
                </a>
              </div>
              <div className="flex gap-3 text-gray-600">
                <Phone className="w-5 h-5 shrink-0 text-gray-400" />
                <span className="text-sm">
                  +91 22 4918 6000 (Extn: 2448)<br/>
                  Mobile: 8108679223
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-[#e31e24]" />
            </div>
            <h2 className="text-xl font-bold text-[#0a1628] mb-2">
              Company Secretary
            </h2>
            <p className="text-[#e31e24] font-semibold mb-6">
              Arvind Mishra
            </p>
            
            <div className="space-y-5 flex-1">
              <div className="flex gap-3 text-gray-600 items-center">
                <Mail className="w-5 h-5 shrink-0 text-gray-400" />
                <a href="mailto:arvind.mishra@vegithglobal.com" className="text-sm hover:text-[#e31e24] transition break-all">
                  arvind.mishra@vegithglobal.com
                </a>
              </div>
              <div className="flex gap-3 text-gray-600 items-center">
                <Phone className="w-5 h-5 shrink-0 text-gray-400" />
                <span className="text-sm">
                  +91 8860669979
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.main>

      <Footer />
      <WhatsAppButton/>
  </>
  );
}
