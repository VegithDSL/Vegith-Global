import { useState } from "react";
import { motion } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PDFDocumentCard } from "@/components/PDFDocumentCard";
import { corporatePolicies } from "@/data/corporatePolicies";

export default function CorporatePoliciesPage() {
  const [activeTab, setActiveTab] = useState("csr");

  const policies = {
    csr: {
      title: "Corporate Social Responsibility Policy",
      docs: corporatePolicies.csr,
    },
    nomination: {
      title: "Nomination & Remuneration Policy",
      docs: corporatePolicies.nominationRemuneration,
    },
    posh: {
      title: "Policy on Prevention of Sexual Harassment at Workplace",
      docs: corporatePolicies.posh,
    },
  };

  const currentPolicy =
    policies[activeTab as keyof typeof policies];

  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white min-h-screen"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#02142d] to-[#0a1628] pt-30 pb-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#ff5a5f] text-sm font-bold tracking-[0.2em] uppercase mb-6">
              Corporate
            </p>

            <h1 className="text-white text-5xl lg:text-6xl font-bold mb-6">
              Corporate Policies
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl">
              Governance policies, compliance frameworks and
              corporate responsibility documents.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => setActiveTab("csr")}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeTab === "csr"
                    ? "bg-[#0a1628] text-white"
                    : "bg-gray-100"
                }`}
              >
                CSR Policy
              </button>

              <button
                onClick={() => setActiveTab("nomination")}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeTab === "nomination"
                    ? "bg-[#0a1628] text-white"
                    : "bg-gray-100"
                }`}
              >
                Nomination & Remuneration
              </button>

              <button
                onClick={() => setActiveTab("posh")}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeTab === "posh"
                    ? "bg-[#0a1628] text-white"
                    : "bg-gray-100"
                }`}
              >
                POSH Policy
              </button>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0a1628]">
                {currentPolicy.title}
              </h2>
            </div>

            <div className="space-y-4">
              {currentPolicy.docs.map((doc) => (
                <PDFDocumentCard
                  key={doc.id}
                  name={doc.name}
                  pdfUrl={doc.pdfUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}