"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(Draggable, InertiaPlugin);

type ProjectItem = {
  id: string | number;
  title: string;
  src?: string;
  alt?: string;
};

export default function ProjectsSection({ items }: { items?: ProjectItem[] }) {
  const defaultItems: ProjectItem[] = items || [
    { id: 1, title: "Healthcare", src: "/projects/health-care.png" },
    { id: 2, title: "Financial services", src: "/projects/finance.png" },
    { id: 3, title: "Technology", src: "/projects/technology.png" },
    { id: 4, title: "Manufacturing", src: "/projects/Manufacturing-v1.jpg" },
    { id: 5, title: "Logistics", src: "/projects/logistics.png" },
    { id: 6, title: "E-commerce", src: "/projects/ecom.jpg" },
  ];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  type GsapDraggableInstance = {
    x: number;
    target: Element | null;
    update: () => void;
  };

  const dragRef = useRef<GsapDraggableInstance | null>(null);

  // 🔥 BUTTON STATE
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateButtonState = (x: number, maxX: number) => {
    setAtStart(x >= 0); // at FIRST card
    setAtEnd(x <= maxX + 5); // at LAST card
  };

  // ----------------------------------
  // GSAP DRAGGABLE SETUP
  // ----------------------------------
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    const cardWidth = 400 + 24;
    const maxX = -(cardWidth * defaultItems.length - wrapper.offsetWidth);

    const instances = Draggable.create(container, {
      type: "x",
      bounds: { minX: maxX, maxX: 0 },
      inertia: true,
      liveSnap: false,
      edgeResistance: 0.3,
      throwResistance: 2000,
      snap: {
        x: (value) => Math.round(value / cardWidth) * cardWidth,
      },

      onDrag() {
        gsap.set(container, { x: this.x });
        updateButtonState(this.x, maxX);
      },

      onThrowUpdate() {
        gsap.set(container, { x: this.x });
        updateButtonState(this.x, maxX);
      },
    });

    dragRef.current = instances[0];
  }, []);

  // ----------------------------------
  // ARROW BUTTON ACTION
  // ----------------------------------
  const scrollBy = (dir: "left" | "right") => {
    const draggable = dragRef.current;
    const wrapper = wrapperRef.current;

    if (!draggable || !wrapper) return;

    const cardWidth = 400 + 24;
    const maxX = -(cardWidth * defaultItems.length - wrapper.offsetWidth);

    const currentX = draggable.x;

    // STOP when at limit
    if (dir === "left" && currentX >= 0) return;
    if (dir === "right" && currentX <= maxX) return;

    const newX = currentX + (dir === "left" ? cardWidth : -cardWidth);

    gsap.to(draggable.target, {
      x: newX,
      duration: 0.8,
      ease: "power2.inOut",
      onUpdate: () => draggable.update(),
      onComplete: () => updateButtonState(newX, maxX),
    });
  };

  // ----------------------------------
  // UI (unchanged)
  // ----------------------------------
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight ms-16">
            Transforming industries <br />
            <span className="text-gray-600">with next-gen innovation</span>
          </h2>

          <div className="flex gap-3 me-10">
            {/* LEFT BUTTON */}
            <button
              disabled={atStart}
              onClick={() => scrollBy("left")}
              className={`w-12 h-12 rounded-lg text-gray-200 flex items-center justify-center transition-all duration-300 
                ${
                  atStart
                    ? "bg-[#300000] opacity-40 cursor-not-allowed"
                    : "bg-[#160000] hover:bg-[#621010]"
                }`}
            >
              <Image src="/icons/left.svg" width={25} height={25} alt="left" />
            </button>

            {/* RIGHT BUTTON */}
            <button
              disabled={atEnd}
              onClick={() => scrollBy("right")}
              className={`w-12 h-12 rounded-lg text-gray-200 flex items-center justify-center transition-all duration-300 
                ${
                  atEnd
                    ? "bg-[#300000] opacity-40 cursor-not-allowed"
                    : "bg-[#160000] hover:bg-[#621010]"
                }`}
            >
              <Image
                src="/icons/right.svg"
                width={25}
                height={25}
                alt="right"
              />
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={wrapperRef}
          className="relative w-full overflow-hidden"
          style={{ height: "420px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={containerRef}
            className="absolute top-0 left-0 flex gap-6"
            style={{ willChange: "transform" }}
          >
            {defaultItems.map((it) => (
              <article
                key={it.id}
                className="w-[400px] h-[400px] rounded-3xl overflow-hidden bg-gray-900 relative shadow-lg shrink-0"
              >
                <Image
                  src={it.src!}
                  alt={it.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute left-6 bottom-6 text-[#fb5353] font-semibold text-lg md:text-xl drop-shadow">
                  {it.title}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
