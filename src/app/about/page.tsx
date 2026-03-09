"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { motion } from "framer-motion";
import { FiShield, FiSettings, FiLayers, FiDatabase, FiBookOpen, FiBriefcase, FiUsers, FiCheck, FiActivity } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  // Data definitions remain same as your original code
  const corePrinciples = [
    { icon: FiShield, title: "Security-First Engineering", desc: "All digital systems are architected with multi-layered protection from inception, ensuring maximum resilience against cyber threats." },
    { icon: FiSettings, title: "Compliance-Integrated Architecture", desc: "Regulatory, governance, and industry standards are embedded into every stage of system design and implementation." },
    { icon: FiLayers, title: "Operational Sustainability", desc: "Systems are engineered for long-term performance, continuous monitoring, and controlled scalability." },
  ];

  const integratedServices = [
    { icon: FiDatabase, title: "Data Protection & Privacy Governance" },
    { icon: FiShield, title: "Cybersecurity Architecture & Monitoring" },
    { icon: FiSettings, title: "Software & Platform Engineering" },
    { icon: FiBriefcase, title: "Fintech System Development" },
    { icon: FiBookOpen, title: "ICT Project Design & Operational Management" },
    { icon: FiUsers, title: "Digital Training Ecosystem Deployment" },
  ];

  const leadership = [
    { title: "Managing Director", desc: "Drives corporate strategy, governance, and organizational leadership, ensuring alignment with business objectives." },
    { title: "Chief Technology Officer", desc: "Leads innovation, system architecture, and cybersecurity strategy to deliver next-generation solutions." },
    { title: "Data Protection Officer", desc: "Oversees compliance with data protection laws and regulatory obligations, safeguarding client information." },
    { title: "Platform Operations Lead", desc: "Manages software ecosystems, cloud infrastructure, and ensures platform reliability and scalability." },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased">
      <Breadcrumb
        pageName="Institutional Profile"
        description="Primematrix Tanzania Limited is a specialized digital engineering and compliance technology firm delivering structured, secure, and scalable solutions for regulated organizations."
      />

      {/* === Section: Core Operating Philosophy (High Density Grid) === */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1150px]">
          <div className="mb-12 border-l-4 border-primary pl-5">
            <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-2">Philosophy</h2>
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">Core Operating Principles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePrinciples.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="group rounded-sm border border-gray-100 dark:border-gray-800 p-8 transition-all hover:shadow-md"
              >
                <item.icon className="text-primary text-2xl mb-5" />
                <h4 className="text-[15px] font-bold uppercase tracking-tight mb-3 text-black dark:text-white">{item.title}</h4>
                <p className="text-[13.5px] leading-relaxed text-body-color opacity-85">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Section: Vision & Mission (Split Technical Layout) === */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container max-w-[1150px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-4">Strategic Intent</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-black dark:text-white">Mission & Vision</h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
                   <span className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-primary"></span>
                   <h4 className="text-[13px] font-bold uppercase text-primary mb-2">Vision Statement</h4>
                   <p className="text-[14px] italic text-body-color leading-relaxed">"To become the leading authority in digital engineering, cybersecurity, and compliance technology across Tanzania and East Africa."</p>
                </div>
                <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
                   <span className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-primary"></span>
                   <h4 className="text-[13px] font-bold uppercase text-primary mb-2">Mission Statement</h4>
                   <p className="text-[14px] text-body-color leading-relaxed">To design, secure, and manage reliable digital systems that support institutional growth, maintain regulatory compliance, and uphold technical excellence.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {integratedServices.map((service, i) => (
                <div key={i} className="flex items-center gap-3 rounded-sm bg-white dark:bg-gray-800 p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
                  <FiActivity className="text-primary flex-shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wide text-black dark:text-white">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Section: Leadership (Clean Technical Cards) === */}
      <section className="py-20">
        <div className="container max-w-[1150px]">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-3">Governance</h2>
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">Leadership Structure</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, idx) => (
              <div key={idx} className="border-t-2 border-primary pt-6">
                <h4 className="text-[14px] font-bold text-black dark:text-white mb-2 uppercase">{leader.title}</h4>
                <p className="text-[12.5px] leading-relaxed text-body-color opacity-80">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Institutional Statement (Minimalist Footer) === */}
      <section className="py-16 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[800px] text-center">
          <p className="text-[15px] font-medium leading-relaxed text-black dark:text-white opacity-90 italic">
            "Primematrix Tanzania Limited is committed to building trustworthy digital infrastructures that enable organizations to operate securely in modern technological environments."
          </p>
          <div className="mt-6 flex justify-center gap-4">
             <div className="h-[1px] w-12 bg-primary self-center"></div>
             <span className="text-[10px] font-bold uppercase tracking-[3px]">Official Corporate Mandate</span>
             <div className="h-[1px] w-12 bg-primary self-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;