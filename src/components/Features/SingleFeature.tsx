"use client";

import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full antialiased">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="group"
      >
        {/* Icon box - Made smaller to match the compact theme */}
        <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <div className="scale-75 transition-transform duration-300 group-hover:scale-90">
            {icon}
          </div>
        </div>

        {/* Title - Shrunk to professional insight-page levels (text-base/sm) */}
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-black dark:text-white md:text-base">
          {title}
        </h3>

        {/* Paragraph - Reduced to text-sm for that high-density research look */}
        <p className="text-[13px] leading-relaxed text-body-color dark:text-body-color-dark opacity-80 md:text-sm">
          {paragraph}
        </p>
      </motion.div>
    </div>
  );
};

export default SingleFeature;