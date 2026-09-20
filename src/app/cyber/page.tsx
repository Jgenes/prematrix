"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, FiShield, FiServer, FiLock, 
  FiActivity, FiSearch, FiCheckCircle,
  FiAlertTriangle, FiTarget, FiArrowRight, FiCpu, FiEye
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CyberSecurityPage = () => {
  const [selectedOperation, setSelectedOperation] = useState<null | number>(null);

  const securityOperations = [
    {
      title: "24/7 SOC & Managed Detection (MDR)",
      icon: FiActivity,
      tag: "Active Operations",
      content: {
        problem: "Modern threat actors operate outside normal business hours with targeted attacks that bypass basic antiviruses.",
        solution: "Continuous 24/7 security monitoring, SIEM engineering, log onboarding, and proactive threat hunting with rapid incident response retainers.",
        deliverables: ["SIEM Log Architecture", "24/7 Triage & Escalation SLA", "Monthly Executive & Technical Reports", "Threat Hunting Summary"]
      }
    },
    {
      title: "Offensive Security & Pen Testing",
      icon: FiTarget,
      tag: "Vulnerability Validation",
      content: {
        problem: "Unidentified flaws in web applications, mobile apps, and network perimeters lead to unauthorized access and data breaches.",
        solution: "Rigorous ethical penetration testing covering external/internal networks, web & mobile applications, APIs, red teaming, and social engineering simulations.",
        deliverables: ["Penetration Test Report", "CVSS Risk Scoring Matrix", "Source Code Audit Findings", "Prioritised Remediation Guide"]
      }
    },
    {
      title: "Digital Forensics & Incident Response (DFIR)",
      icon: FiSearch,
      tag: "Post-Incident & Legal",
      content: {
        problem: "Inability to determine attack vectors, contaminated evidence chains, and regulatory reporting non-compliance following a security incident.",
        solution: "Forensic evidence acquisition with strict legal chain of custody, deep memory/disk artifact analysis, root-cause identification, and expert testimony reporting.",
        deliverables: ["Forensic Investigation Report", "Chain of Custody Dossier", "Root Cause Analysis (RCA)", "Regulatory & Legal Briefing"]
      }
    },
    {
      title: "Identity & Privileged Access (IAM/PAM)",
      icon: FiLock,
      tag: "Zero Trust Core",
      content: {
        problem: "Credential stuffing, compromised privileged accounts, and lack of multi-factor enforcement across enterprise systems.",
        solution: "Enterprise IAM/PAM architecture, mandatory Multi-Factor Authentication (MFA), Single Sign-On (SSO), and periodic access recertification.",
        deliverables: ["PAM Architecture Design", "MFA Enforcement Policy", "Least-Privilege Role Map", "Access Recertification Schedule"]
      }
    },
    {
      title: "Endpoint & Perimeter Hardening",
      icon: FiShield,
      tag: "Layered Defense",
      content: {
        problem: "Unmanaged remote laptops, lack of endpoint visibility, and vulnerable network perimeters.",
        solution: "Next-generation firewalls (NGFW), WAF, DDoS mitigation, micro-segmentation, and EDR/XDR deployment across all workstations and servers.",
        deliverables: ["Next-Gen Firewall Topology", "EDR/XDR Telemetry Config", "Data Loss Prevention (DLP) Rules", "Network Segmentation Model"]
      }
    },
    {
      title: "Cyber Resilience & Immutable Backup",
      icon: FiServer,
      tag: "Business Continuity",
      content: {
        problem: "Ransomware strains targeting enterprise backups to force extortion payments.",
        solution: "Write-once-read-many (WORM) immutable backups, automated air-gapped replication, and scheduled disaster recovery simulation drills.",
        deliverables: ["Immutable Backup Architecture", "Ransomware Recovery Playbook", "RPO / RTO Validation Report", "Crisis Simulation Exercise Log"]
      }
    }
  ];

  const irPhases = [
    { step: "01", name: "Prepare", desc: "Hardening, IR playbooks, sensor telemetry, and on-call escalation retainers." },
    { step: "02", name: "Detect", desc: "Real-time SIEM alerts, anomalous user behavior detection, and initial triage." },
    { step: "03", name: "Contain", desc: "Network isolation, session termination, and malicious process suspension." },
    { step: "04", name: "Eradicate", desc: "Root-cause removal, malware elimination, and patch verification." },
    { step: "05", name: "Recover & Learn", desc: "System restoration, post-incident review, and defensive hardening." },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="Cybersecurity & Forensics"
        description="Layered, intelligence-led cyber defence: 24/7 SOC, penetration testing, digital forensics, and incident response for banks, MNOs, and enterprise networks."
      />

      {/* === Technical Problem Space === */}
      <section className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-3">
                Mission-Critical Defense
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight mb-6">
                Prevent, Detect, Respond & Recover With Forensic Rigor
              </h1>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-4">
                Financial services, telecom operators, mining houses, and government infrastructure are among the most heavily targeted sectors in East Africa. PrimeMatrix delivers layered, intelligence-led defence combining 24/7 SOC monitoring, offensive penetration testing, and digital forensic capabilities.
              </p>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-6">
                We align our architecture with the National Cybercrimes Act, Bank of Tanzania guidelines, TCRA cybersecurity frameworks, and NIST/ISO 27001 standards to ensure technical resilience and legal compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 transition-all"
                >
                  Request Security Assessment
                </Link>
                <a
                  href="#operations-grid"
                  className="rounded-sm border border-gray-300 dark:border-gray-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-primary transition-all"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                  Protective Technologies Stack
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <strong className="text-primary block uppercase text-[10.5px]">Network & Perimeter:</strong>
                    <span>Next-gen firewalls (NGFW), WAF, DDoS mitigation, NAC, micro-segmentation.</span>
                  </div>
                  <div>
                    <strong className="text-primary block uppercase text-[10.5px]">Identity & Access:</strong>
                    <span>IAM, PAM, hardware token MFA, SSO, privileged session auditing.</span>
                  </div>
                  <div>
                    <strong className="text-primary block uppercase text-[10.5px]">Endpoint & Email:</strong>
                    <span>EDR/XDR telemetry, mobile device management (MDM), secure email gateway, DLP.</span>
                  </div>
                  <div>
                    <strong className="text-primary block uppercase text-[10.5px]">Application Security:</strong>
                    <span>Secure SDLC, DevSecOps pipelines, automated SAST/DAST code scanning.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Incident Response Lifecycle === */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[650px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">
              Structured Playbook
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
              Incident Response Lifecycle
            </h2>
            <p className="mt-2 text-xs text-body-color dark:text-gray-400">
              Battle-tested incident handling ensuring containment within minutes and verifiable recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {irPhases.map((phase, pIdx) => (
              <div key={pIdx} className="bg-white dark:bg-gray-800 p-5 rounded-sm border border-gray-200 dark:border-gray-700 shadow-xs">
                <span className="text-xl font-bold text-primary block mb-1">{phase.step}</span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">{phase.name}</h4>
                <p className="text-[11.5px] leading-relaxed text-body-color dark:text-gray-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Core Capabilities Grid === */}
      <section id="operations-grid" className="py-20">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Cybersecurity & Forensics Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityOperations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => setSelectedOperation(idx)}
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
                      <span>View Technical Specs</span>
                      <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Technical Deliverables Modal === */}
      <AnimatePresence>
        {selectedOperation !== null && (
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
                    {securityOperations[selectedOperation].tag}
                  </span>
                  <h3 className="text-base font-bold text-black dark:text-white uppercase tracking-tight">
                    {securityOperations[selectedOperation].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedOperation(null)}
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
                    {securityOperations[selectedOperation].content.solution}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded border border-gray-100 dark:border-gray-700">
                  <h4 className="text-[11px] font-bold uppercase text-black dark:text-white tracking-widest mb-3">
                    Deliverables & Audit Evidence
                  </h4>
                  <div className="space-y-2">
                    {securityOperations[selectedOperation].content.deliverables.map((item, dIdx) => (
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
                  onClick={() => setSelectedOperation(null)}
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

export default CyberSecurityPage;