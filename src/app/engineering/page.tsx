"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiAlertTriangle,
  FiLayers,
  FiCheckCircle,
  FiDatabase,
  FiCloud,
  FiShield,
  FiX,
  FiCpu,
  FiActivity,
  FiWifi,
  FiArrowRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const InfrastructureNetworkingPage = () => {
  const [selectedDomain, setSelectedDomain] = useState<null | number>(null);

  const capabilities = [
    {
      title: "Data Centre & Server Rooms",
      icon: FiServer,
      tag: "Tier II / III",
      content: {
        problem: "Inadequate cooling, unstable power feeds, and lack of environmental suppression causing physical downtime.",
        solution: "Turnkey design, construction, and certification of Tier II and Tier III-aligned data facilities, precision cooling, fire suppression, and structured cabling.",
        deliverables: ["Tier Compliance Audit", "HVAC & Power Load Sizing", "Structured Cabling Schema", "Environmental Telemetry Config"]
      }
    },
    {
      title: "Enterprise Networking & SD-WAN",
      icon: FiWifi,
      tag: "Connectivity",
      content: {
        problem: "Network bottlenecks, high branch latency, and insecure point-to-point connections across multi-branch organizations.",
        solution: "High-throughput LAN, WAN, SD-WAN, and MPLS integration, campus Wi-Fi, and resilient branch/ATM connectivity for banks.",
        deliverables: ["SD-WAN Policy Map", "Network Routing Architecture", "Branch Topology Dossier", "QoS Traffic Optimization"]
      }
    },
    {
      title: "Cloud & Virtualisation Landing Zones",
      icon: FiCloud,
      tag: "Hybrid Infrastructure",
      content: {
        problem: "Sprawling infrastructure, underutilized bare-metal servers, and unmanaged public cloud operational expenses.",
        solution: "Enterprise virtualization (VMware, Hyper-V, Kubernetes), private cloud landing zones, and compliant data-resident hybrid cloud architectures.",
        deliverables: ["Virtualization Cluster Design", "Kubernetes Ingress Setup", "Cloud Cost Governance Rules", "Migration Playbook"]
      }
    },
    {
      title: "Compute, Storage & Immutable Backup",
      icon: FiDatabase,
      tag: "Data Core",
      content: {
        problem: "Slow database storage I/O and vulnerability to ransomware tampering with active and backup storage arrays.",
        solution: "Hyperconverged infrastructure (HCI), SAN/NAS object storage, and automated 3-2-1 ransomware-resilient backup with off-site replication.",
        deliverables: ["Storage IOPS Analysis", "Immutable Backup Policy", "HCI Deployment Matrix", "RTO/RPO Recovery Targets"]
      }
    },
    {
      title: "Telecom & MNO Support",
      icon: FiLayers,
      tag: "Carrier-Grade",
      content: {
        problem: "Demanding uptime requirements adjacent to the mobile core and edge telecom tower facilities.",
        solution: "Carrier-grade IT platforms adjacent to the mobile core, edge-facility IT integration, and hosting support for billing, OSS/BSS platforms.",
        deliverables: ["Edge Facility Integration Map", "OSS/BSS Hosting Topology", "Tower-Site IT Hardening", "Carrier Link Failover Tests"]
      }
    },
    {
      title: "Platform Management & SLA Support",
      icon: FiActivity,
      tag: "Operations",
      content: {
        problem: "Reactive maintenance leading to avoidable outages and delayed hardware lifecycle replacements.",
        solution: "Proactive 24/7 NOC monitoring, structured field maintenance, spare parts logistics, and strict SLA-backed lifecycle governance.",
        deliverables: ["24/7 NOC Runbooks", "Quarterly SLA Reports", "Hardware Lifecycle Roadmap", "Preventive Maintenance Schedule"]
      }
    },
  ];

  const slaTiers = [
    {
      tier: "Platinum",
      uptime: "99.99%",
      response: "15 minutes, 24/7",
      use: "Core banking, inter-bank switches, MNO mobile-money platforms",
    },
    {
      tier: "Gold",
      uptime: "99.9%",
      response: "30 minutes, 24/7",
      use: "Enterprise networks, primary data centres, mining site IT",
    },
    {
      tier: "Silver",
      uptime: "99.5%",
      response: "2 hours, business days + on-call",
      use: "Branch offices, administrative environments, retail sites",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="Infrastructure & Networking"
        description="Resilient physical and virtual infrastructure: Tier II/III data rooms, SD-WAN, private cloud, storage, and SLA-backed maintenance for banks, MNOs, and enterprise."
      />

      {/* === Technical Problem Space === */}
      <section className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-3">
                Resilient Foundations
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight mb-6">
                Planning, Supplying & Operating Zero-Interruption ICT Systems
              </h1>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-4">
                Reliable digital services start with resilient foundations. We plan, supply, and implement the physical and virtual infrastructure that keeps banks, mobile network operators, government ministries, and industrial mining sites running without interruption.
              </p>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-6">
                PrimeMatrix holds official licences from the Ubungo Municipal Council for <strong>Supply of ICT Equipment (Licence BL01396922025-2605186576)</strong> and <strong>ICT Consultancy (Licence BL01396922025-2605180752)</strong>, giving institutional clients direct procurement integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 transition-all"
                >
                  Schedule Infrastructure Review
                </Link>
                <a
                  href="#sla-targets"
                  className="rounded-sm border border-gray-300 dark:border-gray-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-primary transition-all"
                >
                  View Service Levels (SLAs)
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                  Infrastructure Domains
                </h3>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Tier II/III Facilities:</strong> Power, cooling, fire suppression, rack integration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Campus & SD-WAN:</strong> Enterprise Wi-Fi, bank branch & ATM connectivity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>HCI & Storage:</strong> SAN/NAS, VMware, Kubernetes, immutable 3-2-1 backup.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={15} />
                    <span><strong>Telecom IT:</strong> Edge towers, billing, and OSS/BSS support.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Capabilities Grid === */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Six Core Infrastructure Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  onClick={() => setSelectedDomain(idx)}
                  className="cursor-pointer bg-white dark:bg-gray-800 p-7 rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded">
                        {cat.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed mb-4">
                      {cat.content.problem}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                      <span>View Specifications</span>
                      <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Service Levels for Critical Infrastructure (Section 05) === */}
      <section id="sla-targets" className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="mb-12 border-l-4 border-primary pl-5">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">Service Guarantees</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Service Levels for Critical Infrastructure
            </h2>
            <p className="mt-2 text-sm text-body-color dark:text-gray-300 max-w-[780px]">
              We offer disciplined, contract-backed SLAs with defined response and resolution windows.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900/50 text-black dark:text-white uppercase font-bold text-[11px] tracking-wider border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-4 px-6">Service Class</th>
                  <th className="py-4 px-6">Availability Target</th>
                  <th className="py-4 px-6">Critical Response Time</th>
                  <th className="py-4 px-6">Typical Institutional Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {slaTiers.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <td className="py-4 px-6 font-bold text-primary">{row.tier}</td>
                    <td className="py-4 px-6 font-bold text-black dark:text-white">{row.uptime}</td>
                    <td className="py-4 px-6 text-body-color dark:text-gray-300">{row.response}</td>
                    <td className="py-4 px-6 text-body-color dark:text-gray-300">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === Technical Deliverables Modal === */}
      <AnimatePresence>
        {selectedDomain !== null && (
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
                    {capabilities[selectedDomain].tag}
                  </span>
                  <h3 className="text-base font-bold text-black dark:text-white uppercase tracking-tight">
                    {capabilities[selectedDomain].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-body-color hover:text-primary transition-colors"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-primary tracking-widest mb-1.5">
                    Engineering Solution
                  </h4>
                  <p className="text-xs leading-relaxed text-body-color dark:text-gray-300">
                    {capabilities[selectedDomain].content.solution}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded border border-gray-100 dark:border-gray-700">
                  <h4 className="text-[11px] font-bold uppercase text-black dark:text-white tracking-widest mb-3">
                    Deliverables & Handover Artefacts
                  </h4>
                  <div className="space-y-2">
                    {capabilities[selectedDomain].content.deliverables.map((item, dIdx) => (
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
                  onClick={() => setSelectedDomain(null)}
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

export default InfrastructureNetworkingPage;