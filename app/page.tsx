"use client";


import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/ProjectsSection";
import TrustedClients from "@/components/ui/TrustedClients";
import FeaturesSection from "@/components/feature";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  return (
    <main className="bg-[#060010]">
        <HeroSection />
        <TrustedClients />
        <ProjectsSection />
        <FeaturesSection />
        <StaggerTestimonials />
      </main>
  );
}