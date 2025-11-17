"use client";


import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#000000]">

      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-[#c18383] mb-16">
        All the features you need in <br /> one place
      </h2>

      <div className="max-w-[80%] mx-auto space-y-6">

        {/* ---------------- ROW 1 ---------------- */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Card 1 — 674 × 517 */}
          <div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[674px] h-[517px]
            "
          >
           

            <div className="absolute top-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">Boost sales productivity</h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Increase team efficiency and streamline workflows.
              </p>
            </div>
             <Image
              src="/avatar.png"
              alt="Feature 1"
              fill
              className="object-contain object-bottom rounded-2xl"
            />
          </div>

          {/* Card 2 — 480 × 517 */}
          <div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[480px] h-[517px]
            "
          >
            <Image
              src="/conversion_rate.png"
              alt="Feature 2"
              fill
              className="object-contain  pb-12 rounded-2xl"
            />

            <div className="absolute bottom-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">Simplify creation process</h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Automate workflows and build faster.
              </p>
            </div>
          </div>

        </div>

        {/* ---------------- ROW 2 ---------------- */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Card 3 — 480 × 517 */}
          <div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[480px] h-[517px]
            "
          >
            <Image
              src="/circle-01.png"
              alt="Feature 3"
             fill
              className="object-contain object-top  rounded-2xl opacity-70"
            />

            <div className="absolute bottom-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">Create with ease</h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Build powerful tools effortlessly.
              </p>
            </div>
          </div>

          {/* Card 4 — 674 × 517 */}
          <div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[674px] h-[517px]
            "
          >
            <Image
              src="/card5.png"
              alt="Feature 4"
              fill
              className="object-contain object-top  rounded-2xl"
            />

            <div className="absolute bottom-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">Boost productivity</h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Empower your team with modern tools.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
