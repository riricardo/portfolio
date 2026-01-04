import { useEffect, useMemo, useState } from "react";

export default function ProjectImageCarousel({ project }) {
  const images = useMemo(() => {
    const list = project?.gallery?.length
      ? project.gallery
      : [project?.cover].filter(Boolean);
    return list;
  }, [project]);

  const [index, setIndex] = useState(0);

  // Reset when project changes
  useEffect(() => setIndex(0), [project?.id]);

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e) {
      if (!images.length) return;
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length]);

  if (!images.length) {
    return <div className="mt-2 text-sm opacity-70">No images available.</div>;
  }

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="mt-3">
      {/* Image frame */}
      <div className="relative overflow-hidden rounded-xl ring-1 ring-base-300 bg-base-200">
        <img
          src={images[index]}
          alt={`${project.name} screenshot ${index + 1}`}
          loading="lazy"
          className="h-56 w-full object-contain p-3 sm:h-64"
        />

        {/* Prev/Next */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="btn btn-circle btn-sm absolute left-2 top-1/2 -translate-y-1/2 bg-base-100/80 backdrop-blur border-base-300"
              aria-label="Previous image"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={next}
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

      {/* Thumbnails (optional but nice) */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "shrink-0 overflow-hidden rounded-lg ring-1",
                i === index ? "ring-primary" : "ring-base-300",
              ].join(" ")}
              aria-label={`Select image ${i + 1}`}
            >
              <img
                src={src}
                alt={`${project.name} thumbnail ${i + 1}`}
                loading="lazy"
                className="h-14 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
