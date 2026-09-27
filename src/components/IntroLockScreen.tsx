import { useState } from "react";
import { assets, intro } from "@/content/site";
import { Ambience } from "./Ambience";
import { LocalImage } from "./LocalImage";

export function IntroLockScreen({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    setLeaving(true);
    window.setTimeout(onEnter, 700);
  };

  return (
    <section
      className={`bg-dawn fixed inset-0 z-50 flex items-center justify-center px-6 transition-opacity duration-700 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <Ambience />
      <div className="relative flex flex-col items-center text-center">
        <div
          className={`animate-breathe rounded-full p-[3px] shadow-glow transition-transform duration-700 ${
            leaving ? "scale-110" : "scale-100"
          }`}
        >
          <div className="overflow-hidden rounded-full border border-border/80 bg-secondary">
            <LocalImage
              src={assets.jaProfile}
              alt={intro.name}
              placeholderNote="ja-1.jpg"
              className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
            />
          </div>
        </div>

        <h1 className="text-script mt-8 text-5xl text-foreground sm:text-6xl">{intro.name}</h1>
        <p className="text-book mt-3 max-w-xs text-base italic text-muted-foreground">
          {intro.subtitle}
        </p>

        <button
          onClick={enter}
          className={`mt-10 rounded-full bg-primary px-8 py-3.5 text-sm tracking-[0.12em] text-primary-foreground shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift ${
            leaving ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          {intro.cta}
        </button>
      </div>
    </section>
  );
}
