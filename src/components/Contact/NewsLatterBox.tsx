"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="font-sans antialiased shadow-three dark:bg-gray-dark relative z-10 rounded-lg bg-white p-8 sm:p-11 lg:p-8 xl:p-11 border border-gray-100 dark:border-gray-800 overflow-hidden">
      <h3 className="mb-4 text-lg md:text-xl leading-tight font-bold text-black dark:text-white uppercase tracking-tighter">
        Technical Intelligence
      </h3>
      <p className="border-body-color/25 text-body-color mb-8 border-b pb-8 text-[11px] md:text-xs leading-relaxed dark:border-white/25 dark:text-gray-400">
        Subscribe to receive our latest whitepapers, regulatory impact assessments, and emerging threat intelligence reports.
      </p>
      
      <div className="relative z-20">
        <div className="mb-5">
          <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Adamu Omari"
            className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
          />
        </div>
        
        <div className="mb-5">
          <label className="mb-2 block text-[10px] uppercase tracking-widest font-bold text-dark dark:text-white">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="e.g. news@primematrix.co.tz"
            className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-5 py-3 text-xs md:text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary transition-all"
          />
        </div>
        
        <button
          type="submit"
          className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-md px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest text-white duration-300 transition-all active:scale-95"
        >
          Subscribe to Insights
        </button>
        
        <p className="text-body-color dark:text-gray-500 text-center text-[10px] leading-relaxed italic">
          Zero spam policy. High-value technical intelligence only.
        </p>
      </div>

      {/* SVG Decorations (Nimezihifadhi zile zile) */}
      <span className="absolute top-7 left-2 -z-0 opacity-20">
        {/* ... SVG 1 Content ... */}
      </span>
      {/* ... Baki ya SVG elements ... */}
    </div>
  );
};

export default NewsLatterBox;