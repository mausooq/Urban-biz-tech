import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#CD2027] bg-white text-black">
      <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-center gap-3">
        <Image src="/logo-black.svg" alt="Urban Biz Tech" width={96} height={58} className="h-6 w-auto" />
        <span className="text-sm text-gray-700">© {new Date().getFullYear()} <a href="https://urbanbiz.in" target="_blank" rel="noopener noreferrer" className=" hover:text-[#CD2027]">URBAN BIZ VENTURES PRIVATE LIMITED</a>. All rights reserved.</span>
      </div>
    </footer>
  );
}


