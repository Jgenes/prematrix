"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShield,
  FiActivity,
  FiWifi,
  FiZap,
  FiUsers,
  FiLayers,
  FiEye,
  FiServer,
  FiCheckCircle,
  FiAlertTriangle,
  FiX,
  FiArrowRight,
  FiFileText,
  FiHardDrive,
  FiCpu,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MiningTechnologyPage = () => {
  const [selectedHazard, setSelectedHazard] = useState<null | number>(null);

  const miningPillars = [
    {
      title: "Underground Pre-Entry Drone Safety",
      icon: FiShield,
      tag: "Collision-Tolerant UAV",
      desc: "Remote inspection of headings and stopes using collision-tolerant drones with advanced imaging before personnel enter.",
      points: [
        "Identifies rockfalls, loose ground and toxic gas pockets",
        "Post-blast clearance verification",
        "Zero personnel exposure in uninspected headings",
      ],
    },
    {
      title: "Surface Drone Survey & Volumetrics",
      icon: FiEye,
      tag: "Photogrammetry & LiDAR",
      desc: "Precision pit surveys, haul road design, waste dump modeling and fast stockpile volume reconciliations.",
      points: [
        "Orthomosaics & digital terrain models (DTM)",
        "Blast-muck volume calculation for mine finance",
        "Tailings dam and perimeter monitoring",
      ],
    },
    {
      title: "Site Security & Surveillance",
      icon: FiActivity,
      tag: "CCTV & Access",
      desc: "End-to-end security architectures covering pits, gold rooms, explosives stores, plant access and perimeter fence lines.",
      points: [
        "Thermal & PTZ cameras with PPE and intrusion analytics",
        "Central control room video wall and alarm workflows",
        "Biometric access control for sensitive plant zones",
      ],
    },
    {
      title: "Rugged Site Networks & Edge IT",
      icon: FiWifi,
      tag: "Private LTE & Mesh",
      desc: "Mission-critical network connectivity designed to survive harsh open pit and underground mine conditions.",
      points: [
        "Private LTE, Wi-Fi mesh and fibre backbones",
        "Ruggedised containerised site data rooms",
        "Local edge computing for mine planning and drone data",
      ],
    },
    {
      title: "Electricity & Hybrid Power Solutions",
      icon: FiZap,
      tag: "Solar + Battery + Genset",
      desc: "Cutting diesel dependence and protecting critical loads with resilient microgrids and power protection.",
      points: [
        "Solar PV arrays with battery energy storage (BESS)",
        "Auto-changeover generators and parallel synchronization",
        "Online UPS precision power for IT rooms and control rooms",
      ],
    },
    {
      title: "Tanzanian Manpower Supply",
      icon: FiUsers,
      tag: "Local Content Compliance",
      desc: "Vetted skilled, semi-skilled and general workforce matched to mine operational requirements and Tanzanian local content laws.",
      points: [
        "Skilled: Technicians, artisans, surveyors, operators",
        "Semi-skilled: Plant assistants, drivers, site support",
        "General: Local recruitment empowering Tanzanian youth",
      ],
    },
  ];

  const hazards = [
    {
      name: "Unstable Ground",
      identification: "Loose or deteriorating rock surfaces, scaling issues, and ground-support integrity.",
      whyItMatters: "Prevents fatal collapses and avoids personnel entry into structurally compromised headings.",
    },
    {
      name: "Rockfalls",
      identification: "Fallen material, blocked passages, and areas at immediate risk of secondary falls.",
      whyItMatters: "Protects miners and high-capital machinery from unpredictable detachment.",
    },
    {
      name: "Post-Blast Conditions",
      identification: "Condition of the heading, fragmentation quality, hang-ups, and fume dispersion.",
      whyItMatters: "Supports verified, data-backed re-entry decisions following production blasting.",
    },
    {
      name: "Structural Damage",
      identification: "Damaged shotcrete, bent steel sets, sheared mesh, and anchor bolt failures.",
      whyItMatters: "Enables proactive rehabilitation planning before minor shifts become catastrophic failures.",
    },
    {
      name: "Water Ingress",
      identification: "Subterranean water accumulation, inflow points, and sump overflow conditions.",
      whyItMatters: "Mitigates flash flooding, haulage slippage, and electrical hazard contamination.",
    },
    {
      name: "Inaccessible Areas",
      identification: "Abandoned drives, narrow stopes, vertical raises, and deep voids unreachable by foot.",
      whyItMatters: "Provides complete spatial awareness without exposing human surveyors to severe peril.",
    },
  ];

  const lifecycleStages = [
    {
      stage: "Exploration & Camps",
      support: "Drone mapping & survey, camp networks & Wi-Fi, perimeter CCTV, solar-battery hybrid power for remote camps.",
    },
    {
      stage: "Development & Construction",
      support: "Site network and data-room design, security and access control, temporary and permanent power, vetted manpower supply.",
    },
    {
      stage: "Underground & Open-Pit Production",
      support: "Pre-entry underground inspection drones, control room video wall, fleet tracking, rugged edge servers with local processing.",
    },
    {
      stage: "Processing Plant",
      support: "CCTV with analytics, gold room access control, 3-2-1 backup and disaster recovery, online UPS and generator protection.",
    },
    {
      stage: "Closure & Rehabilitation",
      support: "Drone monitoring of waste dumps, tailings dams and rehabilitated vegetation, long-term environmental data archiving.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="Mining Technology & Security"
        description="Integrated underground drone safety, surface UAV surveying, site ICT infrastructure, hybrid power, and Tanzanian manpower supply for modern mining operations."
      />

      {/* === Executive Hero Banner === */}
      <section className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Lead Sector Expertise
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white leading-tight mb-6">
                Engineering Safety, Infrastructure & Security for High-Value Mining
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-body-color dark:text-gray-300 mb-6">
                Mining is one of PrimeMatrix&apos;s two lead sectors after infrastructure. Mines operate in remote, high-value, and high-risk environments where downtime, theft, safety incidents, and poor data are costly. We bring together underground inspection drones, surveillance, site IT, hybrid power, and skilled Tanzanian manpower under one accountable local partner.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 transition-all"
                >
                  Request Mining Consultation
                </Link>
                <a
                  href="#underground-system"
                  className="rounded-sm border border-gray-300 dark:border-gray-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-primary transition-all"
                >
                  Explore Drone System
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 dark:bg-gray-800/60 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-base font-bold uppercase tracking-wider text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                  Mining Offer at a Glance
                </h3>
                <ul className="space-y-4 text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Pre-Entry Safety Drone:</strong> Collision-tolerant UAV inspecting headings before personnel enter.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Surface UAV Surveys:</strong> Stockpile volumes, blast muck, haul roads, and tailings inspection.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Full-Site IT & Power:</strong> Private LTE, rugged edge data rooms, solar-hybrid microgrids.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Tanzanian Manpower:</strong> Vetted skilled, semi-skilled, and general workforce supporting youth employment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Trusted By Industry:</strong> Supported Buckreef Gold Company, TRX Gold Tanzania, and security operations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === The 6 Mining Capability Pillars === */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-3">Capabilities</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">Six Integrated Mining Pillars</h3>
            <p className="mt-3 text-sm text-body-color dark:text-gray-400">
              Every layer of the mine, from underground workings and open pits to processing plants and control rooms, served under one unified SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miningPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-white dark:bg-gray-800 p-8 rounded-sm border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-body-color dark:text-gray-400 mb-6">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700/60 pt-4 space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-[11px] text-body-color dark:text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Spotlight: Smart Mine Pre-Entry Safety & Inspection System === */}
      <section id="underground-system" className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="mb-14 border-l-4 border-primary pl-5">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">Safety Innovation</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Smart Mine Pre-Entry Safety & Inspection System
            </h2>
            <p className="mt-2 text-sm text-body-color dark:text-gray-300 max-w-[820px]">
              PrimeMatrix integrates a collision-tolerant underground inspection drone with advanced thermal and visual imaging. The system supports remote hazard detection before miners enter, ensuring that the first person into a heading is a <strong>decision, not a risk</strong>.
            </p>
          </div>

          {/* 5-Step Process Workflow */}
          <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-6">
              5-Phase Remote Clearance Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Deploy Drone", desc: "Collision-tolerant UAV launched safely into heading from drive entry." },
                { step: "02", title: "Scan & Image", desc: "High-resolution visual and thermal scanning across roof, walls, and floor." },
                { step: "03", title: "Detect Hazards", desc: "Real-time identification of loose rock, fractures, and water ponding." },
                { step: "04", title: "Generate Report", desc: "Immediate data feed to shift boss, safety officers, and engineering." },
                { step: "05", title: "Safe Entry Decision", desc: "Informed clearance or targeted scaling/support instructions issued." },
              ].map((item, sIdx) => (
                <div key={sIdx} className="bg-gray-50 dark:bg-gray-800/40 p-5 rounded-sm border border-gray-200 dark:border-gray-700 relative">
                  <span className="text-2xl font-black text-primary/30 block mb-2">{item.step}</span>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-black dark:text-white mb-2">{item.title}</h4>
                  <p className="text-[11px] leading-relaxed text-body-color dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hazards Identified Grid */}
          <h3 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-6">
            Underground Hazards Remote Inspection Detects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hazards.map((hazard, hIdx) => (
              <div
                key={hIdx}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-sm shadow-sm hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FiAlertTriangle className="text-primary flex-shrink-0" size={18} />
                  <h4 className="text-sm font-bold text-black dark:text-white uppercase">{hazard.name}</h4>
                </div>
                <p className="text-xs text-body-color dark:text-gray-400 mb-3">
                  <strong className="text-black dark:text-white">Detection:</strong> {hazard.identification}
                </p>
                <p className="text-xs text-primary font-medium">
                  <strong>Why it matters:</strong> {hazard.whyItMatters}
                </p>
              </div>
            ))}
          </div>

          {/* Three Core Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="p-6 bg-primary/5 rounded border border-primary/20">
              <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Safety First</h4>
              <p className="text-xs leading-relaxed text-body-color dark:text-gray-300">
                Remote inspection keeps personnel completely out of unsupported and hazardous stopes until conditions are quantitatively assessed.
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded border border-primary/20">
              <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Faster, Better Decisions</h4>
              <p className="text-xs leading-relaxed text-body-color dark:text-gray-300">
                Visual and volumetric evidence gives mine managers and geotechnical engineers the data needed for quick, safe re-entry approvals.
              </p>
            </div>
            <div className="p-6 bg-primary/5 rounded border border-primary/20">
              <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Traceable Records</h4>
              <p className="text-xs leading-relaxed text-body-color dark:text-gray-300">
                Complete digital audit trail of flight logs, thermal imagery, and clearance reports aligned with mining safety regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mine Lifecycle Support Table === */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-3">Lifecycle Architecture</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">Support Across Every Mine Stage</h3>
            <p className="mt-2 text-sm text-body-color dark:text-gray-400">
              From early exploration drilling to operational production and closure rehabilitation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900/50 text-black dark:text-white uppercase font-bold text-[11px] tracking-wider border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-4 px-6 w-1/3">Mine Lifecycle Stage</th>
                  <th className="py-4 px-6 w-2/3">How PrimeMatrix Supports It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {lifecycleStages.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <td className="py-4 px-6 font-bold text-black dark:text-white">
                      {row.stage}
                    </td>
                    <td className="py-4 px-6 text-body-color dark:text-gray-300 leading-relaxed">
                      {row.support}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === Tanzanian Manpower & Vendor Prequalification === */}
      <section className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-3">Local Content & Workforce</span>
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">
                Tanzanian Manpower Supply for Mining Operations
              </h3>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-6">
                PrimeMatrix supplies vetted skilled, semi-skilled and unskilled Tanzanian workforce based on client operational requirements and safety standards. This service supports mining operations while creating sustainable employment opportunities for Tanzanian youth.
              </p>
              <div className="space-y-4 text-xs md:text-sm">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-l-2 border-primary rounded-r">
                  <strong className="text-black dark:text-white block mb-1">Skilled Manpower:</strong>
                  <span>Technicians, artisans, surveyors, systems operators, site supervisors matched to formal certifications.</span>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-l-2 border-primary rounded-r">
                  <strong className="text-black dark:text-white block mb-1">Semi-Skilled Manpower:</strong>
                  <span>Assistants, heavy-vehicle and site drivers, plant and machinery helpers, site-support personnel.</span>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-l-2 border-primary rounded-r">
                  <strong className="text-black dark:text-white block mb-1">Unskilled / General Labour:</strong>
                  <span>General site workforce, loaders, sanitation, camp support recruited from host communities.</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-sm border border-gray-200 dark:border-gray-700 shadow-xl">
              <h4 className="text-base font-bold uppercase tracking-wider text-black dark:text-white mb-4">
                Contractor & Vendor Prequalification
              </h4>
              <p className="text-xs text-body-color dark:text-gray-400 mb-6 leading-relaxed">
                PrimeMatrix is fully registered and ready to complete supplier onboarding and prequalification with mining houses across Tanzania.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-body-color dark:text-gray-300">BRELA Incorporation</span>
                  <span className="font-bold text-black dark:text-white">Certificate No. 193286410</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-body-color dark:text-gray-300">TRA Tax Clearance / TIN</span>
                  <span className="font-bold text-black dark:text-white">TIN 193-286-410</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-body-color dark:text-gray-300">Supply of ICT Equipment</span>
                  <span className="font-bold text-black dark:text-white">Licence BL01396922025-2605186576</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-body-color dark:text-gray-300">ICT Consultancy Licence</span>
                  <span className="font-bold text-black dark:text-white">Licence BL01396922025-2605180752</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-body-color dark:text-gray-300">Manpower Statement</span>
                  <span className="font-bold text-primary">Available on Request</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block text-center w-full rounded-sm bg-primary py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary/90 transition-all shadow-md"
                >
                  Request Vendor Registration Pack
                </Link>
                <p className="text-center text-[11px] text-body-color dark:text-gray-400">
                  Call our mining desk: <strong>+255 783 700 007</strong> | <strong>info@primematrix.co.tz</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiningTechnologyPage;
