import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolioData";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative space-y-6">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-orange-500/12 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-64 w-64 rounded-full bg-orange-400/12 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />
      </div>
      <SectionHeading
        eyebrow="Projects"
        title="Selected work with a cinematic feel"
        subtitle="A growing collection of projects that reflect both technical execution and creative intent."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={{ ...project, tech: ["React", "Tailwind", "UI/UX"] }} />
        ))}
      </div>
    </section>
  );
}
