import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-12 pb-14 bg-gray-50/40 dark:bg-gray-900/30 antialiased border-y border-gray-100 dark:border-gray-800">
      <div className="container max-w-[1200px]">
        <div className="text-center max-w-[650px] mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-primary block mb-2">
            Track Record
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
            Companies We Have Worked With
          </h2>
          <p className="text-xs text-body-color dark:text-gray-400 mt-2">
            PrimeMatrix has supported leading mining, industrial, security, and private enterprise clients across Tanzania with safety, security, and accountable digital delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Client Needs Summary from Page 29 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200/60 dark:border-gray-800 text-center md:text-left">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700/60 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Safety & Inspection</h3>
            <p className="text-[11.5px] leading-relaxed text-body-color dark:text-gray-400">
              Underground pre-entry inspection drones, surface surveys, and hazard visibility before personnel enter headings.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700/60 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Security & Site IT</h3>
            <p className="text-[11.5px] leading-relaxed text-body-color dark:text-gray-400">
              CCTV, access control, control room video walls, site data rooms, resilient networks, and 3-2-1 backup systems.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700/60 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Power & People</h3>
            <p className="text-[11.5px] leading-relaxed text-body-color dark:text-gray-400">
              Solar, battery hybrid, generator power, plus vetted skilled and general Tanzanian manpower for operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name, sector } = brand;

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700/60 shadow-xs hover:border-primary transition-all group">
      <div className="relative w-full h-16 flex items-center justify-center mb-2">
        <Image
          src={imageLight || image}
          alt={name}
          fill
          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-1"
        />
      </div>
      <div className="text-center w-full pt-2 border-t border-gray-100 dark:border-gray-700">
        <h3 className="text-[11px] font-bold text-black dark:text-white truncate" title={name}>
          {name}
        </h3>
        {sector && (
          <p className="text-[9.5px] text-body-color dark:text-gray-400 truncate" title={sector}>
            {sector}
          </p>
        )}
      </div>
    </div>
  );
};