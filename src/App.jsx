import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import WhatIDo from "@/sections/WhatIDo";
import Skills from "@/sections/Skills";
import FeaturedProjects from "@/sections/FeaturedProjects";
import CreativeWork from "@/sections/CreativeWork";
import Experience from "@/sections/Experience";
import LearningJourney from "@/sections/LearningJourney";
import Achievements from "@/sections/Achievements";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(253,111,0,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(253,111,0,0.08),_transparent_24%),#121212] text-neutral-100">
      <Navbar />
      <main className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <Hero />
          <AboutMe />
          <WhatIDo />
          <Skills />
          <FeaturedProjects />
          <CreativeWork />
          <Experience />
          <LearningJourney />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
