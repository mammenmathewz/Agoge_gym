import React from "react";
import Carousel from "./Carousel";
import { SparklesPreview } from "./ui/sparkles";
import { FeaturesSectionDemo } from "./ui/cards";
import sparatans from "../assets/sparatans.jpg";

import { LampDemo } from "./ui/Lamp";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* <main className="w-full px-4 sm:px-6 lg:px-8 py-12"> */}

      <div className="text-center ">
        <div className="pt-10">
          <Carousel />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start max-w-7xl pt-20 mx-auto">
        <div className="md:w-1/2 md:pr-8">
          <img
            src={sparatans}
            alt="Agoge Spartan Training"
            className="w-full rounded-lg shadow-lg "
          />
        </div>
        <div className="md:w-1/2">
          <h4 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl pt-4">
            This is SPARTA !!!
          </h4>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Agoge is a structured rigorous physical strength training, stealth
            training, and social life skill training mandated for the SPARTANS
            in ancient Greece. AGOGE meant "rearing" in Greek and fits perfectly
            with our fitness center concept.
          </p>
        </div>
      </div>

      <div className="pt-9">
        <SparklesPreview />
      </div>

      {/* Uncomment if needed
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white text-center">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {['Personal Training', 'Group Classes', 'Nutrition Counseling'].map((service) => (
            <div key={service} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <div className="w-full h-full flex items-center justify-center text-white">
                  [Image Placeholder]
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-white">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {service}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <FeaturesSectionDemo />
      <div>
        <LampDemo />
      </div>
      {/* </main> */}
    </div>
  );
};

export default HomePage;
