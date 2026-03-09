"use client";

import { motion } from "framer-motion";

const FrameworkCard = ({ title, desc, step }: { title: string; desc: string; step: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="group relative rounded-sm border border-gray-100 bg-white p-5 transition-all hover:border-primary/20 dark:border-gray-800 dark:bg-gray-dark shadow-sm"
  >
    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[2px] text-primary opacity-70">
      Phase {step}
    </span>
    <h3 className="mb-2 text-[14px] font-bold uppercase tracking-tight text-black dark:text-white">
      {title}
    </h3>
    <p className="text-[13px] leading-relaxed text-body-color dark:text-body-color-dark opacity-85">
      {desc}
    </p>
  </motion.div>
);

const VideoReplacement = () => {
  return (
    <section className="relative z-10 py-12 md:py-16 antialiased bg-gray-light/20 dark:bg-gray-dark/5">
      <div className="container max-w-[1100px]">
        
        {/* Customized Small Section Title */}
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[4px] text-primary">
            Standard Operating Procedure
          </h2>
          <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl">
            Operational Framework
          </h3>
          <p className="text-[14px] leading-relaxed text-body-color opacity-80 dark:text-body-color-dark">
            Primematrix operates under a structured technical governance model, ensuring 
            security-by-design from assessment to final deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FrameworkCard 
            step="01"
            title="Gap Analysis"
            desc="Evaluation of current infrastructure and regulatory compliance requirements."
          />
          <FrameworkCard 
            step="02"
            title="Architecture"
            desc="Engineering scalable systems with embedded data protection protocols."
          />
          <FrameworkCard 
            step="03"
            title="Security Testing"
            desc="Vulnerability assessments to ensure platform integrity and performance."
          />
          <FrameworkCard 
            step="04"
            title="Deployment"
            desc="Managed roll-out with continuous monitoring and technical support."
          />
        </div>

      </div>
    </section>
  );
};

export default VideoReplacement;