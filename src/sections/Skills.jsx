import SkillCard from "@/components/SkillCard";
import SectionHeading from "@/components/SectionHeading";
import { Bot, Compass, Video } from "lucide-react";

const customSkillCategories = [
  {
    title: "AI & Rapid Building",
    icon: Bot,
    items: ["v0 by Vercel", "Claude AI", "ChatGPT", "Cursor", "Prompt Engineering"],
  },
  {
    title: "Video & Content Creation",
    icon: Video,
    items: ["CapCut", "Premiere Pro", "AI Voiceovers", "Scripting", "Visual Storytelling"],
  },
  {
    title: "Web Tech Stack",
    icon: Compass,
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "UI/UX Refinement"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        eyebrow="Skills"
        title="AI Workflows, Web Tech & Creative Tools"
        subtitle="Leveraging bleeding-edge AI generation tools combined with modern web technologies and post-production workflows."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {customSkillCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
