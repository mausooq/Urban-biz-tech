"use client";

import Image from "next/image";
import ColorBends from "./ColorBends";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          colors={["#EF0001", "#000000", "#EF0001"]}
          rotation={0}
          autoRotate={0}
          speed={0.2}
          scale={0.8}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container px-6 md:px-10 h-full grid items-center">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] lg:gap-16">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                {/* Updated Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
                  <span className="text-gray-200">Smart Digital Solutions</span>{" "}
                  <span className="text-[#FFB900]">for Modern Businesses</span>
                </h1>

                {/* Updated Subtitle */}
                <p className="max-w-[600px] text-gray-300 text-lg md:text-xl leading-relaxed my-10">
                  We help companies grow with simple, effective, and scalable
                  digital strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex items-center justify-center relative">
            {/* Glowing Red Background */}
            <div className="absolute inset-0 blur-3xl bg-[#FF1A1A]/30 rounded-full animate-pulse" />
            <Image
              alt="Hero"
              className="overflow-hidden rounded-2xl object-cover animate-slow-rotate mt-7"
              height={550}
              width={550}
              src="/hero-image.png"
            />
          </div>
        </div>
      </div>
      {/* 🔹 Bottom gradient shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-[#060010]/70 to-transparent pointer-events-none" />
    </section>
  );
}
