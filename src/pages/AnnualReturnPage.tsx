import { motion } from "framer-motion";
import { PDFDocumentCard } from "@/components/PDFDocumentCard";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer"; 
import { WhatsAppButton } from "@/components/WhatsAppButton";

const annualReturnDocuments = [
  {
    id: 1,
    name: "Annual Return FY 2024-25",
    fy: "2024-25",
    pdfUrl: "/documents/Annual Return_VGSL_2024-25.pdf",
  },
];

export default function AnnualReturnPage() {
  return (

    <>
    <Navbar />
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pb-24"
    >
      <div className="bg-[#0a1628] pt-32 pb-24 px-6 lg:px-10 ">
        <div className="max-w-5xl mx-auto">
          <div className="text-[#e31e24] text-sm font-bold tracking-widest uppercase mb-4">
            Investor Relations / Annual Return
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Annual Return
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">
                <div className="flex flex-col gap-4">
                  {annualReturnDocuments.map((doc, index) => (
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
                  
                  {annualReturnDocuments.length === 0 && (
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