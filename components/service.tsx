"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Service {
  id: number;
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Strategy & Consulting",
    heading: "Strategic Vision & Consulting",
    description:
      "We help businesses define their strategic direction, identify opportunities, and create actionable plans that drive growth and innovation.",
    image: "/service/Strategy.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Brand Identity Design",
    heading: "Brand Identity Design",
    description:
      "Crafting memorable brand identities that resonate with your audience and communicate your unique value proposition through thoughtful design.",
    image: "/service/brand-identity.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "UI/UX Design",
    heading: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences that combine beautiful interfaces with seamless functionality to delight your users.",
    image: "/service/ui-ux.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Product Vision & Planning",
    heading: "Product Vision & Planning",
    description:
      "Transforming ideas into well-defined product roadmaps with clear vision, strategic planning, and execution frameworks.",
    image: "/service/plan.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Web Design & Development",
    heading: "Web Design & Development",
    description:
      "Building modern, responsive websites and web applications that combine stunning design with robust functionality and optimal performance.",
    image: "/service/dev.png",
  },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.4,
    },
  },
};

export default function ServiceSection() {
  const [activeService, setActiveService] = useState(0);

  const currentService = services[activeService];

  return (
    <section className="w-full bg-[#000000] py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Big Heading */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.1] tracking-tight">
            Service <span className="text-gray-600">Expertise</span>
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Section - Service Description */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={`heading-${activeService}`}
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {currentService.heading}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${activeService}`}
                className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {currentService.description}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Center Section - Image */}
          <motion.div
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <div
              className="relative w-full max-w-[400px] mx-auto"
              style={{ aspectRatio: "4/5" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${activeService}`}
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    borderTopLeftRadius: "2rem",
                    borderBottomRightRadius: "2rem",
                  }}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Image
                    src={currentService.image}
                    alt={currentService.title}
                    fill
                    className="object-cover"
                    priority={activeService === 0}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Section - Service List */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            {services.map((service, index) => {
              const isActive = index === activeService;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className="relative text-left group"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`text-5xl md:text-6xl font-light transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    >
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <span
                        className={`block text-base md:text-lg font-light transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-500 group-hover:text-gray-400"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="absolute left-0 right-0 -bottom-6 h-px bg-gray-800" />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
