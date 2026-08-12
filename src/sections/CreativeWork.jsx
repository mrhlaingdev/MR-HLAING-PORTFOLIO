import VideoCard from "@/components/VideoCard";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  { title: "Short-form", description: "Punchy vertical edits and content-first storytelling." },
  { title: "Cinematic", description: "Mood-led visuals with stronger pacing and atmosphere." },
  { title: "Social Media", description: "Platform-ready content with concise visual hooks." },
  { title: "Christian Content", description: "Purpose-driven storytelling and uplifting creative direction." },
];

export default function CreativeWork() {
  return (
    <section id="creative-work" className="relative space-y-6">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
        <div className="absolute left-[-5%] top-[-10%] h-72 w-72 rounded-full bg-orange-500/12 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-80 w-80 rounded-full bg-orange-400/12 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(253,111,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(253,111,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
      </div>
      <SectionHeading
        eyebrow="Creative Work"
        title="Visual storytelling and motion-led pieces"
        subtitle="A dedicated space for video-first ideas, editing experiments, and content direction."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <VideoCard project={{ name: "Showreel", category: "Video Editing", summary: "A cinematic placeholder for a featured reel that highlights editing, pacing, and visual storytelling." }} />

        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category.title} className="glass-panel p-5">
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-400">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
