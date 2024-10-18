import { cn } from "../lib/utils";
import { IconCurrencyRupee } from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Strength Training",
      description:
        "Inaugural offer",
      inauguralOffer: {
        originalPrice: "1200",
        discountedPrice: "1000",
        discountLabel: "33% off",
      },
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Monthly package",
      description:"Inaugural Offer",
      inauguralOffer: {
        originalPrice: "2000 Rs",
        discountedPrice: "1400",
        discountLabel: "33% off",
      },
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Quarterly Package",
      description:"Inaugural offer",
      inauguralOffer: {
        originalPrice: "6000",
        discountedPrice: "3600",
        discountLabel: "40% off",
      },
      icon: <IconCurrencyRupee />,
    },
    {
      title: "6 monthly package",
      description: "inaugural offer",
      inauguralOffer: {
        originalPrice: "12000",
        discountedPrice: "6000",
        discountLabel: "50% off",
      },
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Annual Package",
      description: "Inaugural offer",
      inauguralOffer: {
        originalPrice: "24000",
        discountedPrice: "9800",
        discountLabel: "60% off",
      },
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Family & Group packages",
      description:"Inaugural offer (Quaterly)",
      inauguralOffer: {
        originalPrice: "6000",
        discountedPrice: "3000",
        discountLabel: "50% off",
      },
      icon: <IconCurrencyRupee />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, inauguralOffer, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>

      {inauguralOffer && (
        <div className="relative z-10 px-10 text-sm text-neutral-800 dark:text-neutral-300">
          <p className="text-red-500 font-bold mb-2">{inauguralOffer.discountLabel}</p>
          <p>
            <span className="line-through text-neutral-500">Rs. {inauguralOffer.originalPrice}</span>{" "}
            <span className="text-green-500 font-bold">Rs. {inauguralOffer.discountedPrice} only</span>
          </p>
        </div>
      )}
    </div>
  );
};
