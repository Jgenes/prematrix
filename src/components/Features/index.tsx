import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const operatingFramework = [
    { step: "1", title: "Gap Analysis", desc: "Assess posture, data and risk across the estate" },
    { step: "2", title: "Architecture", desc: "Design secure, regulator-ready compliant solutions" },
    { step: "3", title: "Security Testing", desc: "Validate technical controls and resiliency before go-live" },
    { step: "4", title: "Deployment", desc: "Implement, train staff, monitor and maintain SLAs" },
  ];

  return (
    <section 
      id="features" 
      className="py-16 bg-white dark:bg-gray-dark md:py-20 lg:py-24 antialiased font-sans border-b border-gray-100 dark:border-gray-800"
    >
      <div className="container max-w-[1200px]">
        
        {/* Section Header */}
        <div id="capabilities" className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[4px] text-primary block mb-2">
            Service Portfolio
          </span>
          <h2 className="mb-3 text-2xl font-bold uppercase tracking-tight text-black dark:text-white md:text-3xl">
            Eight Integrated Capability Pillars
          </h2>
          <p className="mx-auto max-w-[700px] text-sm leading-relaxed text-body-color dark:text-gray-300">
            Eight capability pillars work independently or as a combined programme. Clients can start with a single service and grow into a complete managed ICT partnership.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-primary"></div>
        </div>

        {/* 8 Capability Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="p-6 rounded-sm border border-gray-100 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-800/30 hover:bg-white dark:hover:bg-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>

        {/* 4-Phase Operating Framework from Page 9 */}
        <div className="p-8 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Methodology</h3>
            <h4 className="text-lg font-bold text-black dark:text-white">Our Four-Phase Operating Framework</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operatingFramework.map((phase) => (
              <div key={phase.step} className="bg-white dark:bg-gray-800 p-5 rounded-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-bold text-white">
                    {phase.step}
                  </span>
                  <h5 className="text-sm font-bold text-black dark:text-white uppercase">{phase.title}</h5>
                </div>
                <p className="text-xs text-body-color dark:text-gray-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;