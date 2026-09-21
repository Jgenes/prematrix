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
  FiCheckCircle,
  FiX,
  FiActivity,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TrainingAcademyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | number>(null);

  // Data definitions remain same as your original code
  const categories = [
    {
      title: "Professional Certifications",
      icon: FiLayers,
      tag: "Technical Competence",
      description: "Structured certification programs combining theory, hands-on labs, and regulatory interpretation.",
      details: {
        sections: [
          { label: "Data Protection", points: ["Regulatory frameworks", "Data governance structures", "DPIA & ROPA", "Incident reporting"] },
          { label: "Cybersecurity", points: ["Threat landscape analysis", "Network defense", "Endpoint protection", "Attack simulations"] },
          { label: "Fintech Systems", points: ["Payment gateway architecture", "API security", "AML/CFT compliance", "Secure deployment"] }
        ]
      }
    },
    {
      title: "Corporate Training",
      icon: FiShield,
      tag: "Institutional Growth",
      description: "Tailored enterprise programs aligning staff and executives with digital governance requirements.",
      details: {
        sections: [
          { label: "On-Site Training", points: ["Risk exposure assessment", "Compliance posture", "Technical hands-on systems"] },
          { label: "Executive Workshops", points: ["Strategic cybersecurity", "Liability management", "ICT investment oversight"] }
        ]
      }
    },
    {
      title: "Digital Learning Platform",
      icon: FiDatabase,
      tag: "TrainingHub Ecosystem",
      description: "Secure LMS designed for compliance, security, and scalable institutional learning.",
      details: {
        sections: [
          { label: "Platform Features", points: ["Role-based user access", "Interactive modules", "Progress tracking analytics", "Cohort management"] },
          { label: "Access Portal", points: ["Official Link: https://trainighubtz.co.tz"] }
        ]
      }
    },
    {
      title: "Online Examination System",
      icon: FiBookOpen,
      tag: "Assessment Integrity",
      description: "Secure and automated assessment infrastructure ensuring examination integrity.",
      details: {
        sections: [
          { label: "Security Features", points: ["Timed assessments", "Question randomization", "Secure browser enforcement"] },
          { label: "Automated Logic", points: ["Automated grading", "Anti-cheating mechanisms", "Result analytics"] }
        ]
      }
    },
    {
      title: "Certification & Governance",
      icon: FiUserCheck,
      tag: "Audit Traceability",
      description: "Ensuring authenticity and audit traceability of professional credentials.",
      details: {
        sections: [
          { label: "Verification", points: ["Digitally signed certificates", "QR verification system", "Unique ID registry"] },
          { label: "Advanced Validation", points: ["Blockchain-ready models", "Audit traceability", "Authenticity assurance"] }
        ]
      }
    },
    {
      title: "Institutional Impact",
      icon: FiCheckCircle,
      tag: "Strategic Alignment",
      description: "Strengthening resilience combining technical education and compliance literacy.",
      details: {
        sections: [
          { label: "Target Sectors", points: ["Financial institutions", "Government agencies", "Fintech startups", "Corporate enterprises"] },
          { label: "Core Objective", points: ["Capability strengthening", "Regulatory alignment", "Digital transformation support"] }
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
                PrimeMatrix Training Academy
              </div>
              <h1 className="mb-6 max-w-[680px] text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Build the capability to operate securely.
              </h1>
              <p className="mb-8 max-w-[620px] text-sm leading-relaxed text-body-color dark:text-gray-300 md:text-base">
                Capacity-building programs that connect technical competence, regulatory awareness, and digital operational readiness for modern institutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#programs"
                  className="rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-primary/90"
                >
                  Explore Programs
                </a>
                <Link
                  href="/contact"
                  className="rounded-sm border border-gray-300 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:border-primary dark:border-gray-700 dark:text-white"
                >
                  Discuss Training
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-gray-50 p-7 shadow-lg dark:border-gray-700 dark:bg-gray-800/60 md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-primary">Academy Framework</p>
                    <h2 className="text-lg font-bold uppercase tracking-tight text-black dark:text-white">Learning that holds up</h2>
                  </div>
                  <FiBookOpen className="mt-1 shrink-0 text-2xl text-primary" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs">
                  <div>
                    <p className="mb-1 text-2xl font-bold text-primary">06</p>
                    <p className="font-bold uppercase tracking-wider text-body-color">Learning tracks</p>
                  </div>
                  <div>
                    <p className="mb-1 text-2xl font-bold text-black dark:text-white">360°</p>
                    <p className="font-bold uppercase tracking-wider text-body-color">Capability focus</p>
                  </div>
                  <div className="col-span-2 border-t border-gray-200 pt-5 text-body-color dark:border-gray-700">
                    <span className="font-bold uppercase tracking-wider text-primary">Designed for</span>
                    <p className="mt-2 leading-relaxed">Technical teams, executives, and institutions responsible for secure digital operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Section: Academy Sections Grid === */}
      <section id="programs" className="py-20 bg-gray-50/50 dark:bg-gray-900/10 border-y border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-2">Education Framework</h2>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white uppercase tracking-tight">Professional Pedagogy</h3>
            </div>
            <div className="hidden md:block h-[1px] flex-grow bg-gray-200 dark:bg-gray-800 mx-8 mb-3"></div>
            <p className="text-[11px] font-bold uppercase text-body-color tracking-widest italic">Curriculum Mastery</p>
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

      {/* === Technical Blueprint Modal === */}
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
                          <div key={pi} className="flex items-center gap-3 text-[12px] font-medium">
                            {p.includes("https") ? (
                                <a 
                                  href="https://trainighubtz.co.tz" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary font-bold flex items-center gap-2 hover:underline group/link"
                                >
                                  LAUNCH TRAININGHUB <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            ) : (
                                <>
                                    <FiActivity className="text-primary/40 text-[12px]" />
                                    <span className="opacity-85">{p}</span>
                                </>
                            )}
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
                  Terminate Review
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingAcademyPage;