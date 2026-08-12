import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <SectionHeading
        eyebrow="Experience"
        title="NGO warehouse experience with real-world operational discipline"
        subtitle="A background rooted in responsibility, coordination, and systems-based workflow awareness."
      />

      <div className="glass-panel p-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Timeline</p>
            <div className="mt-4 space-y-4">
              <div className="border-l border-orange-500/30 pl-4">
                <p className="text-sm font-medium text-white">Warehouse Staff</p>
                <p className="mt-1 text-sm text-neutral-400">Managed practical operations with attention to flow, organization, and reliability.</p>
              </div>
              <div className="border-l border-orange-500/30 pl-4">
                <p className="text-sm font-medium text-white">WMS Project Connection</p>
                <p className="mt-1 text-sm text-neutral-400">This experience helped shape a strong interest in process-driven systems and better operational thinking.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[14px] border border-neutral-800 bg-[linear-gradient(135deg,_rgba(253,111,0,0.14),_rgba(255,255,255,0.02))] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">WMS</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Workflow and systems thinking</h3>
            <p className="mt-4 text-base leading-8 text-neutral-300">
              The operational experience strengthened a practical understanding of coordination, structure, and improvement—skills that naturally connect to modern product and workflow development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
