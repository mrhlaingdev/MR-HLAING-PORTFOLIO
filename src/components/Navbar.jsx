"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

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
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
        {/* Logo Section */}
        <a
          href="#home"
          className="flex items-center gap-3 text-base font-bold tracking-[0.2em] text-white transition-colors hover:text-orange-400"
        >
          <Image
            src="/logo.jpg"
            alt="Mr Hlaing logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-orange-500 object-cover ring-2 ring-orange-500/30 shadow-[0_0_15px_rgba(253,111,0,0.3)]"
          />
          <span>MR HLAING</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-full border border-neutral-700 bg-neutral-900/50 p-2 text-neutral-200 transition hover:border-orange-500/60 hover:text-orange-400 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-200 hover:text-orange-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/mrhlaingdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 text-white transition hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_10px_rgba(253,111,0,0.3)]"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen ? (
        <div className="border-t border-neutral-800 bg-neutral-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-200 hover:text-orange-400 transition-colors"
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
