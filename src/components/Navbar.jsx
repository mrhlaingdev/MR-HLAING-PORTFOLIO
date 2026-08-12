"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Creative Work", href: "#creative-work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="flex items-center gap-3 text-lg font-semibold tracking-[0.24em] text-white transition-colors hover:text-orange-400"
        >
          <Image
            src="/logo.jpg"
            alt="Mr Hlaing logo"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border-2 border-orange-500/60 object-cover ring-2 ring-orange-500/50 shadow-[0_0_20px_rgba(253,111,0,0.35)]"
          />
          <span>MR HLAING</span>
        </a>

        <button
          type="button"
          className="rounded-full border border-neutral-700 bg-neutral-900/50 p-2 text-neutral-200 transition hover:border-orange-500/60 hover:text-orange-300 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition hover:text-orange-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-neutral-800 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 transition hover:text-orange-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
