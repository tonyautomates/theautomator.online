"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative">
      <div className="h-[40px] bg-[#2F6BFF]" />

      <div
        className="bg-[#2F3A4A] px-4 flex items-center justify-between"
        style={{ height: "48px" }}
      >
        <div
          className="text-white font-semibold text-[14px]"
          style={{ lineHeight: "1.05" }}
        >
          The
          <br />
          Automator.
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-[4px] z-50 p-2"
        >
          <span className="block w-[20px] h-[2px] bg-white rounded" />
          <span className="block w-[20px] h-[2px] bg-white rounded" />
          <span className="block w-[20px] h-[2px] bg-white rounded" />
        </button>
      </div>

      {/* Dropdown menu */}
      <div
  className={`absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden
    transition-all duration-200 ease-out z-50
    ${
      isMenuOpen
        ? "max-h-64 opacity-100"
        : "max-h-0 opacity-0"
    }
  `}
>
  <nav className="flex flex-col">
    <Link
      href="/portfolio"
      className="text-[#2F3A4A] text-[16px] px-6 py-4 border-b border-gray-200 hover:bg-[#2F6BFF] hover:text-white transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      Portfolio
    </Link>

    <Link
      href="/socials"
      className="text-[#2F3A4A] text-[16px] px-6 py-4 border-b border-gray-200 hover:bg-[#2F6BFF] hover:text-white transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      Socials
    </Link>

    <Link
      href="/reviews"
      className="text-[#2F3A4A] text-[16px] px-6 py-4 hover:bg-[#2F6BFF] hover:text-white transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      Reviews
    </Link>
  </nav>
</div>


    </header>
  );
}