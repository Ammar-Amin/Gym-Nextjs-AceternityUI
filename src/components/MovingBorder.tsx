"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorder() {
  return (
    <div className="absolute top-50 left-[40%]">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 tracking-wider"
      >
        Explore Now
      </Button>
    </div>
  );
}
