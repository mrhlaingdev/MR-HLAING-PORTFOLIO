import SectionHeading from "@/components/SectionHeading";
import { Bot, Sparkles, Video, Zap } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI-Only App & Web Building",
    description: "Building complete web applications and interactive sites purely through advanced AI tools — zero manual coding required.",
  },
  {
    icon: Video,
    title: "AI Video & Visual Content",
    description: "Creating engaging visual content and short-form storytelling using CapCut, AI voiceovers, and automated editing workflows.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Turning rough business ideas into fully functioning, responsive digital prototypes in hours instead of weeks.",
  },
  {
    icon: Sparkles,
    title: "Prompt Architecture",
    description: "Mastering AI workflows, LLM prompting, and UI refinement to deliver clean, modern, and production-ready code.",
  },
];

export default function WhatIDo() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="What I Do"
        title="Building modern products powered entirely by AI"
        subtitle="I leverage AI workflows to transform ideas into high-quality web apps and visual stories — including this portfolio, built 100% with AI without writing manual code."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="glass-panel relative overflow-hidden rounded-[18px] border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-xl transition hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(253,111,0,0.15)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}