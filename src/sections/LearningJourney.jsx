import SectionHeading from "@/components/SectionHeading";

export default function LearningJourney() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Learning Journey"
        title="Growing through 2026 with focus and intention"
        subtitle="A timeline of skills, curiosity, and continual progress across creative and technical disciplines."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel p-8">
          <div className="space-y-5">
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">2026</p>
              <p className="mt-2 text-sm leading-7 text-neutral-300">Deepening skills in interface design, front-end development, content strategy, and polished digital storytelling.</p>
            </div>
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Next Milestones</p>
              <p className="mt-2 text-sm leading-7 text-neutral-300">Building larger projects, strengthening visual systems, and refining a more distinctive personal point of view.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8">
          <div className="rounded-[14px] border border-orange-500/20 bg-orange-500/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-100">Currently Learning</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">High-impact modern workflows</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              Focused on improving product thinking, development discipline, and creative consistency while staying open to new tools and perspectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
