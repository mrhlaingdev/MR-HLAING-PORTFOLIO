import { ArrowUpRight, LinkIcon, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop";

  return (
    <article className="glass-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(253,111,0,0.08)]">
      <div>
        {/* Real Project Image Preview */}
        <div className="relative h-48 w-full overflow-hidden border-b border-neutral-800 bg-neutral-950">
          <img
            src={project.image || defaultImage}
            alt={project.name}
            className="h-full w-full object-cover object-top opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Box */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FD6F00]">
              {project.category}
            </p>
            <div className="rounded-full border border-neutral-700/60 bg-neutral-800/80 p-2 text-orange-400 transition group-hover:border-orange-500/40 group-hover:bg-orange-500/10 group-hover:text-orange-300">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-orange-400">
            {project.name}
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        {/* Tech Stack Badges */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-800 bg-neutral-950/80 px-3 py-1 text-[11px] font-medium text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-neutral-800/60 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-300 transition hover:border-orange-500/40 hover:text-white"
            >
              <LinkIcon className="h-3.5 w-3.5 text-neutral-400" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/15 px-4 py-2 text-xs font-medium text-orange-300 transition hover:bg-orange-500 hover:text-white"
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
