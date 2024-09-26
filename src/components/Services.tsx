import React from "react";
import { BackgroundGradientCard } from "./BackgroundGradient";
import { Service, services } from "./constant";
import Link from "next/link";

const Services = () => {
  return (
    <div className="w-full max-w-[90rem] mx-auto flex flex-wrap gap-10 justify-evenly py-40">
      {services.map((item: Service, index: number) => (
        <Link href="#" key={index}>
          <BackgroundGradientCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Services;
