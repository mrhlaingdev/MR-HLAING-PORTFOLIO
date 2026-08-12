import SkillCard from "@/components/SkillCard";
import SectionHeading from "@/components/SectionHeading";
import { skillsCategories } from "@/data/portfolioData";
import { Compass, Layers, Sparkles } from "lucide-react";

const skillIcons = [Sparkles, Layers, Compass];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        eyebrow="Skills"
        title="Capabilities built for modern digital work"
        subtitle="A balanced mix of development expertise, design thinking, and creative execution."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillsCategories.map((category, index) => (
          <SkillCard key={category.title} category={{ ...category, icon: skillIcons[index] }} />
        ))}
      </div>
    </section>
  );
}
