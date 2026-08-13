import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const REAL_PROJECTS = [
  {
    id: "vet-clinic",
    name: "Vet Clinic Dashboard",
    category: "AI & Web",
    summary:
      "Interactive admin panel for managing pet medical records, appointments, and featuring an integrated AI Symptom Checker.",
    tech: ["Next.js", "AI Integration", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mrhlaingdev/The-Vet-Clinic-Deskboard",
    demo: "https://the-vet-clinic-deskboard.vercel.app",
    image: "/the-vet-clinic.png",
  },
  {
    id: "pixel-forge",
    name: "Pixel Forge Launcher",
    category: "AI & Web",
    summary:
      "A sleek desktop-inspired game launcher UI interface crafted with responsive dark-mode styling and dynamic asset showcases.",
    tech: ["React", "UI/UX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mrhlaingdev/pixel-forge-launcher",
    demo: "https://pixel-forge-launcher.vercel.app",
    image: "/pixel-forge-luncher.png",
  },
  {
    id: "farm-to-table",
    name: "Farm-to-Table Marketplace",
    category: "Workflow & Systems",
    summary:
      "A modern digital marketplace platform connecting local fresh farm producers directly with consumers with PRD & Tech specs.",
    tech: ["Next.js", "E-commerce Logic", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mrhlaingdev/farm-to-table-marketplace",
    demo: "https://farm-to-table-marketplace-seven.vercel.app",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "soundwave",
    name: "Soundwave Festival App",
    category: "Branding & Digital Experience",
    summary:
      "An event management web experience designed for music festival showcases and line-ups.",
    tech: ["Next.js", "Motion UI", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mrhlaingdev/soundwave-festival-app",
    demo: "https://soundwave-festival-app-whdz.vercel.app",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="space-y-6">
      <SectionHeading
        eyebrow="Projects"
        title="Real Work & Production Deploys"
        subtitle="A showcase of live web applications, AI integrations, and full-stack solutions deployed on Vercel."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {REAL_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
