"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav
      className={cn("fixed top-8 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="/services">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/personal">Personal Training</HoveredLink>
              <HoveredLink href="/strength">Strength Training</HoveredLink>
              <HoveredLink href="/cardio">Cardio Workouts</HoveredLink>
              <HoveredLink href="/nutrition">Nutritional Guidance</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/couple">Couple</HoveredLink>
            <HoveredLink href="/family">Family</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/linkedIn">LinkedIn</HoveredLink>
              <HoveredLink href="/x">Twitter</HoveredLink>
              <HoveredLink href="/instagram">Instagram</HoveredLink>
              <HoveredLink href="/whatsapp">WhatsApp</HoveredLink>
              <HoveredLink href="/discord">Discord</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </nav>
  );
}
