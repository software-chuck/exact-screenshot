import { useRef, useState } from "react";
import { assets, music } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

export function MusicSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [missing, setMissing] = useState(false);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      setMissing(true);
    }
  };

  const progress = duration > 0 ? (time / duration) * 100 : 0;

  return (
    <section className="bg-dawn px-5 py-24 sm:px-6">
      <SectionHeading title={music.heading} subtitle={music.subtitle} />

      <div className="paper mx-auto mt-10 max-w-md rounded-2xl border border-border/70 p-6 shadow-soft sm:p-8">
        <audio
          ref={audioRef}
          src={assets.ourSong}
          preload="none"
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={() => setPlaying(false)}
          onError={() => setMissing(true)}
        />

        {missing ? (
          <p className="text-book text-center text-base italic text-muted-foreground">
            The song isn’t here yet — drop it in as{" "}
            <span className="not-italic">/public/audio/our-song.mp3</span>.
          </p>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <button
                onClick={toggle}
                aria-label={playing ? "Pause our song" : music.playLabel}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105"
              >
                <span aria-hidden className="text-lg">
                  {playing ? "❚❚" : "▶"}
                </span>
              </button>
              <div className="min-w-0 flex-1">
                <p className="text-book truncate text-lg text-foreground">{music.songTitle}</p>
                <p className="mt-1 text-xs tracking-[0.12em] text-muted-foreground">
                  {playing ? "Playing ♡" : music.playLabel}
                </p>
              </div>
            </div>

            <div
              role="progressbar"
              aria-label="Song progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-border"
            >
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{fmt(time)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
