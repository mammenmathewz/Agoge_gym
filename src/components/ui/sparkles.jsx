"use client";
import React from "react";
import { SparklesCore } from "./why";

export function SparklesPreview() {
  const features = [
    "✌️ One of the largest in Kerala.",
    "😶‍🌫️ Fully Airconditioned.",
    "💪 Best strength and cardio equipment in the industry.",
    "🧱 European imported gym floor.",
    "🤝 Best crossfit policy.",
    "♨️ Steam and spa facility.",
    "🅿️ Spacious vehicle parking area."
  ];

  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        WHY AGOGE...?
      </h1>
      <div className="w-[40rem] h-40 relative mt-8">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <ul className="mt-4 space-y-2 px-4 sm:px-10 md:px-20 lg:px-32 ">
        {features.map((feature, index) => (
          <li key={index} className="text-white text-lg md:text-xl text-center ">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
