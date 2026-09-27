const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 4) % 96}%`,
  delay: `${(i * 1.7) % 12}s`,
  duration: `${14 + (i % 5) * 3}s`,
  size: i % 4 === 0 ? 7 : 4,
  heart: i % 5 === 0,
  dx: `${(i % 3) * 14 - 14}px`,
}));

export function Ambience() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-drift absolute bottom-0 text-accent/50"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--dx" as string]: p.dx,
          }}
        >
          {p.heart ? (
            <span className="text-xs leading-none">♡</span>
          ) : (
            <span
              className="block rounded-full bg-rose/40"
              style={{ width: p.size, height: p.size }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
