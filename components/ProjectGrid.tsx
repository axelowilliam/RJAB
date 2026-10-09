"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/lib/projects";

function useSwipe(onPrev: () => void, onNext: () => void) {
  const startX = useRef<number | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => {
      startX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (startX.current === null) return;
      const diff = startX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) onNext();
        else onPrev();
      }
      startX.current = null;
    },
  };
}

function ImageCarousel({
  images,
  title,
  onOpen,
}: {
  images: string[];
  title: string;
  onOpen: (idx: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const swipe = useSwipe(prev, next);

  return (
    <div className="relative w-full aspect-[4/3] bg-bronze/10 overflow-hidden select-none">
      <button
        className="w-full h-full flex items-center justify-center"
        onClick={() => onOpen(current)}
        {...swipe}
        aria-label={`Öppna bild ${current + 1} av ${images.length} för ${title}`}
      >
        <img
          src={images[current]}
          alt={`${title} - bild ${current + 1}`}
          loading="lazy"
          className="w-full h-full object-cover pointer-events-none"
        />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-0 top-0 h-full w-12 flex items-center justify-start pl-3 text-white/70 hover:text-white transition-colors"
            aria-label="Föregående bild"
          >
            <span className="text-2xl leading-none drop-shadow">‹</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-0 top-0 h-full w-12 flex items-center justify-end pr-3 text-white/70 hover:text-white transition-colors"
            aria-label="Nästa bild"
          >
            <span className="text-2xl leading-none drop-shadow">›</span>
          </button>
          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-6 h-6 flex items-center justify-center"
                aria-label={`Gå till bild ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? "bg-bronze scale-125" : "bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Lightbox({
  images,
  startIdx,
  title,
  onClose,
}: {
  images: string[];
  startIdx: number;
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIdx);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const swipe = useSwipe(prev, next);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "Tab" && dialogRef.current) {
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Bilder: ${title}`}
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col"
      {...swipe}
    >
      <div className="flex items-center justify-between px-4 py-4 flex-shrink-0">
        <span className="font-body text-white/70 text-sm" aria-live="polite">
          Bild {current + 1} av {images.length}
        </span>
        <span className="font-heading font-700 text-white text-sm truncate mx-4">{title}</span>
        <button
          ref={closeRef}
          onClick={onClose}
          className="w-11 h-11 flex items-center justify-center text-white/70 hover:text-white"
          aria-label="Stäng"
        >
          <X size={22} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 relative min-h-0">
        <div className="w-full max-w-lg h-full flex items-center justify-center rounded overflow-hidden">
          <img
            src={images[current]}
            alt={`${title} - bild ${current + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white text-3xl"
              aria-label="Föregående"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white text-3xl"
              aria-label="Nästa"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1 py-3 flex-shrink-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-8 h-8 flex items-center justify-center"
              aria-label={`Visa bild ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-bronze scale-125" : "bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ project: number; image: number } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <article
            key={p.title + p.meta}
            className="bg-white border border-bronze/15 rounded-lg overflow-hidden flex flex-col hover:border-bronze transition-colors duration-300"
          >
            <ImageCarousel
              images={p.images}
              title={p.title}
              onOpen={(imgIdx) => setLightbox({ project: i, image: imgIdx })}
            />
            <div className="p-5 flex flex-col flex-1">
              <div className="flex-1 flex flex-col gap-2">
                <span className="font-body text-bronze text-xs tracking-widest uppercase font-600">
                  {p.tag}
                </span>
                <h3 className="font-heading font-700 text-charcoal text-xl leading-tight">
                  {p.title}
                </h3>
                <p className="font-body text-muted text-xs">{p.meta}</p>
              </div>

              <div className="border-t border-bronze/10 pt-3 mt-4 flex flex-col gap-1.5">
                <div className="text-bronze text-sm tracking-wider" role="img" aria-label="5 av 5 stjärnor">
                  ★★★★★
                </div>
                <p className="font-body text-muted text-sm italic leading-relaxed">
                  &quot;{p.review}&quot;
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={projects[lightbox.project].images}
          startIdx={lightbox.image}
          title={projects[lightbox.project].title}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
