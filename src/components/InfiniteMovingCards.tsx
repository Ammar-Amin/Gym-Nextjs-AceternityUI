"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] pt-32 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.08] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "John Doe",
    title: "Fitness Enthusiast",
    quote:
      "This gym has completely transformed my life. The trainers are incredibly supportive, and the community is unmatched. I've never felt stronger or more confident!",
  },
  {
    name: "Jane Smith",
    title: "Yoga Lover",
    quote:
      "The variety of classes offered is amazing! From intense cardio sessions to calming yoga, there’s something for everyone. The environment is always welcoming and positive.",
  },
  {
    name: "Mike Johnson",
    title: "Bodybuilder",
    quote:
      "The equipment here is top-notch, and the staff really know their stuff. I've seen incredible gains since I joined, and I wouldn't train anywhere else.",
  },
  {
    name: "Sarah Williams",
    title: "Busy Professional",
    quote:
      "As someone with a hectic schedule, I appreciate the flexible class timings and personalized training sessions. It’s the perfect gym for anyone looking to stay fit despite a busy lifestyle.",
  },
  {
    name: "Alex Brown",
    title: "Weight Loss Success Story",
    quote:
      "I’ve lost over 30 pounds since joining this gym. The trainers provided the perfect blend of motivation and expertise to keep me on track. I’m healthier and happier than ever!",
  },
  {
    name: "Emily Davis",
    title: "New Mom",
    quote:
      "Getting back in shape after having a baby was daunting, but this gym made it possible. The postnatal classes and supportive trainers were exactly what I needed.",
  },
  {
    name: "Chris Wilson",
    title: "Senior Member",
    quote:
      "The focus on overall wellness and injury prevention is something I really appreciate. The trainers know how to tailor workouts for all ages and fitness levels.",
  },
  {
    name: "Olivia Taylor",
    title: "Athlete",
    quote:
      "Whether I’m training for a marathon or just maintaining my fitness, this gym has everything I need. The atmosphere is motivating, and the trainers push me to be my best.",
  },
  {
    name: "David Lee",
    title: "First-Time Gym-Goer",
    quote:
      "I was nervous about joining a gym, but the friendly staff and welcoming community made all the difference. I’m now in the best shape of my life!",
  },
  {
    name: "Sophia Martinez",
    title: "Health-Conscious Professional",
    quote:
      "The nutritional guidance combined with personalized training has helped me achieve a balance I never thought possible. I’m stronger, healthier, and more energized than ever!",
  },
];
