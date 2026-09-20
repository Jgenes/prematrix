"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, FiShield, FiLayers, FiSettings, 
  FiCheckCircle, FiAlertTriangle, FiTarget, FiActivity,
  FiFileText, FiUserCheck, FiDatabase, FiLock, FiArrowRight
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DataProtectionPage = () => {
  const [selectedPhase, setSelectedPhase] = useState<null | number>(null);

  const pdpaPhases = [
    {
      step: 1,
      name: "Compliance Assessment",
      tag: "Audit & Discovery",
      activities: "Enterprise-wide review, personal data inventory and classification, data-flow mapping, departmental interviews across HR, finance, IT, marketing, and operations.",
      deliverables: ["Comprehensive Assessment Report", "Initial Gap Report", "Compliance Scorecard", "Executive Board Presentation"],
      icon: FiLayers,
    },
    {
      step: 2,
      name: "Gap Analysis & Risk Modeling",
      tag: "Benchmarking",
      activities: "Policy, technical-control, third-party vendor risk and governance benchmarking against PDPA 2022 and international GDPR/ISO 27701 standards.",
      deliverables: ["Detailed Gap Analysis Matrix", "Enterprise Data Risk Register", "Prioritised Remediation Roadmap", "Resource Allocation Plan"],
      icon: FiAlertTriangle,
    },
    {
      step: 3,
      name: "Policy & Framework Development",
      tag: "Documentation",
      activities: "Drafting compliant internal policies, operational procedures, subject consent forms, privacy notices, and statutory registers tailored to organizational workflow.",
      deliverables: ["Data Protection & Privacy Policy Pack", "Data Retention & Disposal Schedule", "Incident & Breach Notification Pack", "ROPA & Consent Registers"],
      icon: FiFileText,
    },
    {
      step: 4,
      name: "PDPC Statutory Registration",
      tag: "Regulatory Filing",
      activities: "Assisting Data Controllers and Data Processors in compiling statutory documentation, appointing/supporting DPO, submitting to PDPC, and audit readiness.",
      deliverables: ["Data Controller / Processor Filing File", "DPO Designation Formalities", "PDPC Submission Verification", "Readiness Assessment Certificate"],
      icon: FiShield,
    },
    {
      step: 5,
      name: "Technical & Operational Rollout",
      tag: "Implementation",
      activities: "Deploying governance structures, establishing Data Protection Committees, enforcing technical controls (RBAC, encryption, retention limits), and vendor agreements.",
      deliverables: ["Rollout Implementation Report", "Control Verification Matrix", "Standard Data Protection Clauses (SCCs)", "Third-Party Assessment File"],
      icon: FiSettings,
    },
    {
      step: 6,
      name: "Training & Institutional Awareness",
      tag: "Capacity Building",
      activities: "Targeted training sessions for board executives, general employees, HR, procurement, legal, and ICT technical operations teams.",
      deliverables: ["Executive Briefing Packs", "Staff Awareness Modules", "Verifiable Attendance Records", "Training Certificates of Completion"],
      icon: FiUserCheck,
    },
    {
      step: 7,
      name: "Monitoring & Annual Assurance",
      tag: "Continuous Audit",
      activities: "Quarterly and annual compliance reviews, statutory DPIA audits for new software/systems, ongoing advisory support, and continuous improvement.",
      deliverables: ["Quarterly Compliance Review", "Annual Statutory Audit Report", "Ad-hoc DPIA Evaluation Records", "Updated Risk & ROPA Registers"],
      icon: FiActivity,
    },
  ];

  const gapAreas = [
    { area: "Governance", issue: "No Data Protection Officer (DPO) appointed, weak accountability, no compliance committee." },
    { area: "Policies & Procedures", issue: "Missing, outdated or unapproved data privacy policies; lack of clear staff directives." },
    { area: "Data Processing", issue: "Unknown cross-border data flows, uncontrolled processing, missing Record of Processing Activities (ROPA)." },
    { area: "Security Controls", issue: "Weak password policies, shared administrative accounts, unencrypted databases, absence of audit logging." },
    { area: "Data Subject Rights", issue: "No formal workflows, forms, or timelines for handling access, correction, and deletion requests." },
    { area: "Third Parties & Processors", issue: "Missing data processing agreements, unvetted cloud suppliers, lack of vendor audit clauses." },
    { area: "PDPC Registration", issue: "Failure to register with the Personal Data Protection Commission, expired status, or deficient filings." },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="PDPA Compliance & Data Protection"
        description="End-to-end Personal Data Protection Act, 2022 (PDPA) advisory, policy formulation, PDPC registration, and technical governance for Tanzanian enterprises."
      />

      {/* === Technical Context === */}
      <section className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-3">
                Regulatory Mandate
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight mb-6">
                End-to-End PDPA 2022 Compliance & Privacy Governance
              </h1>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-4">
                The Personal Data Protection Act, 2022 governs how personal data is collected, processed, stored, shared, and transferred in Tanzania. The Personal Data Protection Commission (PDPC) oversees compliance. Every organisation handling employee, customer, patient, student, supplier, or visitor data—including CCTV, biometrics, websites, mobile apps, and ERP systems—is legally required to comply.
              </p>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-6">
                PrimeMatrix provides a complete, turnkey end-to-end solution: from initial discovery audits and statutory PDPC registration to technical controls and annual assurance reviews.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 transition-all"
                >
                  Book PDPA Health Check
                </Link>
                <a
                  href="#seven-phases"
                  className="rounded-sm border border-gray-300 dark:border-gray-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-primary transition-all"
                >
                  View 7-Phase Programme
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                  What We Develop For Your Institution
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-primary uppercase text-[11px] mb-1">Corporate Policies</h4>
                    <p className="text-body-color dark:text-gray-400">Data Protection Policy, Privacy Notices, Information Security Policy, Data Retention Schedule, Access Control Guidelines.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-[11px] mb-1">Operating Procedures</h4>
                    <p className="text-body-color dark:text-gray-400">Consent Management, Data Subject Rights (Access/Deletion), Breach Incident Response, Third-Party Cross-Border Transfer Rules.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-[11px] mb-1">Registers & Statutory Forms</h4>
                    <p className="text-body-color dark:text-gray-400">ROPA, Data Asset Inventory, Risk Register, Consent Register, Breach Log, Vendor Processing Agreements (DPAs).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === The Seven-Phase PDPA Compliance Programme === */}
      <section id="seven-phases" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">
              Implementation Roadmap
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Seven-Phase PDPA Compliance Programme
            </h2>
            <p className="mt-3 text-sm text-body-color dark:text-gray-400">
              A structured, evidence-backed pathway taking institutions from baseline uncertainty to verified PDPC registration and sustained audit readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdpaPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => setSelectedPhase(idx)}
                  className="cursor-pointer bg-white dark:bg-gray-800 p-7 rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="h-8 w-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {phase.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded">
                        {phase.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {phase.name}
                    </h3>
                    <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed mb-4">
                      {phase.activities}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                      <span>View deliverables</span>
                      <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Typical Gaps We Find and Fix === */}
      <section className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="mb-12 border-l-4 border-primary pl-5">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">Audit Diagnostic</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Typical Compliance Gaps We Find and Remediate
            </h2>
            <p className="mt-2 text-sm text-body-color dark:text-gray-300 max-w-[780px]">
              Our audits regularly discover critical exposures before regulatory authorities or breach events occur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gapAreas.map((item, gIdx) => (
              <div
                key={gIdx}
                className="p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-sm shadow-xs flex items-start gap-4"
              >
                <div className="h-8 w-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiAlertTriangle size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1">
                    {item.area}
                  </h4>
                  <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed">
                    {item.issue}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition Callout from Page 25 */}
          <div className="mt-12 p-8 bg-primary/5 dark:bg-primary/10 rounded-sm border border-primary/20 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Our Value Proposition
            </h3>
            <p className="text-sm md:text-base font-medium text-black dark:text-white max-w-[850px] mx-auto leading-relaxed">
              &ldquo;We evaluate risks. We identify compliance gaps. We develop governance frameworks. We implement technical controls. We train staff. We support registration. We monitor compliance, and move organisations from uncertainty to full compliance.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* === Technical Deliverables Modal === */}
      <AnimatePresence>
        {selectedPhase !== null && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-dark w-full max-w-xl rounded-sm border-t-4 border-primary shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-primary">
                    Phase {pdpaPhases[selectedPhase].step} • {pdpaPhases[selectedPhase].tag}
                  </span>
                  <h3 className="text-lg font-bold text-black dark:text-white uppercase tracking-tight">
                    {pdpaPhases[selectedPhase].name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="text-body-color hover:text-primary transition-colors"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-primary tracking-widest mb-2">
                    Key Activities
                  </h4>
                  <p className="text-xs leading-relaxed text-body-color dark:text-gray-300">
                    {pdpaPhases[selectedPhase].activities}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded border border-gray-100 dark:border-gray-700">
                  <h4 className="text-[11px] font-bold uppercase text-black dark:text-white tracking-widest mb-3">
                    Statutory Deliverables
                  </h4>
                  <div className="space-y-2">
                    {pdpaPhases[selectedPhase].deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-body-color dark:text-gray-300">
                        <FiCheckCircle className="text-primary flex-shrink-0" size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-end bg-gray-50/50 dark:bg-gray-800/20">
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="px-6 py-2.5 bg-primary text-white text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DataProtectionPage;