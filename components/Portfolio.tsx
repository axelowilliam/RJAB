"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";

const projects = [
  {
    tag: "Elinstallation",
    title: "Byte av elcentral",
    meta: "Privatperson · Staffanstorp · 2026",
    images: ["/uppdrag/elcentral-staffanstorp/1.jpg", "/uppdrag/elcentral-staffanstorp/2.jpg"],
    review: "Snabbt, snyggt och till rätt pris. Alexander förklarade allt längs vägen och lämnade inget ogjort.",
    author: "",
  },
  {
    tag: "Luftvärmepump",
    title: "Luftvärmepump",
    meta: "Privatperson · Malmö · 2026",
    images: ["/uppdrag/luftvarme-malmo/1.png"],
    review: "Vilmer kom dagen efter jag ringde. Installationen tog ett par timmar och allt fungerar perfekt.",
    author: "",
  },
  {
    tag: "Elbilsladdning",
    title: "Laddbox för elbil",
    meta: "Privatperson · Vellinge · 2026",
    images: ["/uppdrag/elbillsaddse-vellinge/15.png"],
    review: "Supersmidigt från start till slut. De kom på utsatt tid, installerade laddboxen snabbt och förklarade hur allt fungerar. Bilen laddas varje natt utan problem.",
    author: "",
  },
  {
    tag: "Renovering",
    title: "Elrenovering lägenhet",
    meta: "Privatperson · Lund · 2025",
    images: ["/placeholder-4a.jpg", "/placeholder-4b.jpg"],
    review: "Proffsigt jobb från start till slut. Rekommenderar varmt.",
    author: "Erik M., Lund",
  },
  {
    tag: "Företagsel",
    title: "Kontoret ny elinstallation",
    meta: "Företag · Malmö · 2025",
    images: ["/placeholder-5a.jpg"],
    review: "Störde verksamheten minimalt och levererade i tid. Nöjda!",
    author: "Anna B., Malmö",
  },
  {
    tag: "Nybyggnation",
    title: "Attefallshus, komplett el",
    meta: "Privatperson · Staffanstorp · 2025",
    images: ["/placeholder-6a.jpg", "/placeholder-6b.jpg", "/placeholder-6c.jpg"],
    review: "Följde med hela vägen från grund till inflyttning. Väldigt tryggt.",
    author: "Sara & Per L., Staffanstorp",
  },
];

const INITIAL_SHOW = 3;

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
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-bronze/10 overflow-hidden select-none">
      {/* Image / placeholder */}
      <button
        className="w-full h-full flex items-center justify-center"
        onClick={() => onOpen(current)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label={`Öppna bild ${current + 1} av ${images.length} för ${title}`}
      >
        {images[current].startsWith("/placeholder") ? (
          <span className="font-body text-bronze text-xs tracking-widest uppercase pointer-events-none">
            Foto {current + 1}/{images.length}
          </span>
        ) : (
          <img
            src={images[current]}
            alt={`${title} - bild ${current + 1}`}
            className="w-full h-full object-cover pointer-events-none"
          />
        )}
      </button>

      {/* Prev / Next — only shown if multiple images */}
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
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-bronze scale-125" : "bg-white/60"
              }`}
              aria-label={`Gå till bild ${i + 1}`}
            />
          ))}
        </div>
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
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 flex-shrink-0">
        <span className="font-body text-white/50 text-sm">
          {current + 1} / {images.length}
        </span>
        <span className="font-heading font-700 text-white text-sm truncate mx-4">{title}</span>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
          aria-label="Stäng"
        >
          <X size={22} />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center px-4 relative min-h-0">
        <div className="w-full max-w-lg h-full flex items-center justify-center bg-bronze/10 rounded overflow-hidden">
          {images[current].startsWith("/placeholder") ? (
            <span className="font-body text-bronze text-xs tracking-widest uppercase">
              Foto {current + 1}
            </span>
          ) : (
            <img
              src={images[current]}
              alt={`Bild ${current + 1}`}
              className="w-full h-full object-contain"
            />
          )}
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

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 py-5 flex-shrink-0">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-bronze scale-125" : "bg-white/30"
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<{ project: number; image: number } | null>(null);

  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
            Några av våra
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Tidigare uppdrag
          </h2>
          <div className="mt-4 w-12 h-1 bg-bronze" />
        </div>

        {/* Google Reviews link */}
        <div className="mb-10">
          <a
            href="https://www.google.com/search?sca_esv=182ba94e7364ae48&sxsrf=APpeQnuAhuJqfTG7W6uKcHDUiel8H_tjSQ:1787322910484&q=Regmyr%20%26%20Jansson%20AB%20Recensioner&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDEztzA3MbM0MbMwtbAwMjUw3cDI-IpRPig1PbeySEFNwSsxr7g4P0_B0UkhKDU5Na84Mz8vtWgRKyEVAHCUxlxeAAAA&rldimm=1467874694685882505&tbm=lcl&hl=sv-SE&sa=X&ved=0CBEQ5foLahcKEwiIn57Z-LGWAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2pkU1JVdFFSMWhrTTFWVmFXTmZUWEZvV1hwR1IyYxAB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-bronze/30 rounded px-6 py-3 font-body text-sm text-charcoal hover:border-bronze hover:text-bronze transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Se alla våra recensioner på Google
          </a>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <div
              key={i}
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
                  <div className="text-bronze text-sm tracking-wider">★★★★★</div>
                  <p className="font-body text-muted text-sm italic leading-relaxed">
                    "{p.review}"
                  </p>
                  {p.author && (
                    <p className="font-body text-charcoal text-xs font-600">- {p.author}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={projects[lightbox.project].images}
          startIdx={lightbox.image}
          title={projects[lightbox.project].title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
