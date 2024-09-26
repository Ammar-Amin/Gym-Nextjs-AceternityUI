import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

interface GymSer {
  title: string;
  description: string;
  image: string;
}

const gymServices: GymSer[] = [
  {
    title: "Personal Training",
    description:
      "Tailored workouts and one-on-one coaching to help you reach your fitness goals.",
    image:
      "https://plus.unsplash.com/premium_photo-1672862923459-536ab8b1372e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Group Fitness Classes",
    description:
      "Energizing classes like yoga, HIIT, and spin to keep you motivated and fit.",
    image:
      "https://plus.unsplash.com/premium_photo-1664109999840-3f7e97489e53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nutritional Guidance",
    description:
      "Expert advice and meal plans to complement your training and optimize results.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Strength Training",
    description:
      "Build muscle and increase endurance with our state-of-the-art equipment.",
    image:
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Senior Fitness",
    description:
      "Specialized programs focused on maintaining mobility, strength, and balance for seniors.",
    image:
      "https://plus.unsplash.com/premium_photo-1663037007143-619bc153deaa?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Yoga Classes",
    description:
      "Relax and improve flexibility with our calming and restorative yoga sessions.",
    image:
      "https://plus.unsplash.com/premium_photo-1674062859696-678fc14640c5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    title: "Recovery Zone",
    description:
      "Enjoy post-workout massages and stretching sessions to aid muscle recovery.",
    image:
      "https://plus.unsplash.com/premium_photo-1664301054502-46d9794f2e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Functional Training",
    description:
      "Workouts that enhance your everyday movements and athletic performance.",
    image:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cardio Workouts",
    description:
      "Improve cardiovascular health with a variety of cardio equipment and programs.",
    image:
      "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen pt-20 bg-slate-950">
      <div className="w-full flex flex-wrap justify-evenly items-center">
        {gymServices.length > 0 &&
          gymServices.map((item: GymSer, i: number) => (
            <div key={i} className="h-[450px]">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full my-4">
                    <Image
                      src={item.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
