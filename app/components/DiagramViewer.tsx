'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  label?: string;
};

export function DiagramViewer({ src, alt, label }: Props) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragging = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);

  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const zoomBy = useCallback((delta: number) => {
    setScale((s) => clamp(Number((s + delta).toFixed(2)), 0.5, 4));
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    reset();
  }, [reset]);

  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === '+' || e.key === '=') zoomBy(0.2);
      if (e.key === '-') zoomBy(-0.2);
      if (e.key === '0') reset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeModal, zoomBy, reset]);

  const onWheel = useCallback((e: React.WheelEvent) => {
    if (!open) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.12 : 0.12;
    zoomBy(delta);
  }, [open, zoomBy]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!open) return;
    dragging.current = true;
    setIsDragging(true);
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!open) return;
    if (!dragging.current || !last.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    setTx((v) => v + dx);
    setTy((v) => v + dy);
  };

  const endDrag = () => {
    dragging.current = false;
    setIsDragging(false);
    last.current = null;
  };

  const transform = useMemo(
    () => `translate(${tx}px, ${ty}px) scale(${scale})`,
    [tx, ty, scale]
  );

  return (
    <>
      {/* Preview */}
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-slate-600">Click to expand • Wheel to zoom • Drag to pan</div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-900 hover:bg-slate-50"
        >
          View full screen
        </button>
      </div>

      <button
        type="button"
        onClick={openModal}
        className="mt-3 block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white hover:bg-slate-50"
        aria-label="Open architecture diagram full screen"
      >
        <img src={src} alt={alt} className="h-auto w-full" loading="lazy" />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onClick={closeModal}
        >
          <div className="absolute inset-0 p-3 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <div className="text-xs opacity-80">Architecture diagram</div>
                {label && <div className="truncate text-sm font-semibold">{label}</div>}
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden rounded bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 sm:block">
                  {Math.round(scale * 100)}%
                </div>
                <button className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/15" onClick={() => zoomBy(0.2)}>
                  +
                </button>
                <button className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/15" onClick={() => zoomBy(-0.2)}>
                  −
                </button>
                <button className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/15" onClick={reset}>
                  Reset
                </button>
                <a
                  className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/15"
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
                <button className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/15" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>

            <div
              className="relative h-[calc(100vh-96px)] overflow-hidden rounded-2xl bg-white"
              onWheel={onWheel}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={endDrag}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  className="select-none"
                  style={{
                    transform,
                    transformOrigin: 'center center',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    cursor: isDragging ? 'grabbing' : 'grab',
                  }}
                />
              </div>
            </div>

            <div className="mt-2 text-xs text-white/70">
              Keyboard: + / − to zoom, 0 to reset, Esc to close.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
