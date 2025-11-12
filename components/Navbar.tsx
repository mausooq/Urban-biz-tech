"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4">
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto bg-transparent  backdrop-blur-md rounded-full shadow-[0_0_10px_rgba(255,255,255,0.25)] px-6 ">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full">
            <Image src={'/logo-white.svg'} width={100} height={100} alt="Urban Biz Tech Logo"/>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          <Link
            href="#"
            className="text-white/80 hover:text-white font-medium transition-all"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white/80 hover:text-white font-medium transition-all"
          >
            Docs
          </Link>
        </div>

        {/* Glow Center Effect */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-full bg-gradient-to-b from-red-600/20 via-orange-400/10 to-transparent blur-3xl pointer-events-none" />
      </div>
    </nav>
  );
};

export default Navbar;
