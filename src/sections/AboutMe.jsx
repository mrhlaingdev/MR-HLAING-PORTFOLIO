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
          I am an <strong className="text-white font-semibold">AI-Native Web Builder</strong> leveraging next-generation AI workflows to design, build, and deploy high-performance web applications at scale. Rather than relying solely on traditional manual coding, I utilize <strong className="text-white font-semibold">VS Code alongside Cline AI</strong> to rapidly transform concepts into fully functional digital products. Combining a CS50 computer science foundation, Talent OS Level 6 experience, and project management skills, I focus on delivering smart, AI-driven solutions efficiently.
        </p>

        {/* Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              AI & Tech Workflow
            </h3>
            <ul className="space-y-2.5 text-neutral-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">AI Development:</strong> VS Code + Cline AI Agent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">Modern Stack:</strong> Next.js, React, Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">Deployment & Systems:</strong> Vercel, Git, GitHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">Core Fundamentals:</strong> HTML/CSS, JS Logic, Basic Python</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Credentials & Background
            </h3>
            <ul className="space-y-2.5 text-neutral-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">CS Education:</strong> CS50 Computer Science (1 Year)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">Practical Accomplishments:</strong> Talent OS Level 6 Achiever</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">Business & Management:</strong> Certified Project Management & LCCI Level II</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong className="text-white">Academic Degree:</strong> B.A. (Myanmar)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision / Goal */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-orange-950/30 border border-neutral-800">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Career Focus
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Seeking <strong className="text-white">Remote AI Builder / AI Developer positions</strong> and <strong className="text-white">Freelance Projects</strong>. Dedicated to building modern AI-powered applications, automating digital workflows, and delivering fast results for clients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;