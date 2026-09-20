"use client";

import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import { FiMail, FiMapPin, FiClock, FiPhone, FiFileText, FiShield, FiCpu, FiCheckCircle, FiLoader } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your inquiry has been sent to info@primematrix.co.tz. Our team will review and respond promptly.",
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const waysToBegin = [
    {
      title: "PDPA & Security Health Check",
      desc: "A short assessment of posture against PDPA, ISO 27001, PCI DSS and local regulation, with a prioritised action list.",
      icon: FiShield,
      tag: "Compliance",
    },
    {
      title: "Infrastructure & Architecture Review",
      desc: "Independent review of network, data-centre and cloud resilience, cost and capacity.",
      icon: FiCpu,
      tag: "Infrastructure",
    },
    {
      title: "Digital Project Scoping Workshop",
      desc: "A structured workshop to define scope, budget, timeline and risks for a planned initiative.",
      icon: FiFileText,
      tag: "Advisory",
    },
    {
      title: "Mining Site Walk-through & Demo",
      desc: "Pre-entry underground drone inspection demonstration, mine site IT and power assessment.",
      icon: FiCheckCircle,
      tag: "Mining Tech",
    },
  ];

  return (
    <section id="contact" className="font-sans antialiased overflow-hidden py-16 md:py-20 lg:py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container max-w-[1200px]">

        {/* Ways to Begin Banner */}
        <div className="mb-16">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[4px] text-primary mb-3">Engage With Us</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">Start With a Focused Consultation</h3>
            <p className="mt-3 text-sm text-body-color dark:text-gray-400">
              We offer an initial consultation and readiness discussion that leaves you with a clear view of your priorities, risks, and a tailored roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {waysToBegin.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-dark border border-gray-100 dark:border-gray-800 p-6 rounded-sm shadow-sm hover:border-primary transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-[14px] font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[12px] leading-relaxed text-body-color dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {/* === Contact Form Section === */}
          <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[50px] border border-gray-100 dark:border-gray-800"
            >
              <h2 className="mb-2 text-xl md:text-2xl font-bold text-black dark:text-white uppercase tracking-tight">
                Institutional Support & Tendering
              </h2>
              <p className="mb-8 text-xs md:text-sm font-medium text-body-color dark:text-gray-400 leading-relaxed">
                Submit an RFP, prequalification enquiry, or technical support request. Your message will be sent directly to <strong>info@primematrix.co.tz</strong>.
              </p>

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
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Full Name / Contact Person *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Juma Ally"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Organization / Ministry / Mining Co.
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g., Commercial Bank, Mining Site"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., yourname@institution.co.tz"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+255 7XX XXX XXX"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Engagement Scope / Requirement *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify your requirements (e.g. Mining safety drones, PDPA compliance audit, SOC monitoring, Tier II data center, Manpower supply)..."
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[2px] text-white shadow-submit duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {loading && <FiLoader className="animate-spin text-sm" />}
                      <span>{loading ? "Transmitting..." : "Submit Formal Inquiry"}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* === Contact Info & Corporate Standing === */}
          <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <div className="space-y-6">
              {/* Information Card */}
              <div className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark border border-gray-100 dark:border-gray-800">
                <h3 className="mb-6 text-sm font-bold text-black dark:text-white uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-4">
                  Corporate Contacts & Location
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-primary flex-shrink-0">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Office Location</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-300 leading-relaxed">
                        Morogoro Road, Kibamba Ward,<br />
                        Ubungo Municipal Council,<br />
                        P. O. Box 22678, Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-primary flex-shrink-0">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Direct Lines</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-300 leading-relaxed">
                        <a href="tel:+255783700007" className="hover:text-primary transition-colors block">+255 783 700 007</a>
                        <a href="tel:+255767159898" className="hover:text-primary transition-colors block">+255 767 159 898</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-primary flex-shrink-0">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Official Email & Web</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-300 leading-relaxed">
                        <a href="mailto:info@primematrix.co.tz" className="hover:text-primary transition-colors block">info@primematrix.co.tz</a>
                        <a href="https://primematrix.co.tz" className="hover:text-primary transition-colors block">https://primematrix.co.tz</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-primary flex-shrink-0">
                      <FiFileText size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Statutory Identifiers</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-300 leading-relaxed">
                        BRELA Reg: <strong className="text-black dark:text-white">193286410</strong><br />
                        TRA TIN: <strong className="text-black dark:text-white">193-286-410</strong><br />
                        Incorporated: 27 January 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-primary flex-shrink-0">
                      <FiClock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Operations & NOC</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-300 leading-relaxed">
                        Office: Mon - Fri: 08:30 - 17:30<br />
                        NOC & Critical Support: <strong className="text-primary">24/7/365</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Box */}
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;