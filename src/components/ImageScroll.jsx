"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import gymDashboard from "../../public/gym-dashboard.png"

export function ImageScroll() {
    return (
        <div className="flex flex-col overflow-hidden w-full bg-slate-950">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Sweat it out, feel great. <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Be Unstoppable
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={gymDashboard}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
