import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;

    if (project && !dlg.open) dlg.showModal();
    if (!project && dlg.open) dlg.close();
  }, [project]);

  function close() {
    const dlg = ref.current;
    if (dlg?.open) dlg.close();
    onClose();
  }

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      <div className="modal-box w-11/12 max-w-4xl bg-base-100">
        {!project ? null : (
          <>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-1 text-sm opacity-70">{project.tagline}</p>
              </div>
              <button className="btn btn-sm" onClick={close}>
                Close
              </button>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                  <div className="font-semibold">Description</div>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">
                    {project.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                  <div className="font-semibold">Technology</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="badge badge-outline">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                  <div className="font-semibold">How to use</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm opacity-80">
                    {project.howToUse.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.repoUrl && (
                    <a
                      className="btn btn-outline"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      className="btn btn-primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open App / API
                    </a>
                  ) : (
                    <span className="badge badge-ghost">No live link yet</span>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200 p-4">
                <div className="font-semibold">Images</div>
                <div className="mt-3 grid gap-3">
                  {(project.gallery?.length
                    ? project.gallery
                    : [project.cover]
                  ).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full rounded-xl object-cover ring-1 ring-base-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={close}>close</button>
      </form>
    </dialog>
  );
}
