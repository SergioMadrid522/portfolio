"use client";
import { navbarOptions } from "@/data";
import { GLOBAL } from "@/icons.data";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { hamburgerBtn } = GLOBAL;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full backdrop-blur-xl bg-[#0A0A0A]/90 border-b border-white/10 z-50">
      {/* Fila principal */}
      <div className="flex items-center p-5">
        <Link
          href="/"
          className="font-mono text-2xl font-bold tracking-tighter text-white flex-1"
        >
          <span className="text-gray-500">&lt;</span>SA{" "}
          <span className="text-[#FACC15]">/</span>
          <span className="text-gray-500">&gt;</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center justify-end gap-8">
          {navbarOptions.map(({ label, link }) => (
            <li key={label}>
              <Link
                href={link}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          className="flex md:hidden cursor-pointer text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {hamburgerBtn()}
        </button>
      </div>

      {/* Mobile drawer — dentro del mismo nav */}
      <div
        className={`flex md:hidden flex-col overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4">
          {navbarOptions.map(({ label, link }) => (
            <li key={label}>
              <Link
                href={link}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
