import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-10 pb-10 antialiased">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* Reduced padding drastically for a tighter, high-density look */}
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light/30 px-6 py-6 dark:bg-gray-dark/30 sm:px-8 md:px-10 md:py-8">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;
  const isBGC = name === "BGC";

  return (
    <div className="flex w-full items-center justify-center px-4 py-5 sm:w-1/2 lg:w-1/3">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className={`relative w-full max-w-[220px] opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:hover:opacity-100 ${
          isBGC ? "h-24 max-w-[280px]" : "h-20"
        }`}
      >
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden object-contain dark:block"
        />
        <Image
          src={image}
          alt={name}
          fill
          className="block object-contain dark:hidden"
        />
      </a>
    </div>
  );
};