import { useMemo, useState } from "react";
import { PROJECT_STATUS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./SectionTitle";

export default function ProjectsCarousel({ projects }) {
  const [selected, setSelected] = useState(null);

  const counts = useMemo(() => {
    const c = { live: 0, progress: 0, not: 0 };
    for (const p of projects) {
      if (p.status === PROJECT_STATUS.LIVE) c.live++;
      else if (p.status === PROJECT_STATUS.IN_PROGRESS) c.progress++;
      else c.not++;
    }
    return c;
  }, [projects]);

  return (
    <section id="projects" className="mt-8">
      <SectionTitle
        right={`Live ${counts.live} · In progress ${counts.progress} · Not started ${counts.not}`}
      >
        Projects
      </SectionTitle>

      <div className="card bg-base-100/80 shadow-sm ring-1 ring-base-300 backdrop-blur">
        <div className="card-body p-3 sm:p-4">
          <div
            className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin] snap-x snap-mandatory"
            aria-label="Projects carousel"
          >
            {projects.map((p) => (
              <div
                key={p.id}
                className="min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-[32%]"
              >
                <ProjectCard project={p} onOpen={() => setSelected(p)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
