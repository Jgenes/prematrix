import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section 
      id="features" 
      className="py-12 bg-white dark:bg-gray-dark md:py-16 lg:py-20 antialiased font-sans"
    >
      <div className="container max-w-[1100px]"> {/* Container constrained more for high density */}
        
        {/* Compact Section Header with Forced Small Fonts */}
        <div id="capabilities" className="mb-10 text-center">
          <h2 className="mb-3 text-lg font-bold uppercase tracking-[2px] text-black dark:text-white md:text-xl">
            Capabilities Overview
          </h2>
          <p className="mx-auto max-w-[600px] text-[13px] font-medium leading-relaxed text-body-color dark:text-body-color-dark opacity-80">
            Primematrix operates through integrated technical domains designed to provide complete digital governance and security resilience.
          </p>
          <div className="mx-auto mt-4 h-[1.5px] w-12 bg-primary/30"></div> {/* Subtle separator */}
        </div>

        {/* Grid spacing: tight gap-x-6, consistent gap-y-12.
            The border-l and pl-6 mimic the research paper/dashboard structure.
        */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="border-l border-gray-100 dark:border-gray-800/80 pl-6 transition-all duration-300 hover:border-primary"
            >
               <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;