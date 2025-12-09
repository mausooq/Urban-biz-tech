"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#000000]">
      <motion.h2
        className="text-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.1] tracking-tight mb-16"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        Powerful Features. <br />
        <span className="text-gray-600">One Simple Platform.</span>
      </motion.h2>


      <motion.div
        className="max-w-[80%] mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* ---------------- ROW 1 ---------------- */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1 — 674 × 517 */}
          <motion.div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[674px] h-[517px]
            "
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute top-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">
                Boost sales productivity
              </h3>
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
          </motion.div>

          {/* Card 2 — 480 × 517 */}
          <motion.div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[480px] h-[517px]
            "
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/conversion_rate.png"
              alt="Feature 2"
              fill
              className="object-contain  pb-12 rounded-2xl"
            />

            <div className="absolute bottom-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">
                Simplify creation process
              </h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Automate workflows and build faster.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ---------------- ROW 2 ---------------- */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 3 — 480 × 517 */}
          <motion.div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[480px] h-[517px]
            "
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/circle-01.png"
              alt="Feature 3"
              fill
              className="object-contain object-top  rounded-2xl opacity-70"
            />

            <div className="absolute bottom-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">
                Create with ease
              </h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Build powerful tools effortlessly.
              </p>
            </div>
          </motion.div>

          {/* Card 4 — 674 × 517 */}
          <motion.div
            className="
              bg-[#000000] rounded-3xl border border-white/10 p-6 overflow-hidden relative
              w-full md:w-[674px] h-[517px]
            "
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/card5.png"
              alt="Feature 4"
              fill
              className="object-contain object-top  rounded-2xl"
            />

            <div className="absolute bottom-6 left-6 p-6">
              <h3 className="text-2xl font-semibold text-[#fff5f5] mb-2">
                Boost productivity
              </h3>
              <p className="text-gray-400 text-[1rem] max-w-xs">
                Empower your team with modern tools.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
