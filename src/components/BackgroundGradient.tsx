"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

type Props = {
  data: Data;
};

type Data = {
  img: string;
  title: string;
  description: string;
};

export function BackgroundGradientCard({ data }: Props) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={data.img}
          alt="Fitness"
          height="300"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {data.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {data.description}
        </p>
      </BackgroundGradient>
    </div>
  );
}
