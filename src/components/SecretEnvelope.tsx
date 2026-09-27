import { useState } from "react";
import { envelope } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function SecretEnvelope() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`px-5 py-24 transition-colors duration-700 sm:px-6 ${
        open ? "bg-secondary/60" : ""
      }`}
    >
      <SectionHeading title={envelope.heading} subtitle={envelope.subtitle} />

      <div className="mx-auto mt-12 max-w-md">
        {!open ? (
          <button
            onClick={() => setOpen(true)}
            aria-expanded={false}
            className="group mx-auto block w-full max-w-xs"
          >
            <span className="paper relative block aspect-[3/2] w-full rounded-lg border border-border/70 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lift">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg border-b border-border/70 bg-secondary/70 [clip-path:polygon(0_0,100%_0,50%_100%)]"
              />
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-accent"
              >
                ♡
              </span>
            </span>
            <span className="mt-5 block text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Tap to open
            </span>
          </button>
        ) : (
          <div className="animate-rise">
            <div className="paper rounded-2xl border border-border/70 px-6 py-10 shadow-lift sm:px-10">
              <p className="text-script whitespace-pre-line text-center text-2xl leading-snug text-foreground sm:text-3xl">
                {envelope.message}
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mx-auto mt-6 block text-xs uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground"
            >
              Close it again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
