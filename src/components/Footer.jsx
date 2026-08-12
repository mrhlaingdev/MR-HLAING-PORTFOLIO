"use client";

import { ArrowUpRight, LinkIcon, Mail, Sparkles } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:hello@mrhlaing.dev", icon: Mail },
  { label: "GitHub", href: "https://github.com", icon: LinkIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Sparkles },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">Mr Hlaing</p>
          <h2 className="text-xl font-semibold text-white">Create • Learn • Inspire</h2>
          <p className="max-w-md text-sm text-neutral-400">
            Designing thoughtful digital experiences that blend technology, storytelling, and purpose.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-neutral-700 bg-neutral-900/50 p-2.5 text-neutral-300 transition hover:border-orange-500/50 hover:text-orange-300"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-100 transition hover:border-orange-400/60 hover:bg-orange-500/20"
          >
            Back to Top
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mr Hlaing. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, and a cinematic UI foundation.</p>
      </div>
    </footer>
  );
}
