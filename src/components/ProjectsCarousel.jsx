import { useMemo, useState } from "react";
import { PROJECT_STATUS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="text-sm opacity-70">
          Live {counts.live} · In progress {counts.progress} · Not started{" "}
          {counts.not}
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body p-3 sm:p-4">
          <div
            className="
              flex gap-3 overflow-x-auto pb-2
              [scrollbar-width:thin]
              snap-x snap-mandatory
            "
            aria-label="Projects carousel"
          >
            {projects.map((p) => (
              <div
                key={p.id}
                className="
                  min-w-[82%] snap-start
                  sm:min-w-[48%]
                  lg:min-w-[32%]
                "
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
