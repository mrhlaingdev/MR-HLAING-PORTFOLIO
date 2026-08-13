import VideoCard from "@/components/VideoCard";
import SectionHeading from "@/components/SectionHeading";
import { Film, Sparkles, Share2, Heart } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Short-form Content",
    description: "Punchy vertical edits, hook-driven pacing, and automated CapCut & AI voiceover workflows.",
  },
  {
    icon: Film,
    title: "Cinematic Edits",
    description: "Atmospheric visuals, color grading, and mood-led storytelling for impactful digital narratives.",
  },
  {
    icon: Share2,
    title: "Social Media Ads",
    description: "Platform-ready content designed to capture attention quickly and increase engagement.",
  },
  {
    icon: Heart,
    title: "Christian Content",
    description: "Purpose-driven storytelling, faith-based video editing, and uplifting visual messaging.",
  },
];

export default function CreativeWork() {
  return (
    <section id="creative-work" className="relative space-y-6">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
        <div className="absolute left-[-5%] top-[-10%] h-72 w-72 rounded-full bg-orange-500/12 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-80 w-80 rounded-full bg-orange-400/12 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(253,111,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(253,111,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
      </div>

      <SectionHeading
        eyebrow="Creative Work"
        title="Visual Storytelling & Motion-Led Edits"
        subtitle="A showcase of AI-enhanced editing, short-form video content, and creative direction."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <VideoCard
          project={{
            name: "Featured Showreel",
            category: "Video Editing & Motion",
            summary: "A curated reel highlighting pacing, dynamic transitions, AI voiceover integration, and visual storytelling across short-form content.",
          }}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-panel group rounded-[18px] border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-xl transition hover:border-orange-500/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-white">{category.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}