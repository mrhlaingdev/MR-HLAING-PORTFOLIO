import { Sparkles } from "lucide-react";

export default function SkillCard({ category }) {
  const Icon = category.icon || Sparkles;

  return (
    <article className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-3 text-orange-300 shadow-[0_0_20px_rgba(253,111,0,0.15)]">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{category.title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-400">{category.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
