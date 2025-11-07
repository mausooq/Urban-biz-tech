"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Urban Biz Tech
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Innovating the future of urban businesses.
        </p>

        <div className="animate-pulse text-sky-400 text-xl font-semibold">
             Coming Soon
        </div>

        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Urban Biz Tech. All rights reserved.
        </p>
      </div>
    </div>
  );
}
