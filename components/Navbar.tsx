"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4">
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto bg-transparent  backdrop-blur-md rounded-full shadow-[0_0_2px_rgba(255,255,255,0.25)] px-6 ">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full">
            <Image
              src={"/logo-white.svg"}
              width={100}
              height={100}
              alt="Urban Biz Tech Logo"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          {/* <Link
            href="#"
            className="text-white/80 hover:text-white font-extralight transition-all"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white/80 hover:text-white font-extralight transition-all"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-white/80 hover:text-white font-extralight transition-all"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-white/80 hover:text-white font-extralight transition-all"
          >
            Blog
          </Link> */}
          <Link
            href="#contact"
            onClick={handleContactClick}
            className="group relative px-6 py-2.5 rounded-full bg-[#FFF5F5]/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm transition-all duration-300 ease-out hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          </Link>
        </div>

        {/* Glow Center Effect */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-full bg-gradient-to-b from-red-600/20 via-orange-400/10 to-transparent blur-3xl pointer-events-none" />
      </div>
    </nav>
  );
};

export default Navbar;
