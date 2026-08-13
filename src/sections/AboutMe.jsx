import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-6 text-orange-500">
          About Me
        </h2>

        {/* Bio Paragraph */}
        <p className="text-neutral-300 text-lg leading-relaxed mb-8">
          I am an **AI-Native Web Builder** leveraging next-generation AI workflows to design, build, and deploy high-performance web applications at scale. Rather than relying solely on traditional manual coding, I utilize **VS Code alongside Cline AI** to rapidly transform concepts into fully functional digital products. Combining a CS50 computer science foundation, Talent OS Level 6 experience, and project management skills, I focus on delivering smart, AI-driven solutions efficiently.
        </p>

        {/* Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              AI & Tech Workflow
            </h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>**AI Development:** VS Code + Cline AI Agent</li>
              <li>**Modern Stack:** Next.js, React, Tailwind CSS</li>
              <li>**Deployment & Systems:** Vercel, Git, GitHub</li>
              <li>**Core Fundamentals:** HTML/CSS, JS Logic, Basic Python</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Credentials & Background
            </h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>**CS Education:** CS50 Computer Science (1 Year)</li>
              <li>**Practical Accomplishments:** Talent OS Level 6 Achiever</li>
              <li>**Business & Management:** Certified Project Management & LCCI Level II</li>
              <li>**Academic Degree:** B.A. (Myanmar)</li>
            </ul>
          </div>
        </div>

        {/* Vision / Goal */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-orange-950/30 border border-neutral-800">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Career Focus
          </h3>
          <p className="text-neutral-300">
            Seeking **Remote AI Builder / AI Developer positions** and **Freelance Projects**. Dedicated to building modern AI-powered applications, automating digital workflows, and delivering fast results for clients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;