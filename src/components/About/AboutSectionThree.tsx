"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="12" height="10" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionTwo = () => {

  const List = ({ text }) => (
    <div className="mb-3 flex items-center text-[13px] font-semibold uppercase tracking-wider text-black dark:text-white opacity-90">
      <span className="mr-3 flex h-[22px] w-[22px] items-center justify-center rounded-sm bg-primary/10 text-primary">
        {checkIcon}
      </span>
      {text}
    </div>
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 antialiased font-sans">
      <div className="container max-w-[1150px]">
        <div className="pb-16">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* Image Side - Hidden on Mobile, Visible on Desktop (lg) */}
            <div className="hidden w-full px-4 lg:block lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mx-auto aspect-square max-w-[450px] p-4 lg:ml-0"
              >
                {/* Visual shadow frame */}
                <div className="absolute inset-0 z-[-1] rounded-2xl bg-gray-50/50 dark:bg-gray-900/30"></div>
                
                <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-100 shadow-xl dark:border-gray-800">
                  <Image
                    src="/images/about/bb.jpeg"
                    alt="Industry Coverage"
                    fill
                    className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

            {/* Content Side - Takes full width on mobile */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[540px] lg:ml-auto">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[3px] text-primary">
                  Market Reach
                </h2>
                <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl">
                  Industry Coverage
                </h3>
                <p className="mb-8 text-[14px] leading-relaxed text-body-color dark:text-body-color-dark opacity-80">
                  Primematrix provides sector-specific digital solutions designed to navigate complex regulatory landscapes while maintaining operational agility.
                </p>

                <div className="mb-10 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                  <div className="space-y-1">
                    <List text="Financial Institutions" />
                    <List text="Government Agencies" />
                    <List text="Education Sector" />
                  </div>
                  <div className="space-y-1">
                    <List text="Fintech Startups" />
                    <List text="Corporate Groups" />
                    <List text="NGO & Logistics" />
                  </div>
                </div>

                {/* Stats Counter Section */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">15+</h4>
                    <p className="text-[11px] uppercase tracking-widest text-body-color">Sectors Served</p>
                  </div>
                  <div className="hidden h-10 w-[1px] bg-gray-100 dark:bg-gray-800 sm:block"></div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">100%</h4>
                    <p className="text-[11px] uppercase tracking-widest text-body-color">Compliance</p>
                  </div>
                  <div className="hidden h-10 w-[1px] bg-gray-100 dark:bg-gray-800 sm:block"></div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">Secure</h4>
                    <p className="text-[11px] uppercase tracking-widest text-body-color">Residency</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;