import { ending } from "@/content/site";

export function FinalSection() {
  return (
    <footer className="bg-dawn px-6 py-28 text-center">
      <p className="text-book mx-auto max-w-sm text-lg italic text-muted-foreground">
        {ending.line}
      </p>
      <h2 className="text-script mt-8 text-4xl text-foreground sm:text-5xl">{ending.signature}</h2>
      <p className="text-book mt-6 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
        {ending.closing}
      </p>
      <p className="mt-14 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        {ending.footer}
      </p>
    </footer>
  );
}
