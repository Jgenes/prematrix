"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="12" height="10" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {

  const List = ({ text }) => (
    <div className="mb-3 flex items-center text-[13px] font-semibold uppercase tracking-wider text-black dark:text-white opacity-90">
      <span className="mr-3 flex h-[22px] w-[22px] items-center justify-center rounded-sm bg-primary/10 text-primary">
        {checkIcon}
      </span>
      {text}
    </div>
  );

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 antialiased font-sans">
      <div className="container max-w-[1150px]">
        <div className="border-b border-body-color/[.05] pb-16 dark:border-white/[.05]">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* Content Side */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[540px]">
                {/* Forced Small Heading for Research Look */}
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary">
                  Corporate Strategy
                </h2>
                <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl">
                  Why Primematrix
                </h3>
                <p className="mb-8 text-[14px] leading-relaxed text-body-color dark:text-body-color-dark opacity-80">
                  Primematrix differentiates itself through structured technical governance and operational accountability, 
                  aligning every deployment with enterprise-grade security benchmarks.
                </p>

                <div className="mb-10 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                  <List text="Architecture-First" />
                  <List text="Embedded Compliance" />
                  <List text="SaaS Governance" />
                  <List text="Security Standards" />
                  <List text="Technical Reporting" />
                  <List text="Risk Mitigation" />
                </div>

                {/* Stats Counters - Compact Insight Design */}
                <div className="flex items-center gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">99.9%</h4>
                    <p className="text-[11px] uppercase tracking-widest text-body-color">Uptime Reliability</p>
                  </div>
                  <div className="h-10 w-[1px] bg-gray-100 dark:bg-gray-800"></div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">24/7</h4>
                    <p className="text-[11px] uppercase tracking-widest text-body-color">Active Monitoring</p>
                  </div>
                  <div className="h-10 w-[1px] bg-gray-100 dark:bg-gray-800"></div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">ISO</h4>
                    <p className="text-[11px] uppercase tracking-widest text-body-color">Aligned Ops</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side - Refined Technical Frame */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto aspect-square max-w-[450px] p-4 lg:mr-0"
              >
                {/* Background Decoration to match insight pages */}
                <div className="absolute inset-0 z-[-1] rounded-2xl bg-gray-50 dark:bg-gray-900/50"></div>
                
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/images/about/aa.jpeg"
                    alt="Primematrix"
                    fill
                    className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500 dark:hidden"
                  />
                  <Image
                    src="/images/about/bb.jpeg"
                    alt="Primematrix"
                    fill
                    className="hidden object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500 dark:block"
                  />
                  {/* Overlay for technical feel */}
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;