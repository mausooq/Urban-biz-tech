"use client";

import Image from "next/image";

export default function TrustedClients() {
  // Logo data with URLs
  const logos = [
    {
      src: "/client/bearys.png",
      url: "https://bearysstartup.com",
      alt: "Bearys",
    },
    {
      src: "/client/BM_Green_Logo_house.png",
      url: "https://bmgreenhouse.in/", // Update with actual URL
      alt: "BM Green",
    },
    {
      src: "/client/Essenzia Logo-01.png",
      url: "https://essenziaglobal.com/", // Update with actual URL
      alt: "Essenzia",
    },
    {
      src: "/client/bizmine.png",
      url: "https://bizmine.in/", // Update with actual URL
      alt: "Bizmine",
    },
    {
      src: "/client/bcc-v1.png",
      url: "https://www.bccbengaluru.com/", // Update with actual URL
      alt: "BCC",
    },
    {
      src: "/client/Mangalore_muttons.png",
      url: "https://mangaloremuttons.zobaze.shop/home", // Update with actual URL
      alt: "Mangalore Muttons",
    },
  ];

  // Duplicate for continuous scrolling effect
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 mb-8 text-sm md:text-base tracking-wide">
        Trusted by Leading Brands
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Infinite scroll container */}
          <div className="flex animate-scroll gap-4 md:gap-4">
            {repeatedLogos.map((logo, i) => (
              <a
                key={`${logo.src}-${i}`}
                href={logo.url}
                target={logo.url !== "#" ? "_blank" : undefined}
                rel={logo.url !== "#" ? "noopener noreferrer" : undefined}
                className="flex-shrink-0 w-50 h-50 md:w-50 md:h-50 bg-[#DB0000]/10 rounded-2xl flex items-center justify-center shadow-inner cursor-pointer hover:bg-[#DB0000]/20 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
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
