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
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute top-32 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

        <div>
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
      </div>
    </div>
  );
}
