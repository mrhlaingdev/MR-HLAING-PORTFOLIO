import SectionHeading from "@/components/SectionHeading";
import { Sparkles, Compass, Rocket } from "lucide-react";

export default function LearningJourney() {
  return (
    <section id="journey" className="space-y-6">
      <SectionHeading
        eyebrow="Learning Journey"
        title="Evolution of AI Building & Visual Storytelling"
        subtitle="A timeline of mastering AI-driven development, creative workflows, and modern web product execution."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel p-8 rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl">
          <div className="space-y-5">
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E]/80 p-5 transition hover:border-orange-500/30">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-orange-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD6F00]">
                  2026 Focus
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Mastering advanced prompt architecture, AI agent workflows (v0, Cursor, Claude), and high-converting video post-production.
              </p>
            </div>

            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E]/80 p-5 transition hover:border-orange-500/30">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-orange-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD6F00]">
                  Next Milestones
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Launching complex full-stack web apps built 100% via AI, automating video content pipelines, and refining SaaS UI/UX design.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl flex flex-col justify-center">
          <div className="rounded-[14px] border border-orange-500/30 bg-orange-500/10 p-6 shadow-[0_0_25px_rgba(253,111,0,0.1)]">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="h-5 w-5 text-orange-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Currently Learning
              </p>
            </div>
            <h3 className="text-xl font-semibold text-white">
              AI Tools & Automated Workflows
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Exploring advanced AI model prompting, fine-tuning user interfaces, and blending creative content direction with rapid web prototyping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
