import SectionHeading from "@/components/SectionHeading";
import { Award, Bot, Sparkles, Video } from "lucide-react";

const achievementsList = [
  {
    id: "ai-prompting",
    icon: Bot,
    title: "AI-Powered App Builder",
    description: "Successfully built and deployed production-ready web apps using 100% AI-assisted workflows and advanced prompt architecture.",
  },
  {
    id: "video-creation",
    icon: Video,
    title: "Short-Form Visual Storyteller",
    description: "Produced engaging video content and post-production projects combining CapCut, AI voiceovers, and dynamic editing.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-6">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones & Recognized Craft"
        subtitle="Key milestones reflecting growth, AI-first capabilities, and dedication to continuous learning."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Talent OS Card */}
        <div className="glass-panel relative overflow-hidden rounded-[18px] border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
            <Award className="h-6 w-6" />
          </div>
          <div className="rounded-[14px] border border-orange-500/30 bg-[linear-gradient(135deg,_rgba(253,111,0,0.12),_rgba(255,255,255,0.02))] p-6 shadow-[0_0_30px_rgba(253,111,0,0.1)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FD6F00]">
              Talent OS
            </p>
            <h3 className="mt-2 text-3xl font-black text-white">Level 5</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              A milestone highlighting a strong foundation in professional capability, consistency, and continuous skill expansion.
            </p>
          </div>
        </div>

        {/* AI & Content Achievements */}
        <div className="flex flex-col gap-4 justify-between">
          {achievementsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-panel flex items-start gap-4 rounded-[18px] border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-xl transition hover:border-orange-500/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}