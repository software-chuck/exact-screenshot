export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto max-w-xl text-center">
      <h2 className="text-script text-4xl text-foreground sm:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="text-book mt-3 text-base italic text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
