"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { TrainerImg } from "./TrainerImg";

export function WavyBackgroundDemo() {
  return (
    <div className="relative w-full h-screen">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-40">
          Meet Our Elite Trainers
        </p>
        <p className="text-base md:text-lg mt-6 text-white font-normal inter-var text-center">
          Passionate Professionals Committed to Helping You Achieve Your Fitness
          Goals!
        </p>
        <div className="flex justify-center items-center w-full mt-10">
          <TrainerImg />
        </div>
      </WavyBackground>
    </div>
  );
}
