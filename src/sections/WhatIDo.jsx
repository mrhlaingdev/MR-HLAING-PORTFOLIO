import SectionHeading from "@/components/SectionHeading";

const cards = [
  {
    title: "I Build",
    description: "Modern interfaces and practical web experiences that feel clean, fast, and thoughtful.",
  },
  {
    title: "I Create",
    description: "Visual stories, content direction, and polished creative assets that strengthen brand presence.",
  },
  {
    title: "I Learn",
    description: "I continuously expand my skill set across design systems, product thinking, and development workflows.",
  },
  {
    title: "I Improve",
    description: "Every project becomes a reference point for better structure, stronger execution, and deeper clarity.",
  },
];

export default function WhatIDo() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="What I Do"
        title="A balanced mix of product, design, and execution"
        subtitle="My work spans front-end development, visual storytelling, and continuous refinement."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="glass-panel p-6">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
