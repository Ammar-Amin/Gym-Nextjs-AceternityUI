"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { MovingBorder } from "./MovingBorder";

export function LandingPage() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mb-24 bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Sweat, Smile, Repeat <br /> Your ultimate fitness destination!
        <MovingBorder />
      </motion.h1>
    </LampContainer>
  );
}
