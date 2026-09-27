import { useEffect, useState } from "react";
import { assets, photos } from "@/content/site";
import { LocalImage } from "./LocalImage";
import { SectionHeading } from "./SectionHeading";

type Shot = { src: string; caption: string; alt: string; note: string };

const shots: Shot[] = [
  { src: assets.jaProfile, caption: photos.caption1, alt: photos.alt1, note: "ja-1.jpg" },
  { src: assets.jaMemory, caption: photos.caption2, alt: photos.alt2, note: "ja-2.jpg" },
];

export function PhotoSection() {
  const [open, setOpen] = useState<Shot | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="bg-dawn px-5 py-24 sm:px-6">
      <SectionHeading title={photos.heading} subtitle={photos.subtitle} />

      <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-10">
        {shots.map((shot, i) => (
          <button
            key={shot.note}
            onClick={() => setOpen(shot)}
            aria-label={`Enlarge photo: ${shot.caption}`}
            className={`paper group w-[min(18rem,85vw)] rounded-sm border border-border/70 p-3 pb-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
              i === 0 ? "-rotate-2 hover:rotate-0" : "rotate-2 hover:rotate-0 sm:mt-10"
            }`}
          >
            <LocalImage
              src={shot.src}
              alt={shot.alt}
              placeholderNote={shot.note}
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="text-script mt-4 text-2xl text-foreground">{shot.caption}</p>
          </button>
        ))}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={() => setOpen(null)}
          className="animate-soft-in fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-plum/70 px-6 backdrop-blur-sm"
        >
          <LocalImage
            src={open.src}
            alt={open.alt}
            placeholderNote={open.note}
            className="max-h-[70svh] w-auto max-w-full rounded-sm border-4 border-paper object-contain shadow-lift"
          />
          <p className="text-script text-2xl text-primary-foreground">{open.caption}</p>
          <button
            onClick={() => setOpen(null)}
            className="rounded-full border border-paper/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground"
          >
            Close
          </button>
        </div>
      ) : null}
    </section>
  );
}
