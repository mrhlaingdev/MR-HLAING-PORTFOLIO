import SectionHeading from "@/components/SectionHeading";

const certificates = [
  { id: "professional-cert", title: "Certificate Placeholder", description: "Professional recognition card ready for final credential details." },
  { id: "completion-badge", title: "Certificate Placeholder", description: "Additional certification or completion badge can be added here." },
];

export default function Achievements() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Achievements"
        title="A growing body of craft and recognition"
        subtitle="Milestones that reflect progress, dedication, and a commitment to continuous growth."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel p-8">
          <div className="rounded-[14px] border border-orange-500/20 bg-[linear-gradient(135deg,_rgba(253,111,0,0.14),_rgba(255,255,255,0.02))] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Talent OS</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Level 5</h3>
            <p className="mt-4 text-sm leading-8 text-neutral-300">
              A milestone that highlights a strong foundation in growth, discipline, and expanding professional capability.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-400">{certificate.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
