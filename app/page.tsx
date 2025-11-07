"use client";

import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="w-full px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center">
          {/* <Image src="/logo-02.svg" alt="Urban Biz Tech" width={120} height={72} className="h-8 w-auto" /> */}
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center text-center px-6">
        <div className="max-w-xl">
          <Image src="/logo-02.svg" alt="Urban Biz Tech" width={240} height={144} priority className="mx-auto mb-4 h-auto w-[240px]" />
    
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Innovating the future of urban businesses.
          </p>
          <div className="animate-pulse text-[#CD2027] text-xl font-semibold">
            Coming Soon
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
