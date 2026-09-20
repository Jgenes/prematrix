"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiAlertTriangle,
  FiLayers,
  FiCheckCircle,
  FiDatabase,
  FiSettings,
  FiX,
  FiActivity,
  FiSmartphone,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SoftwareDigitalBankingPage = () => {
  const [selectedSolution, setSelectedSolution] = useState<null | number>(null);

  const solutionAreas = [
    {
      title: "Core & Channel Integration",
      icon: FiLayers,
      tag: "CBS & Switch",
      content: {
        problem: "Legacy core banking and switch platforms that cannot support modern digital channels without breaking.",
        solution: "Decoupled middleware and Enterprise Service Bus (ESB) modernisation connecting core banking (CBS), ATM, POS terminals, and agent-banking networks.",
        deliverables: ["CBS Integration Blueprint", "Switch Interface Specs (ISO 8583)", "ESB Middleware Architecture", "Agent Network Test Logs"]
      }
    },
    {
      title: "API & Open Banking Gateways",
      icon: FiSettings,
      tag: "Interoperability",
      content: {
        problem: "Slow third-party partner onboarding and absence of secure, throttled API developer gateways.",
        solution: "Enterprise API gateways with developer portals, rate limiting, mutual TLS authentication, and real-time instant payment integration.",
        deliverables: ["API Gateway Configuration", "Developer Portal Sandbox", "OAuth2 / mTLS Security Rules", "Partner Onboarding Guide"]
      }
    },
    {
      title: "Fintech & Mobile Money Systems",
      icon: FiSmartphone,
      tag: "Digital Rails",
      content: {
        problem: "Poor bank-to-wallet conversion, network dropouts on USSD channels, and transaction reconciliation discrepancies.",
        solution: "High-concurrency mobile banking applications, USSD integrations, instant bank-to-wallet MNO connections, bulk disbursements, and automated reconciliation.",
        deliverables: ["USSD Session Flow Map", "MNO Integration Protocol", "Bulk Disbursement Logic", "Daily Reconciliation Module"]
      }
    },
    {
      title: "Enterprise Applications & ERP",
      icon: FiDatabase,
      tag: "Business Systems",
      content: {
        problem: "Fragmented operational software causing reporting lag and disjointed departmental records.",
        solution: "Custom ERP, HRMS, CRM, document management systems, educational management, and logistics optimization platforms.",
        deliverables: ["ERP Architecture Schema", "Role-Based Access Mapping", "Operational Workflow Logic", "BI Analytics Dashboards"]
      }
    },
    {
      title: "Data Platforms & AI Analytics",
      icon: FiActivity,
      tag: "Intelligence",
      content: {
        problem: "Unused operational data and failure to detect financial fraud patterns before settlements occur.",
        solution: "Enterprise data pipelines, governance platforms, real-time fraud analytics engines, credit scoring models, and automated customer insights.",
        deliverables: ["Data Pipeline Topology", "Credit Scoring Algorithm Manual", "Fraud Detection Rulebook", "BI Reporting Schema"]
      }
    },
    {
      title: "Custom Development & Legacy Modernisation",
      icon: FiCode,
      tag: "Secure SDLC",
      content: {
        problem: "Brittle legacy codebases with technical debt and missing documentation that impede innovation.",
        solution: "Modern microservices engineering, web and mobile app development built on DevSecOps pipelines with automated SAST/DAST testing.",
        deliverables: ["DevSecOps Pipeline Config", "API Documentation (Swagger)", "Automated Test Suite", "Source Code Audit Report"]
      }
    },
  ];

  const architecturePrinciples = [
    {
      layer: "Channels",
      principle: "Mobile, web, USSD, agent POS, and partner APIs share a consistent user experience under one unified security model.",
    },
    {
      layer: "Integration",
      principle: "API-led, event-driven, and version-controlled with rate throttling, mTLS authentication, and immutable audit logging.",
    },
    {
      layer: "Core Systems",
      principle: "Loose coupling to core banking and MNO platforms so downstream updates or core changes never break external channels.",
    },
    {
      layer: "Data & Security",
      principle: "End-to-end encryption in transit and at rest, tokenisation, least privilege, strict Tanzanian data residency, and traceability.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="Software & Digital Banking"
        description="Engineering secure digital financial rails: core banking integration, API open banking, mobile money, ERP platforms, and custom development."
      />

      {/* === Technical Problem Space === */}
      <section className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-3">
                Digital Financial Rails
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight mb-6">
                Interoperable, Scalable Software & Digital Banking Platforms
              </h1>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-4">
                We build and integrate the digital rails of modern finance and telecom: secure, interoperable, and engineered to scale smoothly with exponential transaction growth. Our fintech and enterprise software engineering is delivered strictly on a secure software development lifecycle (Secure SDLC).
              </p>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-6">
                Whether deploying national instant payment integrations, bank-to-wallet channels, or enterprise ERPs, our systems are built with loose coupling to ensure continuous uptime during upgrades.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 transition-all"
                >
                  Initiate Software Scoping
                </Link>
                <a
                  href="#architecture-principles"
                  className="rounded-sm border border-gray-300 dark:border-gray-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-primary transition-all"
                >
                  Architecture Principles
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                  Key Capabilities
                </h3>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Core Banking:</strong> Switch integration, ATM/POS connectivity, agent banking.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Open Banking:</strong> API gateways, developer portals, micro-services.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Mobile Money:</strong> USSD, bank-to-wallet, collections, disbursements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Enterprise ERP:</strong> HRMS, logistics, custom business applications.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Solution Areas Grid === */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Software & Banking Solution Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => setSelectedSolution(idx)}
                  className="cursor-pointer bg-white dark:bg-gray-800 p-7 rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed mb-4">
                      {item.content.problem}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                      <span>View Architecture Specs</span>
                      <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Reference Architecture Principles === */}
      <section id="architecture-principles" className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="mb-12 border-l-4 border-primary pl-5">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">Design Standards</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Reference Architecture Principles
            </h2>
            <p className="mt-2 text-sm text-body-color dark:text-gray-300 max-w-[780px]">
              Every digital system engineered by PrimeMatrix complies with these non-negotiable architectural principles.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900/50 text-black dark:text-white uppercase font-bold text-[11px] tracking-wider border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-4 px-6 w-1/4">Architecture Layer</th>
                  <th className="py-4 px-6 w-3/4">Design Principle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {architecturePrinciples.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <td className="py-4 px-6 font-bold text-black dark:text-white">{row.layer}</td>
                    <td className="py-4 px-6 text-body-color dark:text-gray-300 leading-relaxed">{row.principle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === Technical Deliverables Modal === */}
      <AnimatePresence>
        {selectedSolution !== null && (
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
                    {solutionAreas[selectedSolution].tag}
                  </span>
                  <h3 className="text-base font-bold text-black dark:text-white uppercase tracking-tight">
                    {solutionAreas[selectedSolution].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="text-body-color hover:text-primary transition-colors"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-primary tracking-widest mb-1.5">
                    Engineering Strategy
                  </h4>
                  <p className="text-xs leading-relaxed text-body-color dark:text-gray-300">
                    {solutionAreas[selectedSolution].content.solution}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded border border-gray-100 dark:border-gray-700">
                  <h4 className="text-[11px] font-bold uppercase text-black dark:text-white tracking-widest mb-3">
                    Deliverables & Code Artefacts
                  </h4>
                  <div className="space-y-2">
                    {solutionAreas[selectedSolution].content.deliverables.map((item, dIdx) => (
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
                  onClick={() => setSelectedSolution(null)}
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

export default SoftwareDigitalBankingPage;