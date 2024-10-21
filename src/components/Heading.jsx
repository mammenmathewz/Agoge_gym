import React from "react";

export function BackgroundLinesDemo({ heading, sub }) {
  return (
    <div className="flex items-center justify-center w-full flex-col px-2"> 
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-900 dark:from-neutral-900 dark:to-slate-50 text-2xl md:text-4xl lg:text-8xl font-sans py-1 md:py-5 relative z-20 font-bold tracking-tight"
      >
        {heading} <br /> {/* Use the passed heading prop */}
      </h2>
      <p
        className="max-w-lg mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"
      >
        {sub} {/* Use the passed sub prop */}
      </p>
    </div>
  );
}
