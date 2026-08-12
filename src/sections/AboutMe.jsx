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
          title="A creative developer with a product mindset"
          subtitle="I combine front-end craft, visual storytelling, and structured thinking to create digital experiences that feel polished and purposeful."
        />
        <p className="mt-6 text-base leading-8 text-neutral-300">
          My work is rooted in curiosity, consistency, and the desire to learn quickly. I enjoy turning ideas into thoughtful interfaces, meaningful systems, and memorable creative outputs.
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
