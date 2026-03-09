"use client";

import NewsLatterBox from "./NewsLatterBox";
import { FiMail, FiMapPin, FiClock, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="font-sans antialiased overflow-hidden py-16 md:py-20 lg:py-28 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container max-w-[1200px]">
        <div className="-mx-4 flex flex-wrap">
          {/* === Contact Form Section === */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] border border-gray-100 dark:border-gray-800"
            >
              <h2 className="mb-3 text-xl md:text-2xl font-bold text-black dark:text-white uppercase tracking-tight">
                Institutional Support & Inquiries
              </h2>
              <p className="mb-10 text-xs md:text-sm font-medium text-body-color dark:text-gray-400 leading-relaxed">
                Submit a formal inquiry or support ticket. Our technical and compliance teams will respond to your institutional needs promptly.
              </p>
              
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Full Name / Institution
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Adamu Omari"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g., info@primematrix.co.tz"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
                        Nature of Inquiry
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Provide details regarding your technical or compliance requirements..."
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[2px] text-white shadow-submit duration-300 hover:bg-primary/90 hover:shadow-lg active:scale-95 transition-all">
                      Submit Formal Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* === Contact Info & Newsletter === */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="space-y-6">
              {/* Information Card */}
              <div className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark border border-gray-100 dark:border-gray-800">
                <h3 className="mb-6 text-sm font-bold text-black dark:text-white uppercase tracking-widest border-b border-gray-50 dark:border-gray-800 pb-4">
                  Contact Channels
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/5 text-primary">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tight text-primary mb-1">Location</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-400 leading-relaxed">
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/5 text-primary">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tight text-primary mb-1">Institutional Email</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-400">
                        info@primematrix.co.tz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/5 text-primary">
                      <FiClock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tight text-primary mb-1">Support Hours</p>
                      <p className="text-xs font-medium text-body-color dark:text-gray-400 leading-relaxed">
                        Mon - Fri: 08:30 - 17:30 <br />
                        Sat: 09:00 - 13:00
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