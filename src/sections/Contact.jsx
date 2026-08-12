"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_5dfqnfd",
        "template_cs0x1an",
        form.current,
        "XiW8gu1RXAcTDnRQ3"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

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
            {/* EMAIL BOX */}
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Email</p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="mailto:winhlaingt760@gmail.com"
                  className="flex w-full items-center gap-3 rounded-[2rem] border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-xs text-neutral-200 transition hover:border-orange-400/50 hover:bg-neutral-900/90 hover:text-orange-300"
                >
                  <FaEnvelope className="h-4 w-4 shrink-0 text-orange-300" />
                  <span className="truncate text-left">winhlaingt760@gmail.com</span>
                </a>
              </div>
            </div>

            {/* SOCIALS BOX */}
            <div className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FD6F00]">Socials</p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://github.com/mrhlaingdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3 rounded-[2rem] border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-xs text-neutral-200 transition hover:border-orange-400/50 hover:bg-neutral-900/90 hover:text-orange-300"
                >
                  <FaGithub className="h-4 w-4 shrink-0 text-orange-300" />
                  <span className="text-left">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/win-hlaing-tun-0436a8416/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3 rounded-[2rem] border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-xs text-neutral-200 transition hover:border-orange-400/50 hover:bg-neutral-900/90 hover:text-orange-300"
                >
                  <FaLinkedin className="h-4 w-4 shrink-0 text-orange-300" />
                  <span className="text-left">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <form ref={form} onSubmit={sendEmail} className="rounded-[14px] border border-neutral-800 bg-[#1E1E1E] p-6">
          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm text-neutral-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
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
                name="email"
                type="email"
                required
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
                name="message"
                rows="5"
                required
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500/60"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-full bg-[#FD6F00] px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="mt-3 text-xs text-orange-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}