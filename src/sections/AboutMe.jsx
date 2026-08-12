import SectionHeading from "@/components/SectionHeading";

const stats = [
  { label: "Projects Built", value: "12+" },
  { label: "Tech Learned", value: "8+" },
  { label: "Creative Projects", value: "6+" },
];

export default function AboutMe() {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="glass-panel p-8">
        <SectionHeading
          eyebrow="About"
          title="Building web experiences with AI and telling stories through video"
          subtitle="I build modern web projects using AI tools and create engaging video content with CapCut + AI to turn ideas into polished digital experiences."
        />
        <p className="mt-6 text-base leading-8 text-neutral-300">
          I combine product thinking, creative execution, and AI-assisted workflows to design websites, experiments, and visual content that feel useful, modern, and memorable. From web builds to short-form video storytelling, I enjoy using the right tools to move faster and produce better results.
        </p>
      </div>

      <div className="glass-panel p-8">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-4 text-center">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
