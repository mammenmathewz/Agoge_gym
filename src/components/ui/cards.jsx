import { cn } from "../../lib/utils";
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'


export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Attractive Membership Offers",
      description: [
        "Very attractive inaugural offers",
        "Attractive family packages",
        "Corporate packages designed for you", 
      ],
      logo: icon1
    },
    {
      title: "Personal Training at its Best",
      description: [
        "Certified personal trainers",
        "100% assured weight gain and loss program",
        "Strength training for all levels",
      ],
      logo:icon2
    },
    {
      title: "Exclusive Services for Women",
      description: [
        "Certified female trainers",
        "Exclusive gym floor for women",
        "Attractive family packages",
      ],
      logo: icon3
    },
    {
      title: "Build Your Career with Us",
      description: [
        "Structured training for aspiring trainers",
        "Government-approved certification",
      ],
      logo: icon4
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, logo, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 group bg-white dark:bg-neutral-900",
        (index === 0 || index === 2) && "lg:border-l lg:border-r dark:border-neutral-800",
        index < 2 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="mb-6 relative z-10 ">
        {logo && (
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-16 w-16 mb-4 mx-auto group-hover:text-yellow-500 transition-colors duration-300"
          />
        )}
      </div>
      <div className="text-lg font-bold mb-4 relative z-10">
        <h3 className="group-hover:text-yellow-500 transition-colors duration-300 text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
      </div>
      <ul className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs mx-auto list-disc pl-5 space-y-2">
        {description.map((item, idx) => (
          <li key={idx} className="group-hover:text-yellow-400 transition-colors duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

