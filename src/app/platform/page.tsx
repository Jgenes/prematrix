"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, FiShield, FiLayers, FiServer, 
  FiCheckCircle, FiAlertTriangle, FiTarget, FiActivity, FiDatabase 
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PlatformManagementPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<null | number>(null);

  const categories = [
    {
      title: "Hosting Administration",
      icon: FiServer,
      tag: "Infrastructure",
      content: {
        problem: "Inefficient server resource allocation leading to slow load times and high operational costs.",
        solution: "Optimization of hosting environments and server-side configurations for maximum efficiency.",
        deliverables: ["Server Health Audit", "Resource Allocation Map", "Hosting Governance Policy"]
      }
    },
    {
      title: "Version Control Management",
      icon: FiLayers,
      tag: "DevOps",
      content: {
        problem: "Unstructured code deployments causing regression bugs and lack of environment synchronization.",
        solution: "Implementing automated CI/CD pipelines and branching strategies for stable platform updates.",
        deliverables: ["Deployment Workflow Blueprint", "Git Branching Strategy", "CI/CD Pipeline Setup"]
      }
    },
    {
      title: "Security Patch Deployment",
      icon: FiShield,
      tag: "Maintenance",
      content: {
        problem: "Vulnerabilities in system dependencies and libraries remaining unpatched, risking exploitation.",
        solution: "Structured scheduling of security updates and critical patch management for all environment layers.",
        deliverables: ["Vulnerability Assessment", "Patch Management Schedule", "Hardening Compliance Report"]
      }
    },
    {
      title: "Access Control Management",
      icon: FiDatabase,
      tag: "Governance",
      content: {
        problem: "Excessive administrative privileges and lack of audit trails for platform configuration changes.",
        solution: "Establishing Least Privilege Access (LPA) models and automated activity logging for all users.",
        deliverables: ["IAM Policy Framework", "Access Review Logs", "Privilege Escalation Protocol"]
      }
    },
    {
      title: "Backup and Recovery",
      icon: FiCheckCircle,
      tag: "Resilience",
      content: {
        problem: "Inconsistent backup routines that fail during critical data loss incidents.",
        solution: "Automated, redundant backup systems with regular restoration testing to ensure data durability.",
        deliverables: ["Recovery Time Objective (RTO) Plan", "Backup Validation Report", "Off-site Sync Strategy"]
      }
    },
    {
      title: "Performance Monitoring",
      icon: FiActivity,
      tag: "Operations",
      content: {
        problem: "Lack of visibility into platform health, leading to reactive rather than proactive maintenance.",
        solution: "Deploying 24/7 monitoring stacks to track uptime, error rates, and user experience metrics.",
        deliverables: ["Real-time Dashboard Setup", "Alerting Threshold Config", "Performance Trend Analysis"]
      }
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="Platform Management"
        description="Comprehensive lifecycle platform governance ensuring security, stability, performance optimization, and structured operational oversight."
      />

      {/* === Section: Engineering Problem Space === */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30"></div>
              <img
                src="/images/data/siem.png"
                alt="Platform Governance"
                className="relative rounded-sm shadow-2xl w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-white hidden md:block">
                <FiServer className="text-3xl mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-[2px]">Core Infrastructure</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-4">Technical Context</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white leading-tight">Institutional Platform Challenges</h3>
              <div className="space-y-6 border-l border-gray-100 dark:border-gray-800 pl-8">
                <div className="flex gap-4">
                  <FiAlertTriangle className="text-primary text-xl flex-shrink-0 mt-1" />
                  <p className="text-[14px] leading-relaxed text-body-color italic">
                    Without structured governance, platforms become vulnerable, unstable, and exposed to significant operational risk due to lack of monitoring and patching.
                  </p>
                </div>
                <p className="text-[14px] leading-relaxed opacity-85">
                  Primematrix provides lifecycle governance designed to ensure operational continuity, security resilience, and consistent performance across production environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Section: The Engineering Grid (Strict Reference Style) === */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/10 border-y border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-2">Capabilities</h2>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white uppercase tracking-tight">Platform Governance</h3>
            </div>
            <div className="hidden md:block h-[1px] flex-grow bg-gray-200 dark:bg-gray-800 mx-8 mb-3"></div>
            <p className="text-[11px] font-bold uppercase text-body-color tracking-widest italic">Confidential Technical Output</p>
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
                   <FiActivity className="text-primary" />
                </div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-[2px] mb-4">{cat.tag}</p>
                <h4 className="text-[15px] font-bold text-black dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">{cat.title}</h4>
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
              className="bg-white dark:bg-gray-dark w-full max-w-2xl rounded-sm border-t-4 border-primary shadow-2xl"
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

              <div className="p-8 space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-primary tracking-widest mb-3">Operational Risk</h4>
                    <p className="text-[13px] leading-relaxed opacity-80">{categories[selectedCategory].content.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-primary tracking-widest mb-3">Governance Approach</h4>
                    <p className="text-[13px] leading-relaxed opacity-80">{categories[selectedCategory].content.solution}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-l-2 border-primary">
                  <h4 className="text-[11px] font-bold uppercase text-black dark:text-white tracking-widest mb-4">Technical Deliverables</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories[selectedCategory].content.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FiCheckCircle className="text-primary text-[14px]" />
                        <span className="text-[12px] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
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

export default PlatformManagementPage;