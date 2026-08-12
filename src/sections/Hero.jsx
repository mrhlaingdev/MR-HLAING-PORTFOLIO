import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/win-hlaing-tun-0436a8416/", 
    icon: FaLinkedin 
  },
  { 
    label: "GitHub", 
    href: "https://github.com/mrhlaingdev", 
    icon: FaGithub 
  },
  { 
    label: "Gmail", 
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=winhlaingt760@gmail.com", 
    icon: Mail 
  },
];

const stats = [
  { value: "12+", label: "Projects Built" },
  { value: "8+", label: "Tech Learned" },
  { value: "6+", label: "Creative Projects" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[18px] border border-neutral-700/60 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_50px_rgba(0,0,0,0.35)] sm:py-10 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[18px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(253,111,0,0.08),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.03),_transparent_26%)]" />
        <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-orange-500/8 blur-[140px]" />
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-2">
        <div className="flex items-center justify-center px-5 py-6 sm:px-7 lg:px-10">
          <div className="flex w-full max-w-[560px] flex-col items-start justify-center">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-400">Hi I am</p>
              <h1 className="text-4xl font-black leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mr Hlaing
              </h1>
              <h2 className="text-2xl font-bold leading-tight text-[#FD6F00] sm:text-3xl lg:text-4xl">
                AI Builder &amp; Video Creator
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-md pt-1">
                Combining AI workflows with web development and post-production skills to build fast, high-quality digital products and engaging visual stories.
              </p>
            </div>

            {/* Social Links (LinkedIn, GitHub, Gmail) */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-[#1E1E1E] text-neutral-300 transition hover:border-orange-500/60 hover:text-orange-400 hover:shadow-[0_0_12px_rgba(253,111,0,0.3)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#FD6F00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Hire Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <span className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </span>
              </a>
            </div>

            <div className="mt-8 w-full rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-4 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex min-w-[120px] flex-col gap-1">
                    <span className="text-2xl font-bold text-[#FD6F00]">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="relative flex items-center justify-center px-4 pb-2 pt-4 sm:px-6 lg:px-4">
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/5 p-2 shadow-[0_0_40px_rgba(253,111,0,0.15)] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-orange-500/60 bg-neutral-900">
              <Image
                src="/logo.jpg"
                alt="Mr Hlaing portrait"
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}