import { ArrowUpRight, LinkIcon } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="glass-panel flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
        </div>
        <div className="rounded-full border border-neutral-700 bg-neutral-900/70 p-2 text-orange-300">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-neutral-400">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech?.map((tech) => (
          <span key={tech} className="rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.github || "#"}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-orange-500/50 hover:text-orange-300"
        >
          <LinkIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={project.demo || "#"}
          className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 text-sm font-medium text-orange-100 transition hover:bg-orange-500/25"
        >
          Live Demo
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
