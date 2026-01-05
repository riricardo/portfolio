import { useEffect, useMemo, useState } from "react";

export default function ProjectImageCarousel({
  project,
  onOpenPreview,
  isPreviewOpen = false,
}) {
  const images = useMemo(() => {
    const list = project?.gallery?.length
      ? project.gallery
      : [project?.cover].filter(Boolean);
    return list;
  }, [project]);

  const [index, setIndex] = useState(0);

  // Reset when project changes
  useEffect(() => setIndex(0), [project?.id]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // Keyboard navigation (carousel) — but pause while preview is open
  useEffect(() => {
    if (!images.length || isPreviewOpen) return;

    function onKeyDown(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, isPreviewOpen]);

  if (!images.length) {
    return <div className="mt-2 text-sm opacity-70">No images available.</div>;
  }

  return (
    <div className="mt-3">
      {/* Image frame */}
      <div className="relative overflow-hidden rounded-xl ring-1 ring-base-300 bg-base-200">
        {/* Clickable image */}
        <button
          type="button"
          onClick={() => onOpenPreview?.({ images, index })}
          className="block w-full"
          aria-label="Open image in full size"
        >
          <img
            src={images[index]}
            alt={`${project.name} screenshot ${index + 1}`}
            loading="lazy"
            className="h-56 w-full object-contain p-3 sm:h-64"
          />
        </button>

        {/* Prev/Next */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="btn btn-circle btn-sm absolute left-2 top-1/2 -translate-y-1/2 bg-base-100/80 backdrop-blur border-base-300"
              aria-label="Previous image"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="btn btn-circle btn-sm absolute right-2 top-1/2 -translate-y-1/2 bg-base-100/80 backdrop-blur border-base-300"
              aria-label="Next image"
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* Dots + counter */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-2.5 w-2.5 rounded-full ring-1 ring-base-300",
                i === index ? "bg-primary" : "bg-base-100",
              ].join(" ")}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-xs opacity-70">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
