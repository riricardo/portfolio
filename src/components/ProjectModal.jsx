import { useEffect, useRef, useState } from "react";
import ProjectImageCarousel from "./ProjectImageCarousel";
import ImageLightbox from "./ImageLightbox";

export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  // Preview state (lightbox)
  const [preview, setPreview] = useState(null); // { projectId, images: [], index: number }

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;

    if (project && !dlg.open) dlg.showModal();
    if (!project && dlg.open) dlg.close();
  }, [project]);

  function close() {
    const dlg = ref.current;
    if (dlg?.open) dlg.close();

    // close the lightbox too (prevents weird states)
    setPreview(null);

    onClose?.();
  }

  const isPreviewOpen =
    !!preview && !!project?.id && preview?.projectId === project?.id;

  const previewImages = isPreviewOpen ? preview?.images ?? [] : [];
  const previewIndex = isPreviewOpen ? preview?.index ?? 0 : 0;

  const prevPreview = () => {
    if (!previewImages.length) return;
    setPreview((p) => ({
      ...p,
      index: (p.index - 1 + previewImages.length) % previewImages.length,
    }));
  };

  const nextPreview = () => {
    if (!previewImages.length) return;
    setPreview((p) => ({
      ...p,
      index: (p.index + 1) % previewImages.length,
    }));
  };

  return (
    <>
      {/* IMPORTANT: onClose must call close() so backdrop/ESC behaves correctly */}
      <dialog ref={ref} className="modal" onClose={close}>
        {/* Scrollable modal box for mobile */}
        <div
          className="
            modal-box
            w-[calc(100vw-1.5rem)]
            max-w-none
            max-h-[calc(100dvh-1.5rem)]
            overflow-y-auto
            overscroll-contain
            bg-base-100/90
            backdrop-blur
            ring-1
            ring-base-300
          "
        >
          <div className="mb-3 h-1 w-full rounded-full bg-linear-to-r from-primary/70 via-secondary/40 to-accent/60" />

          {!project ? null : (
            <>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm opacity-70">{project.tagline}</p>
                </div>

                {/* keep close button visible and not shrinking */}
                <button className="btn btn-sm shrink-0" onClick={close}>
                  Close
                </button>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
                    <div className="font-semibold">Description</div>
                    <p className="mt-2 text-sm leading-relaxed opacity-80">
                      {project.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
                    <div className="font-semibold">Technology</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="badge badge-outline badge-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
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
                        Open App
                      </a>
                    ) : (
                      <span className="badge badge-ghost">
                        No live link yet
                      </span>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
                  <div className="font-semibold">Images</div>

                  <ProjectImageCarousel
                    project={project}
                    isPreviewOpen={isPreviewOpen}
                    onOpenPreview={({ images, index }) =>
                      setPreview({ projectId: project?.id, images, index })
                    }
                  />

                  <div className="mt-2 text-xs opacity-70">
                    Tip: click the image to open full size
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Backdrop click closes dialog; we route to close() */}
        <form method="dialog" className="modal-backdrop">
          <button onClick={close}>close</button>
        </form>
      </dialog>

      {/* Lightbox rendered outside the project dialog (sibling) */}
      <ImageLightbox
        isOpen={isPreviewOpen}
        images={previewImages}
        index={previewIndex}
        title={
          project ? `${project.name} - image ${previewIndex + 1}` : "Image"
        }
        onClose={() => setPreview(null)}
        onPrev={prevPreview}
        onNext={nextPreview}
      />
    </>
  );
}
