import { hero } from "@/content/site";
import { Ambience } from "./Ambience";

export function Hero() {
  return (
    <section className="bg-dawn relative flex min-h-[88svh] items-center justify-center overflow-hidden px-6 py-24">
      <Ambience />
      <div className="animate-rise relative max-w-2xl text-center">
        <h1 className="text-script text-5xl text-foreground sm:text-7xl">{hero.heading}</h1>
        <p className="text-book mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {hero.line}
        </p>
        <div
          aria-hidden
          className="mt-10 flex items-center justify-center gap-3 text-accent"
        >
          <span>♡</span>
          <span className="h-px w-24 bg-border sm:w-40" />
          <span>♡</span>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {hero.scrollHint}
        </p>
      </div>
    </section>
  );
}
