import { PlayCircle } from "lucide-react";

export default function VideoCard({ project }) {
  // Default Thumbnail if no video poster is provided
  const defaultThumbnail =
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop";

  return (
    <article className="glass-panel group overflow-hidden rounded-[18px] border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-500/40">
      {/* Video Thumbnail Box */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-neutral-800 bg-neutral-950">
        <img
          src={project?.thumbnail || defaultThumbnail}
          alt={project?.name || "Video Thumbnail"}
          className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
        />
        
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20" />

        {/* Play Button */}
        <div className="absolute rounded-full border border-orange-500/40 bg-orange-500/20 p-4 text-orange-400 shadow-[0_0_25px_rgba(253,111,0,0.3)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
          <PlayCircle className="h-10 w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FD6F00]">
          {project?.category}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white">{project?.name}</h3>
        <p className="mt-3 text-xs leading-relaxed text-neutral-400">
          {project?.summary}
        </p>
      </div>
    </article>
  );
}
