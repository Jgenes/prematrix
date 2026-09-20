"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiShield,
  FiSettings,
  FiLayers,
  FiDatabase,
  FiCheck,
  FiActivity,
  FiFileText,
  FiAward,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckCircle,
  FiLoader,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `About Page Inquiry from ${formData.name}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation request.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your request has been sent to info@primematrix.co.tz. Our team will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Failed to send message. Please try again or call +255 783 700 007.",
      });
    } finally {
      setLoading(false);
    }
  };

  const coreValues = [
    {
      title: "Integrity",
      desc: "Transparent pricing, honest advice, and confidentiality by default across every engagement.",
    },
    {
      title: "Excellence",
      desc: "International engineering and compliance standards applied with deep local Tanzanian context.",
    },
    {
      title: "Security First",
      desc: "Security and data privacy engineered in from the ground up, never bolted on as an afterthought.",
    },
    {
      title: "Accountability",
      desc: "Clear system owners, measurable SLAs, and disciplined delivery we proudly stand behind.",
    },
    {
      title: "Partnership",
      desc: "We work as an accountable extension of the client's own internal technology and compliance teams.",
    },
    {
      title: "Local Empowerment",
      desc: "Systematic skills transfer, local hiring, and community-minded economic growth for Tanzanian youth.",
    },
  ];

  const corporateLicences = [
    {
      business: "ICT Consultancy (Local)",
      issuer: "Ubungo Municipal Council",
      licenceNo: "BL01396922025-2605180752",
      issued: "05 Feb 2026",
      expires: "04 Feb 2027",
      scope: "ICT strategy, cybersecurity & PDPA compliance advisory, architecture, audits, PMO & training.",
    },
    {
      business: "Online Marketing & Sales",
      issuer: "BRELA",
      licenceNo: "20000107279",
      issued: "07 Feb 2026",
      expires: "06 Feb 2027",
      scope: "Digital platforms, web and e-commerce solutions, online sales and marketing enablement.",
    },
    {
      business: "Supply of ICT Equipment",
      issuer: "Ubungo Municipal Council",
      licenceNo: "BL01396922025-2605186576",
      issued: "16 Apr 2026",
      expires: "15 Apr 2027",
      scope: "Servers, networking, CCTV, access control, backup systems, drones and ICT hardware supply.",
    },
  ];

  const professionalCredentials = [
    { domain: "Security & Auditing", certs: "CISSP, CISM, CISA, CEH, OSCP" },
    { domain: "Cloud & Infrastructure", certs: "CCNP, VCP, AWS Certified, Microsoft Azure" },
    { domain: "Project & Governance", certs: "PMP, PRINCE2, ITIL 4, COBIT, ISO 27001 Lead Auditor" },
  ];

  return (
    <div className="bg-white dark:bg-gray-dark font-sans antialiased text-gray-700 dark:text-gray-300">
      <Breadcrumb
        pageName="About PrimeMatrix"
        description="PrimeMatrix Tanzania Company Limited is a duly incorporated, licensed, and tax-registered ICT company delivering infrastructure, cybersecurity, data protection, software, and mining technology across Tanzania."
      />

      {/* === Executive Overview === */}
      <section className="py-16 md:py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-3">
                Corporate Identity
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight mb-6">
                Engineering Secure Digital Systems Across the Full Lifecycle
              </h1>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-4">
                PrimeMatrix Tanzania Company Limited is a professional data protection, cybersecurity, ICT consulting, and digital transformation company. We deliver enterprise-grade infrastructure, security, compliance, and software engineering aligned with Tanzanian and international standards across the full lifecycle: <strong>advise, design, build, secure, and operate</strong>.
              </p>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300 mb-6">
                Our name reflects our approach: a matrix connects many dimensions in one structure. We connect infrastructure, security, software, compliance, and project governance so technology decisions are made once, coherently, and delivered without the gaps that appear when work is split across many disconnected vendors.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 text-center">
                <div>
                  <h3 className="text-xl font-bold text-primary">99.9%</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400">Uptime Reliability</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">24/7</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400">Active Monitoring</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">15+</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400">Sectors Served</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">ISO</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-body-color dark:text-gray-400">Aligned Operations</p>
                </div>
              </div>
            </div>

            {/* Managing Director Note Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-sm border-l-4 border-primary border-y border-r border-gray-200 dark:border-gray-700 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-primary block mb-2">
                  Executive Statement
                </span>
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                  A Note from the Managing Director
                </h3>
                <blockquote className="text-xs md:text-sm italic leading-relaxed text-body-color dark:text-gray-300 mb-6">
                  &ldquo;Tanzania&apos;s economy is going digital at speed: instant payments, mobile money, open APIs, cloud adoption and a rising regulatory bar for security and data protection, including the Personal Data Protection Act, 2022. Institutions need a partner who can design, build, secure and run technology, and prove compliance while doing it. PrimeMatrix was created for exactly that. We bring engineering depth, regulatory fluency and disciplined delivery under one roof, so our clients can focus on their customers.&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                    Samwel Phillip Madauda
                  </h4>
                  <p className="text-[11px] text-primary font-medium">Managing Director, PrimeMatrix Tanzania Co. Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Vision, Mission & Core Values === */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container max-w-[1150px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-sm border-t-4 border-primary border-x border-b border-gray-100 dark:border-gray-700 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[3px] text-primary block mb-2">Our Vision</span>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">East Africa&apos;s Most Trusted ICT Partner</h3>
              <p className="text-sm italic leading-relaxed text-body-color dark:text-gray-300">
                &ldquo;To be East Africa&apos;s most trusted ICT partner, known for secure, reliable and compliant digital systems that power national growth.&rdquo;
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-sm border-t-4 border-black dark:border-white border-x border-b border-gray-100 dark:border-gray-700 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[3px] text-primary block mb-2">Our Mission</span>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">Engineering Excellence & Accountable Delivery</h3>
              <p className="text-sm leading-relaxed text-body-color dark:text-gray-300">
                &ldquo;To design, build and protect mission-critical technology for Tanzanian institutions through engineering excellence, local regulatory expertise and accountable delivery.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <div className="text-center max-w-[600px] mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[3px] text-primary block mb-2">Our Foundation</span>
              <h3 className="text-2xl font-bold text-black dark:text-white">Six Core Values</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-sm border border-gray-100 dark:border-gray-700 shadow-xs hover:border-primary transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-body-color dark:text-gray-400">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Section 02: Corporate Profile & Regulatory Standing === */}
      <section id="corporate-standing" className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="container max-w-[1150px]">
          <div className="mb-14 border-l-4 border-primary pl-5">
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">Regulatory Compliance</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Corporate Profile & Regulatory Standing
            </h2>
            <p className="mt-2 text-sm text-body-color dark:text-gray-300 max-w-[800px]">
              PrimeMatrix Tanzania Company Limited is a duly incorporated, tax-registered, and licensed Tanzanian company. Institutions that engage us can verify our legal standing directly from the statutory registration documents summarised below.
            </p>
          </div>

          {/* Registration Details Table */}
          <div className="mb-12 overflow-x-auto rounded-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900/50 text-black dark:text-white uppercase font-bold text-[11px] tracking-wider border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-3 px-6 w-1/3">Corporate Item</th>
                  <th className="py-3 px-6 w-2/3">Official Statutory Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">Registered Legal Name</td>
                  <td className="py-3 px-6 font-semibold text-primary">PRIMEMATRIX TANZANIA COMPANY LIMITED</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">Legal Status</td>
                  <td className="py-3 px-6 text-body-color dark:text-gray-300">Limited liability company incorporated under the Companies Act, 2002 (Section 15)</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">Certificate of Incorporation</td>
                  <td className="py-3 px-6 text-body-color dark:text-gray-300">
                    <strong className="text-black dark:text-white">No. 193286410</strong>, issued 27 January 2026 by Registrar of Companies (BRELA)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">Tax Registration (TRA)</td>
                  <td className="py-3 px-6 text-body-color dark:text-gray-300">
                    <strong className="text-black dark:text-white">TIN 193-286-410</strong>, effective 27 January 2026 | Kimara Tax Office, Kinondoni
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">TRA Physical Location</td>
                  <td className="py-3 px-6 text-body-color dark:text-gray-300">Plot No. 443, Block Q9, Kinondoni, Dar es Salaam</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">Licensed Principal Place of Business</td>
                  <td className="py-3 px-6 text-body-color dark:text-gray-300">
                    Morogoro Road, Kibamba Ward, Ubungo Municipal Council, Dar es Salaam | P. O. Box 22678
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-bold text-black dark:text-white">Official Telephone & Contacts</td>
                  <td className="py-3 px-6 text-body-color dark:text-gray-300">
                    +255 783 700 007 | +255 767 159 898 | info@primematrix.co.tz | primematrix.co.tz
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Business Licences Grid */}
          <h3 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-6">
            Official Business Licences (Issued under Business Licensing Act, No. 25 of 1972)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {corporateLicences.map((licence, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-sm border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
                      Active Licence
                    </span>
                    <span className="text-[11px] text-body-color dark:text-gray-400">Exp: {licence.expires}</span>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-black dark:text-white mb-2">
                    {licence.business}
                  </h4>
                  <p className="text-xs text-body-color dark:text-gray-400 mb-4">
                    <strong>Issuing Office:</strong> {licence.issuer}<br />
                    <strong>Licence No:</strong> <span className="font-mono text-black dark:text-white">{licence.licenceNo}</span>
                  </p>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                  <p className="text-[11px] leading-relaxed text-body-color dark:text-gray-400">
                    <strong className="text-black dark:text-white">Permitted Scope:</strong> {licence.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Credentials */}
          <div className="p-8 rounded-sm bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 mb-16">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Human Capital</span>
              <h3 className="text-lg font-bold text-black dark:text-white">Staff Professional Certifications & Standards</h3>
              <p className="text-xs text-body-color dark:text-gray-400 mt-1">
                Our engineers and consultants hold internationally recognized certifications aligned with ITIL, PMI, COBIT, NIST, and ISO standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {professionalCredentials.map((cred, cIdx) => (
                <div key={cIdx} className="bg-white dark:bg-gray-800 p-5 rounded-sm border border-gray-100 dark:border-gray-700">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{cred.domain}</h4>
                  <p className="text-xs font-semibold text-black dark:text-white leading-relaxed">{cred.certs}</p>
                </div>
              ))}
            </div>
          </div>

          {/* === About Page Consultation / Inquiry Form === */}
          <div id="about-form" className="bg-gray-50 dark:bg-gray-800/60 p-8 md:p-12 rounded-sm border border-gray-200 dark:border-gray-700 shadow-md">
            <div className="max-w-[700px] mb-8">
              <span className="text-xs font-bold uppercase tracking-[3px] text-primary block mb-2">
                Direct Inquiry
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                Request an Institutional Consultation
              </h3>
              <p className="text-xs md:text-sm text-body-color dark:text-gray-300 mt-1">
                Submit your inquiry directly to our corporate desk. All communications are transmitted directly to <strong>info@primematrix.co.tz</strong>.
              </p>
            </div>

            {status.type === "success" && (
              <div className="mb-6 p-4 rounded-sm bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-xs md:text-sm">
                {status.message}
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-6 p-4 rounded-sm bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs md:text-sm">
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-4">
                    <label className="mb-1.5 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Adamu Omari"
                      className="w-full rounded-sm border border-stroke bg-white px-4 py-2.5 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-4">
                    <label className="mb-1.5 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., adamu@institution.co.tz"
                      className="w-full rounded-sm border border-stroke bg-white px-4 py-2.5 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-4">
                    <label className="mb-1.5 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                      Organization / Mining Co.
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g., Bank / Ministry / Mine"
                      className="w-full rounded-sm border border-stroke bg-white px-4 py-2.5 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-4">
                    <label className="mb-1.5 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+255 7XX XXX XXX"
                      className="w-full rounded-sm border border-stroke bg-white px-4 py-2.5 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-6">
                    <label className="mb-1.5 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                      Consultation Details / Scope *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify your technical, compliance, or mining requirements..."
                      className="w-full resize-none rounded-sm border border-stroke bg-white px-4 py-2.5 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full px-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-[11px] font-bold uppercase tracking-[2px] text-white shadow-submit duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {loading && <FiLoader className="animate-spin text-sm" />}
                    <span>{loading ? "Sending..." : "Submit Consultation Request"}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* === Action CTA === */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-[900px] text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
            Partner with an Accountable Tanzanian ICT Leader
          </h2>
          <p className="text-sm leading-relaxed text-white/90 mb-8 max-w-[700px] mx-auto">
            Whether preparing for a PDPA audit, upgrading core banking switch infrastructure, or deploying pre-entry safety inspection drones to a mine site, PrimeMatrix delivers regulator-ready excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#about-form"
              className="rounded-sm bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-primary hover:bg-gray-100 transition-all shadow-lg"
            >
              Request Consultation
            </a>
            <Link
              href="/mining"
              className="rounded-sm border border-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
            >
              Explore Mining Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;