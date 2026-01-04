import { profile } from "./data/profile";
import { projects } from "./data/projects";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div
      data-theme="corporate"
      className="min-h-screen bg-base-200 text-base-content"
    >
      <Header profile={profile} />

      <main className="mx-auto w-full max-w-5xl px-4 pb-16">
        <Hero profile={profile} />
        <ProjectsCarousel projects={projects} />
        <Skills />
        <Experience />
        <Contact profile={profile} />

        <footer className="mt-10 text-center text-sm opacity-70">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
