import { motion } from "framer-motion";
import { PDFDocumentCard } from "@/components/PDFDocumentCard";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer"; 
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const financialDocuments = [
  {
    id: 1,
    name: "Audit Committee Policy",
    fy: "2026",
    pdfUrl: "/documents/2026_Audit Committee_Policy_VGSL.pdf",
  },
];
export function FinancialDataPages() {
 return (
  
  <>
    <Navbar />

    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pb-24"
    >
      <div className="bg-[#0a1628] pt-32 pb-24 px-6 lg:px-10 border-[]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#e31e24] text-sm font-bold tracking-widest uppercase mb-4"
          >
            Investor Relations / Financial Data
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Financial Data
          </motion.h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">
          <div className="flex flex-col gap-4">
            {financialDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <PDFDocumentCard 
                  name={doc.name} 
                  fy={doc.fy} 
                  pdfUrl={doc.pdfUrl} 
                />
              </motion.div>
            ))}
            
            {financialDocuments.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No financial documents available at this time.
              </div>
            )}
          </div>
        </div>
      </div>
   </motion.main>

    <Footer />
    <WhatsAppButton/>
  </>
);
}
export default FinancialDataPages;
