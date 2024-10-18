import React from "react";

export function BackgroundLinesDemo({ heading, sub }) {
  return (
    <div className="flex items-center justify-center w-full flex-col px-2 bg-black pt-14"> 
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-4xl font-sans py-1 md:py-5 relative z-20 font-bold tracking-tight">
        {heading} <br /> {/* Use the passed heading prop */}
      </h2>
      <p
        className="max-w-lg mx-auto text-xs md:text-base text-neutral-700 dark:text-neutral-400 text-center">
        {sub} {/* Use the passed sub prop */}
      </p>
    </div>
  );
}
