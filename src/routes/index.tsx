import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FinalSection } from "@/components/FinalSection";
import { Hero } from "@/components/Hero";
import { IntroLockScreen } from "@/components/IntroLockScreen";
import { MusicSection } from "@/components/MusicSection";
import { PhotoSection } from "@/components/PhotoSection";
import { PoetrySection } from "@/components/PoetrySection";
import { SecretEnvelope } from "@/components/SecretEnvelope";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ja — A little place I made for you" },
      {
        name: "description",
        content:
          "A private digital love letter for Ja: poems, photographs, our story, and one song. Made by Qemz.",
      },
      { property: "og:title", content: "Ja — A little place I made for you" },
      {
        property: "og:description",
        content:
          "A private digital love letter for Ja: poems, photographs, our story, and one song. Made by Qemz.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {!entered ? <IntroLockScreen onEnter={() => setEntered(true)} /> : null}
      {entered ? (
        <div className="animate-soft-in">
          <Hero />
          <PoetrySection />
          <PhotoSection />
          <Timeline />
          <MusicSection />
          <SecretEnvelope />
          <FinalSection />
        </div>
      ) : null}
    </main>
  );
}
