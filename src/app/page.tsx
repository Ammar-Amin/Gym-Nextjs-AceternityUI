import {
  GridBackground,
  ImageScroll,
  LandingPage,
  Services,
} from "@/components";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BeamCollision";
import { WavyBackgroundDemo } from "@/components/WavyBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between antialiased">
      <LandingPage />
      <Services />
      <ImageScroll />
      <GridBackground />
      <BackgroundBeamsWithCollisionDemo />
      <WavyBackgroundDemo />
    </main>
  );
}
