import { useEffect, useRef } from "react";

export default function ImageLightbox({
  isOpen,
  images = [],
  index = 0,
  title = "Image preview",
  onClose,
  onPrev,
  onNext,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;

    if (isOpen && !dlg.open) dlg.showModal();
    if (!isOpen && dlg.open) dlg.close();
  }, [isOpen]);

  function close() {
    const dlg = ref.current;
    if (dlg?.open) dlg.close();
    onClose?.();
  }

  // Prevent "Esc" cancel from doing anything weird
  // (and keep behavior consistent)
  function onCancel(e) {
    e.preventDefault();
    close();
  }

  // Keyboard nav for preview
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onPrev, onNext]);

  const src = images?.[index];
  const showNav = images?.length > 1;

  return (
    <dialog ref={ref} className="modal" onCancel={onCancel}>
      <div className="modal-box w-11/12 max-w-6xl bg-base-100/90 backdrop-blur ring-1 ring-base-300 p-0 overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-base-300">
          <div className="text-sm font-semibold opacity-80">{title}</div>
          <button className="btn btn-sm" onClick={close}>
            Close
          </button>
        </div>

        <div className="relative bg-base-200">
          {src ? (
            <img
              src={src}
              alt={title}
              className="max-h-[75vh] w-full object-contain p-3"
              loading="lazy"
            />
          ) : (
            <div className="p-6 text-sm opacity-70">No image.</div>
          )}

          {showNav ? (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="btn btn-circle btn-sm absolute left-3 top-1/2 -translate-y-1/2 bg-base-100/80 backdrop-blur border-base-300"
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                type="button"
                onClick={onNext}
                className="btn btn-circle btn-sm absolute right-3 top-1/2 -translate-y-1/2 bg-base-100/80 backdrop-blur border-base-300"
                aria-label="Next image"
              >
                ❯
              </button>
            </>
          ) : null}
        </div>

        {showNav ? (
          <div className="flex items-center justify-between px-4 py-3 border-t border-base-300 text-xs opacity-70">
            <div>Use ← / → to navigate</div>
            <div>
              {index + 1} / {images.length}
            </div>
          </div>
        ) : null}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={close}>close</button>
      </form>
    </dialog>
  );
}
