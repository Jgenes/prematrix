"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[160px] xl:pb-[140px] xl:pt-[180px] antialiased"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-3xl font-bold leading-[1.2] tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:leading-[1.1]"
                >
                  Engineering Secure Digital Systems for{" "}
                  <span className="text-primary">
                    Compliance-Driven
                  </span>{" "}
                  Organizations
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  // Research Insight Font: 14px tracking wide
                  className="mx-auto mb-10 max-w-[700px] text-[14px] font-medium leading-relaxed tracking-wide text-body-color opacity-80 dark:text-body-color-dark sm:text-[15px] lg:px-8"
                >
                  Primematrix Tanzania Limited delivers enterprise-grade data protection, 
                  cybersecurity, and fintech engineering aligned with Tanzanian and 
                  global regulatory standards.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Link
                    href="#capabilities" // Links directly to the capabilities section
                    className="rounded-sm bg-primary px-8 py-4 text-[12px] font-bold uppercase tracking-[2px] text-white shadow-md transition duration-300 hover:bg-primary/90 hover:shadow-lg"
                  >
                    SERVICES
                  </Link>
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