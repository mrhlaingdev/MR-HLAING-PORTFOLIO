import SectionHeading from "@/components/SectionHeading";
import { Briefcase, Calculator, ShieldCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <SectionHeading
        eyebrow="Experience"
        title="NGO Operational Discipline & Management Foundations"
        subtitle="A background rooted in hands-on operations, financial accuracy, and structured systems thinking."
      />

      <div className="glass-panel rounded-[18px] border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          
          {/* Timeline & Credentials */}
          <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E]/80 p-6 flex flex-col justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD6F00]">
              Background & Credentials
            </p>
            
            <div className="mt-4 space-y-4">
              <div className="border-l-2 border-orange-500/50 pl-4 transition hover:border-orange-400">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-orange-400" />
                  <p className="text-sm font-semibold text-white">NGO Warehouse Operations (3 Years)</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  Managed physical inventory, flow, and logistics—shaping strong real-world discipline and process optimization.
                </p>
              </div>

              <div className="border-l-2 border-orange-500/50 pl-4 transition hover:border-orange-400">
                <div className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-orange-400" />
                  <p className="text-sm font-semibold text-white">Accounting — LCCI Level 2</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  Certified foundation in financial record-keeping, balance sheets, and data precision.
                </p>
              </div>

              <div className="border-l-2 border-orange-500/50 pl-4 transition hover:border-orange-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-orange-400" />
                  <p className="text-sm font-semibold text-white">Project Management Certification</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  Completed intensive 7-day Project Management training covering task structure, team alignment, and execution.
                </p>
              </div>
            </div>
          </div>

          {/* WMS & Systems Thinking Bridge */}
          <div className="rounded-[14px] border border-orange-500/30 bg-[linear-gradient(135deg,_rgba(253,111,0,0.12),_rgba(255,255,255,0.02))] p-6 shadow-[0_0_30px_rgba(253,111,0,0.08)] flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD6F00]">
              Real-World Impact
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Bridge to Modern Digital Products
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Combining 3 years of hands-on warehouse operations with accounting precision and project management frameworks allows me to design process-driven web applications (like WMS) with real operational clarity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
