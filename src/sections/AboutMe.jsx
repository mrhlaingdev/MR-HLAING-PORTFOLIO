import SectionHeading from "@/components/SectionHeading";
import { Cpu, Award, Zap } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "AI-Native Web Building",
    desc: "Leveraging VS Code & Cline AI agents to turn complex ideas into production-ready Next.js apps.",
  },
  {
    icon: Award,
    title: "Proven Foundation",
    desc: "CS50 background, Talent OS Level 6 achiever, plus certified in Project Management & LCCI Level II.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    desc: "Building smart, modern AI-driven digital products with speed, accuracy, and quality.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Left Main About Content */}
      <div className="glass-panel p-8 rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl">
        <SectionHeading
          eyebrow="About"
          title="Building high-performance digital products powered by modern AI workflows"
          subtitle="Combining CS fundamentals, project management precision, and cutting-edge AI tools to build scalable web applications."
        />
        <p className="mt-6 text-base leading-relaxed text-neutral-300">
          I am an AI-Native Web Builder focused on rapid execution without sacrificing quality. Holding a B.A. degree alongside CS50 training and Talent OS Level 6 accomplishments, I leverage VS Code and Cline AI agents to transform concepts into clean, functional, and modern web applications.
        </p>
      </div>

      {/* Right Core Highlights */}
      <div className="glass-panel p-6 rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl flex flex-col justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">
          Core Focus
        </h3>
        <div className="flex flex-col gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[14px] border border-neutral-800 bg-[#1E1E1E]/80 p-4 transition hover:border-orange-500/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}