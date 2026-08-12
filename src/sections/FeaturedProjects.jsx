'use client';

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolioData";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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

      <div className="flex flex-wrap items-center gap-3 rounded-[1.75rem] border border-neutral-800 bg-neutral-950/70 p-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              category === activeCategory
                ? "border-orange-300/80 bg-orange-500/10 text-orange-200"
                : "border-neutral-700 bg-white/5 text-neutral-300 hover:border-orange-300/50 hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={{ ...project, tech: project.tags }} />
        ))}
      </div>

      {!showAll && filteredProjects.length > 6 ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-full border border-orange-400/40 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300 hover:bg-orange-500/15"
          >
            Load More
          </button>
        </div>
      ) : null}
    </section>
  );
}
