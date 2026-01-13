"use client";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Page() {
  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden px-4">
      <div className="absolute inset-0">
        <Spotlight />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1
          className="font-bold leading-tight
          text-3xl sm:text-4xl md:text-6xl
          bg-clip-text text-transparent
          bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Welcome to Balaa&apos;s Space!!!
        </h1>

        <p
          className="mt-4 text-sm sm:text-base md:text-lg
          text-neutral-300 leading-relaxed max-w-xl mx-auto"
        >
          Personal space of mine to learn, explore, and do things that I love.
        </p>
      </div>
    </div>
  );
}
