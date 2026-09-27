import { useState } from "react";
import { poetry } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function PoetrySection() {
  const [active, setActive] = useState(0);
  const poems = [poetry.poem1, poetry.poem2];

  return (
    <section className="px-5 py-24 sm:px-6">
      <SectionHeading title={poetry.heading} subtitle={poetry.subtitle} />

      <div
        role="tablist"
        aria-label="Poems"
        className="mx-auto mt-9 flex max-w-md items-center justify-center gap-2 sm:gap-4"
      >
        {poetry.tabs.map((label, i) => {
          const isActive = active === i;
          return (
            <button
              key={label}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition-all duration-300 sm:px-6 ${
                isActive
                  ? "bg-secondary font-medium text-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={isActive ? "underline decoration-accent underline-offset-8" : ""}>
                {label}
              </span>
            </button>
          );
        })}
      </div>

      <article
        key={active}
        className="paper animate-soft-in mx-auto mt-10 max-w-2xl rounded-2xl border border-border/70 px-6 py-12 shadow-soft sm:px-14 sm:py-16"
      >
        <p className="text-book whitespace-pre-line text-center text-lg leading-[2] text-foreground sm:text-xl">
          {poems[active]}
        </p>
      </article>
    </section>
  );
}
