"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLayers,
  FiShield,
  FiDatabase,
  FiBookOpen,
  FiUserCheck,
  FiX,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ResearchInsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | number>(null);

  const categories = [
    {
      title: "Technical Articles",
      icon: FiLayers,
      tag: "Actionable Intel",
      description: "Expert commentary translating complex technical & regulatory topics into actionable intelligence.",
      details: {
        sections: [
          { label: "Cyber Awareness", points: ["Ransomware patterns", "Social engineering", "Zero-trust principles"] },
          { label: "Data Protection", points: ["Regulatory directives", "Data subject rights", "Retention policies"] },
          { label: "Fintech Risk", points: ["API security gaps", "Payment fraud", "AML/CFT compliance"] }
        ]
      }
    },
    {
      title: "Strategic Whitepapers",
      icon: FiShield,
      tag: "Research-Driven",
      description: "In-depth research-driven publications for senior decision-makers & technical architects.",
      details: {
        sections: [
          { label: "Digital Governance", points: ["Enterprise architecture", "Board oversight", "Audit readiness"] },
          { label: "Project Frameworks", points: ["Governance lifecycle", "Architecture validation", "Vendor risk"] },
          { label: "Secure Fintech", points: ["Encryption design", "MFA frameworks", "Disaster recovery"] }
        ]
      }
    },
    {
      title: "Industry Intelligence",
      icon: FiDatabase,
      tag: "Regulatory Monitoring",
      description: "Regulatory & threat intelligence monitoring hub delivering structured updates.",
      details: {
        sections: [
          { label: "Regulatory Changes", points: ["Legislation amendments", "Compliance directives", "Cross-border policies"] },
          { label: "Emerging Threats", points: ["AI-enabled attacks", "Supply chain risks", "Credential harvesting"] },
          { label: "Tech Trends", points: ["Blockchain in audit", "Cloud-native infra", "Secure DevOps"] }
        ]
      }
    },
    {
      title: "Institutional Download Center",
      icon: FiBookOpen,
      tag: "Implementation Tools",
      description: "Structured resources to support institutional implementation & compliance readiness.",
      details: {
        sections: [
          { label: "Compliance Checklists", points: ["Data inventory docs", "Access validation", "Incident response"] },
          { label: "Risk Templates", points: ["Impact scoring models", "Threat matrices", "Mitigation tracking"] },
          { label: "Policy Guides", points: ["Privacy templates", "Info classification", "Reporting protocols"] }
        ]
      }
    },
    {
      title: "Strategic Impact Hub",
      icon: FiUserCheck,
      tag: "Thought Leadership",
      description: "Reinforces Primematrix Tanzania as a technical authority & governance thought leader.",
      details: {
        sections: [
          { label: "Decision Support", points: ["Government institutions", "Financial organizations", "Corporate enterprises"] },
          { label: "Authority Building", points: ["Credibility building", "Brand authority", "Strategic partnership"] }
        ]
      }
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <section className="relative overflow-hidden border-b border-gray-100 py-16 dark:border-gray-800 md:py-24">
        <div className="container max-w-[1150px]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[3px] text-primary">
                <span className="h-px w-8 bg-primary" />
                PrimeMatrix Research Hub
              </div>
              <h1 className="mb-6 max-w-[680px] text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Intelligence for decisions that hold up.
              </h1>
              <p className="mb-8 max-w-[620px] text-sm leading-relaxed text-body-color dark:text-gray-300 md:text-base">
                Actionable research connecting cybersecurity, data protection, fintech engineering, and ICT governance for leaders building resilient institutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#knowledge-hub"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-primary/90"
                >
                  Explore Insights
                </a>
                <Link
                  href="/contact"
                  className="rounded-sm border border-gray-300 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:border-primary dark:border-gray-700 dark:text-white"
                >
                  Commission Research
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-gray-50 p-7 shadow-lg dark:border-gray-700 dark:bg-gray-800/60 md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-primary">Research Framework</p>
                    <h2 className="text-lg font-bold uppercase tracking-tight text-black dark:text-white">Signal over noise</h2>
                  </div>
                  <FiBookOpen className="mt-1 shrink-0 text-2xl text-primary" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs">
                  <div>
                    <p className="mb-1 text-2xl font-bold text-primary">05</p>
                    <p className="font-bold uppercase tracking-wider text-body-color">Knowledge streams</p>
                  </div>
                  <div>
                    <p className="mb-1 text-2xl font-bold text-black dark:text-white">360°</p>
                    <p className="font-bold uppercase tracking-wider text-body-color">Decision context</p>
                  </div>
                  <div className="col-span-2 border-t border-gray-200 pt-5 text-body-color dark:border-gray-700">
                    <span className="font-bold uppercase tracking-wider text-primary">Built for</span>
                    <p className="mt-2 leading-relaxed">Boards, technical architects, compliance teams, and institutions navigating digital risk.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Section: Knowledge Hub Grid === */}
      <section id="knowledge-hub" className="py-20 bg-gray-50/50 dark:bg-gray-900/10 border-y border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-2">Knowledge Base</h2>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white uppercase tracking-tight">Intellectual Property Hub</h3>
            </div>
            <div className="hidden md:block h-[1px] flex-grow bg-gray-200 dark:bg-gray-800 mx-8 mb-3"></div>
            <p className="text-[11px] font-bold uppercase text-body-color tracking-widest italic">Research Repository</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                onClick={() => setSelectedCategory(idx)}
                className="cursor-pointer bg-white dark:bg-gray-800 p-10 border border-gray-100 dark:border-gray-800 hover:z-10 hover:border-primary transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <FiArrowRight className="text-primary" />
                </div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-[2px] mb-4">{cat.tag}</p>
                <h4 className="text-[15px] font-bold text-black dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">{cat.title}</h4>
                <p className="text-[12px] leading-relaxed opacity-70 mb-6 line-clamp-2">{cat.description}</p>
                <div className="w-8 h-[2px] bg-gray-200 group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Technical Insights Modal === */}
      <AnimatePresence>
        {selectedCategory !== null && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-dark w-full max-w-3xl rounded-sm border-t-4 border-primary shadow-2xl"
            >
              <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    {React.createElement(categories[selectedCategory].icon, { className: "text-xl" })}
                    <span className="text-[10px] font-bold uppercase tracking-[3px]">{categories[selectedCategory].tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white uppercase tracking-tight">{categories[selectedCategory].title}</h3>
                </div>
                <button onClick={() => setSelectedCategory(null)} className="text-body-color hover:text-primary transition-colors">
                  <FiX size={24} />
                </button>
              </div>

              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <p className="text-[14px] leading-relaxed text-body-color italic mb-10 border-l-2 border-primary/20 pl-6">
                  {categories[selectedCategory].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {categories[selectedCategory].details.sections.map((sec, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[11px] font-bold uppercase text-primary tracking-[2px] border-b border-gray-100 dark:border-gray-800 pb-2">
                        {sec.label}
                      </h4>
                      <div className="space-y-3">
                        {sec.points.map((p, pi) => (
                          <div key={pi} className="flex items-center gap-3">
                            <FiActivity className="text-primary/40 text-[12px]" />
                            <span className="text-[12px] opacity-85 font-medium">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex justify-end bg-gray-50/50 dark:bg-gray-900/30">
                <button 
                  onClick={() => setSelectedCategory(null)} 
                  className="px-8 py-3 bg-primary text-white text-[10px] font-bold uppercase tracking-[2px] shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Close Insights
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchInsightsPage;