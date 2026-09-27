import { useState } from "react";

/**
 * Shows a local image, and a tasteful placeholder if the file
 * isn't there yet (never a stock photo).
 */
export function LocalImage({
  src,
  alt,
  className,
  placeholderNote = "Add your photo",
}: {
  src: string;
  alt: string;
  className?: string;
  placeholderNote?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} (photo not added yet)`}
        className={`flex flex-col items-center justify-center gap-1 bg-secondary/70 text-center ${className ?? ""}`}
      >
        <span className="text-book text-2xl text-accent">♡</span>
        <span className="px-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          {placeholderNote}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
