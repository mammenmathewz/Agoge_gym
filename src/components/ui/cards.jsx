import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconHeart,
  IconHelp,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Attractive membership offers",
      description: [
        "Very attractive inaugural offers",
        "Attractive family packages",
        "Attractive corporate packages",
      ],
     
      logo: "path/to/logo1.png", // Replace with the actual path to your image
    },
    {
      title: "Personal training at its best",
      description: [
        "Certified personal trainers",
        "100% assured weight gain and loss program",
        "100% assured strength training",
      ],
   
      logo: "path/to/logo2.png", // Replace with the actual path to your image
    },
    {
      title: "Exclusively for our female clients",
      description: [
        "Certified female personal trainers",
        "100% exclusive floor for females",
        "Attractive family packages",
      ],
      
      logo: "path/to/logo3.png", // Replace with the actual path to your image
    },
    {
      title: "Build your career with us",
      description: [
        "Structured training program for trainers",
        "Govt approved trainers certification program",
      ],

      logo: "path/to/logo4.png", // Replace with the actual path to your image
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index, logo }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 2) && "lg:border-l dark:border-neutral-800",
        index < 2 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {logo && <img src={logo} alt={`${title} logo`} className="h-12 w-12 mb-2" />} {/* Logo */}
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <h3 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
      </div>
      <ul className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 list-disc pl-5">
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
