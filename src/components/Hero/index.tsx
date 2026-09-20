"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiShield, FiCpu, FiCheckCircle, FiActivity, FiLayers } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[100px] md:pt-[150px] xl:pb-[120px] xl:pt-[170px] antialiased"
      >
        <div className="container max-w-[1200px]">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[850px] text-center">
                
                {/* 2026 Profile Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  Company Profile 2026 • Secure. Compliant. Scalable.
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-3xl font-bold leading-[1.2] tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15]"
                >
                  Engineering Secure{" "}
                  <span className="text-primary">Digital Systems</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mx-auto mb-10 max-w-[760px] text-[14px] font-medium leading-relaxed tracking-wide text-body-color dark:text-gray-300 sm:text-[16px] lg:px-4"
                >
                  Integrated ICT infrastructure, cybersecurity, data-protection compliance, 
                  fintech software, and project delivery for banks, mobile network operators, 
                  government, mining, and enterprise.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap items-center justify-center gap-4 mb-14"
                >
                  <Link
                    href="#capabilities"
                    className="rounded-sm bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[2px] text-white shadow-md transition duration-300 hover:bg-primary/90 hover:shadow-lg"
                  >
                    Capability Pillars
                  </Link>
                  <Link
                    href="/mining"
                    className="rounded-sm border border-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[2px] text-primary hover:bg-primary hover:text-white transition duration-300"
                  >
                    Mining Solutions
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-sm border border-gray-300 dark:border-gray-700 px-7 py-3.5 text-xs font-bold uppercase tracking-[2px] text-black dark:text-white hover:border-primary transition duration-300"
                  >
                    Readiness Discussion
                  </Link>
                </motion.div>

                {/* Key Metrics Banner from Page 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-sm bg-gray-50/80 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 text-center"
                >
                  <div className="p-2">
                    <h3 className="text-2xl font-bold text-primary">8</h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400 mt-1">
                      Capability Pillars
                    </p>
                  </div>
                  <div className="p-2">
                    <h3 className="text-2xl font-bold text-black dark:text-white">7</h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400 mt-1">
                      PDPA Phases
                    </p>
                  </div>
                  <div className="p-2">
                    <h3 className="text-2xl font-bold text-black dark:text-white">15+</h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400 mt-1">
                      Sectors Served
                    </p>
                  </div>
                  <div className="p-2">
                    <h3 className="text-2xl font-bold text-primary">24/7</h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400 mt-1">
                      Active Monitoring
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>

        {/* Decorative Graphics */}
        <div className="absolute right-0 top-0 z-[-1] opacity-10 lg:opacity-25 pointer-events-none">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none">
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="-54.5" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;