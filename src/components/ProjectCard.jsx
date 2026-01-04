import { PROJECT_STATUS } from "../data/projects";

function badgeClass(status) {
  if (status === PROJECT_STATUS.LIVE) return "badge-success";
  if (status === PROJECT_STATUS.IN_PROGRESS) return "badge-primary";
  return "badge-ghost";
}

export default function ProjectCard({ project, onOpen }) {
  const isNotStarted = project.status === PROJECT_STATUS.NOT_STARTED;

  return (
    <button
      onClick={onOpen}
      className={[
        "card w-full bg-base-100 text-left shadow-sm ring-1 ring-base-300 transition",
        "hover:shadow-md hover:-translate-y-[1px]",
        isNotStarted ? "grayscale opacity-80" : "",
      ].join(" ")}
      aria-label={`Open ${project.name} details`}
    >
      <figure className="px-3 pt-3">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          loading="lazy"
          className="h-40 w-full rounded-xl object-cover ring-1 ring-base-300"
        />
      </figure>

      <div className="card-body p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold">{project.name}</h3>
            <p className="mt-1 text-sm opacity-70">{project.tagline}</p>
          </div>

          <span className={`badge ${badgeClass(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
    </button>
  );
}
