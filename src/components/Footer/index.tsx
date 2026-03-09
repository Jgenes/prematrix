"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24 font-sans antialiased">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Branding & Socials */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Primematrix"
                    width={120}
                    height={30}
                    className="dark:hidden w-auto h-8"
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="Primematrix"
                    width={120}
                    height={30}
                    className="hidden w-auto h-8 dark:block"
                  />
                </Link>
                <p className="mb-9 text-[13px] leading-relaxed text-body-color dark:text-body-color-dark">
                  High-performance digital solutions focusing on enterprise architectures, 
                  educational management systems, and logistics optimization for the Tanzanian market.
                </p>
                
                {/* Social Media Icons with X Added */}
                <div className="flex items-center space-x-5">
                  {[
                    { label: "X", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" },
                    { label: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                    { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                    { label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label={social.label}
                      className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                  Quick Links
                </h2>
                <ul className="space-y-4">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                        className="text-[11px] font-bold uppercase tracking-wider text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal Section */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                  Legal
                </h2>
                <ul className="space-y-4">
                  {["TOS", "Privacy Policy"].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-[11px] font-bold uppercase tracking-wider text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Details */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                  Get In Touch
                </h2>
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-dark dark:text-white mb-1">Office Address</p>
                    <p className="text-[12px] text-body-color dark:text-body-color-dark">
                      P.O.BOX 81<br />
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-dark dark:text-white mb-1">Phone Number</p>
                    <p className="text-[12px] text-body-color dark:text-body-color-dark">
                      +255 700 000 000
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-dark dark:text-white mb-1">Email Address</p>
                    <p className="text-[12px] text-body-color dark:text-body-color-dark">
                      info@primematrix.co.tz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          
          <div className="py-8">
            <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-body-color dark:text-white">
              © {new Date().getFullYear()} Primematrix Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;