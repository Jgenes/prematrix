"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSectionTwo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 antialiased font-sans">
      <div className="container max-w-[1150px]">
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* Image Side - Refined Technical Frame */}
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mx-auto mb-12 aspect-square max-w-[450px] p-4 lg:m-0"
            >
              {/* Decorative Frame Background */}
              <div className="absolute inset-0 z-[-1] rounded-2xl bg-gray-50/50 dark:bg-gray-900/30"></div>
              
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-100 shadow-2xl dark:border-gray-800">
                <Image
                  src="/images/about/cc.jpeg"
                  alt="Primematrix Project Lifecycle"
                  fill
                  className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 dark:hidden"
                />
                <Image
                  src="/images/about/cc.jpeg" 
                  alt="Primematrix Project Lifecycle"
                  fill
                  className="hidden object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 dark:block"
                />
                {/* Subtle digital overlay */}
                <div className="absolute inset-0 bg-primary/[0.03] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          {/* Content Side - Research Density Style */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px] lg:ml-auto">
              
              <div className="relative border-l-2 border-primary/10 pl-8 space-y-10">
                
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-black dark:text-white">
                    01. Start Your Project
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-body-color dark:text-body-color-dark opacity-85">
                    Kick off your digital initiative with expert guidance and a secure, 
                    compliance-focused foundation tailored for scalability.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-black dark:text-white">
                    02. Compliance Assessment
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-body-color dark:text-body-color-dark opacity-85">
                    Evaluate your systems and internal processes to ensure full regulatory 
                    and data protection compliance with local and global laws.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-black dark:text-white">
                    03. Launch & Scale
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-body-color dark:text-body-color-dark opacity-85">
                    Deploy your secure digital platform efficiently, with continuous 
                    monitoring and confidence in long-term performance.
                  </p>
                </motion.div>

              </div>

              {/* Stats Footer for this section */}
              <div className="mt-12 flex items-center gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                <div>
                  <h4 className="text-lg font-bold text-primary">Zero</h4>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-body-color">Compliance Gaps</p>
                </div>
                <div className="h-8 w-[1px] bg-gray-100 dark:bg-gray-800"></div>
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">100%</h4>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-body-color">Data Residency</p>
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