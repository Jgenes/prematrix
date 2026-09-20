"use client";

import { Feature } from "@/types/feature";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, link, letter } = feature;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Icon box */}
          <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
          {letter && (
            <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">
              Pillar {letter}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-black dark:text-white group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-[12.5px] leading-relaxed text-body-color dark:text-body-color-dark opacity-85">
          {paragraph}
        </p>
      </div>

      {link && (
        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
          <span>Learn more</span>
          <FiArrowRight size={14} />
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="w-full antialiased h-full">
      {link ? (
        <Link href={link} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

export default SingleFeature;