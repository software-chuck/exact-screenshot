import { timeline } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section className="px-5 py-24 sm:px-6">
      <SectionHeading title={timeline.heading} />

      <ol className="relative mx-auto mt-14 max-w-xl border-l border-border pl-8 sm:pl-12">
        {timeline.entries.map((entry) => (
          <li key={entry.label} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[2.05rem] top-1.5 grid h-4 w-4 place-items-center rounded-full sm:-left-[3.05rem] ${
                entry.final ? "bg-accent text-[0.6rem] text-accent-foreground" : "bg-border"
              }`}
            >
              {entry.final ? "♡" : ""}
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {entry.label}
            </p>
            <h3
              className={`mt-2 ${
                entry.final
                  ? "text-script text-3xl text-foreground sm:text-4xl"
                  : "text-book text-xl text-foreground sm:text-2xl"
              }`}
            >
              {entry.title}
            </h3>
            <p className="text-book mt-2 text-base italic leading-relaxed text-muted-foreground">
              {entry.note}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
