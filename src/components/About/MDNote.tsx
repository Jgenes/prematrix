"use client";

import React from "react";
import Link from "next/link";
import { FiCheckCircle, FiShield, FiTrendingUp, FiDollarSign } from "react-icons/fi";

const MDNote = () => {
  const differentiators = [
    {
      title: "One Integrated Team",
      what: "Infrastructure, security, software, compliance and PMO under a single accountable contract.",
      proof: "Single point of contact and unified SLA",
    },
    {
      title: "Regulator-Ready by Design",
      what: "Solutions mapped to PDPA, BoT, TCRA, PCI DSS and ISO 27001 requirements from day one.",
      proof: "Compliance traceability matrix in every project",
    },
    {
      title: "Security in Every Layer",
      what: "Threat modelling, hardening and monitoring built into designs, not added later.",
      proof: "Independent testing before go-live",
    },
    {
      title: "Built for Critical Environments",
      what: "Architectures designed for 24/7, high-availability and high-transaction operations.",
      proof: "99.9% uptime reliability target",
    },
    {
      title: "Local Presence, Global Standards",
      what: "Engineers on the ground in Tanzania, aligned with ITIL, PMI, COBIT and NIST practice.",
      proof: "Documented methods and certified staff",
    },
    {
      title: "We Do More Than Write Documents",
      what: "We evaluate risks, find gaps, build governance, implement controls, train staff and monitor compliance.",
      proof: "Deliverables plus implementation and monitoring",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50/50 dark:bg-gray-900/30 border-b border-gray-100 dark:border-gray-800">
      <div className="container max-w-[1150px]">
        {/* Note from MD Card */}
        <div className="mb-16 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-sm border-l-4 border-primary shadow-sm border-y border-r border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-primary block">
                Executive Leadership
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                A Note from the Managing Director
              </h3>
            </div>
            <span className="text-xs font-semibold text-body-color dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
              Dar es Salaam, Tanzania
            </span>
          </div>

          <blockquote className="text-sm md:text-base italic leading-relaxed text-body-color dark:text-gray-200 mb-6">
            &ldquo;Tanzania&apos;s economy is going digital at speed: instant payments, mobile money, open APIs, cloud adoption and a rising regulatory bar for security and data protection, including the Personal Data Protection Act, 2022. Institutions need a partner who can design, build, secure and run technology, and prove compliance while doing it. PrimeMatrix was created for exactly that. We bring engineering depth, regulatory fluency and disciplined delivery under one roof, so our clients can focus on their customers.&rdquo;
          </blockquote>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div>
              <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">
                Samwel Phillip Madauda
              </h4>
              <p className="text-xs text-primary font-medium">Managing Director, PrimeMatrix Tanzania Company Limited</p>
            </div>
            <Link
              href="/about"
              className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
            >
              Read Corporate Standing →
            </Link>
          </div>
        </div>

        {/* Why PrimeMatrix Differentiators */}
        <div>
          <div className="text-center max-w-[650px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[3px] text-primary block mb-2">
              Value Proposition
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Why Institutions Choose PrimeMatrix
            </h2>
            <p className="mt-2 text-xs md:text-sm text-body-color dark:text-gray-400">
              Institutions rarely struggle with a lack of technology. They struggle with fragmented vendors, unclear accountability, security gaps, and compliance evidence that arrives too late. PrimeMatrix removes those friction points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-sm border border-gray-100 dark:border-gray-700 shadow-xs hover:border-primary transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wide">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed mb-4">
                    {diff.what}
                  </p>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-0.5">
                    How We Prove It
                  </span>
                  <span className="text-xs font-medium text-black dark:text-gray-300">
                    {diff.proof}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* What Clients Gain */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="h-10 w-10 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                <FiShield size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Lower Risk</h4>
              <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed">
                Reduced breach, outage and audit-failure exposure through layered, tested controls.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="h-10 w-10 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                <FiTrendingUp size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Faster Delivery</h4>
              <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed">
                Proven playbooks, reusable accelerators and disciplined project governance (PMP/PRINCE2).
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="h-10 w-10 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                <FiDollarSign size={20} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Lower Total Cost</h4>
              <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed">
                Consolidated vendors, optimised architecture and predictable managed-service pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MDNote;
