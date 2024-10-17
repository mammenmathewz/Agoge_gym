import React from 'react';
import Carousel from './Carousel';
import { Lamp } from 'lucide-react';
import { LampDemo } from './ui/Lamp';
import { SparklesPreview } from './ui/sparkles';
import { FeaturesSectionDemo } from './ui/cards';


const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
        <div className="mt-5 max-w-7xl mx-auto sm:flex sm:justify-center md:mt-8 w-full"> {/* Updated max-w */}
            <Carousel />
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Welcome to Gym
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your body, elevate your mind. Join us for a fitness journey like no other.
          </p>
        </div>

        <div>
            <SparklesPreview/>
        </div>

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
        </div>
        <FeaturesSectionDemo/>
        
      </main>
    </div>
  );
};

export default HomePage;
