import { PROJECT_STATUS } from "../data/projects";

function badgeClass(status) {
  if (status === PROJECT_STATUS.LIVE) return "badge-success";
  if (status === PROJECT_STATUS.IN_PROGRESS) return "badge-primary";
  return "badge-ghost";
}

function topBar(status) {
  if (status === PROJECT_STATUS.LIVE) return "from-success/70 to-success/20";
  if (status === PROJECT_STATUS.IN_PROGRESS)
    return "from-primary/70 to-primary/20";
  return "from-base-content/25 to-base-content/5";
}

export default function ProjectCard({ project, onOpen }) {
  const isNotStarted = project.status === PROJECT_STATUS.NOT_STARTED;

  return (
    <button
      onClick={onOpen}
      className={[
        "card w-full bg-base-100/80 text-left shadow-sm ring-1 ring-base-300 backdrop-blur transition",
        "hover:shadow-md hover:-translate-y-px cursor-pointer",
        isNotStarted ? "grayscale opacity-80" : "",
      ].join(" ")}
      aria-label={`Open ${project.name} details`}
    >
      {/* status accent */}
      <div
        className={`h-1.5 w-full rounded-t-2xl bg-linear-to-r ${topBar(
          project.status
        )}`}
      />

      <figure className="px-3 pt-3">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          loading="lazy"
          className="h-40 w-full rounded-xl object-cover ring-1 ring-base-300 bg-white"
        />
      </figure>

      <div className="card-body p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold truncate">{project.name}</h3>

            <p className="mt-1 text-sm opacity-70 line-clamp-2">
              {project.tagline}
            </p>
          </div>

          <span className={`badge shrink-0 ${badgeClass(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
    </button>
  );
}
