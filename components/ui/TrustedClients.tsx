"use client";

import Image from "next/image";

export default function TrustedClients() {
  // Using your file from /public/client/demo.svg
  const logos = [
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
    "/client/logo-white.svg",
   
  ];

  // Duplicate for continuous scrolling effect
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 mb-8 text-sm md:text-base tracking-wide">
          Trusted by fast-moving B2B teams
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Infinite scroll container */}
          <div className="flex animate-scroll gap-4 md:gap-4">
            {repeatedLogos.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-50 h-50 md:w-50 md:h-50 bg-[#DB0000]/10  rounded-2xl flex items-center justify-center shadow-inner"
              >
                <Image
                  src={src}
                  alt={`Client logo ${i + 1}`}
                  width={100}
                  height={100}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Fade edges for clean look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
