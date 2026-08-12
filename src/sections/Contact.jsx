import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="glass-panel p-8 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something memorable"
            subtitle="Open to collaboration, thoughtful freelance work, and conversations around digital products and creative execution."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Email</p>
              <p className="mt-2 text-sm text-neutral-300">hello@mrhlaing.dev</p>
            </div>
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Socials</p>
              <p className="mt-2 text-sm text-neutral-300">GitHub • LinkedIn • Instagram</p>
            </div>
          </div>
        </div>

        <form className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-6">
          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm text-neutral-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500/60"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-6 rounded-full bg-[#FD6F00] px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
