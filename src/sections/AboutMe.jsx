import SectionHeading from "@/components/SectionHeading";
import { Cpu, Video, Zap } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "AI-Powered Web Dev",
    desc: "Leveraging modern AI tools & Next.js to build fast, scalable, and intuitive web apps.",
  },
  {
    icon: Video,
    title: "Video Editing & Storytelling",
    desc: "Crafting engaging short-form content & visual stories using CapCut, Premiere Pro & AI.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    desc: "Turning creative concepts into polished digital experiences with speed and quality.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Left Main About Content */}
      <div className="glass-panel p-8 rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl">
        <SectionHeading
          eyebrow="About"
          title="Building web experiences with AI and telling stories through video"
          subtitle="I combine product thinking, AI workflows, and post-production skills to design websites and high-impact visual content."
        />
        <p className="mt-6 text-base leading-relaxed text-neutral-300">
          From full-stack web builds to creative short-form video storytelling, I focus on using the best modern tools to move fast without sacrificing quality. My goal is to build digital products that feel useful, modern, and memorable.
        </p>
      </div>

      {/* Right Core Highlights (Replacing Redundant Stats) */}
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