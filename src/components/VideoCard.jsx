import { PlayCircle } from "lucide-react";

export default function VideoCard({ project }) {
  return (
    <article className="glass-panel overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">
      <div className="flex aspect-video items-center justify-center border-b border-neutral-700 bg-[radial-gradient(circle_at_top,_rgba(253,111,0,0.18),_transparent_55%),linear-gradient(135deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02))]">
        <div className="rounded-full border border-orange-500/30 bg-orange-500/10 p-4 text-orange-300 shadow-[0_0_20px_rgba(253,111,0,0.2)]">
          <PlayCircle className="h-10 w-10" />
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-400">{project.summary}</p>
      </div>
    </article>
  );
}
